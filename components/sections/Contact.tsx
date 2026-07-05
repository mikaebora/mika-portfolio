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
    case "whatsapp":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
          title="Get In Touch"
          description="Have a project in mind? Reach out and let's discuss how I can help bring your vision to life."
          align="center"
        />

        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.icon !== "email" ? "_blank" : undefined}
              rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 transition-colors duration-300"
              {...fadeInUp}
              transition={{
                ...fadeInUp.transition,
                delay: index * 0.1,
              }}
            >
              <motion.div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan/20 bg-cyan/10 text-cyan transition-colors duration-300 group-hover:border-cyan/50 group-hover:text-white"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <ContactIcon icon={link.icon} />
              </motion.div>
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                  {link.label}
                </span>
                <p className="mt-1 text-base font-medium text-white transition-colors duration-300 group-hover:text-cyan md:text-lg">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
