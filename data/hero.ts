import type { HeroData } from "@/types/portfolio";

export const heroData: HeroData = {
  greeting: "Hello, I'm",
  name: "Kiran Vinzoda",
  highlight: "Backend Developer",
  tagline: "FastAPI · AI-Driven Systems · SaaS Architecture",
  profileImage: "/pic.jpg",
  description:
    "I design and build high-performance backend systems using Python, FastAPI, and AWS. Specialized in SaaS platforms, AI integrations, and scalable API architectures.",
  quickWins: [
    "4+ years building production systems",
    "Built AI-powered SaaS used by enterprises",
    "Strong in system design & performance optimization",
  ],
  cta: { label: "Get in Touch", href: "#contact" },
  secondaryCta: { label: "View Work", href: "#projects" },
  socials: [
    { id: "github", href: "https://github.com/kiranvinzoda4", label: "GitHub" },
  ],
};

