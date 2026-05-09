"use client";

import { motion } from "framer-motion";

interface PremiumBackgroundProps {
  /** "hero" = large animated blobs. "subtle" = smaller static glows. */
  variant?: "hero" | "subtle";
}

export default function PremiumBackground({ variant = "hero" }: PremiumBackgroundProps) {
  const isHero = variant === "hero";

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Indigo glow — top-right */}
      <motion.div
        className={`absolute rounded-full blur-3xl ${
          isHero
            ? "bg-indigo-600/[0.13] w-[900px] h-[900px] -top-80 -right-80"
            : "bg-indigo-600/[0.08] w-[500px] h-[500px] -top-40 -right-40"
        }`}
        animate={isHero ? { x: [0, 30, 0], y: [0, -20, 0] } : undefined}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Teal glow — bottom-left */}
      <motion.div
        className={`absolute rounded-full blur-3xl ${
          isHero
            ? "bg-teal-600/[0.08] w-[700px] h-[700px] -bottom-60 -left-60"
            : "bg-teal-600/[0.05] w-[400px] h-[400px] -bottom-32 -left-32"
        }`}
        animate={isHero ? { x: [0, -25, 0], y: [0, 20, 0] } : undefined}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut", delay: 10 }}
      />
    </div>
  );
}
