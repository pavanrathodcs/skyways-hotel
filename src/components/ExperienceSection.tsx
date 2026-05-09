"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Leaf, Clock } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const DINING_ROWS = [
  { Icon: Clock,           text: "Open for lunch & dinner daily" },
  { Icon: Leaf,            text: "Vegan & gluten-free options available" },
  { Icon: UtensilsCrossed, text: "Authentic Greek cuisine on-site" },
];

export default function ExperienceSection() {
  return (
    <section id="dining" className="py-16 md:py-24 bg-[#070B16]" aria-label="On-site dining">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* Left — 60% */}
          <motion.div
            className="lg:col-span-3"
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
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Aliki&apos;s Authentic Greek Taverna is right on-site — a family-friendly
              restaurant open for lunch and dinner, with vegan and gluten-free options
              available. No need to venture out after a long flight.
            </p>

            <div className="divide-y divide-white/[0.07]">
              {DINING_ROWS.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-4 py-4 first:pt-0">
                  <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-teal-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — 40%, pull-quote */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          >
            {/* Large decorative quote */}
            <div
              aria-hidden="true"
              className="absolute -top-6 -left-2 text-[8rem] leading-none text-amber-400/15 font-serif select-none pointer-events-none"
            >
              &ldquo;
            </div>

            <div className="relative pt-8">
              <p className="font-display text-xl md:text-2xl text-slate-200 leading-snug italic mb-5">
                AMAZING Greek restaurant!!! Highly suggest — super close to rental car return, clean, and the staff are fantastic.
              </p>
              <div className="w-12 h-[2px] bg-amber-400 mb-5" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold text-sm shrink-0">
                  K
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Kara</p>
                  <p className="text-xs text-slate-500">Verified guest · 10/10</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
