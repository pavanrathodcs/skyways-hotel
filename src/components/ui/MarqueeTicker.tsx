'use client';

const ITEMS = [
  { icon: '✈', text: '0.8 miles from LAX' },
  { icon: '🛏', text: 'Rooms from $89/night' },
  { icon: '📶', text: 'Free Wi-Fi in every room' },
  { icon: '🕐', text: '24/7 Front Desk' },
  { icon: '🍽', text: 'On-site Greek Restaurant' },
  { icon: '♿', text: 'Wheelchair Accessible' },
  { icon: '🌍', text: 'Multilingual Staff' },
  { icon: '✈', text: '~4 min drive to LAX' },
];

const TRIPLED = [...ITEMS, ...ITEMS, ...ITEMS];

export default function MarqueeTicker() {
  return (
    <div className="relative mt-12 border-y border-white/10 py-3 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#070B16] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#070B16] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {TRIPLED.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-8 text-slate-400 text-[13px] shrink-0"
          >
            <span className="text-base">{item.icon}</span>
            {item.text}
            <span className="ml-8 text-white/10">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
