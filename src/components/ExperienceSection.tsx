"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Leaf, Clock } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const DINING_CHIPS = [
  { Icon: Clock,           text: "Lunch & dinner" },
  { Icon: Leaf,            text: "Vegan & gluten-free" },
  { Icon: UtensilsCrossed, text: "Authentic Greek cuisine" },
];

export default function ExperienceSection() {
  return (
    <section id="dining" className="py-16 md:py-24 bg-[#0B1628]" aria-label="On-site dining">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">On-Site Dining</p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-5">
              Taste of{" "}
              <em className="italic text-amber-400">Greece</em>,<br />
              steps from your room
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-7">
              Aliki&apos;s Authentic Greek Taverna is right on-site — a family-friendly
              restaurant open for lunch and dinner, with vegan and gluten-free options
              available. No need to venture out after a long flight.
            </p>

            <div className="flex flex-wrap gap-2">
              {DINING_CHIPS.map(({ Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-300 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-full"
                >
                  <Icon size={11} />
                  {text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — restaurant card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="bg-[#0D1221] rounded-2xl border border-white/[0.08] overflow-hidden"
          >
            {/* Amber top border */}
            <div className="h-[3px] bg-gradient-to-r from-amber-400/80 via-amber-500/50 to-transparent" />

            <div className="p-8">
              <div className="flex items-start gap-2 mb-1">
                <span className="text-xl leading-none mt-0.5" aria-hidden="true">🫒</span>
                <p className="font-display text-[1.4rem] text-white leading-snug">
                  Aliki&apos;s Authentic<br />Greek Taverna
                </p>
              </div>
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-6">On-site restaurant</p>

              <div className="flex flex-wrap gap-2 mb-7">
                {DINING_CHIPS.map(({ Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full"
                  >
                    <Icon size={11} />
                    {text}
                  </span>
                ))}
              </div>

              {/* Guest quote */}
              <div className="pt-5 border-t border-white/[0.06]">
                <p className="text-slate-300 text-sm leading-relaxed italic mb-3">
                  &ldquo;AMAZING Greek restaurant!!! Highly suggest!&rdquo;
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300 text-xs font-bold shrink-0">
                    K
                  </div>
                  <p className="text-xs text-slate-500">Kara &middot; Verified guest &middot; 10/10</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
