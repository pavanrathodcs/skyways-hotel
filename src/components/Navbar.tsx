'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = ['Rooms', 'Amenities', 'Experience', 'Contact'] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-onyx/80 backdrop-blur-2xl border-b border-white/[0.06]'
          : 'py-6 bg-transparent'
      }`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="/" className="font-display text-xl tracking-ultra gold-gradient select-none">
          SKYWAYS
        </a>

        <nav className="hidden md:flex items-center gap-10" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-ash text-[11px] tracking-widest uppercase font-sans hover:text-cream transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        <button className="border border-gold/60 text-gold text-[11px] tracking-widest uppercase px-6 py-2.5 font-sans hover:bg-gold hover:border-gold hover:text-onyx transition-all duration-300">
          Book Now
        </button>
      </div>
    </motion.header>
  );
}
