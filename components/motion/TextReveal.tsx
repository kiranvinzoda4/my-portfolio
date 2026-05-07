"use client";
import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TextReveal({
  text,
  delay = 0,
  className,
  as: Tag = "p",
}: TextRevealProps) {
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {text}
    </MotionTag>
  );
}
