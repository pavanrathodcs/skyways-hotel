"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const REVIEWS = [
  {
    name: "Kara",
    score: "10",
    text: "Super close to rental car return, clean, nice staff, comfy bed & AMAZING Greek restaurant!!! Highly suggest!",
  },
  {
    name: "Sharon",
    score: "9",
    text: "Extremely friendly and helpful staff. Cash made us feel like old friends. Excellent location. Comfortable beds, lovely courtyard.",
  },
  {
    name: "Laura",
    score: "9",
    text: "Convenient to airport. I was worried about airplane noise at night, but on the bottom floor with the fan going the noise level was fine. A nice little Greek restaurant right next door — great value for the area.",
  },
  {
    name: "Melanie",
    score: "10",
    text: "Lovely, helpful owners. Very clean, spacious, quiet room. Close to airport.",
  },
  {
    name: "Frank",
    score: "10",
    text: "Staff was very friendly and accommodating — room was nice, had everything I needed, nothing fancy but clean and comfortable.",
  },
  {
    name: "Roger",
    score: "9",
    text: "Great service and staff. The Greek restaurant is top class too!",
  },
];

const PLATFORMS = [
  { name: "Expedia / Hotels.com", score: "7.2 / 10", sub: "Good · 1,000+ reviews"  },
  { name: "MakeMyTrip",           score: "3.5 / 5",  sub: "Very Good · 979 ratings" },
  { name: "Booking.com",          score: "2,140+",   sub: "Verified reviews"         },
  { name: "Trivago",              score: "3,757",    sub: "Reviews · 43 photos"      },
];

// Split reviews into 3 columns of 2
const COLS = [REVIEWS.slice(0, 2), REVIEWS.slice(2, 4), REVIEWS.slice(4, 6)];

function ReviewItem({ name, score, text, delay }: { name: string; score: string; text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: EASE }}
      className="py-8 border-b border-white/[0.06] last:border-0"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-amber-400 text-sm tracking-wider" aria-label="5 stars">★★★★★</span>
        <span className="text-amber-400/60 text-xs font-medium">{score}/10</span>
      </div>

      <p className="text-white/80 text-base leading-relaxed mb-4">
        &ldquo;{text}&rdquo;
      </p>

      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/60 font-medium shrink-0">
          {name[0].toUpperCase()}
        </div>
        <div>
          <span className="text-white/70 text-sm font-medium">{name}</span>
          <span className="text-white/30 text-xs ml-2">Verified guest</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#070B16]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Guest Reviews</p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-3">
            What guests{" "}
            <em className="italic text-amber-400">say</em>
          </h2>
          <p className="text-slate-500 text-sm">
            Real reviews from verified guests. Average score 6.9/10 across 2,126 reviews.
          </p>
        </div>

        {/* Platform scores — open strip, no boxes */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 py-8 border-y border-white/[0.08] mb-12">
          {PLATFORMS.map(({ name, score, sub }) => (
            <div key={name} className="text-center">
              <p className="text-3xl font-extrabold text-amber-400 tracking-tight leading-none mb-1">{score}</p>
              <p className="text-xs text-slate-400">{name}</p>
              <p className="text-[11px] text-slate-600 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {/* Review columns — no boxes, just clean text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-x-12">
          {COLS.map((col, ci) => (
            <div key={ci}>
              {col.map((r, ri) => (
                <ReviewItem
                  key={r.name}
                  name={r.name}
                  score={r.score}
                  text={r.text}
                  delay={(ci * 2 + ri) * 0.07}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Aircraft noise tip */}
        <div className="flex items-start gap-3 bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-4 max-w-2xl mx-auto mt-8">
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
