import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "500+",  label: "Active Agents",      color: "bg-teal-600" },
  { value: "150+",  label: "Countries Covered",  color: "bg-ax-green-500" },
  { value: "$2M+",  label: "Monthly Volume",     color: "bg-navy-700" },
  { value: "99.9%", label: "Uptime Reliability", color: "bg-teal-800" },
];

const partnerTypes = [
  {
    key:   "agent",
    title: "Become an Agent",
    tag:   "For Retail Locations",
    desc:  "Run a storefront, kiosk, or retail business? Become a cash pickup and drop-off point for Atlantic Xchange customers and earn commissions on every transaction you process.",
    benefits: [
      "Competitive commissions per transaction",
      "Full training & onboarding support",
      "Co-branded marketing materials",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
    color:  "bg-teal-600",
    cta:    "Apply as an Agent",
    subject: "Agent Partnership Inquiry",
  },
  {
    key:   "provider",
    title: "Become a Provider",
    tag:   "For Banks & Payout Networks",
    desc:  "Banks, payout networks, and liquidity partners that help us deliver funds to more countries and corridors — fast, compliant, and reliable, at scale.",
    benefits: [
      "Access to our growing transaction volume",
      "Long-term settlement agreements",
      "Dedicated integration & compliance support",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
      </svg>
    ),
    color:  "bg-ax-green-500",
    cta:    "Apply as a Provider",
    subject: "Provider Partnership Inquiry",
  },
  {
    key:   "white-label",
    title: "Power Your Business With Us",
    tag:   "For Fintechs & Brands",
    desc:  "Already have your own brand or app? Use Atlantic Xchange as your licensed money transfer engine behind the scenes — we handle compliance and settlement, you own the customer experience.",
    benefits: [
      "Licensed infrastructure (FinCEN, NMLS, multi-state)",
      "White-label API & partner dashboard",
      "You keep your brand, we power the transfers",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color:  "bg-navy-600",
    cta:    "Talk to Us About White-Label",
    subject: "White-Label Partnership Inquiry",
  },
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

        {/* Header */}
        <Reveal variant="fade-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-teal-400 text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Partner Program
            </p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
              Three Ways to Partner With{" "}
              <span className="text-ax-green-400">Atlantic Xchange</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              Whether you run a storefront, operate a payout network, or want to power your own
              product with our infrastructure — there&apos;s a partnership built for you.
            </p>
          </div>
        </Reveal>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="zoom-in" delay={i * 80} duration={600}>
              <div className={`${s.color} rounded-2xl p-4 sm:p-6`}>
                <p className="font-heading font-extrabold text-2xl sm:text-4xl text-white leading-none mb-1.5">
                  {s.value}
                </p>
                <p className="text-white/65 text-[11px] sm:text-sm">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Partner type cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {partnerTypes.map((p, i) => (
            <Reveal key={p.key} variant="fade-up" delay={i * 100} duration={650}>
              <div className="h-full flex flex-col bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-white/20 transition-colors">
                <div className={`${p.color} text-white w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0`}>
                  {p.icon}
                </div>

                <p className="text-teal-400 text-[11px] font-bold uppercase tracking-widest mb-2">
                  {p.tag}
                </p>
                <h3 className="font-heading font-bold text-white text-xl mb-3">
                  {p.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  {p.desc}
                </p>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-ax-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-white/70 text-sm leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:partners@atlanticxchange.com?subject=${encodeURIComponent(p.subject)}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors duration-150 touch-manipulation"
                >
                  {p.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
