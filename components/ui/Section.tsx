"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 overflow-hidden px-6 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32 ${className}`}
    >
      <motion.div
        className="absolute -left-40 top-10 h-72 w-[28rem] rounded-[45%] bg-cyan/5 blur-3xl"
        animate={{
          x: [0, 26, 0],
          opacity: [0.36, 0.58, 0.36],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-48 bottom-6 h-80 w-[30rem] rounded-[42%] bg-violet/5 blur-3xl"
        animate={{
          x: [0, -34, 0],
          opacity: [0.28, 0.5, 0.28],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
