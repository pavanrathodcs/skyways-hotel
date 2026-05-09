"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import PremiumBackground from "@/components/ui/PremiumBackground";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-[#070B16] overflow-hidden">
      <PremiumBackground variant="subtle" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="text-indigo-400 text-[10px] font-bold tracking-[0.22em] uppercase mb-5">
            Book Direct
          </p>
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.0] mb-6">
            Ready to book<br />
            <span className="text-indigo-400">your stay near LAX?</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-7 mb-10 max-w-xl mx-auto">
            Rooms from $89/night. Check-in 3:00 PM &middot; Check-out 11:30 AM.
            Free Wi-Fi included. Call us or book online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-sm px-10 py-4 rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-lg shadow-indigo-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Book Your Stay
            </Link>
            <a
              href="tel:+14247509970"
              className="inline-flex items-center justify-center gap-2 border border-white/[0.15] text-slate-300 font-medium text-sm px-10 py-4 rounded-xl hover:border-white/30 hover:text-white transition-all duration-200 focus-visible:outline-none"
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
