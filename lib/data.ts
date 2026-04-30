import { IProject } from "@/types";

export const GENERAL_INFO = {
  email: "sidharthkrish7@gmail.com",
  emailSubject: "Let's discuss a cybersecurity opportunity",
  emailBody: "Hi Sidharth, I am reaching out regarding...",
  linkedIn: "https://www.linkedin.com/in/sidharthkrishna",
  github: "https://github.com/SidhuK007",
  tryHackMe: "https://tryhackme.com/p/Cid07",
  resume: "/assets/Sidharth_Krishna_Resume.pdf"
};

export const SOCIAL_LINKS = [
  { name: "github", url: GENERAL_INFO.github },
  { name: "linkedin", url: GENERAL_INFO.linkedIn },
  { name: "tryhackme", url: GENERAL_INFO.tryHackMe }
];

export const MY_STACK = {
  security: [
    { name: "Splunk", iconKey: "activity" },
    { name: "Wazuh", iconKey: "shield" },
    { name: "ELK", iconKey: "search" },
    { name: "Sentinel", iconKey: "radar" },
    { name: "Defender", iconKey: "lock" }
  ],
  tooling: [
    { name: "Wireshark", iconKey: "network" },
    { name: "Burp Suite", iconKey: "bug" },
    { name: "Metasploit", iconKey: "terminal" },
    { name: "Nmap", iconKey: "scan" },
    { name: "Ansible", iconKey: "server" }
  ],
  platforms: [
    { name: "Python", iconKey: "code" },
    { name: "Bash", iconKey: "square-terminal" },
    { name: "Linux", iconKey: "monitor" },
    { name: "Windows", iconKey: "layout" },
    { name: "AWS", iconKey: "cloud" }
  ]
};

export const PROJECTS: IProject[] = [
  {
    title: "CTI Triage Automation Tool",
    slug: "cti-triage-automation-tool",
    sourceCode: "https://github.com/SidhuK007/ctitool",
    year: 2025,
    description: `
      Python-based CTI triage CLI built to enrich IPs, domains, and file hashes across multiple intelligence sources.<br/><br/>
      Key Features:
      <ul>
        <li>Automated indicator enrichment using VirusTotal, RDAP, Shodan, Censys, Crtsh, Ipinfo, Ipapi, and Hybrid Analysis</li>
        <li>Normalization and scoring logic to support SOC analyst workflows</li>
        <li>Readable terminal output with caching and risk-focused prioritization</li>
      </ul>
    `,
    role: `
      Independent Project<br/>
      Built for fast L1/L2 analyst enrichment with a CLI-focused workflow and source aggregation across common CTI providers.
    `,
    techStack: ["Python", "VirusTotal", "Shodan"],
    thumbnail: "/projects/cti-triage.svg",
    longThumbnail: "/projects/cti-triage.svg",
    images: ["/projects/cti-triage.svg"]
  },
  {
    title: "Honeypot with Real-Time Log Analysis",
    slug: "honeypot-real-time-log-analysis",
    sourceCode: "https://github.com/SidhuK007/ELK-stack-ansible",
    year: 2025,
    description: `
      Cowrie honeypot deployment with Ansible and ELK to capture, ingest, and review unauthorized SSH and Telnet activity.<br/><br/>
      Key Features:
      <ul>
        <li>Captured and analyzed 1,000+ unauthorized access attempts</li>
        <li>Automated deployment and hardening steps with Ansible</li>
        <li>Integrated Filebeat and ELK for near real-time visibility</li>
      </ul>
    `,
    role: `
      Independent Project<br/>
      Focused on telemetry collection, deployment automation, and SOC-friendly log review.
    `,
    techStack: ["ELK", "Ansible", "Cowrie"],
    thumbnail: "/projects/honeypot-elk.svg",
    longThumbnail: "/projects/honeypot-elk.svg",
    images: ["/projects/honeypot-elk.svg"]
  },
  {
    title: "Network Monitoring Tool",
    slug: "network-monitoring-tool",
    sourceCode: "https://github.com/SidhuK007/netmon-python",
    year: 2025,
    description: `
      Lightweight Python CLI for safe network visibility and analyst-oriented inspection tasks.<br/><br/>
      Key Features:
      <ul>
        <li>ARP scan, TCP scan, listener detection, crawler, and MAC changer modules</li>
        <li>Structured reporting to support triage and review</li>
        <li>Safe-by-default design for non-invasive usage</li>
      </ul>
    `,
    role: `
      Independent Project<br/>
      Designed as a modular analyst utility for network visibility without invasive behavior.
    `,
    techStack: ["Python", "Networking", "CLI"],
    thumbnail: "/projects/netmon.svg",
    longThumbnail: "/projects/netmon.svg",
    images: ["/projects/netmon.svg"]
  },
  {
    title: "Lightweight Encryption AWS Monitoring",
    slug: "lightweight-encryption-aws-monitoring",
    sourceCode: "https://github.com/SidhuK007/Lightweight-Encryption-AWS-monitoring",
    year: 2025,
    description: `
      Cloud-focused encryption benchmarking project aligned with the encryption performance work listed in your resume and Naukri profile.<br/><br/>
      Key Features:
      <ul>
        <li>Measured performance impact of lightweight encryption workflows in AWS-hosted environments</li>
        <li>Tracked execution characteristics to compare deployment efficiency</li>
        <li>Used monitoring outputs to support practical security tradeoff analysis</li>
      </ul>
    `,
    role: `
      Resume + GitHub Project<br/>
      Included here because it directly overlaps with the encryption and AWS performance analysis work referenced in your profile materials.
    `,
    techStack: ["Python", "AWS", "Encryption"],
    thumbnail: "/projects/encryption-aws.svg",
    longThumbnail: "/projects/encryption-aws.svg",
    images: ["/projects/encryption-aws.svg"]
  },
  {
    title: "Fortinet OSINT Report",
    slug: "fortinet-osint-report",
    sourceCode: "https://github.com/SidhuK007/OSINT-Report-Fortinet",
    year: 2025,
    description: `
      Open-source intelligence research project focused on Fortinet, included from your GitHub portfolio.<br/><br/>
      Key Features:
      <ul>
        <li>Collected and organized public intelligence around a security vendor target</li>
        <li>Structured findings into a readable report format</li>
        <li>Demonstrated OSINT workflow discipline relevant to analyst work</li>
      </ul>
    `,
    role: `
      GitHub Project<br/>
      Added as a relevant supporting project because it aligns with the OSINT and intelligence-analysis focus in your resume.
    `,
    techStack: ["OSINT", "Research", "Reporting"],
    thumbnail: "/projects/osint-report.svg",
    longThumbnail: "/projects/osint-report.svg",
    images: ["/projects/osint-report.svg"]
  }
];

export const MY_EXPERIENCE = [
  {
    title: "Cybersecurity Intern",
    company: "Hacktify Cyber Security",
    duration: "Feb 2025 - Mar 2025"
  },
  {
    title: "Cybersecurity Intern (CyberVSR)",
    company: "Rochester Institute of Technology",
    duration: "May 2023 - Jul 2023"
  }
];
