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
    <section id="amenities" className="relative py-20 md:py-32 bg-[#070B16] overflow-hidden">
      {/* Centered ambient teal glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(20,184,166,0.05), transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">What&apos;s Included</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
            Included with{" "}
            <em className="italic text-amber-400">every stay</em>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3.5 md:gap-4">
          {AMENITIES.map(({ Icon, name }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04, ease: EASE }}
              className="group relative flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.05] hover:border-teal-400/50 hover:scale-105 transition-all duration-300 cursor-default"
              style={{ willChange: "transform" }}
            >
              {/* Hover teal glow */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(45,212,191,0.25), 0 0 22px rgba(45,212,191,0.18)",
                }}
              />
              <Icon size={14} className="text-teal-400 shrink-0 relative" />
              <span className="text-sm text-white/85 group-hover:text-white font-medium whitespace-nowrap relative">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
