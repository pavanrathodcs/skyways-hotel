import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use — Skyways Hotel",
  description:
    "Terms governing use of the Skyways Hotel website and stays at our property.",
};

const SECTIONS: LegalSection[] = [
  {
    title: "Acceptance of Terms",
    body: (
      <p>
        By using this website you agree to these terms. If you do not agree, please do not use the site.
      </p>
    ),
  },
  {
    title: "Reservations & Cancellations",
    body: (
      <ul className="list-disc pl-5 space-y-2 marker:text-teal-400/60">
        <li>All reservations are subject to availability.</li>
        <li>Check-in: 3:00 PM &middot; Check-out: 11:30 AM.</li>
        <li>Cancellation policies vary by rate — contact us for details specific to your booking.</li>
      </ul>
    ),
  },
  {
    title: "Hotel Policies",
    body: (
      <ul className="list-disc pl-5 space-y-2 marker:text-teal-400/60">
        <li>No pets allowed.</li>
        <li>No smoking on property.</li>
        <li>No on-site parking available.</li>
        <li>Guests are responsible for any damages to the room or property during their stay.</li>
      </ul>
    ),
  },
  {
    title: "Limitation of Liability",
    body: (
      <p>
        Skyways Hotel is not liable for indirect, incidental, or consequential damages arising from use of this website or your stay, except where such limitation is prohibited by law.
      </p>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        Questions about these terms?{" "}
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

export default function TermsOfUsePage() {
  return <LegalPage title="Terms of Use" lastUpdated="May 2026" sections={SECTIONS} />;
}
