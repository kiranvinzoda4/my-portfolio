import Image from "next/image";
import type { AwardData } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui";

export default function Awards({
  title,
  organization,
  year,
  image,
  description,
  orgInfo,
}: AwardData) {
  return (
    <section id="awards" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Recognition" title="Awards & Achievements" />
        <div className="grid items-center gap-12 md:grid-cols-5">
          {/* Image — constrained */}
          <div className="md:col-span-2">
            <div className="group overflow-hidden rounded-2xl border border-card-border bg-card shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-accent-glow">
              <Image
                src={image}
                alt={title}
                width={500}
                height={350}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content — card wrapped */}
          <div className="space-y-5 md:col-span-3">
            <div className="rounded-2xl border border-card-border bg-card p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-lg bg-gradient-to-r from-gradient-start to-gradient-end px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                  🏆 {year}
                </span>
              </div>
              <h4 className="text-xl font-bold sm:text-2xl">{title}</h4>
              <p className="mt-1 text-sm font-medium text-accent">
                {organization}
              </p>
              <p className="mt-4 leading-relaxed text-muted">{description}</p>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-card-border bg-card p-5">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gradient-start to-gradient-end" />
              <h5 className="mb-2 pl-4 text-sm font-bold">
                About {organization}
              </h5>
              <p className="pl-4 text-sm leading-relaxed text-muted">
                {orgInfo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
