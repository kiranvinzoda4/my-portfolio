"use client";
import { useRef, type MouseEvent } from "react";
import type { SkillCategory } from "@/types/portfolio";
import SkillItem from "./SkillItem";

export default function SkillGroup({ title, skills }: SkillCategory) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouse = (e: MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      className="spotlight-card gradient-border glow-hover relative overflow-hidden border border-card-border p-6 transition-all duration-400"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gradient-start/50 to-transparent" />
      <h4 className="mb-5 text-lg font-bold">{title}</h4>
      <div className="grid grid-cols-1 gap-3">
        {skills.map((skill) => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}
