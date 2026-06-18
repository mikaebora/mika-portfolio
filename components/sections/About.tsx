"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";

const highlights = [
  {
    label: "Education",
    value: "Computer Science student at Batangas State University",
  },
  {
    label: "Role",
    value: "Freelance video editor for brands and creators",
  },
  {
    label: "Focus",
    value: "TikTok, Reels, and YouTube Shorts",
  },
];

const software = [
  {
    name: "Adobe Premiere Pro",
    mark: "Pr",
    className: "border-[#9999ff]/35 bg-[#00005b] text-[#9999ff]",
  },
  {
    name: "CapCut",
    mark: "Cc",
    className: "border-white/25 bg-white text-black",
  },
  {
    name: "Photoshop",
    mark: "Ps",
    className: "border-[#31a8ff]/35 bg-[#001e36] text-[#31a8ff]",
  },
  {
    name: "Figma",
    mark: "Fg",
    className: "border-[#f24e1e]/35 bg-[#1b1b1f] text-[#ff7262]",
  },
  {
    name: "DaVinci Resolve",
    mark: "Dr",
    className: "border-[#55d7ff]/35 bg-[#081018] text-[#55d7ff]",
  },
];

export default function About() {
  const marqueeItems = [...software, ...software];

  return (
    <Section
      id="about"
      className="border-t border-white/10 py-12 md:py-14 lg:py-16"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          className="max-w-xl"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.05 }}
        >
          <motion.div
            className="mb-8 h-[150px] w-[150px] overflow-hidden rounded-full border border-cyan/20 bg-white/[0.045] shadow-2xl shadow-cyan/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-cyan/20"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <img
              src="/profile.jfif"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <SectionHeading
            label="About"
            title="Crafting polished stories with precision and rhythm"
            description="Freelance video editor and Computer Science student focused on clean pacing, visual flow, and engaging short-form content."
          />

          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            As a Computer Science student and freelance video editor, I combine
            technical precision with creative storytelling to create engaging
            content for TikTok, Reels, and YouTube Shorts. I focus on pacing,
            visual flow, and audience retention to help brands and creators
            stand out.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              className="glass-panel liquid-border neon-hover group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan/25 hover:bg-white/[0.065] md:p-8"
              {...fadeInUp}
              transition={{
                ...fadeInUp.transition,
                delay: 0.15 + index * 0.08,
              }}
            >
              <motion.div
                className="absolute -right-20 -top-20 h-40 w-48 rounded-[42%] bg-cyan/10 blur-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <div className="relative z-10">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  {item.label}
                </span>
                <p className="mt-2 text-base leading-relaxed text-white md:text-lg lg:text-xl">
                  {item.value}
                </p>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan/80 via-violet/60 to-transparent"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        id="tools"
        className="mt-16 scroll-mt-28 border-t border-white/10 pt-10 md:mt-20 md:pt-12 lg:mt-24"
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.3 }}
      >
        <div className="mb-7 flex flex-col gap-2 md:mb-8">
          <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Creative Tools
          </h3>
        </div>

        <div className="group relative left-1/2 w-[calc(100vw-3rem)] max-w-[1400px] -translate-x-1/2 overflow-hidden md:w-[calc(100vw-4rem)] lg:w-[calc(100vw-6rem)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#071012]/55 to-transparent backdrop-blur-[1px] md:w-14" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#071012]/55 to-transparent backdrop-blur-[1px] md:w-14" />

          <div className="flex w-max animate-[software-marquee_28s_linear_infinite] gap-3 pr-3 group-hover:[animation-play-state:paused] sm:gap-4 sm:pr-4">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex h-16 min-w-max items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-4 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-cyan/30 hover:bg-white/[0.08] hover:shadow-cyan/10 sm:h-[72px] sm:px-5"
                aria-hidden={index >= software.length}
              >
                <span
                  className={`grid h-10 w-10 place-items-center rounded-xl border text-sm font-bold tracking-tight sm:h-11 sm:w-11 ${item.className}`}
                >
                  {item.mark}
                </span>
                <span className="whitespace-nowrap text-sm font-medium text-white/85 sm:text-base">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes software-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(calc(-50% - 0.375rem), 0, 0);
          }
        }

        @media (min-width: 640px) {
          @keyframes software-marquee {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              transform: translate3d(calc(-50% - 0.5rem), 0, 0);
            }
          }
        }
      `}</style>
    </Section>
  );
}
