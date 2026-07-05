"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainerFast, textReveal } from "@/lib/animations";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div className={`mb-12 md:mb-16 max-w-2xl ${alignment}`} {...fadeInUp}>
      <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
      <motion.div
        className="mt-3"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-80px" }}
        variants={textReveal}
      >
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </motion.div>
      {description && (
        <motion.p
          className="mt-5 text-base leading-relaxed text-muted md:text-lg"
          variants={textReveal}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
