"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import PremiumBackground from "@/components/ui/PremiumBackground";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function FinalCTA() {
  return (
    <section className="relative py-28 md:py-40 bg-[#070B16] overflow-hidden">
      <PremiumBackground variant="subtle" />

      {/* Dramatic ambient teal glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(20,184,166,0.10), transparent 55%)",
          filter: "blur(60px)",
        }}
      />
      {/* Indigo wash, offset for depth */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[50rem] h-[40rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.14), transparent 60%)",
          filter: "blur(70px)",
        }}
      />
      {/* Faint top hairline */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(45,212,191,0.30), transparent)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="text-indigo-400 text-[10px] font-bold tracking-[0.22em] uppercase mb-6">
            Book Direct
          </p>
          <h2
            className="font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight leading-[0.95] mb-7"
            style={{
              textShadow: "0 4px 80px rgba(99,102,241,0.20)",
            }}
          >
            Ready to book<br />
            <span
              className="text-indigo-400"
              style={{
                textShadow: "0 0 60px rgba(99,102,241,0.45)",
              }}
            >
              your stay near LAX?
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-7 mb-12 max-w-xl mx-auto">
            Rooms from $89/night. Check-in 3:00 PM &middot; Check-out 11:30 AM.
            Free Wi-Fi included. Call us or book online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-sm px-10 py-4 rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-lg shadow-indigo-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              style={{
                boxShadow:
                  "0 10px 40px rgba(99,102,241,0.35), 0 4px 12px rgba(99,102,241,0.20)",
              }}
            >
              Book Your Stay
            </Link>
            <a
              href="tel:+14247509970"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.04] backdrop-blur-sm border border-white/[0.15] text-slate-200 font-medium text-sm px-10 py-4 rounded-xl hover:bg-white/[0.07] hover:border-white/30 hover:text-white transition-all duration-200 focus-visible:outline-none"
            >
              <Phone size={15} />
              +1 424 750 9970
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
