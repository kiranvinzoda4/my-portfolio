"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import type { NavLink } from "@/types/portfolio";

interface NavbarProps {
  brand: string;
  links: NavLink[];
}

export default function Navbar({ brand, links }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-card-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-xl font-bold text-transparent"
        >
          &lt;{brand} /&gt;
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-lg px-4 py-2 text-sm text-muted transition-all hover:bg-accent-bg hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="rounded-lg p-2 text-foreground transition-colors hover:bg-accent-bg md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-card-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-muted transition-all hover:bg-accent-bg hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
