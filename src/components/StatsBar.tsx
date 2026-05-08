'use client';

import { motion } from 'framer-motion';

const STATS = [
  { value: '280', label: 'Rooms & Suites' },
  { value: '5', label: 'Restaurants' },
  { value: '2 min', label: 'To LAX Terminal' },
  { value: 'Forbes', label: '5-Star Rated' },
] as const;

export default function StatsBar() {
  return (
    <section className="border-y border-white/[0.06] bg-onyx-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative flex flex-col items-center text-center px-6 py-4 md:py-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-gold/25 hidden md:block" />
              )}
              <span className="font-display text-[2.25rem] text-cream leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-ash text-[10px] tracking-widest uppercase font-sans">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
