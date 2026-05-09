"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ROOMS } from "@/lib/data";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function RoomCard({ room, index }: { room: typeof ROOMS[0]; index: number }) {
  return (
    <motion.article
      className="group relative bg-white/[0.03] backdrop-blur-md rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-500 flex flex-col will-change-transform hover:-translate-y-1.5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
    >
      {/* Amber glow underneath on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-4 -bottom-8 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, rgba(245,158,11,0.22), transparent 70%)",
        }}
      />

      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.image}
          alt={`${room.name} at Skyways Hotel`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Stylized badge — gradient-border + glassy interior */}
        <div className="absolute top-3 left-3">
          <div
            className="rounded-full p-px"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,158,11,0.7), rgba(20,184,166,0.5))",
            }}
          >
            <span className="block text-[10px] font-bold text-white bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-full tracking-wide">
              {room.tag}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent pointer-events-none" />
        {/* Hairline highlight on top of image */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="relative p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-2.5">
          <h3 className="font-semibold text-white text-lg leading-snug">{room.name}</h3>
          <div className="text-right shrink-0">
            <span
              className="font-extrabold text-white text-2xl tracking-tight"
              style={{ textShadow: "0 0 24px rgba(245,158,11,0.18)" }}
            >
              {room.priceDisplay}
            </span>
            <span className="text-slate-500 text-[11px] block tracking-wide uppercase mt-0.5">/ night</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">{room.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {room.features.map((f) => (
            <span
              key={f}
              className="text-[11px] text-slate-300 bg-white/[0.03] backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/[0.07]"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-auto space-y-3">
          <Link
            href={`/rooms/${room.id}`}
            className="block w-full text-center bg-indigo-600 text-white text-sm font-bold py-3 rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-md shadow-indigo-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label={`Reserve ${room.name}`}
          >
            Reserve This Room
          </Link>
          <Link
            href={`/rooms/${room.id}`}
            className="block w-full text-center text-sm text-slate-400 hover:text-white transition-colors duration-200"
            aria-label={`View details for ${room.name}`}
          >
            View Details →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function RoomsSection() {
  return (
    <section id="rooms" className="relative py-20 md:py-28 bg-[#070B16] overflow-hidden">
      {/* Faint ambient backdrop */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(20,184,166,0.04), transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-indigo-400 text-[10px] font-bold tracking-[0.22em] uppercase mb-3">
              Accommodations
            </p>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-[1.05]">
              Our Rooms
            </h2>
          </div>
          <Link
            href="/rooms"
            className="text-sm text-indigo-400 hover:text-indigo-300 font-medium hidden md:block shrink-0 transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ROOMS.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/rooms" className="text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
            View all rooms →
          </Link>
        </div>
      </div>
    </section>
  );
}
