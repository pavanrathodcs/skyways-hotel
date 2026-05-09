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
    <section className="relative py-20 md:py-28 bg-[#070B16] overflow-hidden">
      {/* Top scan line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Why Stay</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
            Why guests{" "}
            <em className="italic text-amber-400">choose us</em>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {REASONS.map(({ Icon, title, desc }, i) => {
            const isTeal = i % 2 === 0;
            const isLastRowDesktop = i >= REASONS.length - 2;
            const isLastMobile = i === REASONS.length - 1;
            return (
              <FadeUp key={title} delay={i * 0.06}>
                <div
                  className={`group relative flex gap-5 py-9 px-5 transition-all duration-300
                    ${!isLastRowDesktop ? "md:[--row-divider:1]" : ""}
                    ${!isLastMobile ? "[--row-divider-mobile:1]" : ""}
                  `}
                >
                  {/* Hover left teal ambient glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-12"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(45,212,191,0.18), transparent 70%)",
                      filter: "blur(20px)",
                    }}
                  />

                  {/* Bottom horizontal scan line — desktop except last row */}
                  {!isLastRowDesktop && (
                    <span
                      aria-hidden="true"
                      className="hidden md:block absolute inset-x-2 bottom-0 h-px"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 35%, rgba(255,255,255,0.07) 65%, transparent)",
                      }}
                    />
                  )}
                  {/* Mobile divider — except last */}
                  {!isLastMobile && (
                    <span
                      aria-hidden="true"
                      className="md:hidden absolute inset-x-0 bottom-0 h-px"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                      }}
                    />
                  )}

                  {/* Icon — gradient-bordered circle */}
                  <div
                    className="relative w-12 h-12 shrink-0 mt-0.5 rounded-full p-px"
                    style={{
                      background: isTeal
                        ? "conic-gradient(from 140deg, rgba(20,184,166,0.55), rgba(20,184,166,0.05) 35%, rgba(20,184,166,0.4) 75%, rgba(20,184,166,0.05))"
                        : "conic-gradient(from 140deg, rgba(245,158,11,0.55), rgba(245,158,11,0.05) 35%, rgba(245,158,11,0.4) 75%, rgba(245,158,11,0.05))",
                    }}
                  >
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center bg-[#0A0F1C] backdrop-blur-md"
                      style={{
                        boxShadow: isTeal
                          ? "inset 0 0 12px rgba(20,184,166,0.10), 0 0 18px rgba(20,184,166,0.10)"
                          : "inset 0 0 12px rgba(245,158,11,0.10), 0 0 18px rgba(245,158,11,0.10)",
                      }}
                    >
                      <Icon size={18} className={isTeal ? "text-teal-400" : "text-amber-400"} />
                    </div>
                  </div>

                  <div className="relative">
                    <h3 className="font-semibold text-white text-[15px] leading-snug mb-1.5 transition-colors duration-300 group-hover:text-white">
                      {title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                      {desc}
                    </p>
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
