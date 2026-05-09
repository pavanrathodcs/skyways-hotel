import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility — Skyways Hotel",
  description:
    "Skyways Hotel's commitment to accessibility — ADA-compliant rooms, accessible facilities, and how to contact us with accessibility needs.",
};

const SECTIONS: LegalSection[] = [
  {
    title: "Our Commitment",
    body: (
      <p>
        Skyways Hotel is committed to making both our property and website accessible to all guests. We continuously work to identify and remove barriers that may prevent guests from enjoying their stay.
      </p>
    ),
  },
  {
    title: "Physical Accessibility",
    body: (
      <ul className="list-disc pl-5 space-y-2 marker:text-teal-400/60">
        <li>ADA-compliant accessible rooms with roll-in shower, grab bars, shower bench, and wide doorways.</li>
        <li>Wheelchair accessible property and common areas.</li>
        <li>Ground floor rooms available upon request.</li>
      </ul>
    ),
  },
  {
    title: "Website Accessibility",
    body: (
      <p>
        We strive to meet WCAG 2.1 AA standards across our website. If you experience any accessibility issues using this site, please contact us so we can address them.
      </p>
    ),
  },
  {
    title: "Contact for Accessibility Needs",
    body: (
      <ul className="list-disc pl-5 space-y-2 marker:text-teal-400/60">
        <li>
          Call{" "}
          <a href="tel:+14247509970" className="text-teal-400 hover:text-amber-400 transition-colors">
            +1 424 750 9970
          </a>{" "}
          (24/7 front desk).
        </li>
        <li>
          Email{" "}
          <a href="mailto:skywayshotels@gmail.com" className="text-teal-400 hover:text-amber-400 transition-colors">
            skywayshotels@gmail.com
          </a>
          .
        </li>
        <li>We are happy to accommodate special requests in advance of your stay.</li>
      </ul>
    ),
  },
];

export default function AccessibilityPage() {
  return <LegalPage title="Accessibility" lastUpdated="May 2026" sections={SECTIONS} />;
}
