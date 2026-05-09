"use client";

import { motion } from "framer-motion";
import { MapPin, Car, Bus, Train, AlertCircle, Phone } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const TRANSPORT = [
  {
    Icon: MapPin,
    highlight: "0.8 miles",
    sublabel: "from LAX",
    desc: "Approximately a 4-minute drive from Los Angeles International Airport.",
  },
  {
    Icon: Car,
    highlight: "Free shuttle",
    sublabel: "Hertz / Thrifty across the street",
    desc: "24/7 shuttle service to and from LAX — operated by the rental car offices.",
  },
  {
    Icon: Bus,
    highlight: "~4 minutes",
    sublabel: "by taxi or rideshare",
    desc: "Uber and Lyft are readily available from LAX arrivals.",
  },
  {
    Icon: Train,
    highlight: "1 block",
    sublabel: "from the transit interchange",
    desc: "New LAX public transit interchange station is nearby.",
  },
];

export default function LocationSection() {
  return (
    <section id="location" className="py-16 md:py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Find Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-2">
              Getting <em className="italic text-rose-400">here</em>
            </h2>
            <p className="text-slate-500 text-sm mb-8">5860 Arbor Vitae St, Los Angeles, CA 90045</p>

            <div className="divide-y divide-white/[0.07]">
              {TRANSPORT.map(({ Icon, highlight, sublabel, desc }) => (
                <div key={highlight} className="flex gap-4 py-5 first:pt-0">
                  <div className="w-9 h-9 bg-teal-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={17} className="text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {highlight}{" "}
                      <span className="text-slate-500 font-normal">{sublabel}</span>
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-4">
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
            className="rounded-2xl border border-white/[0.08] bg-[#141414] flex items-center justify-center min-h-[320px] relative overflow-hidden"
          >
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />

            <div className="text-center p-10">
              <div className="w-16 h-16 bg-teal-500/10 border border-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin size={28} className="text-teal-400" />
              </div>

              <p className="font-display text-2xl text-white mb-1">Skyways Hotel</p>
              <p className="text-slate-400 text-sm">5860 Arbor Vitae St</p>
              <p className="text-slate-400 text-sm">Los Angeles, CA 90045</p>
              <p className="text-slate-500 text-xs mt-1.5 mb-2">0.8 miles from LAX · ~4 min drive</p>

              <a
                href="tel:+14247509970"
                className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200 mb-7"
              >
                <Phone size={12} />
                +1 424 750 9970
              </a>

              <div>
                <a
                  href="https://maps.google.com/?q=5860+Arbor+Vitae+St,+Los+Angeles,+CA+90045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-teal-400/50 text-teal-400 text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-teal-500/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
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
