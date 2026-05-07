"use client";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import type { ContactData } from "@/types/portfolio";
import { SectionHeader, ContactInfo } from "@/components/ui";
import { FadeIn, StaggerContainer, SlideIn } from "@/components/motion";
import { MagneticHover } from "@/components/motion";

export default function Contact({ description, info }: ContactData) {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-section-alt" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-start/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <FadeIn>
          <SectionHeader label="Contact" title="Get in Touch" />
          <p className="mb-8 text-base leading-relaxed text-muted">
            {description}
          </p>
        </FadeIn>

        <StaggerContainer stagger={0.1} className="space-y-4">
          {info.map((item, i) => (
            <SlideIn key={i}>
              <ContactInfo {...item} />
            </SlideIn>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-light">
              Find me on
            </p>
            <div className="flex justify-center gap-3">
              <MagneticHover strength={0.2}>
                <a
                  href="https://github.com/kiranvinzoda4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-card-border bg-card-solid/80 px-5 py-2.5 text-sm font-semibold text-muted backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:text-accent hover:shadow-lg hover:shadow-accent-glow"
                >
                  <FiGithub size={16} className="transition-transform group-hover:scale-110" />
                  GitHub
                </a>
              </MagneticHover>
              <MagneticHover strength={0.2}>
                <a
                  href="https://www.linkedin.com/in/kiran-vinzoda-75773252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-card-border bg-card-solid/80 px-5 py-2.5 text-sm font-semibold text-muted backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <FiLinkedin size={16} className="transition-transform group-hover:scale-110" />
                  LinkedIn
                </a>
              </MagneticHover>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
