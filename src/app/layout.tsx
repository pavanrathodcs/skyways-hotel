import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Skyways Hotel — LAX Airport, Los Angeles",
  description:
    "A world-class luxury hotel at Los Angeles International Airport. Experience unmatched elegance, impeccable service, and breathtaking views of the LA skyline.",
  keywords: "luxury hotel, LAX airport hotel, Los Angeles hotel, 5-star hotel",
  openGraph: {
    title: "Skyways Hotel — LAX Airport, Los Angeles",
    description:
      "A world-class luxury hotel at Los Angeles International Airport.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-onyx text-cream">
        {children}
      </body>
    </html>
  );
}
