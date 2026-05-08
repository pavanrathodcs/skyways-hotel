"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  kicker:     string;
  title:      React.ReactNode;
  align?:     "left" | "center";
  className?: string;
}

export default function SectionHeader({
  kicker,
  title,
  align     = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      className={`flex flex-col ${isCenter ? "items-center text-center" : ""} ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <p className="text-white/40 text-[10px] tracking-widest uppercase mb-4 font-sans">
        {kicker}
      </p>
      <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
        {title}
      </h2>
    </motion.div>
  );
}
