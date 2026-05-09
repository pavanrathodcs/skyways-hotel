import Link from "next/link";
import Image from "next/image";
import {
  Clock, Wifi, MapPin, Ban, PawPrint, Car, ChevronLeft,
  type LucideIcon,
} from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

export type RoomFeature = { Icon: LucideIcon; label: string };

export type RoomDetailData = {
  slug: string;
  name: string;
  price: string;
  description: string;
  features: RoomFeature[];
  image: string;
};

const HOUSE_RULES: { Icon: LucideIcon; label: string; desc: string }[] = [
  {
    Icon: PawPrint,
    label: "No pets allowed",
    desc: "We do not accommodate pets of any kind. Please arrange care for animals before your stay.",
  },
  {
    Icon: Ban,
    label: "Non-smoking property",
    desc: "All rooms and indoor areas are 100% non-smoking. A cleaning fee applies for violations.",
  },
  {
    Icon: Car,
    label: "No on-site parking",
    desc: "Limited street parking nearby. Hertz and Thrifty rental car shuttles run 24/7 across the street.",
  },
];

export default function RoomDetail({ room }: { room: RoomDetailData }) {
  const bookingHref = `/booking?room=${room.slug}`;

  return (
    <main className="min-h-screen bg-[#070B16]">

      {/* ── Hero ── */}
      <section className="relative h-64 md:h-80 lg:h-[500px] mt-16 overflow-hidden">
        <Image
          src={room.image}
          alt={`${room.name} at Skyways Hotel`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] via-[#070B16]/60 to-transparent" />

        {/* Back link */}
        <Link
          href="/rooms"
          className="absolute top-6 left-6 z-10 inline-flex items-center gap-1 text-teal-400 text-xs uppercase tracking-widest hover:text-amber-400 transition-colors duration-200 focus-visible:outline-none focus-visible:text-amber-400"
        >
          <ChevronLeft size={14} />
          Rooms
        </Link>

        {/* Name + price overlay */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pb-6 md:pb-10 flex items-end justify-between gap-4 md:gap-6 flex-wrap">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]">
              {room.name}
            </h1>
            <span className="inline-flex items-baseline gap-1 bg-amber-400/15 border border-amber-400/40 text-amber-300 px-4 py-2 rounded-full">
              <span className="text-xl md:text-2xl font-extrabold tracking-tight">{room.price}</span>
              <span className="text-xs">/night</span>
            </span>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16">

          {/* Booking summary — DOM first so it appears above content on mobile, lg:order-2 to swap on desktop */}
          <aside className="lg:order-2 lg:sticky lg:top-28 self-start">
            <div className="bg-[#0D1221] border border-white/10 border-t-2 border-t-amber-400/60 rounded-2xl p-6 shadow-xl shadow-black/50">
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.14em] mb-2">{room.name}</p>
              <p className="leading-none mb-6">
                <span className="font-display text-5xl text-amber-400">{room.price}</span>
                <span className="text-sm text-slate-500 ml-2">/night</span>
              </p>

              <Link
                href={bookingHref}
                className="block w-full text-center bg-indigo-600 text-white text-sm font-bold py-3.5 rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-lg shadow-indigo-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                Reserve This Room
              </Link>

              <div className="border-t border-white/10 my-6" />

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-slate-300">
                  <MapPin size={14} className="text-teal-400 shrink-0" />
                  0.8 mi from LAX
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Wifi size={14} className="text-teal-400 shrink-0" />
                  Free Wi-Fi
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Clock size={14} className="text-teal-400 shrink-0" />
                  24/7 Front Desk
                </li>
              </ul>

              <p className="italic text-xs text-white/40 mt-6 leading-relaxed">
                Pay at check-in — no payment required online.
              </p>
            </div>
          </aside>

          {/* Left column */}
          <div className="lg:order-1">
            <FadeUp>
              <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Room Details</p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="font-display text-3xl md:text-4xl text-white leading-tight mb-5">
                {room.name}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="leading-none mb-6">
                <span className="font-display text-5xl md:text-6xl text-amber-400">{room.price}</span>
                <span className="text-base text-slate-500 ml-3">/night</span>
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-white/70 text-base leading-7 max-w-xl">
                {room.description}
              </p>
            </FadeUp>

            <div className="border-b border-white/10 my-8" />

            <FadeUp delay={0.2}>
              <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">In this room</h3>
              <div className="flex flex-wrap gap-3">
                {room.features.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.10] hover:border-teal-400/40 hover:bg-teal-500/[0.06] transition-colors duration-200"
                  >
                    <Icon size={14} className="text-teal-400 shrink-0" />
                    <span className="text-sm text-white/80 font-medium whitespace-nowrap">{label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <div className="border-b border-white/10 my-8" />

            <FadeUp delay={0.25}>
              <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Policies</h3>
              <div className="grid grid-cols-2 divide-x divide-white/10">
                <div className="pr-6">
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.14em] mb-1">Check-in</p>
                  <p className="text-white text-sm font-semibold">3:00 PM</p>
                </div>
                <div className="pl-6">
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.14em] mb-1">Check-out</p>
                  <p className="text-white text-sm font-semibold">11:30 AM</p>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* ── Good to Know ── */}
      <section className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <FadeUp className="text-center mb-12">
            <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Good to Know</p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
              House <em className="italic text-amber-400">rules</em>
            </h2>
          </FadeUp>

          <div className="divide-y divide-white/10">
            {HOUSE_RULES.map(({ Icon, label, desc }, i) => (
              <FadeUp key={label} delay={i * 0.06}>
                <div className="flex gap-5 py-7 first:pt-0">
                  <div className="bg-teal-500/10 p-2.5 rounded-full flex items-center justify-center shrink-0 self-start">
                    <Icon size={18} className="text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-base mb-1.5">{label}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <p className="text-indigo-400 text-[10px] font-bold tracking-[0.22em] uppercase mb-5">
            Ready to book?
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-5">
            Reserve the{" "}
            <em className="italic text-amber-400">{room.name}</em>
          </h2>
          <p className="text-white/60 text-base leading-7 mb-10 max-w-md mx-auto">
            Book directly for the best rate. Pay at check-in — no payment required online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Link
              href={bookingHref}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-sm px-10 py-4 rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-lg shadow-indigo-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Reserve This Room
            </Link>
            <Link
              href="/rooms"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-sm text-slate-400 hover:text-white border border-white/10 hover:border-white/30 px-10 py-4 rounded-xl transition-colors duration-200"
            >
              <ChevronLeft size={14} />
              Back to rooms
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
