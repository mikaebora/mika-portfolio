"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactLinks } from "@/lib/contact";
import { fadeInUp } from "@/lib/animations";
import { ContactLink } from "@/lib/types";

function ContactIcon({ icon }: { icon: ContactLink["icon"] }) {
  const iconClass = "h-5 w-5";

  switch (icon) {
    case "email":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
  }
}

export default function Contact() {
  return (
    <Section id="contact" className="border-t border-white/10">
      <div className="glass-panel liquid-border rounded-3xl p-8 md:p-12 lg:p-16">
        <SectionHeading
          label="Contact"
          title="Let's create something together"
          description="Have a project in mind? Reach out and let's discuss how I can help bring your vision to life."
          align="center"
        />

        <div className="mx-auto grid max-w-2xl gap-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.icon !== "email" ? "_blank" : undefined}
              rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
              className="neon-hover group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-black/35 px-6 py-5 transition-all duration-500 hover:border-cyan/30 hover:bg-white/[0.055] md:px-8 md:py-6"
              {...fadeInUp}
              transition={{
                ...fadeInUp.transition,
                delay: index * 0.1,
              }}
              whileHover={{ x: 4 }}
            >
              <motion.div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-cyan/0 via-cyan/10 to-violet/0 opacity-0 blur"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan/20 bg-cyan/10 text-cyan transition-colors duration-300 group-hover:border-cyan/50 group-hover:text-white"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <ContactIcon icon={link.icon} />
              </motion.div>
              <div className="relative z-10">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                  {link.label}
                </span>
                <p className="mt-1 text-base font-medium text-white md:text-lg">
                  {link.value}
                </p>
              </div>
              <motion.svg
                className="relative z-10 ml-auto h-4 w-4 text-muted transition-all duration-300 group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
