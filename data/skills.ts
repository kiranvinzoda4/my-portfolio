import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", iconId: "python" },
      { name: "PHP", iconId: "php" },
      { name: "Java", iconId: "java" },
      { name: "JavaScript", iconId: "javascript" },
      { name: "TypeScript", iconId: "typescript" },
    ],
  },
  {
    title: "Backend Frameworks",
    skills: [
      { name: "FastAPI", iconId: "fastapi" },
      { name: "Django", iconId: "django" },
      { name: "Laravel", iconId: "laravel" },
      { name: "Yii", iconId: "yii" },
      { name: "Node.js", iconId: "nodejs" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", iconId: "react" },
      { name: "Next.js", iconId: "nextjs" },
      { name: "Tailwind CSS", iconId: "tailwind" },
      { name: "HTML", iconId: "html" },
      { name: "CSS", iconId: "css" },
    ],
  },
  {
    title: "Cloud, DB & Tools",
    skills: [
      { name: "AWS", iconId: "aws" },
      { name: "Docker", iconId: "docker" },
      { name: "MySQL", iconId: "mysql" },
      { name: "PostgreSQL", iconId: "postgresql" },
      { name: "Git", iconId: "git" },
    ],
  },
];
