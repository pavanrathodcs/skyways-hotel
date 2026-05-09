import Link from "next/link";

const FOOTER_LINKS = {
  Hotel: [
    { label: "Rooms",      href: "/rooms"      },
    { label: "Amenities",  href: "/#amenities" },
    { label: "Dining",     href: "/#dining"    },
    { label: "Location",   href: "/#location"  },
  ],
  Info: [
    { label: "Reviews",    href: "/#reviews"   },
    { label: "FAQ",        href: "/#faq"       },
    { label: "Contact",    href: "/#contact"   },
    { label: "Book Now",   href: "/booking"    },
  ],
} as const;

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Main grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-white text-xl tracking-[0.15em] block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              SKYWAYS
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-[200px]">
              Affordable 2-star airport hotel, 0.8 miles from LAX.
            </p>
            <address className="not-italic">
              <p className="text-slate-500 text-xs leading-loose">
                5860 Arbor Vitae St<br />
                Los Angeles, CA 90045
              </p>
              <a
                href="tel:+14247509970"
                className="text-slate-400 text-xs mt-3 block hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-white"
              >
                +1 424 750 9970
              </a>
            </address>
          </div>

          {/* Hotel links */}
          <div>
            <h3 className="text-white text-[10px] tracking-widest uppercase mb-5 opacity-40">
              Hotel
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.Hotel.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div>
            <h3 className="text-white text-[10px] tracking-widest uppercase mb-5 opacity-40">
              Info
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.Info.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-[11px]">
            &copy; 2026 Skyways Hotel, Los Angeles.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-slate-600 text-[11px] hover:text-slate-400 transition-colors duration-200 focus-visible:outline-none"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
