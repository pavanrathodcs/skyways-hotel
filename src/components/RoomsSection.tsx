'use client';

import { motion } from 'framer-motion';

const ROOMS = [
  {
    name: 'Skyline Suite',
    tag: 'Most Popular',
    description:
      'Panoramic floor-to-ceiling windows frame an unobstructed view of the LA basin and the orchestrated dance of incoming flights at dusk.',
    price: '$650',
    size: '820 sq ft',
    gradient: 'from-[#0d1117] via-[#131928] to-[#0a0e1a]',
    accent: 'bg-[#0f1e3d]/60',
  },
  {
    name: 'Executive King',
    tag: 'Signature Room',
    description:
      'A sanctuary of understated luxury — hand-selected furnishings, Italian marble bath, and a curated evening turndown that sets the tone.',
    price: '$380',
    size: '520 sq ft',
    gradient: 'from-[#111111] via-[#1c1c1c] to-[#141414]',
    accent: 'bg-[#1a1a1a]/60',
  },
  {
    name: 'Penthouse Collection',
    tag: 'Pinnacle Experience',
    description:
      'The apex of elevated living. A private terrace, dedicated butler, and a residence-level experience reserved for those who expect the exceptional.',
    price: '$2,400',
    size: '2,200 sq ft',
    gradient: 'from-[#0d0a00] via-[#1a1200] to-[#100d00]',
    accent: 'bg-[#1a1000]/60',
  },
] as const;

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-32 md:py-44 bg-onyx">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-gold text-[11px] tracking-ultra uppercase mb-5 font-sans">
            Accommodations
          </p>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-5xl md:text-6xl text-cream">Our Rooms</h2>
            <a
              href="#"
              className="hidden md:inline-block text-ash text-[11px] tracking-widest uppercase font-sans border-b border-ash/30 pb-px hover:text-gold hover:border-gold transition-all duration-300 shrink-0"
            >
              View All Rooms →
            </a>
          </div>
          <div className="w-12 h-px bg-gold mt-6" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ROOMS.map((room, i) => (
            <motion.article
              key={room.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.75,
                delay: i * 0.14,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Image area */}
              <div
                className={`relative h-64 bg-gradient-to-br ${room.gradient} overflow-hidden mb-6`}
              >
                {/* Grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                  }}
                />
                {/* Center glow */}
                <div className={`absolute inset-0 ${room.accent} blur-3xl scale-75`} />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-gold/70 text-[10px] tracking-widest uppercase font-sans border border-gold/20 px-2.5 py-1">
                    {room.tag}
                  </span>
                </div>

                {/* Size */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-ash text-[10px] tracking-widest uppercase font-sans">
                    {room.size}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              {/* Info */}
              <div className="space-y-3">
                <h3 className="font-display text-2xl text-cream">{room.name}</h3>
                <p className="text-ash text-sm font-sans leading-relaxed">{room.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl text-gold">{room.price}</span>
                    <span className="text-ash text-[11px] font-sans">/ night</span>
                  </div>
                  <button className="text-[11px] tracking-widest uppercase text-ash font-sans border-b border-ash/30 pb-px group-hover:text-gold group-hover:border-gold transition-all duration-300">
                    View Room →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
