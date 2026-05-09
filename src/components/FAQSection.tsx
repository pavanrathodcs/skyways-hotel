"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const FAQS = [
  {
    q: "How far is Skyways Hotel from LAX?",
    a: "Skyways Hotel is 0.8 miles from Los Angeles International Airport (LAX) — approximately a 4-minute drive.",
  },
  {
    q: "What time is check-in and check-out?",
    a: "Check-in is at 3:00 PM. Check-out is at 11:30 AM. Early check-in is available for USD $40 (subject to availability).",
  },
  {
    q: "Is Wi-Fi free?",
    a: "Yes. Free Wi-Fi is available throughout the property and is included with every stay at no extra charge.",
  },
  {
    q: "Is parking available?",
    a: "No. Skyways Hotel does not have on-site parking. Hertz and Thrifty car rental offices are directly across the street.",
  },
  {
    q: "Does the hotel have an airport shuttle?",
    a: "No. The hotel does not operate its own airport shuttle. However, Hertz/Thrifty runs a free 24/7 shuttle from directly across the street to LAX. Taxi and rideshare (Uber/Lyft) are also readily available — approximately a 4-minute ride.",
  },
  {
    q: "Are pets allowed?",
    a: "No. Pets are not permitted at Skyways Hotel.",
  },
  {
    q: "Is the hotel wheelchair accessible?",
    a: "Yes. The hotel is fully wheelchair accessible with dedicated accessible rooms featuring roll-in showers, grab bars, shower benches, lower bathroom sinks, and wide doorways.",
  },
  {
    q: "Is there a restaurant on-site?",
    a: "Yes. Aliki's Authentic Greek Taverna is on-site and open for lunch and dinner. Vegan and gluten-free options are available.",
  },
];

function FAQItem({
  q, a, open, onToggle,
}: {
  q: string; a: string; open: boolean; onToggle: () => void;
}) {
  return (
    <div className={`relative border-b border-white/[0.07] last:border-b-0 transition-all duration-300 ${open ? "bg-white/[0.015]" : ""}`}>
      {/* Teal ambient glow behind open answer */}
      {open && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at left center, rgba(20,184,166,0.07), transparent 70%)",
          }}
        />
      )}

      <button
        onClick={onToggle}
        className="relative w-full flex items-center justify-between py-6 px-6 text-left gap-4 focus-visible:outline-none group"
        aria-expanded={open}
      >
        <span className={`font-display text-lg md:text-xl leading-snug transition-colors duration-200 ${open ? "text-white" : "text-slate-200 group-hover:text-white"}`}>
          {q}
        </span>

        <span className="flex items-center gap-3 shrink-0">
          {/* Right-side teal accent dot */}
          <span
            aria-hidden="true"
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${open ? "bg-teal-400" : "bg-teal-400/40 group-hover:bg-teal-400/70"}`}
            style={{
              boxShadow: open
                ? "0 0 10px rgba(45,212,191,0.7), 0 0 20px rgba(45,212,191,0.35)"
                : "0 0 6px rgba(45,212,191,0.25)",
            }}
          />
          <ChevronRight
            size={18}
            className={`transition-all duration-300 ${open ? "rotate-90 text-teal-400" : "text-slate-500 group-hover:text-slate-300"}`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden relative"
          >
            <p
              className="text-slate-300/90 text-sm leading-relaxed pb-6 px-6 pl-10 ml-6 border-l-2"
              style={{
                borderImage:
                  "linear-gradient(180deg, rgba(45,212,191,0.7), rgba(45,212,191,0.05)) 1",
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-[#070B16] overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
            Good to <em className="italic text-amber-400">know</em>
          </h2>
        </div>

        <div className="relative border border-white/[0.07] rounded-2xl bg-white/[0.02] backdrop-blur-md overflow-hidden">
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
