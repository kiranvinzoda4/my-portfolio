import type { SocialLink } from "@/types/portfolio";
import icons from "./icons";

export default function SocialIcon({ id, href, label }: SocialLink) {
  const Icon = icons[id];
  if (!Icon) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-card-border bg-card-solid/80 text-muted backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:text-accent hover:shadow-lg hover:shadow-accent-glow"
      aria-label={label}
    >
      <Icon size={18} className="transition-transform group-hover:scale-110" />
    </a>
  );
}
