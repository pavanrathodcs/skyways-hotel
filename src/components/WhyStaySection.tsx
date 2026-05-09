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
    <section className="py-16 md:py-24 bg-[#0D1627]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-2">
            Why Skyways
          </p>
          <h2 className="font-bold text-3xl md:text-4xl text-white">
            Why guests choose us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REASONS.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
              className="bg-[#111827] rounded-xl p-6 border border-white/[0.08] hover:border-white/[0.14] transition-colors duration-200"
            >
              <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                <Icon size={20} className="text-indigo-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
