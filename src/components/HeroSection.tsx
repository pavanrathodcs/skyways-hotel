"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { STATS } from "@/lib/data";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden:   { opacity: 0, y: 16 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[640px] flex flex-col overflow-hidden"
      aria-label="Hero — Skyways Hotel"
    >
      {/* ── Background (2 layers) ── */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, opacity: bgOpacity }}
        aria-hidden="true"
      >
        {/* Base */}
        <div className="absolute inset-0 bg-[#060608]" />

        {/* Single violet bloom */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[560px] h-[360px] rounded-full bg-accent/[0.07] blur-[110px]" />
        </div>

        {/* Diagonal line pattern */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent 0px, transparent 19px, rgba(255,255,255,0.9) 19px, rgba(255,255,255,0.9) 20px)",
          }}
        />

        {/* Bottom fade into page */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />
      </motion.div>

      {/* ── Main content (fills remaining space above stats) ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10 pt-20 pb-4">
        <motion.div
          className="max-w-4xl w-full"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Kicker */}
          <motion.p
            variants={fadeUp}
            className="text-ash text-sm mb-6 font-sans"
          >
            LAX Airport &middot; Los Angeles
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(2rem,8vw,7rem)] text-white leading-[1.05] md:leading-[1.0] mb-6 tracking-tight text-balance"
          >
            Where the Sky<br />
            <em className="italic">Meets Luxury</em>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-ash-light text-base md:text-lg font-sans leading-relaxed max-w-lg mx-auto mb-10"
          >
            Modern comfort, minutes from LAX. Free WiFi, on-site dining,
            and easy access to Santa Monica and Venice Beach.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <LuxuryButton href="/booking" variant="primary" size="lg">
              Reserve your stay
            </LuxuryButton>
            <LuxuryButton href="/rooms" variant="ghost" size="lg">
              Explore rooms
            </LuxuryButton>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats row (embedded at bottom of hero) ── */}
      <motion.div
        className="relative z-10 shrink-0 border-t border-white/[0.06]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        aria-label="Hotel highlights"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-7">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="relative flex flex-col sm:items-center py-3 sm:py-0"
              >
                {i > 0 && (
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-px bg-white/10 hidden sm:block"
                    aria-hidden="true"
                  />
                )}
                <span className="font-display text-xl md:text-2xl text-white leading-none">
                  {stat.value}
                </span>
                <span className="text-white/40 text-[11px] mt-1 font-sans">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
