"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Wifi, Clock, Car, Bell, UtensilsCrossed, Phone,
} from "lucide-react";
import BookingBackground from "./BookingBackground";

// ── Data ─────────────────────────────────────────────────────────────────────

const ROOMS = [
  { value: "queen-room",      label: "Queen Room",      rate: 89  },
  { value: "queen-double",    label: "Queen Double",    rate: 100 },
  { value: "accessible-room", label: "Accessible Room", rate: 89  },
] as const;

const HOTEL_NOTES: { Icon: React.ElementType; text: string }[] = [
  { Icon: Clock,           text: "Check-in: 3:00 PM"                },
  { Icon: Clock,           text: "Check-out: 11:30 AM"              },
  { Icon: Wifi,            text: "Free Wi-Fi included"               },
  { Icon: Bell,            text: "24/7 front desk"                   },
  { Icon: Car,             text: "No on-site parking"                },
  { Icon: MapPin,          text: "No hotel-operated shuttle"         },
  { Icon: UtensilsCrossed, text: "Aliki's Authentic Greek Taverna"   },
];

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// ── Helpers ───────────────────────────────────────────────────────────────────

function calcNights(a: string, b: string): number {
  if (!a || !b) return 0;
  const n = Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86_400_000);
  return n > 0 ? n : 0;
}

// ── Shared input class ────────────────────────────────────────────────────────

const INPUT =
  "w-full bg-[#0B1525] border border-white/[0.09] text-slate-100 text-sm px-4 py-3.5 rounded-xl " +
  "focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/30 " +
  "placeholder:text-slate-600 transition-all duration-200 [color-scheme:dark]";

// ── FormField ─────────────────────────────────────────────────────────────────

