"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const countries = [
  { flag: "🇯🇴", name: "Jordan",       code: "JOD", rate: 0.7095, trend: "+0.2%",  minFee: 2.99, time: "Same day",   popular: true  },
  { flag: "🇪🇬", name: "Egypt",        code: "EGP", rate: 30.85,  trend: "+1.1%",  minFee: 2.99, time: "1–2 hours", popular: true  },
  { flag: "🇸🇦", name: "Saudi Arabia", code: "SAR", rate: 3.7498, trend: "0.0%",   minFee: 2.99, time: "1–2 hours", popular: true  },
  { flag: "🇦🇪", name: "UAE",          code: "AED", rate: 3.6724, trend: "+0.1%",  minFee: 2.99, time: "Same day",  popular: true  },
  { flag: "🇮🇶", name: "Iraq",         code: "IQD", rate: 1308,   trend: "0.0%",   minFee: 2.99, time: "24 hours", popular: true  },
  { flag: "🇲🇦", name: "Morocco",      code: "MAD", rate: 10.08,  trend: "+0.3%",  minFee: 2.99, time: "24 hours", popular: false },
  { flag: "🇹🇳", name: "Tunisia",      code: "TND", rate: 3.1105, trend: "+0.4%",  minFee: 2.99, time: "24 hours", popular: false },
  { flag: "🇵🇰", name: "Pakistan",     code: "PKR", rate: 277.5,  trend: "+1.8%",  minFee: 2.99, time: "1–2 hours", popular: false },
  { flag: "🇵🇭", name: "Philippines",  code: "PHP", rate: 57.12,  trend: "+0.5%",  minFee: 2.99, time: "24 hours", popular: false },
  { flag: "🇳🇬", name: "Nigeria",      code: "NGN", rate: 1620,   trend: "+2.3%",  minFee: 2.99, time: "24 hours", popular: false },
  { flag: "🇬🇭", name: "Ghana",        code: "GHS", rate: 14.72,  trend: "+1.0%",  minFee: 2.99, time: "24 hours", popular: false },
  { flag: "🇲🇽", name: "Mexico",       code: "MXN", rate: 18.32,  trend: "-0.2%",  minFee: 2.99, time: "Same day", popular: false },
  { flag: "🇨🇴", name: "Colombia",     code: "COP", rate: 4120,   trend: "+0.6%",  minFee: 2.99, time: "24 hours", popular: false },
  { flag: "🇬🇧", name: "UK",           code: "GBP", rate: 0.7910, trend: "-0.1%",  minFee: 2.99, time: "Same day", popular: false },
  { flag: "🇪🇺", name: "Europe",       code: "EUR", rate: 0.9250, trend: "+0.2%",  minFee: 2.99, time: "Same day", popular: false },
  { flag: "🇮🇳", name: "India",        code: "INR", rate: 83.42,  trend: "+0.3%",  minFee: 2.99, time: "1–2 hours", popular: false },
];

function formatRate(code: string, rate: number) {
  if (rate >= 100)  return `${Math.round(rate).toLocaleString()} ${code}`;
  if (rate >= 1)    return `${rate.toFixed(2)} ${code}`;
  return `${rate.toFixed(4)} ${code}`;
}

