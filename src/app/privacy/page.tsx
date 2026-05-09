import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Skyways Hotel",
  description:
    "How Skyways Hotel collects, uses, and protects your personal information.",
};

const SECTIONS: LegalSection[] = [
  {
    title: "Information We Collect",
    body: (
      <ul className="list-disc pl-5 space-y-2 marker:text-teal-400/60">
        <li>Name, email, and phone number when you make a reservation.</li>
        <li>Payment information processed securely through our payment provider — we do not store card details.</li>
        <li>Basic usage data (pages visited, device type) when you visit our website.</li>
      </ul>
    ),
  },
  {
    title: "How We Use Your Information",
    body: (
      <ul className="list-disc pl-5 space-y-2 marker:text-teal-400/60">
        <li>To confirm and manage your reservation.</li>
        <li>To contact you about your stay before, during, and after your visit.</li>
        <li>To improve our services and your experience on our website.</li>
      </ul>
    ),
  },
  {
    title: "Information Sharing",
    body: (
      <ul className="list-disc pl-5 space-y-2 marker:text-teal-400/60">
        <li>We do not sell your personal information.</li>
        <li>We may share information with service providers necessary to operate the hotel (payment processors, reservation platforms).</li>
        <li>We may disclose information when required by law or legal process.</li>
      </ul>
    ),
  },
  {
    title: "Data Security",
    body: (
      <>
        <p>We use industry-standard security measures to protect your information. While we work hard to safeguard the data we hold, no method of transmission over the internet is 100% secure.</p>
      </>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        Questions about this policy?{" "}
        <a href="mailto:skywayshotels@gmail.com" className="text-teal-400 hover:text-amber-400 transition-colors">
          skywayshotels@gmail.com
        </a>{" "}
        or call{" "}
        <a href="tel:+14247509970" className="text-teal-400 hover:text-amber-400 transition-colors">
          +1 424 750 9970
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" lastUpdated="May 2026" sections={SECTIONS} />;
}
