"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  primary:
    "border border-cyan/35 bg-cyan/15 text-white shadow-lg shadow-cyan/10 hover:border-cyan/70 hover:bg-cyan/20 hover:shadow-cyan/25",
  secondary:
    "border border-white/10 bg-white/[0.045] text-white backdrop-blur-xl hover:border-violet/45 hover:bg-violet/10 hover:shadow-md hover:shadow-violet/15",
  ghost:
    "border border-transparent bg-transparent text-muted hover:border-white/10 hover:bg-white/[0.04] hover:text-white",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-500";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "tween", duration: 0.1 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={combinedStyles}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "tween", duration: 0.1 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
