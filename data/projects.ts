import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Xpense",
    description:
      "Enterprise expense management SaaS used by Raymond, Ashapura Group, and other large organizations. I built the core backend — approval engine, policy enforcement, real-time dashboards, and WhatsApp-based approval flows.",
    tagline: "AI-powered governance for travel, spend & reimbursements.",
    tech: ["Python", "FastAPI", "MySQL", "AWS", "WhatsApp API"],
    live: "https://x-pense.cloud/",
    category: "company",
    featured: true,
    highlights: [
      "Multi-level approval workflows with AI policy enforcement",
      "Real-time spend dashboards across departments & cost centers",
      "WhatsApp integration — approve expenses with a single tap",
      "Complete audit trail with GST compliance",
      "ERP, accounting & payroll system integrations",
      "Role-based access for finance leaders, managers & employees",
    ],
    metrics: [
      { value: "3X", label: "Faster approvals" },
      { value: "60%", label: "Fewer exceptions" },
      { value: "100%", label: "Audit-ready" },
    ],
    trustedBy: [
      "Raymond",
      "Ashapura Group",
      "JK Maini",
      "OCL",
      "Saatvik",
    ],
  },
  {
    title: "SignX",
    description:
      "Digital signature platform for enterprises. Built the backend for bulk signing, customizable approval workflows, and secure API access for automation.",
    tech: ["Python", "FastAPI", "MySQL"],
    live: "https://www.aeonx.digital/signx-buy-now/",
    category: "company",
  },
  {
    title: "DailyVeg",
    description:
      "Backend for an online vegetable delivery app. Built APIs for customer ordering, admin management, delivery partner assignment, and real-time order tracking.",
    tech: ["Python", "FastAPI", "MySQL"],
    live: "https://play.google.com/store/apps/details?id=com.dailyveg.customer",
    category: "company",
  },
  {
    title: "Ziba Comfort",
    description:
      "Full website for a premium furniture and interior design company established in 2015. Features service showcases for custom furniture, interior consultation, space planning, and delivery services.",
    tech: ["Python", "FastAPI", "MySQL"],
    live: "https://www.zibacomfort.com/",
    category: "company",
  },
  {
    title: "DocIQ \u2013 AI File Analysis",
    description:
      "Upload PDFs and images, chat with them using AI. Built with vector search, OCR text extraction, document embeddings, and local LLM integration via Ollama.",
    tech: ["Python", "FastAPI", "ChromaDB", "Ollama"],
    github: "https://github.com/kiranvinzoda4/ai_tasks",
    category: "personal",
  },
  {
    title: "SmartGallery",
    description:
      "AI photo gallery with face recognition. Automatically detects and organizes people using InsightFace embeddings and FAISS vector search with continuous learning.",
    tech: ["Python", "FastAPI", "InsightFace", "FAISS"],
    github: "https://github.com/kiranvinzoda4/SmartGalleryWithAi",
    category: "personal",
  },
  {
    title: "SmartAttend",
    description:
      "HR attendance system using face recognition. Contactless check-in via webcam with department management, employee records, and attendance analytics.",
    tech: ["Python", "FastAPI", "InsightFace", "FAISS"],
    github: "https://github.com/kiranvinzoda4/SmartAttend",
    category: "personal",
  },
  {
    title: "MailTone AI",
    description:
      "Email tone analyzer and rewriter. Uses DistilBERT for emotion detection and Phi-3 Mini for intelligent rewriting across 16 tone categories.",
    tech: ["Python", "FastAPI", "DistilBERT", "Ollama"],
    github: "https://github.com/kiranvinzoda4/MailTone_AI",
    category: "personal",
  },
];
