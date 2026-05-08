import Link from "next/link";
import Container from "@/components/ui/Container";

const FOOTER_LINKS = {
  Hotel: [
    { label: "Overview",       href: "/"          },
    { label: "Rooms & Suites", href: "/rooms"      },
    { label: "Dining",         href: "/#amenities" },
    { label: "Amenities",      href: "/#amenities" },
  ],
  Contact: [
    { label: "Reservations",   href: "/booking"   },
    { label: "Concierge",      href: "/#contact"  },
    { label: "Events",         href: "/#contact"  },
    { label: "Press",          href: "/#contact"  },
  ],
} as const;

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#080808] border-t border-white/[0.06]">
      <Container>
        {/* Main grid — 3 col desktop, 1 col mobile */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-white text-xl tracking-[0.15em] block mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              SKYWAYS
            </Link>
            <p className="text-ash text-sm font-sans leading-relaxed mb-6 max-w-[200px]">
              A Forbes Five-Star hotel at Los Angeles International Airport.
            </p>
            <address className="not-italic">
              <p className="text-ash-dark text-xs font-sans leading-loose">
                1 World Way<br />
                Los Angeles, CA 90045
              </p>
              <a
                href="tel:+13105551000"
                className="text-ash text-xs font-sans mt-3 block opacity-60 hover:opacity-100 transition-opacity duration-200 focus-visible:outline-none focus-visible:opacity-100"
              >
                +1 (310) 555-1000
              </a>
            </address>
          </div>

          {/* Hotel links */}
          <div>
            <h3 className="text-white text-[10px] tracking-widest uppercase font-sans mb-5 opacity-40">
              Hotel
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.Hotel.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-ash text-sm font-sans opacity-60 hover:opacity-100 transition-opacity duration-200 focus-visible:outline-none focus-visible:opacity-100"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-[10px] tracking-widest uppercase font-sans mb-5 opacity-40">
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.Contact.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-ash text-sm font-sans opacity-60 hover:opacity-100 transition-opacity duration-200 focus-visible:outline-none focus-visible:opacity-100"
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
          <p className="text-ash-dark text-[10px] font-sans opacity-40">
            &copy; 2026 Skyways Hotel, Los Angeles.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-ash-dark text-[10px] font-sans opacity-40 hover:opacity-80 transition-opacity duration-200 focus-visible:outline-none focus-visible:opacity-80"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