export default function RatesTable() {
  const [amount, setAmount]   = useState<number>(100);
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch]   = useState("");

  const filtered = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase()),
  );

  const visible = showAll ? filtered : filtered.slice(0, 8);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Top bar */}
        <Reveal variant="fade-up" duration={700}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-6 sm:mb-8">
            <div>
              <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-2">Live Rates</p>
              <h2 className="font-heading font-extrabold text-navy-800 text-3xl sm:text-4xl lg:text-5xl">Exchange Rates</h2>
              <p className="text-gray-500 text-sm mt-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-ax-green-500 animate-pulse inline-block" />
                Rates updated every 10 minutes
              </p>
            </div>

            {/* Preview amount input */}
            <div className="flex items-center gap-3 bg-navy-50 border border-navy-100 rounded-xl px-4 py-3 self-start sm:self-auto">
              <span className="text-navy-400 text-sm font-medium">Preview&nbsp;</span>
              <div className="flex items-center gap-1.5">
                <span className="text-navy-800 font-semibold">$</span>
                <input
                  type="number"
                  inputMode="decimal"
                  value={amount}
                  min={1}
                  max={10000}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-16 sm:w-20 bg-transparent text-navy-800 font-bold text-base outline-none border-b-2 border-navy-200 focus:border-teal-500 transition-colors"
                />
                <span className="text-navy-400 text-sm">USD</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Search */}
        <Reveal variant="fade-up" delay={100} duration={600}>
          <div className="relative mb-5 sm:mb-6 max-w-sm">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search country or currency…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-navy-100 bg-navy-50 text-navy-800 text-sm outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all"
            />
          </div>
        </Reveal>

        {/* Table — horizontal scroll wrapper on mobile */}
        <Reveal variant="fade-up" delay={150} duration={650}>
          <div className="rounded-2xl border border-navy-100 overflow-hidden">
            {/* Scroll hint only on mobile */}
            <div className="sm:hidden flex items-center gap-2 px-4 py-2 bg-navy-50 border-b border-navy-100">
              <svg className="w-3.5 h-3.5 text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="text-[11px] text-navy-400">Swipe to see more</span>
              <svg className="w-3.5 h-3.5 text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
              <table className="w-full text-sm" style={{ minWidth: "640px" }}>
                <thead>
                  <tr className="bg-navy-800 text-white">
                    <th className="text-left px-4 sm:px-5 py-3.5 font-semibold text-white/70 text-xs uppercase tracking-wider sticky left-0 bg-navy-800">Country</th>
                    <th className="text-left px-4 sm:px-5 py-3.5 font-semibold text-white/70 text-xs uppercase tracking-wider">Rate (1 USD)</th>
                    <th className="text-left px-4 sm:px-5 py-3.5 font-semibold text-white/70 text-xs uppercase tracking-wider">24h</th>
                    <th className="text-right px-4 sm:px-5 py-3.5 font-semibold text-white/70 text-xs uppercase tracking-wider">Recipient Gets</th>
                    <th className="text-left px-4 sm:px-5 py-3.5 font-semibold text-white/70 text-xs uppercase tracking-wider">Delivery</th>
                    <th className="px-4 sm:px-5 py-3.5" />
                  </tr>
                </thead>
                <tbody>
                  {visible.map((c, i) => {
                    const received = (amount - 2.99) * c.rate;
                    const trendUp  = c.trend.startsWith("+");
                    const trendFlat = c.trend === "0.0%";

                    return (
                      <tr
                        key={c.code}
                        className={`border-t border-navy-50 hover:bg-navy-50/60 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-navy-50/30"}`}
                      >
                        <td className={`px-4 sm:px-5 py-3.5 font-medium text-navy-800 sticky left-0 ${i % 2 === 0 ? "bg-white" : "bg-navy-50/30"}`}>
                          <span className="flex items-center gap-2.5">
                            <span className="text-xl leading-none">{c.flag}</span>
                            <span className="whitespace-nowrap">
                              {c.name}
                              {c.popular && (
                                <span className="ml-1.5 text-[10px] font-bold text-teal-600 bg-teal-50 border border-teal-100 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                                  Popular
                                </span>
                              )}
                            </span>
                          </span>
                        </td>
                        <td className="px-4 sm:px-5 py-3.5 font-mono text-navy-800 font-bold whitespace-nowrap">{formatRate(c.code, c.rate)}</td>
                        <td className={`px-4 sm:px-5 py-3.5 text-xs font-bold whitespace-nowrap ${trendFlat ? "text-gray-400" : trendUp ? "text-ax-green-600" : "text-red-500"}`}>
                          {trendFlat ? "—" : c.trend}
                        </td>
                        <td className="px-4 sm:px-5 py-3.5 text-right font-bold text-navy-800 whitespace-nowrap">
                          {received > 0
                            ? `${Math.round(received).toLocaleString()} ${c.code}`
                            : "—"}
                          <p className="text-[11px] text-gray-400 font-normal">after $2.99 fee</p>
                        </td>
                        <td className="px-4 sm:px-5 py-3.5 whitespace-nowrap">
                          <span className="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full">
                            {c.time}
                          </span>
                        </td>
                        <td className="px-4 sm:px-5 py-3.5">
                          <a
                            href="/"
                            className="text-xs font-bold text-navy-800 hover:text-teal-600 transition-colors whitespace-nowrap"
                          >
                            Send →
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Show more */}
            {filtered.length > 8 && (
              <div className="border-t border-navy-100 px-4 sm:px-5 py-4 text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors py-1 touch-manipulation"
                >
                  {showAll ? "Show less ↑" : `Show all ${filtered.length} countries ↓`}
                </button>
              </div>
            )}
          </div>
        </Reveal>

        {/* Disclaimer */}
        <Reveal variant="fade-up" delay={200} duration={600}>
          <p className="text-xs text-gray-400 mt-4 text-center leading-relaxed">
            * Rates are indicative and subject to change. A flat fee of $2.99 applies per transfer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
