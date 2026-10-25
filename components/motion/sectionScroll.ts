"use client";
import { useEffect, useState } from "react";

/** Fired with the target id when a programmatic scroll starts, and with null when it ends. */
const SCROLL_EVENT = "section-scroll";
const GAP_BELOW_NAV = 24;

let frame = 0;

function navHeight() {
  return document.querySelector("[data-navbar]")?.getBoundingClientRect().height ?? 64;
}

/** Where to stop so the section's heading (not its top padding) sits just below the navbar. */
function targetY(id: string) {
  if (!id) return 0;
  const el = document.getElementById(id);
  if (!el) return null;
  const padding = parseFloat(getComputedStyle(el).paddingTop) || 0;
  const y = el.getBoundingClientRect().top + window.scrollY + padding - navHeight() - GAP_BELOW_NAV;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return Math.max(0, Math.min(y, max));
}

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

/** Smoothly scroll to a section id ("" means the top). Stops if the user scrolls themselves. */
export function scrollToSection(id: string) {
  const first = targetY(id);
  if (first === null) return;

  cancelAnimationFrame(frame);
  window.dispatchEvent(new CustomEvent(SCROLL_EVENT, { detail: id }));
  history.replaceState(null, "", id ? `#${id}` : window.location.pathname);

  const startY = window.scrollY;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = reduceMotion ? 0 : Math.min(1100, 400 + Math.abs(first - startY) / 6);
  const start = performance.now();

  const stop = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
    window.dispatchEvent(new CustomEvent(SCROLL_EVENT, { detail: null }));
  };
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stop);

  const step = (now: number) => {
    const t = duration ? Math.min(1, (now - start) / duration) : 1;
    // Re-measure every frame so images or animations shifting the layout can't make us miss.
    const end = targetY(id) ?? first;
    window.scrollTo({ top: startY + (end - startY) * easeInOutCubic(t), behavior: "instant" });
    if (t < 1) frame = requestAnimationFrame(step);
    else stop();
  };
  frame = requestAnimationFrame(step);
}

/**
 * The section currently in view ("" while on the hero). While a click-triggered scroll is running,
 * it reports the destination straight away instead of every section passed on the way.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    let lockedTo: string | null = null;

    const update = () => {
      if (lockedTo !== null) return setActive(lockedTo);
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) return setActive(ids[ids.length - 1]);
      const line = window.innerHeight * 0.35;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= line) return setActive(ids[i]);
      }
      setActive("");
    };
    const onProgrammatic = (e: Event) => {
      lockedTo = (e as CustomEvent<string | null>).detail;
      update();
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener(SCROLL_EVENT, onProgrammatic);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener(SCROLL_EVENT, onProgrammatic);
    };
  }, [ids]);

  return active;
}

/** Routes every in-page link (href="#...") through scrollToSection. Mount once. */
export function SmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest?.('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      scrollToSection(a.getAttribute("href")!.slice(1));
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
