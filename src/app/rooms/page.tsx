import type { Metadata } from "next";
import Link from "next/link";
import { ROOMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rooms — Skyways Hotel",
  description:
    "Affordable queen rooms and accessible accommodations at Skyways Hotel near LAX, starting from $89/night. Free Wi-Fi included.",
};

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-[#0B1120]">
      {/* Header */}
      <section className="pt-36 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-5">
          Accommodations
        </p>
        <h1 className="font-sans font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-5">
          Our Rooms
        </h1>
        <div className="w-full h-px bg-white/[0.06] mb-8" />
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
          Clean, comfortable rooms 0.8 miles from LAX. All rooms include free
          Wi-Fi and cable TV. Check-in 3:00 PM &mdash; Check-out 11:30 AM.
        </p>
      </section>

      {/* Room list */}
      <section className="pb-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="space-y-4">
          {ROOMS.map((room) => (
            <article
              key={room.id}
              className="border border-white/[0.08] bg-[#111827] rounded-xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-white/[0.16] transition-colors duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-slate-300 text-[10px] tracking-widest uppercase border border-white/[0.12] bg-white/[0.05] px-2.5 py-1 rounded">
                    {room.tag}
                  </span>
                  <span className="text-slate-500 text-xs">{room.size}</span>
                </div>
                <h2 className="font-sans font-semibold text-2xl text-white mb-3">{room.name}</h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl mb-5">
                  {room.description}
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-500 text-xs">
                      <span className="w-2.5 h-px bg-white/25 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start md:items-end gap-5 shrink-0">
                <div>
                  <span className="font-sans font-bold text-3xl text-white">{room.priceDisplay}</span>
                  <span className="text-slate-400 text-xs ml-2">/ night</span>
                </div>
                <Link
                  href="/booking"
                  className="bg-indigo-500 text-white text-sm font-semibold px-8 py-3 rounded-md hover:bg-indigo-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
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
