import { FiGithub, FiLinkedin } from "react-icons/fi";
import type { ContactData } from "@/types/portfolio";
import { SectionHeader, ContactInfo } from "@/components/ui";

export default function Contact({ description, info }: ContactData) {
  return (
    <section id="contact" className="bg-section-alt px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeader label="Contact" title="Get in Touch" />
        <p className="mb-8 text-base leading-relaxed text-muted">
          {description}
        </p>
        <div className="space-y-4">
          {info.map((item, i) => (
            <ContactInfo key={i} {...item} />
          ))}
        </div>
        <div className="mt-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-light">
            Find me on
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="https://github.com/kiranvinzoda4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-card px-5 py-2.5 text-sm font-semibold text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-lg hover:shadow-accent-glow"
            >
              <FiGithub size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kiran-vinzoda-75773252/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-card px-5 py-2.5 text-sm font-semibold text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <FiLinkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
