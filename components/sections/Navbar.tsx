"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import type { NavLink } from "@/types/portfolio";

interface NavbarProps {
  brand: string;
  links: NavLink[];
}

export default function Navbar({ brand, links }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(links[i].href);
          return;
        }
      }
      setActive("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-glass-border bg-background/80 backdrop-blur-2xl shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-xl font-bold text-transparent"
        >
          &lt;{brand} /&gt;
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <a
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === l.href ? "text-accent-light" : "text-muted hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-1 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="relative rounded-lg p-2 text-foreground transition-colors hover:text-accent md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden border-t border-glass-border bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                      active === l.href
                        ? "bg-accent-bg text-accent"
                        : "text-muted hover:bg-accent-bg hover:text-accent"
                    }`}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
