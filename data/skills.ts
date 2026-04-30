import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Python & Backend",
    skills: [
      { name: "Python", iconId: "python" },
      { name: "FastAPI", iconId: "fastapi" },
      { name: "Django", iconId: "django" },
      { name: "MySQL", iconId: "mysql" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", iconId: "aws" },
      { name: "Docker", iconId: "docker" },
      { name: "PostgreSQL", iconId: "postgresql" },
      { name: "Git", iconId: "git" },
    ],
  },
  {
    title: "Also Work With",
    skills: [
      { name: "Next.js", iconId: "nextjs" },
      { name: "React", iconId: "react" },
      { name: "TypeScript", iconId: "typescript" },
      { name: "Tailwind CSS", iconId: "tailwind" },
    ],
  },
];
