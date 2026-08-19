import type { Metadata } from "next";
import Navbar         from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer         from "@/components/ui/Footer";
import PageHero       from "@/components/ui/PageHero";
import Reveal         from "@/components/ui/Reveal";
import Link           from "next/link";

export const metadata: Metadata = {
  title: "Our Services — Atlantic Xchange",
  description:
    "Explore all Atlantic Xchange money transfer services: Person to Person, Business to Business, European Transfers, and Middle East Transfers.",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    id:     "p2p",
    tag:    "P2P",
    title:  "Person to Person",
    desc:   "Send to friends and family worldwide. Cash pickup or direct bank transfer — always at the best exchange rate.",
    details: [
      "Send to 150+ countries from the USA",
      "Cash pickup or direct bank deposit",
      "Real-time exchange rates — no hidden markups",
      "Most transfers are processed within 24 hours",
      "Track every transfer in real time",
    ],
    accent: "bg-navy-800",
    tagBg:  "bg-navy-50 text-navy-700",
    border: "border-navy-100 hover:border-navy-300",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    id:     "b2b",
    tag:    "B2B",
    title:  "Business to Business",
    desc:   "Transfer funds to vendors, suppliers, and partners internationally — compliant, fast, and at competitive rates.",
    details: [
      "International vendor & supplier payments",
      "Competitive FX rates for bulk transfers",
      "Full compliance documentation provided",
      "Dedicated business account manager",
      "Volume discounts for regular senders",
    ],
    accent: "bg-teal-600",
    tagBg:  "bg-teal-50 text-teal-700",
    border: "border-teal-100 hover:border-teal-300",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    id:     "europe",
    tag:    "SEPA",
    title:  "European Transfers",
    href:   "/locations?region=Europe#coverage",
    cta:    "Find European locations",
    desc:   "Send directly to any European bank account with full SEPA compliance. 36 countries — no intermediary banks.",
    details: [
      "Direct to any IBAN in 36 SEPA countries",
      "No intermediary bank fees",
      "Full SEPA compliance guaranteed",
      "Same-day or next-business-day delivery",
      "EUR, GBP, CHF, and more supported",
    ],
    accent: "bg-ax-green-500",
    tagBg:  "bg-ax-green-50 text-ax-green-700",
    border: "border-ax-green-100 hover:border-ax-green-200",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    id:     "middle-east",
    tag:    "MENA",
    title:  "Middle East Transfers",
    href:   "/locations?region=Middle+East#coverage",
    cta:    "Find Middle East locations",
    desc:   "Send to Jordan, Egypt, UAE, and across the region — cash pickup or bank transfer, often the same day.",
    details: [
      "Jordan, Egypt, UAE, Syria, Iraq, and more",
      "Cash pickup or direct bank deposit",
      "Same-day delivery on key corridors",
      "Local-currency payout at competitive rates",
      "Track every transfer until it arrives",
    ],
    accent: "bg-navy-600",
    tagBg:  "bg-navy-50 text-navy-600",
    border: "border-navy-100 hover:border-navy-200",
  },
];

const steps = [
  { n: "01", title: "Create an account",   desc: "Sign up in minutes — all online, no branch visit required." },
  { n: "02", title: "Enter transfer details", desc: "Choose your destination, amount, and delivery method." },
  { n: "03", title: "Pay securely",         desc: "Bank transfer, debit card, or cash at one of our locations." },
  { n: "04", title: "Money delivered",      desc: "Your recipient gets the money — tracked every step of the way." },
];

export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Services"
          title="Everything You Need to "
          highlight="Move Money"
          subtitle="One platform for all your international transfer needs — personal or business. Transparent rates, zero hidden fees, 150+ countries."
          accentColor="teal"
        />

        {/* Services grid */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((svc, i) => (
                <Reveal key={i} variant="fade-up" delay={i * 100} duration={700}>
                  <div id={svc.id} className={`group scroll-mt-24 bg-white rounded-2xl border ${svc.border} p-7 sm:p-9 transition-all duration-200 h-full flex flex-col`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`${svc.accent} text-white w-14 h-14 rounded-xl flex items-center justify-center`}>
                        {svc.icon}
                      </div>
                      <span className={`text-[11px] font-bold ${svc.tagBg} px-3 py-1.5 rounded-full`}>
                        {svc.tag}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-navy-800 text-xl sm:text-2xl mb-3">{svc.title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2.5 flex-1">
                      {svc.details.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-ax-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-2.5 h-2.5 text-ax-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-600 text-sm leading-snug">{d}</span>
                        </li>
                      ))}
                    </ul>
                    {"href" in svc && svc.href && (
                      <Link
                        href={svc.href}
                        className="inline-flex items-center gap-1.5 mt-6 text-teal-600 text-sm font-semibold hover:text-teal-700 transition-colors"
                      >
                        {svc.cta ?? "Learn more"}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works strip */}
        <section className="py-16 sm:py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <Reveal variant="fade-up" duration={700}>
              <div className="text-center mb-10 sm:mb-14">
                <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">Simple Process</p>
                <h2 className="font-heading font-extrabold text-navy-800 text-3xl sm:text-4xl">How It Works</h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <Reveal key={s.n} variant="fade-up" delay={i * 100} duration={650}>
                  <div className="relative bg-white rounded-2xl p-6 sm:p-7 border border-gray-100">
                    <span className="text-5xl font-heading font-extrabold text-navy-100 leading-none block mb-3">{s.n}</span>
                    <h3 className="font-heading font-bold text-navy-800 text-base mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal variant="fade-up" delay={200} duration={700}>
              <div className="mt-10 text-center">
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
                >
                  Read the full guide
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA banner */}
        <section className="py-16 sm:py-20 bg-navy-800">
          <Reveal variant="fade-up" duration={700}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl mb-4">
                Ready to send money?
              </h2>
              <p className="text-white/55 text-base sm:text-lg mb-8 leading-relaxed">
                Join over 10,000 customers who trust Atlantic Xchange for fast, affordable international transfers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/#send"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-ax-green-500 hover:bg-ax-green-600 text-white font-bold text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Money Now
                </a>
                <Link
                  href="/rates"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-semibold text-sm transition-colors"
                >
                  View Rates
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
