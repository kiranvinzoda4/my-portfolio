import type { Skill } from "@/types/portfolio";
import icons from "./icons";

export default function SkillItem({ name, iconId }: Skill) {
  const Icon = icons[iconId];
  if (!Icon) return null;

  return (
    <span className="group/skill inline-flex items-center gap-2 rounded-lg border border-card-border bg-card-solid/60 py-1.5 pr-3 pl-2 text-sm font-medium text-foreground/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-bg hover:text-white hover:shadow-md hover:shadow-accent-glow">
      <Icon className="shrink-0 text-accent transition-transform duration-300 group-hover/skill:scale-110" size={14} />
      {name}
    </span>
  );
}
