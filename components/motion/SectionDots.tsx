"use client";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import type { NavLink } from "@/types/portfolio";
import { useActiveSection } from "./sectionScroll";

/** Dot navigation on the right edge (large screens) and a back-to-top button (all screens). */
export default function SectionDots({ links, ids }: { links: NavLink[]; ids: string[] }) {
  const active = useActiveSection(ids);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        aria-label="Sections"
        className={`fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 transition-opacity duration-500 xl:block ${
          showTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col items-end gap-4">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a href={l.href} aria-label={l.label} className="group flex items-center gap-3">
                  <span
                    className={`rounded-md border border-card-border bg-card-solid/90 px-2 py-0.5 text-xs font-medium text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${
                      isActive ? "translate-x-0" : "translate-x-2"
                    }`}
                  >
                    {l.label}
                  </span>
                  <span
                    className={`block w-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "h-6 bg-gradient-to-b from-gradient-start to-gradient-end shadow-[0_0_12px_rgba(129,140,248,0.6)]"
                        : "h-2 bg-muted-light/50 group-hover:bg-accent"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <a
        href="#"
        aria-label="Back to top"
        className={`fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-card-border bg-card-solid/80 text-muted shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-accent-glow ${
          showTop ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <FiArrowUp size={18} />
      </a>
    </>
  );
}
