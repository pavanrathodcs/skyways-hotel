const LINKS = {
  Hotel: ['Overview', 'Rooms & Suites', 'Dining', 'Spa & Wellness', 'Events'],
  Experiences: ['Airport Transfers', 'City Excursions', 'Private Dining', 'Rooftop Access'],
  Contact: ['Reservations', 'Concierge', 'Weddings & Events', 'Press Inquiries'],
} as const;

export default function Footer() {
  return (
    <footer id="contact" className="bg-onyx-50 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-4 gap-14">
          {/* Brand column */}
          <div className="md:col-span-1">
            <span className="font-display text-2xl gold-gradient tracking-ultra block mb-5">
              SKYWAYS
            </span>
            <p className="text-ash text-sm font-sans leading-relaxed mb-8 max-w-56">
              A Forbes Five-Star hotel at Los Angeles International Airport.
              Elevated living above the city of angels.
            </p>
            <address className="not-italic">
              <p className="text-ash-dark text-[11px] font-sans tracking-wide leading-relaxed">
                1 World Way<br />
                Los Angeles, CA 90045<br />
                United States
              </p>
              <a
                href="tel:+13105551000"
                className="text-gold text-[11px] font-sans tracking-wide mt-4 block hover:text-gold-light transition-colors duration-300"
              >
                +1 (310) 555-1000
              </a>
            </address>
          </div>

          {/* Link columns */}
          {(Object.entries(LINKS) as [keyof typeof LINKS, readonly string[]][]).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-cream text-[11px] tracking-widest uppercase font-sans mb-6">
                {section}
              </h3>
              <ul className="space-y-3.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-ash text-sm font-sans hover:text-cream transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ash-dark text-[11px] font-sans tracking-wide">
            © {new Date().getFullYear()} Skyways Hotel. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-ash-dark text-[11px] font-sans tracking-wide hover:text-ash transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
