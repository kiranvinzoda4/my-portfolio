import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFigma,
  SiPython,
  SiMongodb,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiFastapi,
  SiDjango,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const icons: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  python: SiPython,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  aws: FaAws,
  docker: SiDocker,
  git: SiGit,
  figma: SiFigma,
  php: SiPhp,
  laravel: SiLaravel,
  java: FaJava,
  mysql: SiMysql,
  fastapi: SiFastapi,
  django: SiDjango,
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  email: FiMail,
  location: FiMapPin,
  phone: FiPhone,
};

export default icons;
