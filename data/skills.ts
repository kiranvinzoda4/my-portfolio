import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", iconId: "python" },
      { name: "PHP", iconId: "php" },
      { name: "JavaScript", iconId: "javascript" },
      { name: "TypeScript", iconId: "typescript" },
      { name: "Java", iconId: "java" },
    ],
  },
  {
    title: "Backend Frameworks",
    skills: [
      { name: "FastAPI", iconId: "fastapi" },
      { name: "Django", iconId: "django" },
      { name: "SQLAlchemy", iconId: "sqlalchemy" },
      { name: "Laravel", iconId: "laravel" },
      { name: "Yii", iconId: "yii" },
      { name: "Node.js", iconId: "nodejs" },
    ],
  },
  {
    title: "AI & LLM",
    skills: [
      { name: "LangGraph", iconId: "langchain" },
      { name: "MCP servers", iconId: "ai" },
      { name: "AWS Bedrock", iconId: "aws" },
      { name: "Ollama", iconId: "ollama" },
      { name: "ChromaDB", iconId: "ai" },
      { name: "FAISS", iconId: "ai" },
      { name: "InsightFace", iconId: "ai" },
      { name: "OCR & embeddings", iconId: "ai" },
    ],
  },
  {
    title: "AWS Cloud",
    skills: [
      { name: "ECS", iconId: "aws" },
      { name: "EC2", iconId: "aws" },
      { name: "Lambda", iconId: "aws" },
      { name: "S3", iconId: "aws" },
      { name: "SES", iconId: "aws" },
      { name: "DynamoDB", iconId: "aws" },
    ],
  },
  {
    title: "Databases & DevOps",
    skills: [
      { name: "MySQL", iconId: "mysql" },
      { name: "PostgreSQL", iconId: "postgresql" },
      { name: "Docker", iconId: "docker" },
      { name: "Git", iconId: "git" },
      { name: "Firebase", iconId: "firebase" },
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
];
