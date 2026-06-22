"use client";

import { useState } from "react";

const COUNTRIES = [
  { code: "JO", flag: "🇯🇴", name: "Jordan",       currency: "JOD", rate: 3.76   },
  { code: "EG", flag: "🇪🇬", name: "Egypt",        currency: "EGP", rate: 50.2   },
  { code: "SA", flag: "🇸🇦", name: "Saudi Arabia", currency: "SAR", rate: 3.75   },
  { code: "AE", flag: "🇦🇪", name: "UAE",          currency: "AED", rate: 3.67   },
  { code: "IQ", flag: "🇮🇶", name: "Iraq",         currency: "IQD", rate: 1310   },
  { code: "MA", flag: "🇲🇦", name: "Morocco",      currency: "MAD", rate: 9.95   },
  { code: "TN", flag: "🇹🇳", name: "Tunisia",      currency: "TND", rate: 3.08   },
  { code: "PH", flag: "🇵🇭", name: "Philippines",  currency: "PHP", rate: 56.2   },
  { code: "MX", flag: "🇲🇽", name: "Mexico",       currency: "MXN", rate: 17.4   },
  { code: "IN", flag: "🇮🇳", name: "India",        currency: "INR", rate: 83.5   },
  { code: "NG", flag: "🇳🇬", name: "Nigeria",      currency: "NGN", rate: 1620   },
  { code: "GH", flag: "🇬🇭", name: "Ghana",        currency: "GHS", rate: 15.8   },
  { code: "GB", flag: "🇬🇧", name: "UK (SEPA)",    currency: "GBP", rate: 0.793  },
  { code: "DE", flag: "🇩🇪", name: "Germany",      currency: "EUR", rate: 0.921  },
];

const FEE = 2.99;

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

export default function Calculator() {
  const [amount, setAmount] = useState("500");
  const [idx, setIdx]       = useState(0);

  const country  = COUNTRIES[idx];
  const parsed   = parseFloat(amount) || 0;
  const net      = Math.max(0, parsed - FEE);
  const received = net * country.rate;

  return (
    /* Full width on mobile, capped at sm on larger screens */
    <div className="bg-white rounded-2xl border border-navy-100 p-5 sm:p-6 w-full sm:max-w-sm shadow-xl shadow-navy-900/20">

      <p className="font-heading font-bold text-navy-800 text-lg mb-4 sm:mb-5">
        Quick Transfer
      </p>

      {/* You send */}
      <div className="mb-4">
        <label className="block text-[11px] font-bold text-navy-400 uppercase tracking-[0.12em] mb-1.5">
          You Send
        </label>
        <div className="flex items-center gap-2 border-2 border-navy-800 rounded-xl px-4 py-3.5 focus-within:border-teal-600 transition-colors">
          <span className="text-navy-400 font-semibold text-base">$</span>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 outline-none text-xl font-bold text-gray-900 bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none min-w-0"
            placeholder="0"
          />
          <span className="text-[11px] font-bold bg-navy-100 text-navy-700 px-2.5 py-1 rounded-lg flex-shrink-0">
            USD
          </span>
        </div>
      </div>

      {/* Rate pill */}
      <div className="flex items-center justify-between mb-4 px-0.5">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-ax-green-500" />
          <span className="text-xs text-teal-700 font-medium">
            1 USD = {country.rate} {country.currency}
          </span>
        </div>
        <span className="text-xs text-gray-400">Fee: ${FEE.toFixed(2)}</span>
      </div>

      {/* Destination */}
      <div className="mb-4">
        <label className="block text-[11px] font-bold text-navy-400 uppercase tracking-[0.12em] mb-1.5">
          Send To
        </label>
        <div className="relative">
          <select
            value={idx}
            onChange={(e) => setIdx(Number(e.target.value))}
            className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-800 bg-gray-50 outline-none focus:border-teal-600 transition-colors cursor-pointer pr-10"
          >
            {COUNTRIES.map((c, i) => (
              <option key={c.code} value={i}>
                {c.flag}  {c.name} ({c.currency})
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Recipient gets */}
      <div className="mb-5">
        <label className="block text-[11px] font-bold text-navy-400 uppercase tracking-[0.12em] mb-1.5">
          Recipient Gets
        </label>
        <div className="flex items-center gap-2 border border-ax-green-200 rounded-xl px-4 py-3.5 bg-ax-green-50">
          <span className="flex-1 text-xl font-extrabold text-ax-green-700 min-w-0 truncate">
            {fmt(received)}
          </span>
          <span className="text-[11px] font-bold bg-ax-green-100 text-ax-green-800 px-2.5 py-1 rounded-lg flex-shrink-0">
            {country.currency}
          </span>
        </div>
      </div>

      {/* CTA */}
      <a
        href="#send"
        className="flex items-center justify-center gap-2 w-full bg-navy-800 hover:bg-navy-700 active:bg-navy-900 text-white font-bold text-base py-4 rounded-xl transition-colors duration-150 touch-manipulation"
      >
        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        Send Money Now
      </a>

      <p className="text-center text-[11px] text-gray-400 mt-3 leading-relaxed">
        Rates updated every minute · No hidden fees
      </p>
    </div>
  );
}
