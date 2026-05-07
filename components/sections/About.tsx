"use client";
import type { AboutData } from "@/types/portfolio";
import { SectionHeader, StatCard } from "@/components/ui";
import { FadeIn, StaggerContainer, SlideIn } from "@/components/motion";
import { FiCheck } from "react-icons/fi";

export default function About({ intro, focusAreas, stats }: AboutData) {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader label="About Me" title="Who I Am" />
        </FadeIn>
        <div className="grid items-start gap-16 md:grid-cols-5">
          <FadeIn direction="left" className="md:col-span-3">
            <p className="mb-6 text-base leading-relaxed text-muted">
              {intro}
            </p>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
              Core Focus Areas
            </h4>
            <ul className="space-y-2.5">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent-bg">
                    <FiCheck className="text-accent" size={12} />
                  </span>
                  <span className="text-sm text-muted">{area}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <StaggerContainer stagger={0.1} className="flex flex-col gap-4 md:col-span-2">
            {stats.map((s) => (
              <SlideIn key={s.label}>
                <StatCard {...s} />
              </SlideIn>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
