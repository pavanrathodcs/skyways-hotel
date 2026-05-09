"use client";

import { motion } from "framer-motion";
import {
  Wifi, Bell, Home, Users, Accessibility, UtensilsCrossed,
  ShoppingCart, Shield, KeyRound, Languages,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const AMENITIES = [
  { Icon: Wifi,            name: "Free Wi-Fi"              },
  { Icon: Bell,            name: "24-Hour Front Desk"       },
  { Icon: Home,            name: "Daily Housekeeping"       },
  { Icon: Users,           name: "Family Rooms"             },
  { Icon: Accessibility,   name: "Wheelchair Accessible"    },
  { Icon: UtensilsCrossed, name: "On-Site Greek Restaurant" },
  { Icon: ShoppingCart,    name: "Vending Machine"          },
  { Icon: Shield,          name: "CCTV Security"            },
  { Icon: KeyRound,        name: "Private Check-In"         },
  { Icon: Languages,       name: "Multilingual Staff"       },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-[#080808]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">What&apos;s Included</p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
            Included with{" "}
            <em className="italic text-rose-400">every stay</em>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {AMENITIES.map(({ Icon, name }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04, ease: EASE }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/[0.10] bg-white/[0.04] hover:border-teal-400/50 hover:text-teal-300 hover:bg-teal-500/[0.06] transition-all duration-200 cursor-default"
            >
              <Icon size={14} className="text-teal-400 shrink-0" />
              <span className="text-sm text-slate-300 whitespace-nowrap">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
