import type { Stat } from "@/types/portfolio";

export default function StatCard({ value, label }: Stat) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-card-border bg-card-solid/80 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:shadow-xl hover:shadow-accent-glow">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gradient-start/40 to-transparent" />
      <p className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-4xl font-extrabold text-transparent">
        {value}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </p>
    </div>
  );
}
