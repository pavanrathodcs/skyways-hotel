"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Rooms",     href: "/#rooms"     },
  { label: "Amenities", href: "/#amenities" },
  { label: "Dining",    href: "/#dining"    },
  { label: "Location",  href: "/#location"  },
  { label: "Reviews",   href: "/#reviews"   },
  { label: "FAQ",       href: "/#faq"       },
  { label: "Contact",   href: "/#contact"   },
] as const;

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#070B16] border-b border-white/[0.08]"
            : "bg-[#070B16]/80 backdrop-blur-md"
        }`}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl tracking-[0.15em] text-white select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
          >
            SKYWAYS
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Primary navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-slate-400 text-[13px] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/booking"
              className="hidden lg:inline-flex items-center bg-indigo-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-md shadow-indigo-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Book Now
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-slate-400 hover:text-white transition-colors duration-200 focus-visible:outline-none p-1"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen
                ? <X size={22} strokeWidth={1.5} />
                : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#070B16] flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
              <Link
                href="/"
                className="font-display text-xl tracking-[0.15em] text-white"
                onClick={() => setMenuOpen(false)}
              >
                SKYWAYS
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-slate-400 hover:text-white p-1 transition-colors focus-visible:outline-none"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col px-6 pt-6 gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 text-xl font-medium py-3.5 border-b border-white/[0.06] hover:text-indigo-400 transition-colors duration-200 focus-visible:outline-none"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="px-6 mt-8">
              <Link
                href="/booking"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-indigo-600 text-white text-sm font-bold px-6 py-3.5 rounded-xl hover:bg-indigo-500 transition-colors duration-200 focus-visible:outline-none"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
