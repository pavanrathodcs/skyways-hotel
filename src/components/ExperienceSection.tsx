"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import LuxuryButton from "@/components/ui/LuxuryButton";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(30,20,60,0.6) 0%, transparent 100%), #0A0A0A",
      }}
      aria-label="The Skyways experience"
    >
      <Container className="text-center">
        {/* Headline */}
        <motion.h2
          className="font-display text-[clamp(2rem,6vw,4.5rem)] text-white leading-[1.08] mb-7 text-balance"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        >
          Not just a hotel.{" "}
          <em className="italic text-white">
            A moment<br className="hidden md:block" /> above the world.
          </em>
        </motion.h2>

        {/* Body */}
        <motion.p
          className="text-ash-light text-base md:text-lg font-sans leading-relaxed max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
        >
          From the moment you step through our doors, Skyways Hotel delivers
          a seamless world of calm and elegance — where the boundary between
          transit and destination disappears entirely.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
        >
          <LuxuryButton href="/booking" variant="primary" size="lg">
            Reserve your stay
          </LuxuryButton>
        </motion.div>

        {/* Location */}
        <motion.p
          className="text-ash-dark text-[10px] tracking-widest uppercase font-sans mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          aria-label="Location"
        >
          Skyways Hotel &middot; LAX &middot; Los Angeles, California
        </motion.p>
      </Container>
    </section>
  );
}
