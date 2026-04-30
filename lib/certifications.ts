import { ICertification } from "@/types";

const GITHUB_CERTS_API = "https://api.github.com/repos/SidhuK007/Certs/contents";
const IMAGE_EXTENSIONS = new Set(["png", "jpg", "jpeg", "webp"]);
const DOCUMENT_EXTENSIONS = new Set(["pdf"]);

const FALLBACK_CERTIFICATIONS: ICertification[] = [
  {
    title: "THM SOC Level 1",
    issuer: "TryHackMe",
    href: "/certs/thm-soc-level-1.pdf",
    image: "/certs/thm-soc-level-1.png"
  },
  {
    title: "Google Network Security Specialization",
    issuer: "Coursera",
    href: "/certs/google-network-specialization.pdf",
    image: "/certs/google-network-specialization.png"
  },
  {
    title: "ThinkCloudly SOC Bootcamp",
    issuer: "ThinkCloudly",
    href: "/certs/thinkcloudly-soc-bootcamp.pdf",
    image: "/certs/thinkcloudly-soc-bootcamp.png"
  },
  {
    title: "Palo Alto Infrastructure Configuration",
    issuer: "Palo Alto",
    href: "/certs/palo-alto-infra.pdf",
    image: "/certs/palo-alto-infra.png"
  }
];

interface GitHubContentItem {
  name: string;
  download_url: string | null;
  html_url: string;
  type: string;
}

function getExtension(filename: string) {
  return filename.split(".").pop()?.toLowerCase() ?? "";
}

function inferIssuer(filename: string) {
  const normalized = filename.toLowerCase();

  if (normalized.includes("thm") || normalized.includes("tryhackme")) return "TryHackMe";
  if (normalized.includes("coursera") || normalized.includes("google")) return "Coursera";
  if (normalized.includes("palo_alto") || normalized.includes("palo alto")) return "Palo Alto";
  if (normalized.includes("thinkcloudly")) return "ThinkCloudly";
  if (normalized.includes("udemy")) return "Udemy";
  if (normalized.includes("codered") || normalized.includes("code red")) return "CodeRed";
  if (normalized.includes("aws")) return "AWS";
  if (normalized.includes("smarter")) return "Smarter Cybersecurity";

  return "Certification";
}

function humanizeTitle(filename: string) {
  const withoutExtension = filename.replace(/\.[^.]+$/, "");

  return withoutExtension
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
}

function buildCertification(item: GitHubContentItem): ICertification {
  return {
    title: humanizeTitle(item.name),
    issuer: inferIssuer(item.name),
    href: item.html_url,
    image: item.download_url ?? undefined
  };
}

export async function getCertifications(): Promise<ICertification[]> {
  try {
    const response = await fetch(GITHUB_CERTS_API, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json"
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub cert fetch failed with ${response.status}`);
    }

    const items = (await response.json()) as GitHubContentItem[];
    const imageFiles = new Map<string, GitHubContentItem>();
    const documentFiles: GitHubContentItem[] = [];

    for (const item of items) {
      if (item.type !== "file" || !item.download_url) continue;

      const extension = getExtension(item.name);
      if (IMAGE_EXTENSIONS.has(extension)) {
        imageFiles.set(item.name.replace(/\.[^.]+$/, "").toLowerCase(), item);
      } else if (DOCUMENT_EXTENSIONS.has(extension)) {
        documentFiles.push(item);
      }
    }

    const certifications = documentFiles.map((document) => {
      const baseName = document.name.replace(/\.[^.]+$/, "").toLowerCase();
      const matchingImage = imageFiles.get(baseName);

      return {
        title: humanizeTitle(document.name),
        issuer: inferIssuer(document.name),
        href: document.html_url,
        image: matchingImage?.download_url ?? undefined
      };
    });

    const imageOnlyCertifications = [...imageFiles.entries()]
      .filter(([baseName]) => !documentFiles.some((document) => document.name.replace(/\.[^.]+$/, "").toLowerCase() === baseName))
      .map(([, item]) => buildCertification(item));

    return [...certifications, ...imageOnlyCertifications].sort((a, b) => a.title.localeCompare(b.title));
  } catch {
    return FALLBACK_CERTIFICATIONS;
  }
}
