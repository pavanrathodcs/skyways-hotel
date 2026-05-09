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
    text: "convenient to airport. I was worried about airplane noise at night. but on the bottom floor with the fan going, the noise level was fine. there is a nice little Greek restaurant right next door. not fancy, but a great value for the area",
  },
  {
    name: "Melanie",
    score: "10/10",
    text: "Lovely, helpful owners. Very clean, spacious, quiet room. Close to airport.",
  },
  {
    name: "Frank",
    score: "10/10",
    text: "Staff was very friendly and accommodating - room was nice, had everything I needed, nothing fancy but clean and comfortable.",
  },
  {
    name: "Roger",
    score: "9/10",
    text: "Great service and Staff. The Greek restaurant is top class too!",
  },
];

const PLATFORMS = [
  { name: "Expedia / Hotels.com", score: "7.2 / 10",  sub: "Good · 1,000+ reviews"   },
  { name: "MakeMyTrip",           score: "3.5 / 5",   sub: "Very Good · 979 ratings"  },
  { name: "Booking.com",          score: "2,140+",     sub: "Verified reviews"          },
  { name: "Trivago",              score: "3,757",      sub: "Reviews · 43 photos"       },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#0D1627]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Guest Reviews
          </p>
          <h2 className="font-bold text-3xl md:text-4xl text-white mb-3">What guests say</h2>
          <p className="text-slate-500 text-sm">
            Real reviews from verified guests. Average score 6.9/10 across 2,126 reviews.
          </p>
        </div>

        {/* Platform ratings */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {PLATFORMS.map(({ name, score, sub }) => (
            <div key={name} className="bg-[#111827] rounded-xl p-5 border border-white/[0.08] text-center">
              <p className="text-2xl font-bold text-white mb-1">{score}</p>
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
              className="bg-[#111827] rounded-xl p-6 border border-white/[0.08] flex flex-col"
            >
              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-2.5 pt-4 mt-4 border-t border-white/[0.06]">
                <div className="w-8 h-8 bg-indigo-500/15 rounded-full flex items-center justify-center text-indigo-300 font-semibold text-xs shrink-0">
                  {name[0].toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-xs text-slate-500">Verified guest &middot; {score}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Noise tip */}
        <div className="flex items-start gap-3 bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-4 max-w-2xl mx-auto">
          <AlertCircle size={16} className="text-yellow-400 shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-300">
            <strong>Tip:</strong> Guests sensitive to aircraft noise may prefer requesting a
            courtyard-facing room at check-in. Flights typically stop late evening.
          </p>
        </div>

      </div>
    </section>
  );
}
