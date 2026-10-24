import type { ContactInfoItem } from "@/types/portfolio";
import icons from "./icons";

export default function ContactInfo({ id, text }: ContactInfoItem) {
  const Icon = icons[id];
  if (!Icon) return null;

  return (
    <div className="flex h-full items-center gap-3 rounded-xl border border-card-border bg-card-solid/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent-glow">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-bg">
        <Icon className="text-accent" size={18} />
      </div>
      <span className="min-w-0 text-sm font-medium break-words text-foreground">{text}</span>
    </div>
  );
}
