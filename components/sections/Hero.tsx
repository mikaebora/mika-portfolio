"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 md:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/3 h-[34rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-[45%] bg-cyan/[0.08] blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            y: [-20, 20, -20],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-52 top-12 h-96 w-[34rem] rounded-[40%] bg-violet/[0.08] blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-30, 30, -30],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan/90 backdrop-blur-xl">
            Portfolio
          </span>
        </motion.div>

        <motion.h1
          className="mx-auto mt-6 max-w-5xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Mika Ebora
        </motion.h1>

        <motion.p
          className="mt-5 text-lg font-medium text-white/85 md:text-xl lg:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Video Editor & Content Creator
        </motion.p>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Crafting scroll-stopping short-form content that captures attention,
          tells stories, and drives engagement across TikTok, Reels, and YouTube
          Shorts.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button href="#work">View My Work</Button>
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-muted transition-colors duration-300 hover:text-cyan"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="relative">
              <motion.div
                className="absolute -inset-3 rounded-full bg-cyan/10 blur-sm"
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <motion.div
                className="h-8 w-px bg-muted group-hover:bg-cyan"
                animate={{ scaleY: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ originY: 0 }}
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
