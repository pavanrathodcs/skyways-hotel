"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
    <div className="border-b border-white/[0.07] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 focus-visible:outline-none focus-visible:text-indigo-400"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-100 text-sm md:text-base leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className={`text-slate-500 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#070B16]">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-indigo-400 text-[10px] font-bold tracking-[0.22em] uppercase mb-2">FAQ</p>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="border-t border-white/[0.07]">
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
