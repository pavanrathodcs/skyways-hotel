"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ROOMS } from "@/lib/data";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function RoomCard({ room, index }: { room: typeof ROOMS[0]; index: number }) {
  return (
    <motion.article
      className="bg-[#0D1221] rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.image}
          alt={`${room.name} at Skyways Hotel`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="text-[11px] font-bold text-white bg-indigo-600 px-2.5 py-1 rounded-full">
            {room.tag}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-semibold text-white text-lg leading-snug">{room.name}</h3>
          <div className="text-right shrink-0">
            <span className="font-bold text-white text-xl">{room.priceDisplay}</span>
            <span className="text-slate-500 text-xs block">/ night</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{room.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {room.features.map((f) => (
            <span key={f} className="text-xs text-slate-400 bg-white/[0.06] px-2.5 py-1 rounded-full border border-white/[0.06]">
              {f}
            </span>
          ))}
        </div>

        <Link
          href="/booking"
          className="mt-auto block w-full text-center bg-indigo-600 text-white text-sm font-bold py-3 rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-md shadow-indigo-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label={`Reserve ${room.name}`}
        >
          Reserve This Room
        </Link>
      </div>
    </motion.article>
  );
}

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-16 md:py-24 bg-[#070B16]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-indigo-400 text-[10px] font-bold tracking-[0.22em] uppercase mb-2">
              Accommodations
            </p>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">Our Rooms</h2>
          </div>
          <Link
            href="/rooms"
            className="text-sm text-indigo-400 hover:text-indigo-300 font-medium hidden md:block shrink-0 transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ROOMS.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link href="/rooms" className="text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
            View all rooms →
          </Link>
        </div>
      </div>
    </section>
  );
}
