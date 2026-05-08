"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { AMENITIES, type Amenity } from "@/lib/data";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function AmenityCard({ amenity, index }: { amenity: Amenity; index: number }) {
  const { Icon, name, description } = amenity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: EASE }}
    >
      <div className="group p-6 md:p-8 hover:bg-white/[0.03] transition-colors duration-300 cursor-default">
        <div className="text-[#4ECDC4]/70 group-hover:text-[#4ECDC4] transition-colors duration-300 mb-5" aria-hidden="true">
          <Icon size={20} strokeWidth={1.25} />
        </div>

        <h3 className="font-display text-lg text-white mb-2 leading-snug">{name}</h3>
        <p className="text-ash text-sm font-sans leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-onyx-50">
      <Container>
        <SectionHeader
          kicker="Amenities"
          title={<>Every detail,{" "}considered</>}
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {AMENITIES.map((amenity, i) => (
            <AmenityCard key={amenity.name} amenity={amenity} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
