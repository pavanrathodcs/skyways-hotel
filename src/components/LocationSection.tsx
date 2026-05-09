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
    highlight: "No hotel shuttle",
    sublabel: "Hertz / Thrifty across the street",
    desc: "Free rental car shuttles operate 24/7 to and from LAX — directly across the street.",
  },
  {
    Icon: Bus,
    highlight: "~4 minutes",
    sublabel: "by taxi or rideshare",
    desc: "Uber and Lyft are readily available from LAX arrivals.",
  },
  {
    Icon: Train,
    highlight: "Nearby transit",
    sublabel: "LAX interchange station",
    desc: "New LAX public transit interchange station is within walking distance.",
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
            <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Find Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-2">
              Getting <em className="italic text-amber-400">here</em>
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

          {/* Right — iframe map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="flex flex-col gap-5"
          >
            {/* Map iframe */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-xl shadow-black/40 aspect-[4/3]">
              <iframe
                title="Skyways Hotel map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3!2d-118.3827!3d33.9522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b4b0c2c5e5a5%3A0x0!2s5860+Arbor+Vitae+St%2C+Los+Angeles%2C+CA+90045!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.8)",
                  position: "absolute",
                  inset: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Pulsing location dot overlay */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="relative">
                  <div className="w-4 h-4 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50" />
                  <div className="absolute inset-0 w-4 h-4 bg-teal-400 rounded-full animate-ping opacity-60" />
                </div>
              </div>
              {/* Bottom gradient with hotel name */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#070B16]/90 to-transparent pointer-events-none flex items-end pb-3 px-4">
                <p className="text-white font-semibold text-sm">Skyways Hotel · 5860 Arbor Vitae St</p>
              </div>
            </div>

            {/* Address + actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-1">
              <div>
                <p className="text-slate-300 text-sm font-medium">5860 Arbor Vitae St, Los Angeles, CA 90045</p>
                <a
                  href="tel:+14247509970"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-teal-400 transition-colors duration-200 mt-1"
                >
                  <Phone size={12} />
                  +1 424 750 9970
                </a>
              </div>
              <a
                href="https://maps.google.com/?q=5860+Arbor+Vitae+St,+Los+Angeles,+CA+90045"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-teal-400/50 text-teal-400 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-teal-500/10 transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <MapPin size={13} />
                Open in Google Maps
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
