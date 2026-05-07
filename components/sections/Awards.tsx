"use client";
import Image from "next/image";
import type { AwardData } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui";
import { FadeIn } from "@/components/motion";

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
        <FadeIn>
          <SectionHeader label="Recognition" title="Awards & Achievements" />
        </FadeIn>
        <div className="grid items-center gap-12 md:grid-cols-5">
          <FadeIn direction="left" className="md:col-span-2">
            <div className="group overflow-hidden rounded-2xl border border-card-border bg-card-solid shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-accent-glow">
              <Image
                src={image}
                alt={title}
                width={500}
                height={350}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="space-y-5 md:col-span-3">
            <div className="rounded-2xl border border-card-border bg-card-solid/80 p-6 backdrop-blur-sm sm:p-8">
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

            <div className="relative overflow-hidden rounded-xl border border-card-border bg-card-solid/80 p-5 backdrop-blur-sm">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gradient-start to-gradient-end" />
              <h5 className="mb-2 pl-4 text-sm font-bold">
                About {organization}
              </h5>
              <p className="pl-4 text-sm leading-relaxed text-muted">
                {orgInfo}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
