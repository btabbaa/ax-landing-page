import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Flag from "@/components/ui/Flag";

const previewRates = [
  { iso: "jo", name: "Jordan",     code: "JOD", rate: "0.7095" },
  { iso: "eg", name: "Egypt",      code: "EGP", rate: "30.85"  },
  { iso: "ae", name: "UAE",        code: "AED", rate: "3.6724" },
  { iso: "eu", name: "Eurozone",   code: "EUR", rate: "0.9250" },
  { iso: "gb", name: "UK",         code: "GBP", rate: "0.7910" },
];

export default function CurrencyExchangeSection() {
  return (
    <section id="currency-exchange" className="py-16 sm:py-24 bg-navy-800 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[520px] h-[520px] opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #008db5 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[420px] h-[420px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #62ba46 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <Reveal variant="fade-right" duration={700}>
            <div>
              <p className="text-teal-400 text-xs font-bold uppercase tracking-[0.15em] mb-4">
                What Sets Us Apart
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Currency Exchange
              </h2>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-4">
                Competitive rates. Transparent pricing.
              </p>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                Exchange cash at rates that beat most banks and airport kiosks —
                with the exact rate shown before you confirm. No hidden fees.
              </p>
              <Link
                href="/currency-exchange"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-ax-green-500 hover:bg-ax-green-600 text-white font-bold text-sm transition-colors"
              >
                Check Exchange Rates
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <Reveal variant="fade-left" delay={120} duration={700}>
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 sm:p-7 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <p className="text-white font-heading font-bold text-base">Today&apos;s rates</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ax-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-ax-green-400 animate-pulse" />
                  Live
                </span>
              </div>
              <ul className="divide-y divide-white/[0.06]">
                {previewRates.map((c) => (
                  <li key={c.code} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                    <span className="flex items-center gap-2.5 text-white/85 text-sm font-medium">
                      <Flag code={c.iso} name={c.name} />
                      {c.name}
                    </span>
                    <span className="font-mono text-sm font-bold text-white">
                      1 USD = {c.rate} {c.code}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-white/35 text-xs mt-5">
                Indicative rates. See the full list for every corridor we support.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
