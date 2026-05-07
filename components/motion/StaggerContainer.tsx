"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
}

export default function StaggerContainer({
  children,
  stagger = 0.1,
  delay = 0,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
