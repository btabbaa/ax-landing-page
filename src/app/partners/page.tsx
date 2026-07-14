import type { Metadata } from "next";
import Navbar         from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer         from "@/components/ui/Footer";
import PageHero       from "@/components/ui/PageHero";
import Reveal         from "@/components/ui/Reveal";
import Link           from "next/link";

export const metadata: Metadata = {
  title: "Partner Program — Atlantic Xchange",
  description:
    "Join the Atlantic Xchange partner program. Become an Agent, Payout Provider, or White-Label partner and grow with us.",
};

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
    details: [
      "Competitive commissions per transaction",
      "Full training & onboarding support",
      "Co-branded marketing materials",
      "Dedicated agent portal & reporting",
      "No upfront technology costs",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
    color:   "bg-teal-600",
    cta:     "Apply as an Agent",
    subject: "Agent Partnership Inquiry",
  },
  {
    key:   "provider",
    title: "Become a Provider",
    tag:   "For Banks & Payout Networks",
    desc:  "Banks, payout networks, and liquidity partners that help us deliver funds to more countries and corridors — fast, compliant, and reliable, at scale.",
    details: [
      "Access to our growing transaction volume",
      "Long-term settlement agreements",
      "Dedicated integration & compliance support",
      "Transparent fee structures",
      "Priority corridor placement",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
      </svg>
    ),
    color:   "bg-ax-green-500",
    cta:     "Apply as a Provider",
    subject: "Provider Partnership Inquiry",
  },
  {
    key:   "white-label",
    title: "Power Your Business With Us",
    tag:   "For Fintechs & Brands",
    desc:  "Already have your own brand or app? Use Atlantic Xchange as your licensed money transfer engine behind the scenes — we handle compliance and settlement, you own the customer experience.",
    details: [
      "Licensed infrastructure (FinCEN, NMLS, multi-state)",
      "White-label API & partner dashboard",
      "You keep your brand, we power the transfers",
      "Full compliance umbrella included",
      "24/7 integration & technical support",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color:   "bg-navy-600",
    cta:     "Talk to Us About White-Label",
    subject: "White-Label Partnership Inquiry",
  },
];

const whyUs = [
  {
    title: "Licensed & Compliant",
    desc:  "We hold money transmitter licenses in 10+ US states and are NMLS registered — your partnership is built on solid legal ground.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Proven Volume",
    desc:  "We process over $2M monthly across 150+ countries — partners benefit from our established corridors and liquidity.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    desc:  "Every partner gets a dedicated relationship manager and technical support team — we grow together.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function PartnersPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Partner Program"
          title="Grow With "
          highlight="Atlantic Xchange"
          subtitle="Three ways to partner with us — whether you're a retail agent, a payout network, or building your own fintech product."
          accentColor="green"
        />

        {/* Stats strip */}
        <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} variant="zoom-in" delay={i * 80} duration={600}>
                  <div className={`${s.color} rounded-2xl p-5 sm:p-7`}>
                    <p className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-none mb-1.5">
                      {s.value}
                    </p>
                    <p className="text-white/65 text-xs sm:text-sm">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Partner type cards */}
        <section className="py-16 sm:py-24 bg-navy-800 relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #62ba46 0%, transparent 70%)" }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <Reveal variant="fade-up" duration={700}>
              <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                <p className="text-teal-400 text-xs font-bold uppercase tracking-[0.15em] mb-3">
                  Three Ways to Partner
                </p>
                <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  Which partnership is right for you?
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
              {partnerTypes.map((p, i) => (
                <Reveal key={p.key} variant="fade-up" delay={i * 100} duration={650}>
                  <div className="h-full flex flex-col bg-white/[0.04] border border-white/10 rounded-2xl p-7 sm:p-8 hover:border-white/20 transition-colors">
                    <div className={`${p.color} text-white w-14 h-14 rounded-xl flex items-center justify-center mb-5 flex-shrink-0`}>
                      {p.icon}
                    </div>
                    <p className="text-teal-400 text-[11px] font-bold uppercase tracking-widest mb-2">{p.tag}</p>
                    <h3 className="font-heading font-bold text-white text-xl mb-3">{p.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-5">{p.desc}</p>
                    <ul className="space-y-2.5 mb-7 flex-1">
                      {p.details.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-2.5 h-2.5 text-ax-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-white/70 text-sm leading-snug">{d}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:partners@atlanticxchange.com?subject=${encodeURIComponent(p.subject)}`}
                      className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors duration-150"
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

        {/* Why partner with us */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <Reveal variant="fade-up" duration={700}>
              <div className="text-center mb-10 sm:mb-14">
                <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">Why Us</p>
                <h2 className="font-heading font-extrabold text-navy-800 text-3xl sm:text-4xl">
                  Why Partner With Atlantic Xchange?
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {whyUs.map((w, i) => (
                <Reveal key={w.title} variant="fade-up" delay={i * 100} duration={650}>
                  <div className="bg-navy-50 rounded-2xl p-7 sm:p-8 h-full">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 text-white flex items-center justify-center mb-5">
                      {w.icon}
                    </div>
                    <h3 className="font-heading font-bold text-navy-800 text-lg mb-3">{w.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-navy-950">
          <Reveal variant="fade-up" duration={700}>
            <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl mb-4">
                Ready to get started?
              </h2>
              <p className="text-white/55 text-base sm:text-lg mb-8 leading-relaxed">
                Reach out to our partnerships team and we&apos;ll find the right fit for your business.
              </p>
              <a
                href="mailto:partners@atlanticxchange.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-ax-green-500 hover:bg-ax-green-600 text-white font-bold text-sm transition-colors"
              >
                Contact Our Partnerships Team
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
