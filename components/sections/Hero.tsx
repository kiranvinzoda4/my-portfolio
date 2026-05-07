"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import type { HeroData } from "@/types/portfolio";
import { SocialIcon } from "@/components/ui";
import { MagneticHover } from "@/components/motion";

const roles = ["Python Developer", "Backend Engineer", "Cloud & DevOps Engineer"];

export default function Hero(props: HeroData) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      {/* Animated grid background */}
      <div className="grid-pattern pointer-events-none absolute inset-0" />

      {/* Large gradient orbs for depth */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-start/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-end/[0.06] blur-[120px]" />

      {/* Floating accent orb */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[10%] top-[15%] h-40 w-40 rounded-full bg-gradient-to-r from-gradient-start/25 to-gradient-end/25 blur-3xl"
      />
      <motion.div
        animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[20%] left-[5%] h-32 w-32 rounded-full bg-gradient-mid/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Text */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-xs font-medium text-success">
              Available for opportunities
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-3 text-sm font-medium tracking-widest text-muted uppercase"
          >
            {props.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {props.name}
          </motion.h1>

          {/* Rotating role titles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-5 h-10 sm:h-12"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          {/* Tagline pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6 flex flex-wrap justify-center gap-2 md:justify-start"
          >
            {props.tagline.split(" · ").map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-card-border bg-card-solid/60 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-6 max-w-lg text-base leading-relaxed text-muted"
          >
            {props.description}
          </motion.p>

          {props.quickWins && props.quickWins.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-8 flex max-w-lg flex-col gap-2.5 text-left"
            >
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
            </motion.ul>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <MagneticHover strength={0.15}>
              <a
                href={props.cta.href}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-gradient-start to-gradient-end px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-dark/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-dark/50"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">{props.cta.label}</span>
              </a>
            </MagneticHover>
            <MagneticHover strength={0.15}>
              <a
                href={props.secondaryCta.href}
                className="gradient-border inline-flex items-center gap-2 rounded-xl border border-card-border px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:text-accent"
              >
                {props.secondaryCta.label}
              </a>
            </MagneticHover>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-8 flex items-center justify-center gap-3 md:justify-start"
          >
            {props.socials.map((s) => (
              <SocialIcon key={s.id} {...s} />
            ))}
          </motion.div>
        </div>

        {/* Photo with PROMINENT animated glow */}
        {props.profileImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="order-1 flex justify-center md:order-2 md:justify-end"
          >
            <div className="animate-float relative">
              {/* Outer pulsing glow ring */}
              <div className="absolute -inset-8 animate-pulse-glow rounded-full bg-gradient-to-r from-gradient-start to-gradient-end opacity-20 blur-3xl" />

              {/* Rotating gradient ring */}
              <div className="animate-gradient absolute -inset-4 rounded-full bg-gradient-to-r from-gradient-start via-gradient-end to-gradient-start opacity-40 blur-2xl" />

              {/* Inner glow */}
              <div className="absolute -inset-2 rounded-full bg-accent/20 blur-xl" />

              {/* Photo */}
              <Image
                src={props.profileImage}
                alt={props.name}
                width={320}
                height={320}
                className="relative h-56 w-56 rounded-full border-2 border-accent/30 object-cover shadow-[0_0_80px_rgba(99,102,241,0.25)] sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                priority
              />
            </div>
          </motion.div>
        )}
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
