"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/services";
import { fadeInUp } from "@/lib/animations";

export default function Services() {
  return (
    <Section id="services" className="border-t border-white/10">
      <SectionHeading
        label="Services"
        title="What I offer"
        description="From fast-paced social edits to full production support, I help creators and brands make an impact."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="glass-panel liquid-border neon-hover group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-violet/30 hover:bg-white/[0.065] md:p-10"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={{
              ...fadeInUp.transition,
              delay: index * 0.1,
            }}
          >
            <motion.div
              className="absolute -right-16 -top-16 h-32 w-44 rounded-[42%] bg-violet/10 blur-2xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/10 text-2xl text-cyan transition-colors duration-300 group-hover:border-cyan/45 group-hover:text-white"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {service.icon}
            </motion.span>
            <h3 className="relative z-10 mt-6 text-xl font-semibold text-white md:text-2xl">
              {service.title}
            </h3>
            <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted md:text-base">
              {service.description}
            </p>
            <motion.div
              className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan/80 via-violet/60 to-transparent"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
