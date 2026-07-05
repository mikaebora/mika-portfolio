"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { tools } from "@/lib/tools";
import { fadeInUp } from "@/lib/animations";

export default function Tools() {
  return (
    <Section id="tools" className="border-t border-border">
      <SectionHeading
        label="Tools"
        title="Software I work with"
        description="Industry-standard tools for editing, motion design, and creative direction."
      />

      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            className="group relative flex flex-col items-center justify-center rounded-xl border border-border bg-accent/10 p-6 transition-all duration-300 hover:border-muted/50 hover:bg-accent/25 hover:shadow-md hover:shadow-white/5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -3, scale: 1.1 }}
            title={tool.name}
          >
            <motion.div
              className="absolute -inset-1 rounded-xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 blur-sm"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            />
            <div className="relative z-10 text-4xl">{tool.logo}</div>
            <p className="relative z-10 mt-3 text-xs font-medium text-white">
              {tool.name}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
