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
    <section
      id="dining"
      className="relative py-20 md:py-28 bg-[#070B16] overflow-hidden"
      aria-label="On-site dining"
    >
      {/* Subtle ambient amber glow — left edge */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-24 -translate-y-1/2 w-[28rem] h-[28rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(245,158,11,0.06), transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Vertical amber accent line on left edge */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute left-0 top-12 bottom-12 w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(245,158,11,0.55) 30%, rgba(245,158,11,0.55) 70%, transparent)",
            boxShadow: "0 0 12px rgba(245,158,11,0.35)",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* Left — 60% */}
          <motion.div
            className="lg:col-span-3 lg:pl-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">On-Site Dining</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
              Taste of{" "}
              <em
                className="italic text-amber-400 inline-block text-5xl md:text-6xl lg:text-7xl"
                style={{
                  textShadow:
                    "0 0 32px rgba(245,158,11,0.45), 0 0 60px rgba(245,158,11,0.18)",
                }}
              >
                Greece
              </em>
              ,<br />
              steps from your room
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-9 max-w-xl">
              Aliki&apos;s Authentic Greek Taverna is right on-site — a family-friendly
              restaurant open for lunch and dinner, with vegan and gluten-free options
              available. No need to venture out after a long flight.
            </p>

            <div className="divide-y divide-white/[0.07]">
              {DINING_ROWS.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-4 py-4 first:pt-0">
                  <div className="w-9 h-9 bg-teal-500/[0.08] backdrop-blur-sm border border-teal-400/15 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-teal-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — 40%, premium pull-quote */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          >
            {/* Large decorative quote with amber glow */}
            <div
              aria-hidden="true"
              className="absolute -top-10 -left-4 text-[10rem] leading-none text-amber-400/30 font-serif select-none pointer-events-none"
              style={{
                textShadow:
                  "0 0 40px rgba(245,158,11,0.45), 0 0 80px rgba(245,158,11,0.18)",
              }}
            >
              &ldquo;
            </div>

            <div
              className="relative pt-12 pl-2 rounded-2xl"
            >
              <p className="font-display text-xl md:text-2xl text-slate-100 leading-snug italic mb-6">
                AMAZING Greek restaurant!!! Highly suggest — super close to rental car return, clean, and the staff are fantastic.
              </p>
              <div
                className="w-12 h-[2px] mb-5"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(245,158,11,1), rgba(245,158,11,0.2))",
                  boxShadow: "0 0 8px rgba(245,158,11,0.5)",
                }}
              />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] backdrop-blur-sm border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold text-sm shrink-0">
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
