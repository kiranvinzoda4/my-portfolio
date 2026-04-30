import type { ExperienceItem } from "@/types/portfolio";
import { SectionHeader, TimelineItem } from "@/components/ui";

interface ExperienceProps {
  items: ExperienceItem[];
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="bg-section-alt px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeader label="Experience" title="My Journey" />
        <div className="relative border-l-2 border-accent/20 pl-8">
          {items.map((exp, i) => (
            <TimelineItem key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
