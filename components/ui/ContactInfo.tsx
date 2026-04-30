import type { ContactInfoItem } from "@/types/portfolio";
import icons from "./icons";

export default function ContactInfo({ id, text }: ContactInfoItem) {
  const Icon = icons[id];
  if (!Icon) return null;

  return (
    <div className="flex items-center gap-4 rounded-xl border border-card-border bg-card p-4 transition-all hover:border-accent/30">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-bg">
        <Icon className="text-accent" size={18} />
      </div>
      <span className="text-sm font-medium text-foreground">{text}</span>
    </div>
  );
}
