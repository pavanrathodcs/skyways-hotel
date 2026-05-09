"use client";

import { PlaneTakeoff, DollarSign, BedDouble, Users, UtensilsCrossed, Clock } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

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
    <section className="py-16 md:py-24 bg-[#070B16]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeUp className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Why Stay</p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
            Why guests{" "}
            <em className="italic text-amber-400">choose us</em>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-white/[0.08] md:divide-y-0">
          {REASONS.map(({ Icon, title, desc }, i) => {
            const isTeal = i % 2 === 0;
            return (
              <FadeUp key={title} delay={i * 0.06}>
                <div className={`flex gap-5 py-8 px-4 ${i < REASONS.length - 2 ? "md:border-b md:border-white/[0.08]" : ""}`}>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${isTeal ? "bg-teal-500/10" : "bg-amber-500/10"}`}
                    style={{ boxShadow: isTeal ? "0 0 14px rgba(20,184,166,0.18)" : "0 0 14px rgba(245,158,11,0.18)" }}
                  >
                    <Icon size={20} className={isTeal ? "text-teal-400" : "text-amber-400"} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-[15px] leading-snug mb-1.5">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
