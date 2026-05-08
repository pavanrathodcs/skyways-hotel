"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Rooms",      href: "/#rooms"      },
  { label: "Amenities",  href: "/#amenities"  },
  { label: "Experience", href: "/#experience" },
  { label: "Contact",    href: "/#contact"    },
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
          scrolled ? "bg-[#0B0B0B]/85 backdrop-blur-xl" : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl tracking-[0.15em] select-none bg-gradient-to-r from-[#C9A84C] via-[#e8d095] to-[#C9A84C] bg-clip-text text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            SKYWAYS
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-white/50 text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Book now — desktop */}
            <Link
              href="/booking"
              className="hidden md:inline-flex items-center bg-[#6C63FF] text-white text-sm font-medium px-5 py-2 hover:bg-[#5a52e0] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF]/50"
            >
              Book now
            </Link>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-ash hover:text-white transition-colors duration-200 focus-visible:outline-none p-1"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen
                ? <X size={20} strokeWidth={1.5} />
                : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl text-white hover:text-ash-light transition-colors duration-200 focus-visible:outline-none"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="mt-12">
              <Link
                href="/booking"
                onClick={() => setMenuOpen(false)}
                className="bg-[#6C63FF] text-white text-sm font-medium px-10 py-3 hover:bg-[#5a52e0] transition-colors duration-200 focus-visible:outline-none"
              >
                Book now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
