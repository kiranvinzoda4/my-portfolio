"use client";
import { FiArrowUpRight, FiBriefcase, FiCpu, FiGithub } from "react-icons/fi";
import type { Project } from "@/types/portfolio";
import { useSpotlight } from "@/components/motion";

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  category,
}: Project) {
  const spotlight = useSpotlight<HTMLDivElement>(4);
  const Icon = category === "personal" ? FiCpu : FiBriefcase;

  return (
    <div
      {...spotlight}
      className="spotlight-card gradient-border tilt-card group relative flex h-full flex-col overflow-hidden border border-card-border hover:shadow-2xl hover:shadow-accent-dark/15"
    >
      {/* Gradient top bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-gradient-start/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-bg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gradient-start group-hover:to-gradient-end group-hover:shadow-lg group-hover:shadow-accent/20">
            <Icon
              className="text-accent transition-colors group-hover:text-white"
              size={20}
            />
          </div>
          {category && (
            <span
              className={`rounded-md px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${
                category === "company"
                  ? "bg-blue-500/10 text-blue-400"
                  : "bg-emerald-500/10 text-emerald-400"
              }`}
            >
              {category === "company" ? "Company" : "Personal"}
            </span>
          )}
        </div>

        <h4 className="mb-2 text-lg font-bold transition-colors group-hover:text-accent-light">
          {title}
        </h4>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <div className="mb-4 border-t border-card-border/50" />

        <div className="mb-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-card-border bg-background/50 px-2.5 py-1 text-[11px] font-semibold text-muted transition-colors group-hover:border-accent/20 group-hover:text-accent-light"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="relative z-10 flex gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-card-border px-3 py-1.5 text-xs font-semibold text-muted transition-all duration-300 hover:border-accent/40 hover:bg-accent-bg hover:text-accent"
              aria-label={`${title} GitHub`}
            >
              <FiGithub size={13} />
              Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/live inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent-bg px-3 py-1.5 text-xs font-semibold text-accent-light transition-all duration-300 hover:border-accent/60 hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end hover:text-white hover:shadow-md hover:shadow-accent-dark/30"
              aria-label={`${title} live site`}
            >
              Visit live
              <FiArrowUpRight size={13} className="transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
