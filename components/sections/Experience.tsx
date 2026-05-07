"use client";
import type { ExperienceItem } from "@/types/portfolio";
import { SectionHeader, TimelineItem } from "@/components/ui";
import { FadeIn, StaggerContainer, SlideIn } from "@/components/motion";

interface ExperienceProps {
  items: ExperienceItem[];
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-section-alt" />
      <div className="relative mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeader label="Experience" title="My Journey" />
        </FadeIn>
        <StaggerContainer stagger={0.15} className="relative border-l-2 border-accent/20 pl-8">
          {items.map((exp, i) => (
            <SlideIn key={i}>
              <TimelineItem {...exp} />
            </SlideIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
