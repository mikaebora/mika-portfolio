"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/contact";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-4 transition-all duration-500 md:px-6 ${
        isScrolled
          ? "py-3"
          : "py-4"
      }`}
    >
      <nav
        className={`liquid-border mx-auto grid h-14 max-w-6xl grid-cols-[1fr_auto] items-center rounded-full px-4 transition-all duration-500 md:h-16 md:grid-cols-[1fr_auto_1fr] md:px-5 ${
          isScrolled
            ? "glass-panel bg-background/60"
            : "border border-white/10 bg-white/[0.025] backdrop-blur-xl"
        }`}
      >
        <motion.a
          href="#"
          className="flex h-full items-center text-sm font-semibold tracking-tight text-white transition-colors duration-300 hover:text-cyan md:text-base"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mika.
        </motion.a>

        <motion.ul
          className="hidden h-full items-center justify-center gap-1 md:flex"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map((link) => (
            <li key={link.href} className="flex h-full items-center">
              <a
                href={link.href}
                className="flex h-10 items-center rounded-full px-4 text-sm text-muted transition-all duration-300 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_28px_rgba(34,211,238,0.16)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="hidden h-full items-center justify-end md:flex"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#contact"
            className="flex h-10 items-center rounded-full border border-cyan/25 bg-cyan/10 px-5 text-sm font-medium text-white transition-all duration-300 hover:border-cyan/50 hover:bg-cyan/15 hover:shadow-[0_0_32px_rgba(34,211,238,0.18)]"
          >
            Get In Touch
          </a>
        </motion.div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
          {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center bg-background/85 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-2xl font-medium text-white transition-colors duration-300 hover:text-cyan"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="#contact"
              className="mt-10 rounded-full border border-cyan/30 bg-cyan/10 px-8 py-3 text-white shadow-[0_0_32px_rgba(34,211,238,0.14)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              onClick={handleNavClick}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
