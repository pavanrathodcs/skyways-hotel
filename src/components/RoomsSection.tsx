"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { ROOMS, type Room } from "@/lib/data";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function RoomCard({ room, index }: { room: Room; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: EASE }}
    >
      <article className="group">
        {/* Real photo */}
        <div className="aspect-[4/3] overflow-hidden mb-5 relative">
          <img
            src={room.image}
            alt={`${room.name} at Skyways Hotel`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="text-white text-[9px] tracking-widest uppercase font-sans border border-white/30 bg-black/50 backdrop-blur-sm px-2.5 py-1">
              {room.tag}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>

        {/* Content — name, description, price */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl text-white mb-1.5 leading-snug">
              {room.name}
            </h3>
            <p className="text-ash text-sm font-sans leading-relaxed line-clamp-2">
              {room.description}
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="font-display text-xl text-white leading-none">
              {room.priceDisplay}
            </span>
            <span className="text-ash text-[10px] font-sans block mt-0.5">
              / night
            </span>
          </div>
        </div>

        <div className="mt-4">
          <Link
            href="/rooms"
            className="text-xs text-ash hover:text-white transition-colors duration-200 font-sans focus-visible:outline-none focus-visible:text-white"
            aria-label={`View details for ${room.name}`}
          >
            View details →
          </Link>
        </div>
      </article>
    </motion.div>
  );
}

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-16 md:py-24 bg-onyx">
      <Container>
        {/* Header row */}
        <div className="flex items-end justify-between gap-6 mb-12">
          <SectionHeader kicker="Accommodations" title="Our Rooms" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0 pb-1"
          >
            <Link
              href="/rooms"
              className="text-ash text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none hidden md:block"
            >
              View all →
            </Link>
          </motion.div>
        </div>

        {/* Cards — no borders, mobile dividers via divide-y */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-white/[0.05] md:divide-y-0 md:gap-10">
          {ROOMS.map((room, i) => (
            <div
              key={room.id}
              className={`${i > 0 ? "pt-8 md:pt-0" : ""} ${i < ROOMS.length - 1 ? "pb-8 md:pb-0" : ""}`}
            >
              <RoomCard room={room} index={i} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
