import type { ReactNode } from "react";

export type LegalSection = {
  title: string;
  body: ReactNode;
};

export default function LegalPage({
  title,
  lastUpdated,
  sections,
}: {
  title: string;
  lastUpdated?: string;
  sections: LegalSection[];
}) {
  return (
    <main className="min-h-screen bg-[#070B16]">
      <section className="pt-36 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">

          {/* Header */}
          <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-3">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-slate-500 text-sm">Last updated: {lastUpdated}</p>
          )}

          <div className="border-t border-white/[0.08] mt-10 pt-10 space-y-12">
            {sections.map((section, i) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl md:text-3xl text-white leading-tight mb-5">
                  <span className="text-amber-400/80 font-sans text-base font-bold tracking-widest mr-3 align-middle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>
                <div className="text-white/70 text-base leading-7 space-y-4">
                  {section.body}
                </div>
              </section>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
