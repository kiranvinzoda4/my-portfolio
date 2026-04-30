import type { SkillCategory } from "@/types/portfolio";
import { SectionHeader, SkillGroup } from "@/components/ui";

interface SkillsProps {
  categories: SkillCategory[];
}

export default function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills" className="bg-section-alt px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Skills" title="What I Work With" />
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat) => (
            <SkillGroup key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
