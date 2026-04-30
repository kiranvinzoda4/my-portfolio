export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  id: string;
  href: string;
  label: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  highlight: string;
  tagline: string;
  description: string;
  profileImage?: string;
  quickWins?: string[];
  cta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  socials: SocialLink[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface AboutData {
  intro: string;
  focusAreas: string[];
  stats: Stat[];
}

export interface Skill {
  name: string;
  iconId: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  live?: string;
  category?: "company" | "personal";
  featured?: boolean;
  tagline?: string;
  highlights?: string[];
  metrics?: ProjectMetric[];
  trustedBy?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface AwardData {
  title: string;
  organization: string;
  year: string;
  image: string;
  description: string;
  orgInfo: string;
}

export interface ContactInfoItem {
  id: string;
  text: string;
}

export interface ContactData {
  description: string;
  info: ContactInfoItem[];
}
