"use client";

import { motion } from "framer-motion";
import { MapPin, Car, Bus, Train, AlertCircle, Phone } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const TRANSPORT = [
  {
    Icon: MapPin,
    title: "0.8 miles from LAX",
    desc: "Approximately a 4-minute drive from Los Angeles International Airport.",
  },
  {
    Icon: Car,
    title: "Free Hertz / Thrifty shuttle",
    desc: "Hertz and Thrifty offices are directly across the street with a free 24/7 shuttle to and from LAX.",
  },
  {
    Icon: Bus,
    title: "Taxi & rideshare",
    desc: "Uber and Lyft are readily available — approximately a 4-minute ride to the hotel from LAX.",
  },
  {
    Icon: Train,
    title: "Public transit",
    desc: "One block from the new LAX public transit interchange station.",
  },
];

export default function LocationSection() {
  return (
    <section id="location" className="py-16 md:py-24 bg-[#070B16]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <p className="text-indigo-400 text-[10px] font-bold tracking-[0.22em] uppercase mb-3">
              Location &amp; Transport
            </p>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mb-1">
              Getting here
            </h2>
            <p className="text-slate-500 text-sm mb-8">5860 Arbor Vitae St, Los Angeles, CA 90045</p>

            <div className="space-y-5">
              {TRANSPORT.map(({ Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-9 h-9 bg-indigo-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={17} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-0.5">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-4">
              <AlertCircle size={16} className="text-yellow-400 shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-300">
                <strong>Please note:</strong> Skyways Hotel does not operate an airport shuttle.
                No on-site parking is available.
              </p>
            </div>
          </motion.div>

          {/* Right — address card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="rounded-2xl border border-white/[0.08] bg-[#111827] flex items-center justify-center min-h-[300px] relative overflow-hidden"
          >
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

            <div className="text-center p-10">
              <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin size={24} className="text-indigo-400" />
              </div>

              <p className="font-bold text-white text-lg mb-1">Skyways Hotel</p>
              <p className="text-slate-400 text-sm">5860 Arbor Vitae St</p>
              <p className="text-slate-400 text-sm">Los Angeles, CA 90045</p>
              <p className="text-slate-500 text-xs mt-1 mb-2">0.8 miles from LAX · ~4 min drive</p>

              <a
                href="tel:+14247509970"
                className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200 mb-6"
              >
                <Phone size={12} />
                +1 424 750 9970
              </a>

              <div>
                <a
                  href="https://maps.google.com/?q=5860+Arbor+Vitae+St,+Los+Angeles,+CA+90045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-indigo-500 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 shadow-lg shadow-indigo-900/30"
                >
                  <MapPin size={13} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
