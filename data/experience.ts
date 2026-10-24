import type { ExperienceItem } from "@/types/portfolio";

export const experiences: ExperienceItem[] = [
  {
    role: "Senior Backend Developer",
    company: "AeonX Digital Solutions, Bhuj",
    period: "Nov 2022 \u2013 Present",
    bullets: [
      "Lead backend contributor to Xpense (MySQL, Docker, AWS ECS) and built the SignX backend in Python/FastAPI",
      "Built a Python agentic AI assistant (FastAPI, LangGraph, AWS Bedrock) that creates, submits and approves trips and expenses through chat, powered by an MCP server with 50+ tools",
      "Built corporate flight and hotel booking on TBO and TripJack APIs, including auto-booking on trip approval",
      "Integrated Razorpay booking payments and OmniCard prepaid cards, and built the SAP posting outbox for invoices and advances",
      "Designed multi-tenant MySQL schemas and optimized query performance",
    ],
  },
  {
    role: "Assistant Lecturer",
    company: "Veerayatan Institute, Mandvi",
    period: "Aug 2021 \u2013 Nov 2022",
    bullets: [
      "Taught programming and CS fundamentals to undergraduate BCA students",
      "Developed structured curriculum for Python and web development courses",
      "Strengthened communication and problem-solving through teaching",
    ],
  },
  {
    role: "Web Developer",
    company: "Chivalry Technology, Bangalore",
    period: "Sep 2016 \u2013 Sep 2017",
    bullets: [
      "Built backend systems using Python and Django",
      "Developed responsive front-end interfaces with HTML, CSS, JavaScript and React",
      "Delivered full-stack solutions for client projects",
    ],
  },
  {
    role: "Computer Teacher",
    company: "J.P. & L.S. Highschool, Bhuj",
    period: "Jul 2015 \u2013 Apr 2016",
    bullets: [
      "Designed and delivered computer science lessons for high school students",
      "Built foundational teaching and mentoring skills",
    ],
  },
];
