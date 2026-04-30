import type { SkillCategory } from "@/types/portfolio";
import SkillItem from "./SkillItem";

export default function SkillGroup({ title, skills }: SkillCategory) {
  return (
    <div className="gradient-border relative overflow-hidden border border-card-border p-6 transition-all duration-300 hover:shadow-xl hover:shadow-accent-glow">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gradient-start to-gradient-end" />
      <h4 className="mb-5 text-lg font-bold">{title}</h4>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill) => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}
