import Link from "next/link";

type Variant = "primary" | "ghost";
type Size    = "sm" | "md" | "lg";

interface LuxuryButtonProps {
  children:    React.ReactNode;
  variant?:    Variant;
  size?:       Size;
  href?:       string;
  className?:  string;
  type?:       "button" | "submit";
  "aria-label"?: string;
}

const sizes: Record<Size, string> = {
  sm: "px-5  py-2",
  md: "px-8  py-3",
  lg: "px-10 py-3.5",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-[#0B0B0B] font-semibold hover:bg-white/90 focus-visible:ring-white/40",
  ghost:
    "border border-white/20 text-white/70 font-normal hover:border-white/50 hover:text-white focus-visible:ring-white/20",
};

export default function LuxuryButton({
  children,
  variant   = "primary",
  size      = "md",
  href,
  className = "",
  type      = "button",
  "aria-label": ariaLabel,
}: LuxuryButtonProps) {
  const base =
    "inline-flex items-center justify-center font-sans text-[11px] tracking-widest uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-onyx";
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
