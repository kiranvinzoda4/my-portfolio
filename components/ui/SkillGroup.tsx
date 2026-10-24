"use client";
import type { SkillCategory } from "@/types/portfolio";
import { useSpotlight } from "@/components/motion";
import SkillItem from "./SkillItem";

export default function SkillGroup({ title, skills }: SkillCategory) {
  const spotlight = useSpotlight<HTMLDivElement>();

  return (
    <div
      {...spotlight}
      className="spotlight-card gradient-border glow-hover relative h-full overflow-hidden border border-card-border p-6 transition-all duration-400"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gradient-start/50 to-transparent" />
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-lg font-bold">{title}</h4>
        <span className="rounded-md bg-accent-bg px-2 py-0.5 font-mono text-xs text-accent">{skills.length}</span>
      </div>
      <div className="relative z-10 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}
