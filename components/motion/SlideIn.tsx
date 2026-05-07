"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function SlideIn({ children, delay = 0, className }: SlideInProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
