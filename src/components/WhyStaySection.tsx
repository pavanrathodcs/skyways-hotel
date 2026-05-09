"use client";

import { motion } from "framer-motion";
import { PlaneTakeoff, DollarSign, BedDouble, Users, UtensilsCrossed, Clock } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const REASONS = [
  {
    Icon: PlaneTakeoff,
    title: "Less than 1 mile from LAX",
    desc: "Just 0.8 miles from LAX — approximately a 4-minute drive. Easy access via taxi or rideshare.",
  },
  {
    Icon: DollarSign,
    title: "Affordable rates",
    desc: "Rooms from $89/night — well below the LAX-area average of $151/night for comparable hotels.",
  },
  {
    Icon: BedDouble,
    title: "Clean, comfortable rooms",
    desc: "Guests consistently praise the cleanliness and spacious rooms. Free Wi-Fi in every room.",
  },
  {
    Icon: Users,
    title: "Helpful multilingual staff",
    desc: "Our team speaks English, Spanish, and Hindi — available 24 hours a day.",
  },
  {
    Icon: UtensilsCrossed,
    title: "On-site Greek dining",
    desc: "Aliki's Authentic Greek Taverna on-site — no need to search for food after a long flight.",
  },
  {
    Icon: Clock,
    title: "24/7 front desk",
    desc: "Whether your flight lands at 2 AM or you need an early checkout, we're always here.",
  },
];

export default function WhyStaySection() {
  return (
    <section className="py-16 md:py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Why Stay</p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
            Why guests{" "}
            <em className="italic text-amber-400">choose us</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REASONS.map(({ Icon, title, desc }, i) => {
            const isTeal = i % 2 === 0;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                className="relative bg-[#141414] rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/[0.16] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 transition-all duration-300 p-6"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${isTeal ? "bg-teal-400" : "bg-amber-400"}`} />

                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${isTeal ? "bg-teal-500/10" : "bg-amber-500/10"}`}
                  style={{ boxShadow: isTeal ? "0 0 12px rgba(20,184,166,0.2)" : "0 0 12px rgba(245,158,11,0.2)" }}
                >
                  <Icon size={22} className={isTeal ? "text-teal-400" : "text-amber-400"} />
                </div>

                <h3 className="font-semibold text-white mb-2 text-[15px] leading-snug">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