function FormField({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] font-bold tracking-[0.12em] uppercase text-slate-500 mb-2.5"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

// ── SectionLabel ─────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-slate-600 pb-4 border-b border-white/[0.05]">
      {children}
    </p>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function BookingClient() {
  const [checkIn,   setCheckIn]   = useState("");
  const [checkOut,  setCheckOut]  = useState("");
  const [roomType,  setRoomType]  = useState("");
  const [submitted, setSubmitted] = useState(false);

  const nights = useMemo(() => calcNights(checkIn, checkOut), [checkIn, checkOut]);
  const room   = useMemo(() => ROOMS.find((r) => r.value === roomType) ?? null, [roomType]);
  const total  = room && nights > 0 ? room.rate * nights : null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="relative min-h-screen">
      <BookingBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-24">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <motion.div
          className="max-w-2xl mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="inline-flex items-center gap-1.5 text-indigo-400 text-[10px] font-bold tracking-[0.2em] uppercase bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full mb-6">
            <MapPin size={9} />
            LAX Airport Stay
          </span>

          <h1 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-[3.25rem] text-white tracking-tight leading-[1.07] mb-5">
            Reserve Your Room{" "}
            <span className="text-indigo-400">Near LAX</span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
            Choose your dates, room type, and guest details.{" "}
            <span className="text-slate-600">
              Final confirmation is subject to availability.
            </span>
          </p>
        </motion.div>

        {/* ── Two-column layout ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_352px] gap-6 lg:gap-8 items-start">

          {/* ── Form card ─────────────────────────────────────────────────── */}
          <motion.div
            className="bg-[#0C1628]/80 backdrop-blur-sm border border-white/[0.07] rounded-2xl shadow-2xl shadow-black/60"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          >
            {submitted ? (

              /* Success state */
              <div className="p-10 md:p-14 text-center">
                <div className="w-16 h-16 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-teal-400 text-2xl leading-none">✓</span>
                </div>
                <h2 className="font-bold text-2xl text-white mb-3">Request Received</h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto mb-2">
                  Our team will confirm your booking within two hours.
                </p>
                <p className="text-slate-400 text-sm mb-10">
                  Immediate help?{" "}
                  <a
                    href="tel:+14247509970"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    +1 424 750 9970
                  </a>
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:text-slate-300"
                >
                  ← Start a new reservation
                </button>
              </div>

            ) : (

              /* Form */
              <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-8">

                {/* Guest information */}
                <div className="space-y-5">
                  <SectionLabel>Guest Information</SectionLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField id="first-name" label="First Name">
                      <input
                        id="first-name"
                        type="text"
                        required
                        autoComplete="given-name"
                        placeholder="Jane"
                        className={INPUT}
                      />
                    </FormField>
                    <FormField id="last-name" label="Last Name">
                      <input
                        id="last-name"
                        type="text"
                        required
                        autoComplete="family-name"
                        placeholder="Smith"
                        className={INPUT}
                      />
                    </FormField>
                  </div>
                  <FormField id="email" label="Email Address">
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@example.com"
                      className={INPUT}
                    />
                  </FormField>
                </div>

                {/* Stay details */}
                <div className="space-y-5">
                  <SectionLabel>Stay Details</SectionLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField id="check-in" label="Check-In">
                      <input
                        id="check-in"
                        type="date"
                        required
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className={INPUT}
                      />
                    </FormField>
                    <FormField id="check-out" label="Check-Out">
                      <input
                        id="check-out"
                        type="date"
                        required
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className={INPUT}
                      />
                    </FormField>
                  </div>
                  <FormField id="room-type" label="Room Type">
                    <select
                      id="room-type"
                      required
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className={`${INPUT} appearance-none cursor-pointer bg-[#0B1525]`}
                    >
                      <option value="">Select a room type</option>
                      {ROOMS.map(({ value, label, rate }) => (
                        <option key={value} value={value}>
                          {label} — ${rate} / night
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>

                {/* Additional info */}
                <div className="space-y-5">
                  <SectionLabel>Additional Info</SectionLabel>
                  <FormField id="requests" label="Special Requests (Optional)">
                    <textarea
                      id="requests"
                      rows={4}
                      placeholder="Courtyard-facing room, dietary requirements, early check-in request…"
                      className={`${INPUT} resize-none`}
                    />
                  </FormField>
                </div>

                {/* Submit */}
                <div className="space-y-4 pt-1">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-bold text-sm tracking-wide py-4 rounded-xl hover:bg-indigo-500 active:scale-[0.99] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C1628] shadow-lg shadow-indigo-900/40"
                  >
                    Submit Reservation Request
                  </button>
                  <p className="text-slate-700 text-xs text-center leading-relaxed">
                    UI prototype — no data is submitted or stored.
                  </p>
                </div>

              </form>
            )}
          </motion.div>

          {/* ── Summary column ────────────────────────────────────────────── */}
          <motion.div
            className="lg:sticky lg:top-28 self-start space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
          >

            {/* Pricing summary */}
            <div className="bg-[#0C1628]/80 backdrop-blur-sm border border-white/[0.07] rounded-2xl p-6 shadow-xl shadow-black/50">
              <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-slate-600 mb-5">
                Booking Summary
              </p>

              {/* Selected room */}
              <div className="mb-5 min-h-[42px]">
                {room ? (
                  <>
                    <p className="font-semibold text-white text-base leading-tight">
                      {room.label}
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Skyways Hotel · Los Angeles, CA
                    </p>
                  </>
                ) : (
                  <p className="text-slate-600 text-sm italic leading-snug">
                    Select a room to see your estimate
                  </p>
                )}
              </div>

              {/* Rate rows */}
              <div className="border-t border-white/[0.05] pt-4 space-y-3 mb-5">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-sm">Nightly rate</span>
                  <span className={`text-sm font-semibold ${room ? "text-white" : "text-slate-700"}`}>
                    {room ? `$${room.rate}` : "—"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-sm">Nights</span>
                  <span className={`text-sm font-semibold ${nights > 0 ? "text-white" : "text-slate-700"}`}>
                    {nights > 0 ? nights : "—"}
                  </span>
                </div>
              </div>

              {/* Estimated total */}
              <div className="border-t border-white/[0.05] pt-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-slate-500">
                      Estimated Total
                    </p>
                    <p className="text-[11px] text-slate-700 mt-0.5">excl. taxes &amp; fees</p>
                  </div>
                  <p
                    className={`font-extrabold tracking-tight leading-none transition-colors ${
                      total !== null ? "text-[2rem] text-white" : "text-2xl text-slate-700"
                    }`}
                  >
                    {total !== null ? `$${total}` : "—"}
                  </p>
                </div>
              </div>
            </div>

            {/* Hotel notes */}
            <div className="bg-[#0C1628]/80 backdrop-blur-sm border border-white/[0.07] rounded-2xl p-6 shadow-xl shadow-black/50">
              <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-slate-600 mb-4">
                Hotel Notes
              </p>
              <ul className="space-y-3.5">
                {HOTEL_NOTES.map(({ Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <Icon size={13} className="text-slate-600 shrink-0" />
                    <span className="text-slate-400 text-sm leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call card */}
            <div className="bg-indigo-500/[0.07] border border-indigo-500/[0.15] rounded-2xl p-5">
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-indigo-400 mb-3">
                Need Immediate Help?
              </p>
              <a
                href="tel:+14247509970"
                className="flex items-center gap-2.5 group mb-1.5"
                aria-label="Call Skyways Hotel"
              >
                <Phone size={15} className="text-indigo-400 shrink-0" />
                <span className="font-bold text-lg text-white group-hover:text-indigo-300 transition-colors">
                  +1 424 750 9970
                </span>
              </a>
              <p className="text-slate-500 text-xs">Available 24/7 · Immediate booking assistance</p>
            </div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}
