"use client";
import type { SkillCategory } from "@/types/portfolio";
import { SectionHeader, SkillGroup } from "@/components/ui";
import { FadeIn, StaggerContainer, SlideIn } from "@/components/motion";

interface SkillsProps {
  categories: SkillCategory[];
}

export default function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills" className="relative px-6 py-28">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-section-alt" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-start/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader label="Skills" title="What I Work With" />
        </FadeIn>
        <StaggerContainer stagger={0.15} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <SlideIn key={cat.title}>
              <SkillGroup {...cat} />
            </SlideIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
