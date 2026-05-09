"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const INPUT =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-teal-400/50 focus:outline-none focus:ring-2 focus:ring-teal-400/20 transition-all duration-200";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-teal-500/10 border border-teal-500/30 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={26} className="text-teal-400" />
        </div>
        <h3 className="font-display text-2xl text-white mb-2">Message sent</h3>
        <p className="text-white/60 text-sm leading-relaxed max-w-sm mx-auto mb-6">
          Thanks — our team will get back to you within a few hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="cf-name" className="block text-[10px] font-bold tracking-[0.14em] uppercase text-slate-500 mb-2">
          Full Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jane Doe"
          className={INPUT}
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-[10px] font-bold tracking-[0.14em] uppercase text-slate-500 mb-2">
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={INPUT}
        />
      </div>

      <div>
        <label htmlFor="cf-subject" className="block text-[10px] font-bold tracking-[0.14em] uppercase text-slate-500 mb-2">
          Subject
        </label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          required
          placeholder="Reservation question"
          className={INPUT}
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-[10px] font-bold tracking-[0.14em] uppercase text-slate-500 mb-2">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          required
          placeholder="How can we help?"
          className={`${INPUT} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white text-sm font-bold py-3.5 rounded-xl hover:bg-indigo-500 transition-colors duration-200 shadow-lg shadow-indigo-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
      >
        Send Message
      </button>

      <p className="text-xs text-slate-500 text-center pt-1">
        We typically respond within a few hours.
      </p>
    </form>
  );
}
