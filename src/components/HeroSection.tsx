"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Wifi, Clock, DollarSign } from "lucide-react";
import PremiumBackground from "@/components/ui/PremiumBackground";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const TRUST_BADGES = [
  { Icon: MapPin,     text: "0.8 mi from LAX" },
  { Icon: DollarSign, text: "From $89/night"   },
  { Icon: Wifi,       text: "Free Wi-Fi"       },
  { Icon: Clock,      text: "24/7 Front Desk"  },
];

const STATS = [
  { value: "0.8 mi", label: "From LAX"      },
  { value: "7.2",    label: "Expedia Score" },
  { value: "Free",   label: "Wi-Fi"         },
  { value: "24/7",   label: "Front Desk"    },
];

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#070B16] overflow-hidden"
      aria-label="Skyways Hotel — LAX Airport Hotel"
    >
      <PremiumBackground variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-24 lg:py-32 pt-32 lg:pt-36">

          {/* ── Left column ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <span className="inline-flex items-center gap-2 text-indigo-400 text-[10px] font-bold tracking-[0.22em] uppercase bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full mb-7">
                <MapPin size={9} />
                LAX Airport Hotel · Los Angeles, CA
              </span>
            </motion.div>

            <motion.h1
              className="font-sans font-extrabold text-5xl md:text-6xl lg:text-[4.5rem] text-white tracking-tight leading-[1.0] mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06, ease: EASE }}
            >
              Rest Easy<br />
              <span className="text-indigo-400">Minutes</span><br />
              from LAX
            </motion.h1>

            <motion.p
              className="text-slate-400 text-base md:text-lg leading-7 mb-8 max-w-md"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: EASE }}
            >
              Affordable rooms, free Wi-Fi, 24/7 front desk, and an on-site Greek
              restaurant — ideal for layovers, early departures, and late arrivals.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-10"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
            >
              <Link
                href="/booking"
                className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-sm px-8 py-4 rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-lg shadow-indigo-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                Book Your Stay
              </Link>
              <Link
                href="/rooms"
                className="inline-flex items-center justify-center border border-white/[0.15] text-slate-300 font-medium text-sm px-8 py-4 rounded-xl hover:border-white/30 hover:text-white transition-all duration-200 focus-visible:outline-none"
              >
                View Rooms
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              {TRUST_BADGES.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-400 text-sm">
                  <Icon size={13} className="text-teal-400 shrink-0" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column — image + floating cards ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 aspect-[4/3] ring-1 ring-white/[0.06]">
              <Image
                src="/rooms/queen-room.jpg"
                alt="Queen Room at Skyways Hotel"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>

            {/* Floating card: drive time */}
            <div className="hidden md:flex absolute -bottom-5 -left-5 bg-[#0F172A] border border-white/[0.10] rounded-2xl shadow-2xl px-5 py-4 items-center gap-3">
              <div className="w-10 h-10 bg-indigo-500/15 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.14em]">Drive to LAX</p>
                <p className="text-sm font-bold text-white mt-0.5">~4 minutes</p>
              </div>
            </div>

            {/* Floating card: price */}
            <div className="hidden md:block absolute -top-5 -right-5 bg-[#0F172A] border border-white/[0.10] rounded-2xl shadow-2xl px-5 py-4">
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.14em]">Rooms from</p>
              <p className="text-2xl font-extrabold text-indigo-400 leading-none mt-0.5">
                $89<span className="text-sm text-slate-500 font-normal ml-1">/night</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="relative z-10 border-t border-white/[0.06] bg-[#0A1020]/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x divide-white/[0.06]">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center py-3 px-4">
                <p className="text-3xl font-extrabold text-indigo-300 tracking-tight">{value}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.16em] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
