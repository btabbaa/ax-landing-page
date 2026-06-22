import type { Metadata } from "next";
import Navbar          from "@/components/ui/Navbar";
import ScrollProgress  from "@/components/ui/ScrollProgress";
import Footer          from "@/components/ui/Footer";
import PageHero        from "@/components/ui/PageHero";
import Reveal          from "@/components/ui/Reveal";
import RatesTable      from "@/components/sections/RatesTable";
import RatesCalculator from "@/components/sections/RatesCalculator";

export const metadata: Metadata = {
  title: "Rates & Fees — Atlantic Xchange",
  description:
    "See today's live exchange rates and our simple flat fee of $2.99 per transfer. No hidden charges — ever.",
};

const advantages = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Flat Fee of $2.99",
    desc:  "Whether you send $50 or $5,000 — the fee is always $2.99. No percentage, no surprise charges.",
    color: "bg-navy-800",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Transparent Rates",
    desc:  "We show you the exact exchange rate before you confirm. The rate you see is the rate you get.",
    color: "bg-teal-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
    title: "Competitive Exchange",
    desc:  "Our mid-market exchange rates are significantly better than what banks and traditional services offer.",
    color: "bg-ax-green-500",
  },
];

export default function RatesPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>

        {/* Hero */}
        <PageHero
          eyebrow="Rates & Fees"
          title="Always Know What "
          highlight="You'll Pay"
          subtitle="No hidden fees. No percentage charges. Just a flat $2.99 fee per transfer and a live exchange rate — every time."
          accentColor="teal"
        />

        {/* Fee Advantages */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {advantages.map((a, i) => (
                <Reveal key={a.title} variant="fade-up" delay={i * 100} duration={650}>
                  <div className="flex gap-5 items-start p-6 rounded-2xl border border-navy-100 bg-navy-50/40 h-full">
                    <div className={`${a.color} text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {a.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-navy-800 text-base mb-1.5">{a.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Rates Table */}
        <RatesTable />

        {/* Calculator */}
        <RatesCalculator />

        {/* Comparison note */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <Reveal variant="fade-up" duration={700}>
              <h2 className="font-heading font-extrabold text-navy-800 text-3xl lg:text-4xl mb-4">
                How We Compare to Traditional Banks
              </h2>
              <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
                Banks often charge 3–5% in hidden margins on top of their exchange rates. Atlantic Xchange doesn't.
              </p>
            </Reveal>

            <Reveal variant="zoom-in" delay={100} duration={700}>
              <div className="rounded-2xl border border-navy-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-navy-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold text-white/70 text-xs uppercase tracking-wider">Feature</th>
                        <th className="text-center px-5 py-4 font-bold text-teal-300 text-xs uppercase tracking-wider">Atlantic Xchange</th>
                        <th className="text-center px-5 py-4 font-semibold text-white/50 text-xs uppercase tracking-wider">Traditional Bank</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: "Transfer Fee",         ax: "$2.99 flat",          bank: "$25–$45 per wire" },
                        { feature: "Exchange Rate Margin", ax: "0% hidden margin",    bank: "3–5% added margin" },
                        { feature: "Transfer Speed",       ax: "Within 24 hours",     bank: "3–5 business days" },
                        { feature: "Online Process",       ax: "100% online",         bank: "Often requires branch" },
                        { feature: "Rate Transparency",    ax: "Shown before confirm", bank: "Often hidden" },
                        { feature: "Customer Support",     ax: "24/7 live chat",      bank: "Business hours only" },
                      ].map((row, i) => (
                        <tr key={row.feature} className={`border-t border-navy-50 ${i % 2 === 0 ? "bg-white" : "bg-navy-50/30"}`}>
                          <td className="px-5 py-3.5 font-medium text-navy-700">{row.feature}</td>
                          <td className="px-5 py-3.5 text-center text-ax-green-600 font-semibold">
                            <span className="flex items-center justify-center gap-1.5">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {row.ax}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 text-center text-gray-400">{row.bank}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={200} duration={600}>
              <div className="mt-10">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors"
                >
                  Start Saving on Your Next Transfer
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
