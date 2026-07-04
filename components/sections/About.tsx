"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const highlights = [
  { label: "Education", value: "Computer Science · Batangas State University" },
  { label: "Role", value: "Video Editor for Brands & Creators" },

];

const software = [
  {
    name: "Adobe Premiere Pro",
    mark: "Pr",
    icon: "/icons/premiere.svg",
    className: "border-[#9999ff]/35 bg-[#00005b] text-[#9999ff]",
  },
  {
    name: "CapCut",
    mark: "Cc",
    icon: "/icons/capcut.svg",
    className: "border-white/25 bg-white text-black",
  },
  {
    name: "Photoshop",
    mark: "Ps",
    icon: "/icons/photoshop.svg",
    className: "border-[#31a8ff]/35 bg-[#001e36] text-[#31a8ff]",
  },
  {
    name: "Figma",
    mark: "Fg",
    icon: "/icons/figma.svg",
    className: "border-[#f24e1e]/35 bg-[#1b1b1f] text-[#ff7262]",
  },
  {
    name: "DaVinci Resolve",
    mark: "Dr",
    icon: "/icons/davinci.svg",
    className: "border-[#55d7ff]/35 bg-[#081018] text-[#55d7ff]",
  },
];

export default function About() {
  const marqueeItems = [...software, ...software];

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10"
    >
      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="relative mx-auto max-w-6xl">

          {/* Headline + stat column */}
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">

            {/* Left: circle avatar + headline + body */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.05 }}
            >
              {/* Circle avatar */}
              <motion.div
                className="mb-8 h-[200px] w-[200px] overflow-hidden rounded-full border border-cyan/20 bg-white/[0.045] shadow-2xl shadow-cyan/10 backdrop-blur-xl"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <img
                  src="/profile.jfif"
                  alt="Mika Ebora"
                  className="h-full w-full object-cover object-[center_15%]"
                />
              </motion.div>

              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-muted">
                About
              </span>


              <h2 className="mt-1 max-w-2xl text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Let’s make your videos{" "}
                {/*  <br className="hidden sm:block" />
                with{" "} */}
                <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">
                  stand out.
                </span>
              </h2>


              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                As a video editor with hands-on experience, I combine creative storytelling
                to create engaging content across digital platforms. I focus on pacing, visual flow,
                and audience retention to help brands and creators stand out.
              </p>
            </motion.div>

            {/* Right: inline stat rows */}
            <motion.div
              className="flex flex-col justify-center lg:min-w-[300px]"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="group border-t border-white/[0.08] py-5 first:border-t-0"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.07, ease: "easeOut" }}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted/50">
                    {item.label}
                  </span>
                  <p className="mt-1.5 text-sm font-medium leading-snug text-white/85 transition-colors duration-300 group-hover:text-cyan md:text-base">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Tools marquee ─────────────────────────────────────────── */}
          <motion.div
            id="tools"
            className="mt-8 scroll-mt-28 border-t border-white/10 pt-6 md:mt-10 md:pt-8"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.35 }}
          >
            <h3 className="mb-7 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Creative Tools
            </h3>

            {/* Full-bleed marquee strip */}
            <div className="group relative -mx-6 overflow-hidden md:-mx-10 lg:-mx-14">

              <div className="flex w-max animate-[software-marquee_28s_linear_infinite] gap-3 px-6 group-hover:[animation-play-state:paused] sm:gap-4 sm:px-10">
                {marqueeItems.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex h-14 min-w-max items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/30 hover:bg-white/[0.07] sm:h-16 sm:px-5"
                    aria-hidden={index >= software.length}
                  >
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-lg border text-xs font-bold tracking-tight sm:h-9 sm:w-9 ${item.className}`}
                    >
                      {item.icon ? (
                        <img
                          src={item.icon}
                          alt={`${item.name} logo`}
                          className="h-[60%] w-[60%] object-contain"
                        />
                      ) : (
                        item.mark
                      )}
                    </span>
                    <span className="whitespace-nowrap text-sm font-medium text-white/80 sm:text-base">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div> {/* end max-w-6xl */}
      </div>

      <style>{`
        @keyframes software-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(calc(-50% - 0.375rem), 0, 0); }
        }
        @media (min-width: 640px) {
          @keyframes software-marquee {
            from { transform: translate3d(0, 0, 0); }
            to   { transform: translate3d(calc(-50% - 0.5rem), 0, 0); }
          }
        }
      `}</style>
    </section>
  );
}
