"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1;
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const getYoutubeId = (url?: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = getYoutubeId(project.video);
  const showInlineVideo = !!project.video && !youtubeId;

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
          className={`glass-panel liquid-border neon-hover relative mx-auto w-full max-w-[240px] overflow-hidden rounded-3xl p-2.5 transition-all duration-500 hover:brightness-[1.03] sm:max-w-[280px] lg:max-w-[300px] ${
            project.video ? "cursor-pointer" : ""
          }`}
          whileHover={project.video ? { scale: 1.04 } : { scale: 1.01 }}
          onClick={() => project.video && setIsPlayerOpen(true)}
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
        >
          {showInlineVideo ? (
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute left-5 top-5 z-10">
                <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-xl">
                  {project.category}
                </span>
              </div>
            </div>
          ) : (
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
          )}
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
      {project.video && isPlayerOpen && mounted && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setIsPlayerOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsPlayerOpen(false)}
            className="absolute right-4 top-4 z-[10000] rounded-full border border-white/10 bg-white/[0.05] p-3 text-white/80 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.1] hover:text-white hover:scale-105 sm:right-6 sm:top-6"
            aria-label="Close video player"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="glass-panel liquid-border relative max-h-[85vh] max-w-[90vw] w-[400px] aspect-[9/16] overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan/15"
            onClick={(e) => e.stopPropagation()}
          >
            {youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0 rounded-2xl bg-black"
              />
            ) : (
              <video
                src={project.video}
                controls
                autoPlay
                className="h-full w-full object-contain bg-black"
              />
            )}
          </motion.div>
        </motion.div>,
        document.body
      )}
    </motion.article>
  );
}
