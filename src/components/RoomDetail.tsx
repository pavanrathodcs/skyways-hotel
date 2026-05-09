import Link from "next/link";
import Image from "next/image";
import {
  Clock, Wifi, MapPin, Ban, PawPrint, Car, ChevronLeft,
  type LucideIcon,
} from "lucide-react";

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
      <section className="relative h-72 md:h-96 mt-16 overflow-hidden">
        <Image
          src={room.image}
          alt={`${room.name} at Skyways Hotel`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] via-[#070B16]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pb-8 flex items-end justify-between gap-6 flex-wrap">
            <h1 className="font-display text-4xl md:text-6xl text-white leading-[1.05]">
              {room.name}
            </h1>
            <span className="inline-flex items-baseline gap-1 bg-amber-400/15 border border-amber-400/40 text-amber-300 px-4 py-2 rounded-full">
              <span className="text-2xl font-extrabold tracking-tight">{room.price}</span>
              <span className="text-xs">/night</span>
            </span>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16">

          {/* Left column */}
          <div>
            <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Room Details</p>
            <h2 className="font-display text-3xl md:text-4xl text-white leading-tight mb-5">
              {room.name}
            </h2>
            <p className="leading-none mb-6">
              <span className="font-display text-5xl md:text-6xl text-amber-400">{room.price}</span>
              <span className="text-base text-slate-500 ml-3">/night</span>
            </p>

            <p className="text-white/70 text-base leading-7 max-w-xl mb-10">
              {room.description}
            </p>

            <div className="border-t border-white/[0.08] pt-10">
              <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">In this room</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.features.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3"
                  >
                    <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-teal-400" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/[0.08] mt-10 pt-10">
              <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Policies</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.14em] mb-1">Check-in</p>
                  <p className="text-white text-sm font-semibold">3:00 PM</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.14em] mb-1">Check-out</p>
                  <p className="text-white text-sm font-semibold">11:30 AM</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.14em] mb-1">Pets</p>
                  <p className="text-white text-sm font-semibold">No pets allowed</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.14em] mb-1">Smoking</p>
                  <p className="text-white text-sm font-semibold">Non-smoking property</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — sticky booking summary */}
          <aside className="lg:sticky lg:top-32 self-start">
            <div className="bg-[#0D1221] border border-white/10 rounded-2xl p-6 shadow-xl shadow-black/50">
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

              <div className="border-t border-white/[0.08] my-6" />

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

              <p className="text-xs text-slate-500 mt-6 leading-relaxed">
                No payment required online — pay at check-in.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Good to Know ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-teal-400 text-xs uppercase tracking-widest mb-3 text-center">Good to Know</p>
          <h2 className="font-display text-3xl md:text-4xl text-white text-center leading-tight mb-10">
            House <em className="italic text-amber-400">rules</em>
          </h2>

          <div className="divide-y divide-white/[0.06]">
            {HOUSE_RULES.map(({ Icon, label, desc }) => (
              <div key={label} className="flex gap-4 py-5 first:pt-0">
                <div className="w-9 h-9 bg-teal-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={17} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{label}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
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
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-8">
            Reserve the{" "}
            <em className="italic text-amber-400">{room.name}</em>
          </h2>
          <div className="flex justify-center mb-6">
            <Link
              href={bookingHref}
              className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-sm px-10 py-4 rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-lg shadow-indigo-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Reserve This Room
            </Link>
          </div>
          <Link
            href="/rooms"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-teal-400 transition-colors"
          >
            <ChevronLeft size={14} />
            Back to all rooms
          </Link>
        </div>
      </section>

    </main>
  );
}
