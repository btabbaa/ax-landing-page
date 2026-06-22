import Reveal from "@/components/ui/Reveal";

const benefits = [
  "Competitive commissions on every transaction",
  "Full training and onboarding support",
  "Dedicated account manager",
  "Real-time reporting dashboard",
  "Co-branded marketing materials",
  "Priority technical support",
];

const stats = [
  { value: "500+",  label: "Active Agents",      color: "bg-teal-600" },
  { value: "150+",  label: "Countries Covered",  color: "bg-ax-green-500" },
  { value: "$2M+",  label: "Monthly Volume",     color: "bg-navy-700" },
  { value: "99.9%", label: "Uptime Reliability", color: "bg-teal-800" },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 sm:py-24 bg-navy-800 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #62ba46 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          {/* Left */}
          <div>
            <Reveal variant="fade-right" duration={700}>
              <p className="text-teal-400 text-xs font-bold uppercase tracking-[0.15em] mb-4">
                Partner Program
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 sm:mb-6">
                Grow Your Business as an{" "}
                <span className="text-ax-green-400">Atlantic Xchange</span>{" "}
                Agent
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                Join our growing network of agents and partners. Earn competitive
                commissions on every transaction you process.
              </p>
            </Reveal>

            {/* Benefits — 2-col grid on mobile */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-3.5 mb-8 sm:mb-10">
              {benefits.map((b, i) => (
                <Reveal key={b} variant="fade-right" delay={i * 80} duration={600}>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-ax-green-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-white/75 text-sm">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal variant="fade-up" delay={200} duration={600}>
              <a
                href="mailto:partners@atlanticxchange.com"
                className="inline-flex items-center gap-2 bg-ax-green-500 hover:bg-ax-green-600 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors duration-150 touch-manipulation"
              >
                Apply to Be a Partner
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Reveal>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} variant="zoom-in" delay={i * 100} duration={700}>
                <div className={`${s.color} rounded-2xl p-5 sm:p-7`}>
                  <p className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-none mb-2">
                    {s.value}
                  </p>
                  <p className="text-white/65 text-xs sm:text-sm">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
