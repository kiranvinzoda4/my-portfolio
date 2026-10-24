"use client";
import { useState } from "react";
import { FiCheck, FiCopy, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import type { ContactData } from "@/types/portfolio";
import { SectionHeader, ContactInfo } from "@/components/ui";
import { FadeIn, StaggerContainer, SlideIn } from "@/components/motion";
import { MagneticHover } from "@/components/motion";

export default function Contact({ description, info }: ContactData) {
  const email = info.find((i) => i.id === "email")?.text;
  const others = info.filter((i) => i.id !== "email");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    if (!email) return;
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-section-alt" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-start/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <SectionHeader label="Contact" title="Get in Touch" />
          <p className="mb-8 text-base leading-relaxed text-muted">
            {description}
          </p>
        </FadeIn>

        {email && (
          <FadeIn delay={0.1}>
            <div className="relative mb-6 overflow-hidden rounded-3xl border border-accent/20 bg-card-solid/80 px-6 py-10 shadow-2xl shadow-accent-glow backdrop-blur-sm sm:px-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end" />
              <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-gradient-start/15 blur-3xl" />
              <p className="relative text-xs font-bold tracking-[0.2em] text-muted-light uppercase">
                Let&apos;s build something together
              </p>
              <a
                href={`mailto:${email}`}
                className="relative mt-3 block bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-xl font-bold break-words text-transparent transition-opacity hover:opacity-80 sm:text-4xl"
              >
                {email}
              </a>
              <div className="relative mt-7 flex flex-wrap justify-center gap-3">
                <MagneticHover strength={0.15}>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent-dark/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-dark/50"
                  >
                    <FiSend size={15} />
                    Send an email
                  </a>
                </MagneticHover>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-background/50 px-6 py-3 text-sm font-bold text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent"
                >
                  {copied ? <FiCheck size={15} className="text-success" /> : <FiCopy size={15} />}
                  {copied ? "Copied!" : "Copy email"}
                </button>
              </div>
            </div>
          </FadeIn>
        )}

        <StaggerContainer stagger={0.1} className="grid gap-4 text-left sm:grid-cols-3">
          {others.map((item, i) => (
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
