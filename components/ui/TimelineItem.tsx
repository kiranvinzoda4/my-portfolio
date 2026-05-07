import type { ExperienceItem } from "@/types/portfolio";

export default function TimelineItem({
  role,
  company,
  period,
  bullets,
}: ExperienceItem) {
  return (
    <div className="relative mb-10 pl-2 last:mb-0">
      {/* Dot */}
      <div className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-gradient-start to-gradient-end shadow-md shadow-accent-dark/30">
        <div className="h-2 w-2 rounded-full bg-background" />
      </div>
      {/* Card */}
      <div className="rounded-xl border border-card-border bg-card-solid/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent-glow">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="rounded-lg bg-accent-bg px-3 py-1 text-xs font-semibold text-accent">
            {period}
          </span>
        </div>
        <h4 className="text-base font-bold">{role}</h4>
        <p className="mb-3 text-sm font-medium text-accent">{company}</p>
        <ul className="space-y-1.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
