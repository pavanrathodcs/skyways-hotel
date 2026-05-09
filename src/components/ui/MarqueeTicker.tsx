'use client';

import {
  Plane, BedDouble, Wifi, Clock,
  UtensilsCrossed, Accessibility, Globe,
} from 'lucide-react';

const ITEMS = [
  { Icon: Plane,           text: '0.8 miles from LAX'     },
  { Icon: BedDouble,       text: 'Rooms from $89/night'   },
  { Icon: Wifi,            text: 'Free Wi-Fi in every room' },
  { Icon: Clock,           text: '24/7 Front Desk'        },
  { Icon: UtensilsCrossed, text: 'On-site Greek Restaurant' },
  { Icon: Accessibility,   text: 'Wheelchair Accessible'  },
  { Icon: Globe,           text: 'Multilingual Staff'     },
  { Icon: Plane,           text: '~4 min drive to LAX'   },
];

const TRIPLED = [...ITEMS, ...ITEMS, ...ITEMS];

export default function MarqueeTicker() {
  return (
    <div className="relative border-y border-white/[0.08] py-3 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#070B16] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#070B16] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {TRIPLED.map(({ Icon, text }, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className="inline-flex items-center gap-2 mx-10 text-xs text-white/50 font-sans uppercase tracking-widest">
              <Icon size={13} className="text-teal-400 flex-shrink-0" />
              {text}
            </span>
            <span className="text-white/15 mx-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
