"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScaleIn({ children, delay = 0, className }: ScaleInProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, delay, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
