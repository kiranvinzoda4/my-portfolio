"use client";
import { useRef, type MouseEvent } from "react";
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import type { Project } from "@/types/portfolio";

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  category,
}: Project) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouse = (e: MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      className="spotlight-card gradient-border group relative flex flex-col overflow-hidden border border-card-border transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/5"
    >
      {/* Gradient top bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-gradient-start/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-bg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gradient-start group-hover:to-gradient-end group-hover:shadow-lg group-hover:shadow-accent/20">
            <FiFolder
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

        <div className="flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-card-border py-2.5 text-xs font-semibold text-muted transition-all duration-300 hover:border-accent/40 hover:bg-accent-bg hover:text-accent"
              aria-label={`${title} GitHub`}
            >
              <FiGithub size={14} />
              View Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gradient-start to-gradient-end py-2.5 text-xs font-semibold text-white shadow-md shadow-accent-dark/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent-dark/30"
              aria-label={`${title} live demo`}
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
