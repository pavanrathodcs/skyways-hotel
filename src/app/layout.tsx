import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skyways Hotel — Affordable LAX Airport Hotel from $89",
  description:
    "The most affordable hotel near LAX Airport. From $89/night. Free WiFi, on-site dining, 0.8 miles from all terminals.",
  keywords: "affordable LAX hotel, cheap hotel near LAX, airport hotel Los Angeles, hotel from $89",
  openGraph: {
    title: "Skyways Hotel — Affordable LAX Airport Hotel from $89",
    description:
      "The most affordable hotel near LAX Airport. From $89/night. Free WiFi, on-site dining, 0.8 miles from all terminals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-onyx text-cream">
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
