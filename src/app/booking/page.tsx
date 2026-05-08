import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reserve Your Stay — Skyways Hotel",
  description:
    "Book your room at Skyways Hotel, located 0.8 miles from LAX Airport in Los Angeles.",
};

const inputCls =
  "w-full bg-transparent border border-white/10 text-cream text-sm font-sans px-4 py-3.5 focus:outline-none focus:border-[#6C63FF]/50 placeholder:text-ash-dark transition-colors duration-200 [color-scheme:dark]";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-onyx">
      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-36 pb-24">
        {/* Header */}
        <p className="text-ash text-[10px] tracking-widest uppercase mb-5 font-sans">
          Reservations
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-5">
          Reserve Your Stay
        </h1>
        <div className="w-full h-px bg-white/[0.06] mb-8" />
        <p className="text-ash-light text-lg font-sans leading-relaxed mb-14">
          Complete the form below and our reservations team will confirm your
          booking within two hours. For immediate assistance, call{" "}
          <a
            href="tel:+13105551000"
            className="text-accent hover:text-accent/80 transition-colors duration-200"
          >
            +1 (310) 555-1000
          </a>
          .
        </p>

        {/* Form */}
        <div className="border border-white/[0.07] bg-onyx-50 p-8 md:p-12 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="first-name" className="block text-[10px] tracking-widest uppercase font-sans text-ash mb-3">
                First Name
              </label>
              <input id="first-name" type="text" placeholder="Pavan" className={inputCls} />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-[10px] tracking-widest uppercase font-sans text-ash mb-3">
                Last Name
              </label>
              <input id="last-name" type="text" placeholder="Rathod" className={inputCls} />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-[10px] tracking-widest uppercase font-sans text-ash mb-3">
              Email Address
            </label>
            <input id="email" type="email" placeholder="your@email.com" className={inputCls} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="check-in" className="block text-[10px] tracking-widest uppercase font-sans text-ash mb-3">
                Check-in
              </label>
              <input id="check-in" type="date" className={inputCls} />
            </div>
            <div>
              <label htmlFor="check-out" className="block text-[10px] tracking-widest uppercase font-sans text-ash mb-3">
                Check-out
              </label>
              <input id="check-out" type="date" className={inputCls} />
            </div>
          </div>

          <div>
            <label htmlFor="room-type" className="block text-[10px] tracking-widest uppercase font-sans text-ash mb-3">
              Room Type
            </label>
            <select id="room-type" className={`${inputCls} appearance-none cursor-pointer bg-onyx-50`}>
              <option value="">Select a room type</option>
              <option value="queen-room">Queen Room — $89 / night</option>
              <option value="queen-double">Queen Double — $100 / night</option>
              <option value="accessible-room">Accessible Room — $89 / night</option>
            </select>
          </div>

          <div>
            <label htmlFor="requests" className="block text-[10px] tracking-widest uppercase font-sans text-ash mb-3">
              Special Requests
            </label>
            <textarea
              id="requests"
              rows={4}
              placeholder="Airport transfer, dietary requirements, anniversary setup…"
              className={`${inputCls} resize-none`}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-white text-[#080808] text-sm font-medium py-4 hover:bg-white/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Submit reservation request
            </button>
          </div>

          <p className="text-ash-dark text-xs font-sans text-center leading-relaxed opacity-50">
            This form is a UI prototype. No data is submitted or stored.
          </p>
        </div>
      </div>
    </main>
  );
}
