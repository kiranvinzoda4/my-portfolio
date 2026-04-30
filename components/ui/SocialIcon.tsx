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
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-card-border bg-card text-muted transition-all hover:border-accent/40 hover:text-accent hover:shadow-lg hover:shadow-accent-glow"
      aria-label={label}
    >
      <Icon size={18} />
    </a>
  );
}
