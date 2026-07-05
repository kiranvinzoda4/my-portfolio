"use client";
import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const MOTION_TAGS = {
  h1: motion.create("h1"),
  h2: motion.create("h2"),
  h3: motion.create("h3"),
  p: motion.create("p"),
  span: motion.create("span"),
};

export default function TextReveal({
  text,
  delay = 0,
  className,
  as = "p",
}: TextRevealProps) {
  const MotionTag = MOTION_TAGS[as];

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
