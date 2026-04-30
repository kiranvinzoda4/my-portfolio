import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";
import type { HeroData } from "@/types/portfolio";
import { SocialIcon } from "@/components/ui";

export default function Hero(props: HeroData) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      {/* Background gradient orbs — larger and more visible */}
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-gradient-start/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-end/8 blur-[100px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Text */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-xs font-medium text-success">
              Available for opportunities
            </span>
          </div>

          <p className="mb-3 text-sm font-medium tracking-widest text-muted uppercase">
            {props.greeting}
          </p>
          <h1 className="mb-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {props.name}
          </h1>
          <h2 className="mb-4 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
            {props.highlight}
          </h2>

          {/* Tagline as styled pills */}
          <div className="mb-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {props.tagline.split(" · ").map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-card-border bg-card px-3 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mb-6 max-w-lg text-base leading-relaxed text-muted">
            {props.description}
          </p>

          {props.quickWins && props.quickWins.length > 0 && (
            <ul className="mb-8 flex max-w-lg flex-col gap-2.5 text-left">
              {props.quickWins.map((win) => (
                <li
                  key={win}
                  className="flex items-center gap-2.5 text-sm text-foreground/80"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-gradient-start to-gradient-end">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {win}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href={props.cta.href}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gradient-start to-gradient-end px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40"
            >
              {props.cta.label}
            </a>
            <a
              href={props.secondaryCta.href}
              className="gradient-border rounded-xl px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
            >
              {props.secondaryCta.label}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
            {props.socials.map((s) => (
              <SocialIcon key={s.id} {...s} />
            ))}
          </div>
        </div>

        {/* Photo with glow */}
        {props.profileImage && (
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="animate-float relative">
              {/* Outer glow ring */}
              <div className="animate-pulse-ring absolute -inset-6 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end opacity-15 blur-2xl" />
              {/* Inner glow */}
              <div className="animate-gradient absolute -inset-3 rounded-full bg-gradient-to-r from-gradient-start via-gradient-end to-gradient-start opacity-30 blur-xl" />
              <Image
                src={props.profileImage}
                alt={props.name}
                width={320}
                height={320}
                className="relative h-56 w-56 rounded-full border-2 border-accent/20 object-cover shadow-[0_0_60px_rgba(99,102,241,0.2)] sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                priority
              />
            </div>
          </div>
        )}
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted transition-colors hover:text-accent"
        aria-label="Scroll down"
      >
        <FiArrowDown size={24} />
      </a>
    </section>
  );
}
