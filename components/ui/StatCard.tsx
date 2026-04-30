import type { Stat } from "@/types/portfolio";

export default function StatCard({ value, label }: Stat) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-card-border bg-gradient-to-br from-accent-bg to-card p-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-xl hover:shadow-accent-glow">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gradient-start to-gradient-end" />
      <p className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-4xl font-extrabold text-transparent">
        {value}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </p>
    </div>
  );
}
