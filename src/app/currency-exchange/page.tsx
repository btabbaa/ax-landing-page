import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import RatesTable from "@/components/sections/RatesTable";

export const metadata: Metadata = {
  title: "Currency Exchange — Atlantic Xchange",
  description:
    "Competitive currency exchange rates with transparent pricing. Check today's live rates and exchange cash in-branch or convert when you send money.",
};

const benefits = [
  {
    title: "Competitive rates",
    desc:  "Mid-market pricing with a thin spread — typically better than banks and airport exchange desks.",
    color: "bg-navy-800",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
  },
  {
    title: "Transparent pricing",
    desc:  "The rate you see is the rate you get. No hidden markups, no surprise charges at the counter.",
    color: "bg-teal-600",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "In-branch or with a transfer",
    desc:  "Walk into a location to exchange cash, or lock the same competitive rate when you send money abroad.",
    color: "bg-ax-green-500",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
];

const steps = [
  { n: "01", title: "Check today's rate", desc: "Search the table below for your currency and see the live rate before you visit." },
  { n: "02", title: "Visit a location",   desc: "Bring a valid photo ID to Dearborn, Chicago, or another licensed branch." },
  { n: "03", title: "Exchange on the spot", desc: "Confirm the rate, complete the exchange, and walk out with your currency." },
];

export default function CurrencyExchangePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Currency Exchange"
          title="Competitive rates. "
          highlight="Transparent pricing."
          subtitle="Check today's live exchange rates, then exchange cash in-branch or convert when you send money — with no hidden fees."
          accentColor="teal"
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {benefits.map((b, i) => (
                <Reveal key={b.title} variant="fade-up" delay={i * 100} duration={650}>
                  <div className="h-full p-6 rounded-2xl border border-navy-100 bg-navy-50/40">
                    <div className={`${b.color} text-white w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                      {b.icon}
                    </div>
                    <h2 className="font-heading font-bold text-navy-800 text-lg mb-2">{b.title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <Reveal variant="fade-up" duration={700}>
              <div className="text-center mb-10 sm:mb-14">
                <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">Simple Process</p>
                <h2 className="font-heading font-extrabold text-navy-800 text-3xl sm:text-4xl">How Currency Exchange Works</h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {steps.map((s, i) => (
                <Reveal key={s.n} variant="fade-up" delay={i * 100} duration={650}>
                  <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 h-full">
                    <span className="text-5xl font-heading font-extrabold text-navy-100 leading-none block mb-3">{s.n}</span>
                    <h3 className="font-heading font-bold text-navy-800 text-base mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <RatesTable />

        <section className="py-16 sm:py-20 bg-navy-800">
          <Reveal variant="fade-up" duration={700}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl mb-4">
                Ready to exchange?
              </h2>
              <p className="text-white/55 text-base sm:text-lg mb-8 leading-relaxed">
                Visit a branch to exchange cash, or start a transfer and lock today&apos;s rate online.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/locations"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-ax-green-500 hover:bg-ax-green-600 text-white font-bold text-sm transition-colors"
                >
                  Find a Location
                </Link>
                <a
                  href="/#send"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-semibold text-sm transition-colors"
                >
                  Send Money
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
