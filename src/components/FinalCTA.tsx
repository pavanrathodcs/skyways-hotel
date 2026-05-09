"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#050D1A]">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Book Direct
          </p>
          <h2 className="font-bold text-3xl md:text-4xl text-white mb-5 text-balance">
            Ready to book your stay near LAX?
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Rooms from $89/night. Check-in 3:00 PM &middot; Check-out 11:30 AM.
            Free Wi-Fi included. Call us or book online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-indigo-600 text-white font-semibold text-sm px-8 py-3.5 rounded-md hover:bg-indigo-500 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Book Your Stay
            </Link>
            <a
              href="tel:+14247509970"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 text-slate-300 font-medium text-sm px-8 py-3.5 rounded-md hover:border-slate-400 hover:text-white transition-colors duration-200 focus-visible:outline-none"
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
