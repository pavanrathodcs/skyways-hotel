"use client";

import { motion } from "framer-motion";

export default function BookingBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-[#070B16]"
    >
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top-right indigo blob */}
      <motion.div
        className="absolute -top-96 -right-96 w-[1000px] h-[1000px] rounded-full bg-indigo-600/[0.07] blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -35, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom-left teal blob */}
      <motion.div
        className="absolute -bottom-72 -left-72 w-[900px] h-[900px] rounded-full bg-teal-600/[0.05] blur-3xl"
        animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut", delay: 10 }}
      />

      {/* Mid-left faint accent */}
      <motion.div
        className="absolute top-[45%] -left-40 w-[500px] h-[500px] rounded-full bg-indigo-900/[0.10] blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 18 }}
      />
    </div>
  );
}
