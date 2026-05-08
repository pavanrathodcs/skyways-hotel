import type { Metadata } from "next";
import Link from "next/link";
import { ROOMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rooms & Suites — Skyways Hotel",
  description:
    "Explore our curated collection of luxury rooms and suites at Skyways Hotel, LAX. From the Executive King to the Penthouse Collection.",
};

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-onyx">
      {/* Header */}
      <section className="pt-36 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="text-ash text-[10px] tracking-widest uppercase mb-5 font-sans">
          Accommodations
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-5">
          Rooms &amp; Suites
        </h1>
        <div className="w-full h-px bg-white/[0.06] mb-8" />
        <p className="text-ash-light text-lg font-sans leading-relaxed max-w-2xl">
          Every room at Skyways Hotel is a considered sanctuary — designed with
          restraint, furnished with intention, and oriented toward the extraordinary
          views that define Los Angeles.
        </p>
      </section>

      {/* Room list */}
      <section className="pb-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="space-y-4">
          {ROOMS.map((room) => (
            <article
              key={room.id}
              className="border border-white/[0.07] bg-onyx-50 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:border-white/[0.14] transition-colors duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white/60 text-[9px] tracking-widest uppercase font-sans border border-white/20 bg-white/5 px-2.5 py-1">
                    {room.tag}
                  </span>
                  <span className="text-ash-dark text-[10px] font-sans">{room.size}</span>
                </div>
                <h2 className="font-display text-3xl text-white mb-3">{room.name}</h2>
                <p className="text-ash text-sm font-sans leading-relaxed max-w-xl mb-5">
                  {room.description}
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-ash-dark text-xs font-sans">
                      <span className="w-2.5 h-px bg-white/25 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start md:items-end gap-5 shrink-0">
                <div>
                  <span className="font-display text-3xl text-white">{room.priceDisplay}</span>
                  <span className="text-ash text-xs font-sans ml-2">/ night</span>
                </div>
                <Link
                  href="/booking"
                  className="bg-[#6C63FF] text-white text-sm font-medium px-8 py-3 hover:bg-[#5a52e0] transition-colors duration-200 focus-visible:outline-none"
                >
                  Reserve this room
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
