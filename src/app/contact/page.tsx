import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Plane, Car, Bus, type LucideIcon } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Skyways Hotel",
  description:
    "Get in touch with Skyways Hotel. Call, email, or visit us at 5860 Arbor Vitae St, Los Angeles, CA 90045.",
};

type ContactRow = { Icon: LucideIcon; label: string; value: string; href?: string };

const CONTACT_ROWS: ContactRow[] = [
  {
    Icon: Phone,
    label: "Phone",
    value: "+1 424 750 9970",
    href: "tel:+14247509970",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "skywayshotels@gmail.com",
    href: "mailto:skywayshotels@gmail.com",
  },
  {
    Icon: MapPin,
    label: "Address",
    value: "5860 Arbor Vitae St, Los Angeles, CA 90045",
  },
  {
    Icon: Clock,
    label: "Front Desk",
    value: "Open 24 hours, 7 days a week",
  },
];

const FIND_US = [
  {
    Icon: Plane,
    title: "0.8 miles from LAX",
    desc: "~4 minute drive by taxi or rideshare.",
  },
  {
    Icon: Car,
    title: "No On-Site Parking",
    desc: "Street parking available nearby.",
  },
  {
    Icon: Bus,
    title: "LAX Transit Nearby",
    desc: "New LAX interchange station within walking distance.",
  },
] as const;

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#070B16]">

      {/* ── Top section: 60/40 ── */}
      <section className="pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">

          {/* Left — contact info */}
          <div>
            <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="font-display text-5xl md:text-6xl text-white leading-[1.05] mb-6">
              We&rsquo;re here{" "}
              <em className="italic text-amber-400">24/7</em>
            </h1>
            <p className="text-white/70 text-base leading-7 max-w-xl">
              Questions about your stay, room availability, or anything else — reach out and our team will help.
            </p>

            <div className="border-b border-white/10 my-8" />

            <ul className="divide-y divide-white/[0.08]">
              {CONTACT_ROWS.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-5 py-5 first:pt-0">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-teal-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.16em] mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-white text-base hover:text-amber-400 transition-colors duration-200 break-words"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-base break-words">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-slate-500 text-sm mt-8">
              Check-in: 3:00 PM &middot; Check-out: 11:30 AM
            </p>
          </div>

          {/* Right — message form */}
          <aside className="lg:sticky lg:top-32 self-start">
            <div className="bg-[#0D1221] border border-white/10 rounded-2xl p-8 shadow-xl shadow-black/50">
              <p className="text-teal-400 text-xs uppercase tracking-widest mb-5">Send a Message</p>
              <ContactForm />
            </div>
          </aside>

        </div>
      </section>

      {/* ── Find Us strip ── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="border-t border-white/[0.08] pt-12">
            <p className="text-teal-400 text-xs uppercase tracking-widest mb-8 text-center">Find Us</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {FIND_US.map(({ Icon, title, desc }) => (
                <div key={title} className="text-center md:text-left">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <Icon size={18} className="text-teal-400" />
                  </div>
                  <p className="font-display text-xl text-white leading-tight mb-2">{title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
