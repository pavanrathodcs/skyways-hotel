'use client';

import { motion } from 'framer-motion';

type Amenity = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

const PoolIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M2 12c1.5-2.5 3-2.5 4.5 0s3 2.5 4.5 0 3-2.5 4.5 0 3 2.5 4.5 0" />
    <path d="M2 17c1.5-2.5 3-2.5 4.5 0s3 2.5 4.5 0 3-2.5 4.5 0 3 2.5 4.5 0" />
    <path d="M12 2v6" />
    <path d="M9.5 4.5h5" />
  </svg>
);

const DiningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
);

const ShuttleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="1" y="8" width="15" height="10" rx="1" />
    <path d="M16 13h4l3 3v-3h-4" />
    <circle cx="5.5" cy="18.5" r="1.5" />
    <circle cx="14.5" cy="18.5" r="1.5" />
    <path d="M1 11.5h15" />
  </svg>
);

const SpaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22c-4.97 0-9-2.69-9-6 0-2.5 1.97-4.66 4.88-5.61C9.27 9.52 10.6 8 12 6c1.4 2 2.73 3.52 4.12 4.39C18.03 11.34 20 13.5 20 16c0 3.31-4.03 6-9 6z" />
    <path d="M12 6C10.34 4.34 8 3 6 3c0 2 1 4 3 5" />
    <path d="M12 6c1.66-1.66 4-3 6-3 0 2-1 4-3 5" />
  </svg>
);

const BusinessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="7" width="20" height="14" rx="1" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);

const ConciergeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    <line x1="12" y1="2" x2="12" y2="4" />
  </svg>
);

const AMENITIES: Amenity[] = [
  {
    name: 'Rooftop Pool',
    description: 'Infinity-edge pool with panoramic views of the LA basin and incoming flights at sunset.',
    icon: <PoolIcon />,
  },
  {
    name: 'Fine Dining',
    description: 'Five curated restaurants — from omakase to Californian coastal cuisine, each helmed by a Michelin-pedigreed chef.',
    icon: <DiningIcon />,
  },
  {
    name: 'Airport Shuttle',
    description: 'Complimentary private transfers to and from all LAX terminals, available around the clock.',
    icon: <ShuttleIcon />,
  },
  {
    name: 'Spa & Wellness',
    description: 'A 12,000 sq ft sanctuary offering bespoke treatments, hydrotherapy, and a full-circuit fitness studio.',
    icon: <SpaIcon />,
  },
  {
    name: 'Business Lounge',
    description: 'Fully equipped private suites and collaborative workspaces for the discerning executive traveler.',
    icon: <BusinessIcon />,
  },
  {
    name: 'Concierge 24/7',
    description: 'Your personal concierge anticipates every need — reservations, experiences, anything. Day or night.',
    icon: <ConciergeIcon />,
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-32 md:py-44 bg-onyx-50">
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
            Hotel Amenities
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-cream">
            Every Detail,<br />Considered
          </h2>
          <div className="w-12 h-px bg-gold mt-6" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.04]">
          {AMENITIES.map((amenity, i) => (
            <motion.div
              key={amenity.name}
              className="group bg-onyx-50 p-10 hover:bg-onyx-100 transition-colors duration-500 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                {amenity.icon}
              </div>
              <h3 className="font-display text-xl text-cream mb-3">{amenity.name}</h3>
              <p className="text-ash text-sm font-sans leading-relaxed">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
