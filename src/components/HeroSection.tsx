"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Wifi, Clock, DollarSign } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const TRUST_BADGES = [
  { Icon: MapPin,     text: "0.8 mi from LAX"  },
  { Icon: DollarSign, text: "From $89/night"    },
  { Icon: Wifi,       text: "Free Wi-Fi"        },
  { Icon: Clock,      text: "24/7 Front Desk"   },
];

const STATS = [
  { value: "0.8 mi",  label: "From LAX"       },
  { value: "7.2/10",  label: "Expedia Rating"  },
  { value: "Free",    label: "Wi-Fi Included"  },
  { value: "24/7",    label: "Front Desk"      },
];

export default function HeroSection() {
  return (
    <section className="bg-[#0B1120]" aria-label="Skyways Hotel — LAX Airport Hotel">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-20 lg:py-28 pt-28 lg:pt-32">

          {/* ── Left column ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <span className="inline-flex items-center gap-1.5 text-indigo-400 text-xs font-semibold tracking-widest uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full mb-6">
                <MapPin size={11} />
                LAX Airport · Los Angeles
              </span>
            </motion.div>

            <motion.h1
              className="font-sans font-extrabold text-[clamp(2.5rem,5.5vw,4rem)] text-white leading-[1.08] tracking-tight mb-5 text-balance"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
            >
              Rest Easy<br />
              <span className="text-indigo-400">Minutes from LAX</span>
            </motion.h1>

            <motion.p
              className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            >
              Affordable rooms, free Wi-Fi, 24/7 front desk, and an on-site Greek
              restaurant — ideal for layovers, early departures, and late arrivals.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-10"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            >
              <Link
                href="/booking"
                className="inline-flex items-center justify-center bg-indigo-500 text-white font-semibold text-sm px-7 py-3.5 rounded-md hover:bg-indigo-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                Book Your Stay
              </Link>
              <Link
                href="/rooms"
                className="inline-flex items-center justify-center border border-white/20 text-slate-300 font-medium text-sm px-7 py-3.5 rounded-md hover:border-white/40 hover:text-white transition-colors duration-200 focus-visible:outline-none"
              >
                View Rooms
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {TRUST_BADGES.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-400 text-sm">
                  <Icon size={14} className="text-teal-400 shrink-0" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column — image + overlay cards ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] ring-1 ring-white/[0.06]">
              <Image
                src="/rooms/queen-room.jpg"
                alt="Queen Room at Skyways Hotel"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Card: drive time */}
            <div className="absolute -bottom-4 -left-4 bg-[#111827] border border-white/[0.10] rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 bg-indigo-500/15 rounded-full flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500">Drive to LAX</p>
                <p className="text-sm font-semibold text-white">~4 minutes</p>
              </div>
            </div>

            {/* Card: price */}
            <div className="absolute -top-4 -right-4 bg-[#111827] border border-white/[0.10] rounded-xl shadow-xl px-4 py-3">
              <p className="text-[11px] text-slate-500">Rooms from</p>
              <p className="text-lg font-bold text-indigo-400">
                $89<span className="text-xs text-slate-500 font-normal">/night</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="border-t border-white/[0.06] bg-[#111827]/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x divide-white/[0.06]">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center py-2 px-4">
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
