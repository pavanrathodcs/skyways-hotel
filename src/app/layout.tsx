import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skyways Hotel — Affordable LAX Airport Hotel from $89",
  description:
    "Affordable 2-star hotel 0.8 miles from LAX. From $89/night. Free Wi-Fi, 24/7 front desk, on-site Greek restaurant.",
  keywords: "affordable LAX hotel, cheap hotel near LAX, airport hotel Los Angeles, hotel from $89",
  openGraph: {
    title: "Skyways Hotel — Affordable LAX Airport Hotel from $89",
    description:
      "Affordable 2-star hotel 0.8 miles from LAX. From $89/night. Free Wi-Fi, 24/7 front desk, on-site Greek restaurant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-[#070B16] text-white antialiased">
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
