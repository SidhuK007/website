import { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/data";

export const dynamic = "force-static";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date() },
    ...PROJECTS.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date()
    }))
  ];
}
