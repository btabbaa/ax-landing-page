import type { Metadata } from "next";
import Navbar         from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer         from "@/components/ui/Footer";
import PageHero       from "@/components/ui/PageHero";
import Reveal         from "@/components/ui/Reveal";
import Link           from "next/link";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

export const metadata: Metadata = {
  title: "Our Services — Atlantic Xchange",
  description:
    "Atlantic Xchange offers two core financial services: international Money Transfer and in-branch Currency Exchange. Transparent fees, competitive rates, 150+ countries.",
};

const primaryServices = [
  {
    id: "money-transfer",
    href: "/money-transfer",
    tag: "Service 1",
    tagBg: "bg-navy-700/60 text-white/80",
    title: "Money Transfer",
    desc: "Send money internationally from the USA to 150+ countries — fast, secure, and at competitive exchange rates. Whether it's to family, friends, or business partners, we make every transfer transparent and straightforward.",
    highlights: [
      "Person to Person (P2P) transfers",
      "Business to Business (B2B) payments",
      "European SEPA transfers",
      "Middle East & North Africa corridors",
    ],
    cta: "Explore Money Transfer",
    ctaSecondary: "Send Money Now",
    ctaSecondaryHref: "/#send",
    accent: "from-navy-800 to-navy-900",
    iconBg: "bg-white/10",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    id: "currency-exchange",
    href: "/currency-exchange",
    tag: "Service 2",
    tagBg: "bg-ax-green-400/20 text-ax-green-300",
    title: "Currency Exchange",
    desc: "Exchange cash at rates that beat most banks and airport kiosks — with the exact rate shown before you confirm. Visit any Atlantic Xchange branch to exchange USD to foreign currencies and vice versa, with no hidden fees.",
    highlights: [
      "Competitive mid-market rates",
      "No hidden fees or surprise markups",
      "Available at all Atlantic Xchange branches",
      "Multiple currencies supported",
    ],
    cta: "Explore Currency Exchange",
    ctaSecondary: "Check Today's Rates",
    ctaSecondaryHref: "/rates",
    accent: "from-teal-700 to-teal-900",
    iconBg: "bg-white/10",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Services"
          title="Two Services. "
          highlight="One Trusted Platform."
          subtitle="Atlantic Xchange specialises in international Money Transfer and in-branch Currency Exchange — both built on transparent pricing and competitive rates."
          accentColor="teal"
        />

        {/* Primary services */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {primaryServices.map((svc, i) => (
                <Reveal key={svc.id} variant="fade-up" delay={i * 150} duration={750}>
                  <div className={`group relative bg-gradient-to-br ${svc.accent} rounded-2xl p-8 sm:p-10 h-full flex flex-col overflow-hidden`}>
                    {/* Background glow */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute top-0 right-0 w-64 h-64 opacity-10"
                      style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
                    />

                    {/* Tag */}
                    <span className={`inline-flex self-start text-[11px] font-bold ${svc.tagBg} px-3 py-1.5 rounded-full mb-6`}>
                      {svc.tag}
                    </span>

                    {/* Icon + title */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`${svc.iconBg} text-white w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10`}>
                        {svc.icon}
                      </div>
                      <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl leading-tight">
                        {svc.title}
                      </h2>
                    </div>

                    <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-7">
                      {svc.desc}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {svc.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-ax-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-white/80 text-sm">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={svc.href}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-navy-800 font-bold text-sm hover:bg-white/90 transition-colors"
                      >
                        {svc.cta}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <a
                        href={svc.ctaSecondaryHref}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                      >
                        {svc.ctaSecondary}
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <HowItWorksSection />

        {/* CTA banner */}
        <section className="py-16 sm:py-20 bg-navy-800">
          <Reveal variant="fade-up" duration={700}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl mb-4">
                Not sure which service you need?
              </h2>
              <p className="text-white/55 text-base sm:text-lg mb-8 leading-relaxed">
                Our team is happy to help. Reach out by phone, WhatsApp, or visit a location — we&apos;ll point you in the right direction.
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
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-semibold text-sm transition-colors"
                >
                  Contact Us
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
