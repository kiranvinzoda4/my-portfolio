import type { Skill } from "@/types/portfolio";
import icons from "./icons";

export default function SkillItem({ name, iconId }: Skill) {
  const Icon = icons[iconId];
  if (!Icon) return null;

  return (
    <div className="group flex items-center gap-3 rounded-xl border border-card-border bg-card px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-accent/30 hover:shadow-lg hover:shadow-accent-glow">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-bg transition-all group-hover:bg-gradient-to-r group-hover:from-gradient-start group-hover:to-gradient-end">
        <Icon className="text-sm text-accent group-hover:text-white" />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
}
