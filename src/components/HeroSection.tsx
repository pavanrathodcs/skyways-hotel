"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import PremiumBackground from "@/components/ui/PremiumBackground";
import MarqueeTicker from "@/components/ui/MarqueeTicker";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// Inline SVG noise — fractalNoise filter, very low opacity. Used as background-image.
const NOISE_SVG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#070B16] overflow-hidden"
      aria-label="Skyways Hotel — LAX Airport Hotel"
    >
      <PremiumBackground variant="hero" />

      {/* Ambient warm light — top-left */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(20,184,166,0.08), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      {/* Ambient warm light — bottom-right amber */}
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-20 w-[34rem] h-[34rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(245,158,11,0.07), transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Subtle grain / noise overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.06]"
        style={{ backgroundImage: NOISE_SVG, backgroundSize: "160px 160px" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-32 lg:pt-36">

          {/* ── Left column ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative"
            >
              {/* Thin horizontal separator above eyebrow pill */}
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-10 bg-white/10" />
                <span className="inline-flex items-center gap-2 text-teal-400 text-[10px] font-bold tracking-[0.22em] uppercase bg-teal-500/[0.08] backdrop-blur-sm border border-teal-500/20 px-3.5 py-1.5 rounded-full">
                  <MapPin size={9} />
                  LAX Airport Hotel · Los Angeles, CA
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-7"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06, ease: EASE }}
              style={{
                textShadow: "0 1px 40px rgba(255,255,255,0.04)",
              }}
            >
              Rest Easy<br />
              <em className="italic text-teal-400">Minutes</em><br />
              from{" "}<em className="italic text-amber-400">LAX</em>
            </motion.h1>

            <motion.p
              className="text-slate-400 text-base md:text-lg leading-7 mb-9 max-w-md"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: EASE }}
            >
              Affordable rooms, free Wi-Fi, 24/7 front desk, and an on-site Greek
              restaurant — ideal for layovers, early departures, and late arrivals.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
            >
              <Link
                href="/booking"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-sm px-8 py-4 rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-lg shadow-indigo-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 overflow-hidden"
              >
                <span className="relative z-10">Book Your Stay</span>
                {/* Subtle inner gradient sheen */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
                  }}
                />
              </Link>
              <Link
                href="/rooms"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/[0.05] backdrop-blur-sm border border-white/[0.15] text-slate-200 font-medium text-sm px-8 py-4 rounded-xl hover:bg-white/[0.08] hover:border-white/30 hover:text-white transition-all duration-200 focus-visible:outline-none"
              >
                View Rooms
              </Link>
            </motion.div>
          </div>

          {/* ── Right column — image + floating cards (desktop only) ── */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          >
            {/* Amber glow behind image */}
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 w-80 h-80 bg-amber-500/[0.08] blur-3xl rounded-full pointer-events-none"
            />
            {/* Teal glow top-left of image */}
            <div
              aria-hidden="true"
              className="absolute -top-10 -left-10 w-60 h-60 bg-teal-500/[0.06] blur-3xl rounded-full pointer-events-none"
            />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 aspect-[4/3] ring-1 ring-white/[0.08]">
              <Image
                src="/rooms/queen-room.jpg"
                alt="Queen Room at Skyways Hotel"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              {/* Hairline highlight on top edge */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Floating card: drive time — glassmorphism */}
            <div
              className="hidden md:flex absolute -bottom-5 -left-5 bg-white/[0.04] backdrop-blur-xl border border-white/[0.10] rounded-2xl shadow-2xl shadow-black/50 px-5 py-4 items-center gap-3"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              <div className="w-10 h-10 bg-teal-500/15 rounded-xl flex items-center justify-center shrink-0 ring-1 ring-teal-400/20">
                <MapPin size={16} className="text-teal-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.14em]">Drive to LAX</p>
                <p className="text-sm font-bold text-white mt-0.5">~4 minutes</p>
              </div>
            </div>

            {/* Floating card: price — glassmorphism */}
            <div
              className="hidden md:block absolute -top-5 -right-5 bg-white/[0.04] backdrop-blur-xl border border-white/[0.10] rounded-2xl shadow-2xl shadow-black/50 px-5 py-4"
              style={{ transform: "rotate(1.5deg)" }}
            >
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.14em]">Rooms from</p>
              <p
                className="text-2xl font-extrabold text-amber-400 leading-none mt-0.5"
                style={{ textShadow: "0 0 24px rgba(245,158,11,0.35)" }}
              >
                $89<span className="text-sm text-slate-500 font-normal ml-1">/night</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Marquee ticker with subtle teal top glow line ── */}
        <div className="mt-10 relative">
          <div
            aria-hidden="true"
            className="absolute -top-px left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(45,212,191,0.6), transparent)",
            }}
          />
          <MarqueeTicker />
        </div>
      </div>
    </section>
  );
}
