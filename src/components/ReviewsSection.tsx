"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const REVIEWS = [
  {
    name: "Kara",
    score: "10/10",
    text: "Super close to rental car return, clean, nice staff, comfy bed & AMAZING Greek restaurant!!! Highly suggest!",
  },
  {
    name: "Sharon",
    score: "9/10",
    text: "Extremely friendly and helpful staff. Cash made us feel like old friends. Excellent location. Comfortable beds, lovely courtyard.",
  },
  {
    name: "Laura",
    score: "9/10",
    text: "Convenient to airport. I was worried about airplane noise at night, but on the bottom floor with the fan going the noise level was fine. A nice little Greek restaurant right next door — great value for the area.",
  },
  {
    name: "Melanie",
    score: "10/10",
    text: "Lovely, helpful owners. Very clean, spacious, quiet room. Close to airport.",
  },
  {
    name: "Frank",
    score: "10/10",
    text: "Staff was very friendly and accommodating — room was nice, had everything I needed, nothing fancy but clean and comfortable.",
  },
  {
    name: "Roger",
    score: "9/10",
    text: "Great service and staff. The Greek restaurant is top class too!",
  },
];

const PLATFORMS = [
  { name: "Expedia / Hotels.com", score: "7.2 / 10", sub: "Good · 1,000+ reviews"  },
  { name: "MakeMyTrip",           score: "3.5 / 5",  sub: "Very Good · 979 ratings" },
  { name: "Booking.com",          score: "2,140+",   sub: "Verified reviews"         },
  { name: "Trivago",              score: "3,757",    sub: "Reviews · 43 photos"      },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Guest Reviews</p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-3">
            What guests{" "}
            <em className="italic text-rose-400">say</em>
          </h2>
          <p className="text-slate-500 text-sm">
            Real reviews from verified guests. Average score 6.9/10 across 2,126 reviews.
          </p>
        </div>

        {/* Platform ratings */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {PLATFORMS.map(({ name, score, sub }) => (
            <div
              key={name}
              className="bg-[#141414] rounded-xl p-5 border border-white/[0.08] text-center relative overflow-hidden"
            >
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/40 to-transparent" />
              <p className="text-3xl font-extrabold text-rose-400 tracking-tight mb-1">{score}</p>
              <p className="text-xs text-slate-400 leading-snug">{name}</p>
              <p className="text-[11px] text-slate-600 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {REVIEWS.map(({ name, score, text }, i) => (
            <motion.div
              key={name + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
              className="bg-[#141414] rounded-xl p-6 border border-white/[0.08] flex flex-col relative overflow-hidden hover:border-rose-400/20 hover:shadow-lg hover:shadow-rose-500/[0.04] transition-all duration-300"
            >
              {/* Decorative quote mark */}
              <div
                aria-hidden="true"
                className="absolute -top-2 -right-2 text-[6rem] leading-none text-rose-400/10 font-serif select-none pointer-events-none"
              >
                &rdquo;
              </div>

              <div className="flex items-start justify-between mb-3 relative">
                <span className="text-rose-400 tracking-wider text-base" aria-label="5 stars">★★★★★</span>
                <span className="text-[11px] font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-full shrink-0">
                  {score}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed flex-1 relative">
                {text}
              </p>

              <div className="flex items-center gap-2.5 pt-4 mt-4 border-t border-white/[0.06]">
                <div className="w-8 h-8 bg-rose-500/10 border border-rose-500/15 rounded-full flex items-center justify-center text-rose-300 font-semibold text-xs shrink-0">
                  {name[0].toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-xs text-slate-500">Verified guest</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aircraft noise tip */}
        <div className="flex items-start gap-3 bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-4 max-w-2xl mx-auto">
          <AlertCircle size={16} className="text-yellow-400 shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-300">
            <strong>Good to know:</strong> Guests sensitive to aircraft noise may prefer
            requesting a courtyard-facing room at check-in. Flights typically stop late evening.
          </p>
        </div>

      </div>
    </section>
  );
}
