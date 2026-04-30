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
  return (
    <div className="gradient-border group relative flex flex-col overflow-hidden border border-card-border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10">
      {/* Gradient top bar */}
      <div className="h-1 bg-gradient-to-r from-gradient-start to-gradient-end opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
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
                  ? "bg-blue-500/10 text-blue-500"
                  : "bg-emerald-500/10 text-emerald-500"
              }`}
            >
              {category === "company" ? "Company" : "Personal"}
            </span>
          )}
        </div>

        <h4 className="mb-2 text-lg font-bold transition-colors group-hover:text-accent">
          {title}
        </h4>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <div className="mb-4 border-t border-card-border" />

        <div className="mb-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-card-border bg-background px-2.5 py-1 text-[11px] font-semibold text-muted transition-colors group-hover:border-accent/20 group-hover:text-accent"
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
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-card-border py-2.5 text-xs font-semibold text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-bg hover:text-accent"
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
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gradient-start to-gradient-end py-2.5 text-xs font-semibold text-white shadow-md shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
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
