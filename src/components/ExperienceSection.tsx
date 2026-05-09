"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Leaf, Clock } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const DINING_DETAILS = [
  { Icon: Clock,           text: "Open for lunch and dinner"     },
  { Icon: Leaf,            text: "Vegan and gluten-free options"  },
  { Icon: UtensilsCrossed, text: "Authentic Greek cuisine"        },
];

export default function ExperienceSection() {
  return (
    <section id="dining" className="py-16 md:py-24 bg-[#0D1627]" aria-label="On-site dining">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <p className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-3">
              On-Site Dining
            </p>
            <h2 className="font-bold text-3xl md:text-4xl text-white mb-5 text-balance">
              Aliki&apos;s Authentic<br />Greek Taverna
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Enjoy authentic Greek cuisine right on-site at Aliki&apos;s Authentic Greek
              Taverna — a family-friendly restaurant open for lunch and dinner, with vegan
              and gluten-free options available. No need to venture out after a long flight.
            </p>

            <div className="flex flex-col gap-4">
              {DINING_DETAILS.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-teal-400" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — guest quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="bg-[#111827] rounded-2xl p-8 border border-white/[0.08]"
          >
            <div className="text-teal-500 mb-5" aria-hidden="true">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor">
                <path d="M0 24V14.4C0 6.293 4.907 1.653 14.72 0l1.28 2.08C10.347 3.44 7.36 6.027 6.72 10.08H12V24H0Zm18 0V14.4C18 6.293 22.907 1.653 32.72 0L34 2.08C28.347 3.44 25.36 6.027 24.72 10.08H30V24H18Z" />
              </svg>
            </div>
            <blockquote className="text-slate-200 text-lg leading-relaxed mb-6">
              Super close to rental car return, clean, nice staff, comfy bed &amp; AMAZING
              Greek restaurant!!! Highly suggest!
            </blockquote>
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
              <div className="w-9 h-9 bg-indigo-500/15 rounded-full flex items-center justify-center text-indigo-300 font-bold text-sm shrink-0">
                K
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Kara</p>
                <p className="text-xs text-slate-500">Verified guest &middot; 10/10</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
