'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-36 md:py-56 bg-onyx overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#050508]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-[#C9A84C]/[0.04] blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        {/* Top gold line */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-gold/50" />
          <span className="text-gold text-[10px] tracking-ultra uppercase font-sans">The Experience</span>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>

        {/* Main headline */}
        <motion.h2
          className="font-display text-[clamp(2.5rem,7vw,5.5rem)] text-cream leading-[1.1] mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Not just a hotel.{' '}
          <span className="gold-gradient italic">A moment<br />above the world.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-ash-light text-lg font-sans leading-relaxed max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          From the moment you step through our doors, Skyways Hotel delivers
          a seamless world of calm and elegance — where the boundaries between
          transit and destination disappear entirely.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <button className="bg-gold text-onyx text-[11px] tracking-widest uppercase px-12 py-4 font-sans font-semibold hover:bg-gold-light transition-colors duration-300">
            Reserve Your Stay
          </button>
        </motion.div>

        {/* Bottom attribution */}
        <motion.p
          className="text-ash/50 text-[11px] tracking-ultra uppercase font-sans mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Skyways Hotel · LAX · Los Angeles, California
        </motion.p>
      </div>
    </section>
  );
}
