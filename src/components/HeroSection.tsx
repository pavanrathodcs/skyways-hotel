'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050508]">
        {/* Warm city horizon glow */}
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#180a00]/60 via-[#0d0500]/20 to-transparent" />

        {/* Primary gold ambient glow */}
        <div className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-[700px] h-[320px] rounded-full bg-[#C9A84C]/[0.07] blur-[130px]" />

        {/* Secondary warm accent */}
        <div className="absolute bottom-[15%] right-[10%] w-[350px] h-[180px] rounded-full bg-[#8B4513]/[0.12] blur-[90px]" />

        {/* Cool blue tinge for depth */}
        <div className="absolute top-[25%] left-[12%] w-[400px] h-[200px] rounded-full bg-[#0a1628]/40 blur-[100px]" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
          }}
        />

        {/* Top vignette */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#050508] to-transparent" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050508] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 md:px-10">
        <motion.p
          className="text-gold text-[11px] tracking-ultra uppercase mb-8 font-sans"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Los Angeles International Airport · Forbes Five-Star
        </motion.p>

        <motion.h1
          className="font-display text-[clamp(3.5rem,10vw,7.5rem)] text-cream leading-[1.04] mb-8 tracking-tight"
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Where the Sky<br />
          <span className="gold-gradient italic">Meets Luxury</span>
        </motion.h1>

        <motion.p
          className="text-ash-light text-lg md:text-xl font-sans leading-relaxed max-w-xl mx-auto mb-14"
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          A sanctuary above the city of angels. Every detail considered,
          every moment elevated, every guest made extraordinary.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <button className="bg-gold text-onyx text-[11px] tracking-widest uppercase px-12 py-4 font-sans font-semibold hover:bg-gold-light transition-colors duration-300">
            Reserve Your Stay
          </button>
          <button className="border border-white/20 text-cream text-[11px] tracking-widest uppercase px-12 py-4 font-sans hover:border-gold hover:text-gold transition-all duration-300">
            Explore Rooms
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        custom={1.1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <span className="text-ash text-[10px] tracking-ultra uppercase font-sans">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
