"use client";
import { useRef, type MouseEvent } from "react";

/**
 * Mouse handlers for `.spotlight-card` (glow follows the cursor) and,
 * when `tilt` is set, `.tilt-card` (card leans towards the cursor by up to `tilt` degrees).
 */
export default function useSpotlight<T extends HTMLElement>(tilt = 0) {
  const ref = useRef<T>(null);

  const onMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
    if (tilt) {
      el.style.setProperty("--ry", `${((x / rect.width) - 0.5) * tilt * 2}deg`);
      el.style.setProperty("--rx", `${(0.5 - y / rect.height) * tilt * 2}deg`);
    }
  };

  const onMouseLeave = () => {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  };

  return { ref, onMouseMove, onMouseLeave };
}
