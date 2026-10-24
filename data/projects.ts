import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Xpense",
    description:
      "Multi-tenant travel & expense SaaS used by Raymond, Ashapura Group, and other enterprises. As lead backend contributor I built a Python agentic AI assistant that creates, submits and approves trips and expenses by chat, plus corporate flight and hotel booking, prepaid card payments and SAP finance posting.",
    tagline: "AI-powered governance for travel, spend & reimbursements.",
    tech: ["Python", "FastAPI", "LangGraph", "MCP", "AWS Bedrock", "MySQL", "AWS ECS", "Razorpay", "SAP", "TBO & TripJack APIs"],
    live: "https://x-pense.cloud/",
    category: "company",
    featured: true,
    highlights: [
      "End-to-end flight booking — search, fare rules, seat & meal selection, ticketing, cancellations",
      "Auto-booking of flights once a trip request is approved",
      "Provider-adapter layer running TBO and TripJack travel APIs behind one interface",
      "Hotel booking — search, pre-book, hold & confirm, vouchers, cancellations",
      "Razorpay payments for personal flight & hotel bookings, with webhooks & verification",
      "OmniCard prepaid cards — top-ups auto-create advances posted to SAP",
      "Agentic AI assistant in Python (LangGraph) — create, submit & approve trips and expenses by chat",
      "MCP server with 50+ tools that the AI agent uses to act on Xpense",
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
      "Furniture e-commerce backend — products with fabric, size, colour and warranty options, orders with custom measurements, wishlist and reviews, a multi-level referral program, offers and coupons, and callback requests.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "S3"],
    live: "https://www.zibacomfort.com/",
    category: "company",
  },
  {
    title: "Unnati Enterprise — ServiceFlow",
    description:
      "Service-management platform for a solar and RO water company — sales and installation scheduling, service requests with technician assignment, activity and spare-part logs, role-based admin access, WhatsApp OTP login, Firebase push notifications, and PDF/Excel exports.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "Firebase"],
    live: "https://unnatienterprise.com/",
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
