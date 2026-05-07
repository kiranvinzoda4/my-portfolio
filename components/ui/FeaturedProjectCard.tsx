import { FiExternalLink, FiCheck, FiShield } from "react-icons/fi";
import type { Project } from "@/types/portfolio";

export default function FeaturedProjectCard({
  title,
  description,
  tagline,
  tech,
  live,
  highlights,
  metrics,
  trustedBy,
}: Project) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-accent/15 bg-card-solid shadow-2xl shadow-accent-glow/50">
      {/* Gradient top bar */}
      <div className="h-1 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end" />

      {/* Background glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-start/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-end/[0.04] blur-3xl" />

      <div className="relative p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-lg bg-gradient-to-r from-gradient-start to-gradient-end px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                Featured Project
              </span>
              <span className="rounded-lg bg-blue-500/10 px-2.5 py-1 text-xs font-bold tracking-wider text-blue-400 uppercase">
                SaaS
              </span>
              <span className="flex items-center gap-1 rounded-lg bg-success/10 px-2.5 py-1 text-xs font-bold text-success">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                </span>
                Live
              </span>
            </div>
            <h3 className="text-3xl font-bold sm:text-4xl">{title}</h3>
            {tagline && (
              <p className="mt-2 text-base font-medium text-accent sm:text-lg">
                {tagline}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="mb-6 leading-relaxed text-muted">{description}</p>
            {highlights && highlights.length > 0 && (
              <div className="space-y-3">
                <h5 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  What I Built
                </h5>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent-bg">
                        <FiCheck className="text-accent" size={12} />
                      </span>
                      <span className="text-sm leading-snug text-muted">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-6 lg:col-span-2">
            {metrics && metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-card-border bg-background/50 p-4 text-center"
                  >
                    <p className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-2xl font-bold text-transparent">
                      {m.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-tight text-muted">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div>
              <h5 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-light">
                Tech Stack
              </h5>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-card-border bg-background/50 px-3 py-1.5 text-xs font-semibold text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {trustedBy && trustedBy.length > 0 && (
              <div>
                <h5 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-light">
                  Trusted By
                </h5>
                <div className="flex flex-wrap gap-2">
                  {trustedBy.map((c) => (
                    <span
                      key={c}
                      className="flex items-center gap-1.5 rounded-lg bg-accent-bg px-3 py-1.5 text-xs font-semibold text-accent"
                    >
                      <FiShield size={11} />
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gradient-start to-gradient-end py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-dark/25 transition-all hover:shadow-xl hover:shadow-accent-dark/35"
              >
                <FiExternalLink size={16} className="transition-transform group-hover/btn:scale-110" />
                Visit Xpense
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
