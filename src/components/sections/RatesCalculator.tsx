"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import CountrySelect from "@/components/ui/CountrySelect";
import Flag from "@/components/ui/Flag";

const countries = [
  { iso: "jo", name: "Jordan",       code: "JOD", rate: 0.7095 },
  { iso: "eg", name: "Egypt",        code: "EGP", rate: 30.85  },
  { iso: "sy", name: "Syria",        code: "SYP", rate: 13000  },
  { iso: "ae", name: "UAE",          code: "AED", rate: 3.6724 },
  { iso: "iq", name: "Iraq",         code: "IQD", rate: 1308   },
  { iso: "bd", name: "Bangladesh",   code: "BDT", rate: 121.80 },
  { iso: "cn", name: "China",        code: "CNY", rate: 7.2450 },
  { iso: "ma", name: "Morocco",      code: "MAD", rate: 10.08  },
  { iso: "pk", name: "Pakistan",     code: "PKR", rate: 277.5  },
  { iso: "ng", name: "Nigeria",      code: "NGN", rate: 1620   },
  { iso: "mx", name: "Mexico",       code: "MXN", rate: 18.32  },
  { iso: "gb", name: "UK",           code: "GBP", rate: 0.7910 },
  { iso: "eu", name: "Europe",       code: "EUR", rate: 0.9250 },
  { iso: "in", name: "India",        code: "INR", rate: 83.42  },
];

function formatReceived(code: string, amount: number) {
  if (amount >= 1000) return `${Math.round(amount).toLocaleString()} ${code}`;
  if (amount >= 1)    return `${amount.toFixed(2)} ${code}`;
  return `${amount.toFixed(4)} ${code}`;
}

export default function RatesCalculator() {
  const [amount,      setAmount]      = useState<number>(200);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const country   = countries[selectedIdx];
  const netAmount = Math.max(0, amount - 2.99);
  const received  = netAmount * country.rate;

  return (
    <section className="py-20 bg-navy-800">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <Reveal variant="fade-up" duration={700}>
          <div className="text-center mb-12">
            <p className="text-teal-400 text-xs font-bold uppercase tracking-[0.15em] mb-3">See For Yourself</p>
            <h2 className="font-heading font-extrabold text-white text-4xl lg:text-5xl mb-4">
              Fee & Rate Calculator
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              No surprises. Enter your amount and see exactly what your recipient will receive — before you send a single dollar.
            </p>
          </div>
        </Reveal>

        <Reveal variant="zoom-in" delay={100} duration={700}>
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-5 sm:p-8 lg:p-10 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-10 items-center">

              {/* Inputs */}
              <div className="space-y-6">
                {/* Amount */}
                <div>
                  <label className="text-white/60 text-sm font-medium mb-2 block">You send (USD)</label>
                  <div className="relative flex items-center bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 focus-within:border-teal-500/60 transition-colors">
                    <span className="text-white/50 font-bold text-lg mr-2">$</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      value={amount}
                      min={3}
                      max={10000}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="flex-1 bg-transparent text-white font-bold text-2xl outline-none"
                    />
                    <span className="text-white/40 text-sm">USD</span>
                  </div>
                </div>

                {/* Country select */}
                <div>
                  <label className="text-white/60 text-sm font-medium mb-2 block">Destination country</label>
                  <CountrySelect
                    variant="dark"
                    value={selectedIdx}
                    onChange={setSelectedIdx}
                    options={countries.map((c) => ({
                      iso: c.iso,
                      name: c.name,
                      suffix: c.code,
                    }))}
                  />
                </div>
              </div>

              {/* Result card */}
              <div className="bg-gradient-to-br from-teal-600 to-navy-700 rounded-2xl p-7 text-white relative overflow-hidden">
                {/* Glow */}
                <div aria-hidden className="absolute -right-8 -top-8 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl" />

                <div className="relative">
                  <p className="text-white/60 text-sm mb-1">Your recipient gets</p>
                  <p className="font-heading font-extrabold text-4xl lg:text-5xl mb-4 leading-none flex items-center gap-3">
                    <Flag code={country.iso} name={country.name} size="lg" />
                    {received > 0 ? formatReceived(country.code, received) : "—"}
                  </p>

                  <div className="space-y-2 border-t border-white/15 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/55">You send</span>
                      <span className="font-semibold">${amount.toLocaleString()} USD</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/55">Transfer fee</span>
                      <span className="font-semibold text-red-300">− $2.99</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/55">Exchange rate</span>
                      <span className="font-semibold">1 USD = {country.rate.toFixed(4)} {country.code}</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-white/15 pt-2 mt-2">
                      <span className="text-white/80 font-medium">Amount transferred</span>
                      <span className="font-bold text-ax-green-400">${netAmount.toFixed(2)} USD</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a
                href="/"
                className="inline-flex items-center gap-2 bg-ax-green-500 hover:bg-ax-green-600 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors"
              >
                Send Money Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
