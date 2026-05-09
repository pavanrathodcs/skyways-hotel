"use client";

import { motion } from "framer-motion";
import {
  Wifi, Bell, Home, Users, Accessibility, UtensilsCrossed,
  ShoppingCart, Shield, KeyRound, Languages,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const AMENITIES = [
  { Icon: Wifi,            name: "Free Wi-Fi",              desc: "High-speed wireless internet included with every stay, throughout the property." },
  { Icon: Bell,            name: "24-Hour Front Desk",       desc: "Our team is available around the clock for check-in, check-out, and assistance." },
  { Icon: Home,            name: "Daily Housekeeping",       desc: "Rooms cleaned daily. Fresh linens and a tidy space every morning." },
  { Icon: Users,           name: "Family Rooms",             desc: "Spacious rooms with multiple beds — comfortably configured for families." },
  { Icon: Accessibility,   name: "Wheelchair Accessible",    desc: "Roll-in shower, grab bars, lower sinks, shower bench, and wide doorways." },
  { Icon: UtensilsCrossed, name: "On-Site Greek Restaurant", desc: "Aliki's Authentic Greek Taverna serves lunch and dinner with vegan and gluten-free options." },
  { Icon: ShoppingCart,    name: "Vending Machine",          desc: "Cold drinks available on-site 24/7." },
  { Icon: Shield,          name: "CCTV Security",            desc: "Security cameras throughout and key card entry to all rooms." },
  { Icon: KeyRound,        name: "Private Check-In",         desc: "Quick, private check-in and check-out for all guests." },
  { Icon: Languages,       name: "Multilingual Staff",       desc: "Staff fluent in English, Spanish, and Hindi." },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Amenities
          </p>
          <h2 className="font-bold text-3xl md:text-4xl text-white">
            What&apos;s included
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AMENITIES.map(({ Icon, name, desc }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
              className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.08] bg-[#111827]"
            >
              <div className="w-9 h-9 bg-teal-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={17} className="text-teal-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-0.5">{name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
