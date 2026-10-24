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
    title: "AWS Cloud",
    skills: [
      { name: "EC2", iconId: "aws" },
      { name: "Lambda", iconId: "aws" },
      { name: "S3", iconId: "aws" },
      { name: "SES", iconId: "aws" },
      { name: "ECS", iconId: "aws" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MySQL", iconId: "mysql" },
      { name: "PostgreSQL", iconId: "postgresql" },
      { name: "DynamoDB", iconId: "aws" },
      { name: "Docker", iconId: "docker" },
      { name: "Git", iconId: "git" },
    ],
  },
];
