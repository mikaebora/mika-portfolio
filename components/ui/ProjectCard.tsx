"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className={`grid items-center gap-7 lg:grid-cols-[0.8fr_1fr] lg:gap-12 ${
          isReversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          className="glass-panel liquid-border neon-hover relative mx-auto w-full max-w-[240px] overflow-hidden rounded-3xl p-2.5 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-cyan/25 group-hover:bg-white/[0.06] sm:max-w-[280px] lg:max-w-[300px]"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
        >
          <div
            className={`relative aspect-[9/16] overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_20%,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_74%_72%,rgba(34,211,238,0.2),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.16),transparent_28%,rgba(255,255,255,0.05)_58%,transparent_76%)]" />
            <motion.div
              className="absolute -left-16 top-10 h-44 w-64 rounded-[45%] bg-cyan/20 blur-3xl"
              animate={{ x: [0, 24, 0], y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-20 bottom-0 h-52 w-72 rounded-[42%] bg-violet/20 blur-3xl"
              animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-x-5 bottom-5 top-5 rounded-[1.35rem] border border-white/10 bg-black/20 backdrop-blur-sm" />
            <div className="absolute left-7 top-7">
              <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-xl">
                {project.category}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan/35 bg-black/35 shadow-[0_0_42px_rgba(34,211,238,0.18)] backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:border-cyan/60">
                <svg
                  className="ml-1 h-8 w-8 text-white/85"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-cyan/10 via-transparent to-violet/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan/80">
              {project.category}
            </span>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              {project.title}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-white/75 backdrop-blur-xl"
                >
                  {tool}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </motion.article>
  );
}
