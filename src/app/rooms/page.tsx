import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ROOMS } from "@/lib/data";
import PremiumBackground from "@/components/ui/PremiumBackground";
import { Clock, Wifi, Car, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Rooms — Skyways Hotel",
  description:
    "Affordable queen rooms and accessible accommodations at Skyways Hotel near LAX, starting from $89/night. Free Wi-Fi included.",
};

const GOOD_TO_KNOW = [
  { Icon: Clock,  title: "Check-in",        body: "3:00 PM — early check-in available for $40 (subject to availability)" },
  { Icon: Clock,  title: "Check-out",        body: "11:30 AM — late check-out on request, subject to availability"       },
  { Icon: Wifi,   title: "Wi-Fi",            body: "Free high-speed Wi-Fi included with every room, throughout the property" },
  { Icon: Car,    title: "Parking",          body: "No on-site parking. Hertz and Thrifty are directly across the street"   },
  { Icon: MapPin, title: "Airport shuttle",  body: "No hotel-operated shuttle. Rideshare and taxi ~4 min to LAX"            },
  { Icon: Clock,  title: "Front desk",       body: "Open 24/7 — available for check-in, assistance, and local information"  },
];

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-[#070B16]">

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 bg-[#070B16] overflow-hidden">
        <PremiumBackground variant="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-indigo-400 text-[10px] font-bold tracking-[0.22em] uppercase mb-5">
            Accommodations
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-6xl lg:text-[4.5rem] text-white tracking-tight leading-[1.0] mb-6">
            Our Rooms
          </h1>
          <div className="w-24 h-px bg-indigo-500/40 mb-8" />
          <p className="text-slate-400 text-lg leading-7 max-w-2xl">
            Clean, comfortable rooms 0.8 miles from LAX. All rooms include free
            Wi-Fi and cable TV. Check-in 3:00 PM &mdash; Check-out 11:30 AM.
          </p>
        </div>
      </section>

      {/* ── Room list ── */}
      <section className="pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="space-y-5">
          {ROOMS.map((room) => (
            <article
              key={room.id}
              className="border border-white/[0.07] bg-[#0F172A] rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-white/[0.14] transition-colors duration-300 shadow-xl shadow-black/40"
            >
              {/* Room image */}
              <div className="relative w-full md:w-72 lg:w-96 aspect-[4/3] md:aspect-auto md:self-stretch shrink-0">
                <Image
                  src={room.image}
                  alt={`${room.name} at Skyways Hotel`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-bold text-white bg-indigo-600 px-2.5 py-1 rounded-full">
                  {room.tag}
                </span>
              </div>

              {/* Room content */}
              <div className="flex flex-col md:flex-row flex-1 p-7 md:p-8 gap-6">
                <div className="flex-1">
                  <p className="text-slate-500 text-xs uppercase tracking-[0.14em] mb-2">{room.size}</p>
                  <h2 className="font-bold text-2xl text-white tracking-tight mb-3">{room.name}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-lg">
                    {room.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {room.features.map((f) => (
                      <li
                        key={f}
                        className="text-xs text-slate-400 bg-white/[0.05] border border-white/[0.07] px-3 py-1.5 rounded-full"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-start md:items-end justify-between gap-5 shrink-0">
                  <div className="text-left md:text-right">
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.14em] mb-0.5">From</p>
                    <span className="font-extrabold text-4xl text-white tracking-tight leading-none">
                      {room.priceDisplay}
                    </span>
                    <span className="text-slate-500 text-sm ml-2">/night</span>
                  </div>
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center bg-indigo-600 text-white text-sm font-bold px-8 py-3.5 rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-lg shadow-indigo-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap"
                  >
                    Reserve this room
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Good to Know ── */}
      <section className="py-20 bg-[#0B1628]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-teal-400 text-[10px] font-bold tracking-[0.22em] uppercase mb-3">
              Before You Arrive
            </p>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
              Good to Know
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GOOD_TO_KNOW.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-[#0F172A] border border-white/[0.07] rounded-2xl p-6"
              >
                <div className="w-9 h-9 bg-teal-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={16} className="text-teal-400" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 bg-[#070B16]">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <p className="text-indigo-400 text-[10px] font-bold tracking-[0.22em] uppercase mb-5">
            Ready to Book
          </p>
          <h2 className="font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-[1.05] mb-5">
            Reserve your room<br />
            <span className="text-indigo-400">at Skyways Hotel</span>
          </h2>
          <p className="text-slate-400 text-base leading-7 mb-10">
            Book directly for the best rate. Questions? Call us 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-sm px-10 py-4 rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-lg shadow-indigo-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Book Your Stay
            </Link>
            <a
              href="tel:+14247509970"
              className="inline-flex items-center justify-center gap-2 border border-white/[0.15] text-slate-300 font-medium text-sm px-10 py-4 rounded-xl hover:border-white/30 hover:text-white transition-all duration-200"
            >
              <Phone size={14} />
              +1 424 750 9970
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
