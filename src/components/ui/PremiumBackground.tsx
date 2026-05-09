interface PremiumBackgroundProps {
  variant?: "hero" | "subtle";
}

export default function PremiumBackground({ variant = "hero" }: PremiumBackgroundProps) {
  const isHero = variant === "hero";

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Indigo glow — top-right (static, no animation for scroll perf) */}
      <div
        className={`absolute rounded-full blur-3xl ${
          isHero
            ? "bg-indigo-600/[0.10] w-[800px] h-[800px] -top-80 -right-80"
            : "bg-indigo-600/[0.06] w-[400px] h-[400px] -top-32 -right-32"
        }`}
      />

      {/* Teal glow — bottom-left (static) */}
      <div
        className={`absolute rounded-full blur-3xl ${
          isHero
            ? "bg-teal-600/[0.07] w-[600px] h-[600px] -bottom-48 -left-48"
            : "bg-teal-600/[0.04] w-[320px] h-[320px] -bottom-24 -left-24"
        }`}
      />
    </div>
  );
}
