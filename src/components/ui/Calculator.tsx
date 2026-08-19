"use client";

import { useState } from "react";
import CountrySelect from "@/components/ui/CountrySelect";
import Flag from "@/components/ui/Flag";

const COUNTRIES = [
  { code: "JO", name: "Jordan",       currency: "JOD", rate: 3.76   },
  { code: "EG", name: "Egypt",        currency: "EGP", rate: 50.2   },
  { code: "SY", name: "Syria",        currency: "SYP", rate: 13000  },
  { code: "AE", name: "UAE",          currency: "AED", rate: 3.67   },
  { code: "IQ", name: "Iraq",         currency: "IQD", rate: 1310   },
  { code: "BD", name: "Bangladesh",   currency: "BDT", rate: 121.8  },
  { code: "CN", name: "China",        currency: "CNY", rate: 7.24   },
  { code: "MA", name: "Morocco",      currency: "MAD", rate: 9.95   },
  { code: "TN", name: "Tunisia",      currency: "TND", rate: 3.08   },
  { code: "PH", name: "Philippines",  currency: "PHP", rate: 56.2   },
  { code: "MX", name: "Mexico",       currency: "MXN", rate: 17.4   },
  { code: "IN", name: "India",        currency: "INR", rate: 83.5   },
  { code: "NG", name: "Nigeria",      currency: "NGN", rate: 1620   },
  { code: "GH", name: "Ghana",        currency: "GHS", rate: 15.8   },
  { code: "GB", name: "UK (SEPA)",    currency: "GBP", rate: 0.793  },
  { code: "DE", name: "Germany",      currency: "EUR", rate: 0.921  },
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
        <CountrySelect
          value={idx}
          onChange={setIdx}
          options={COUNTRIES.map((c) => ({
            iso: c.code,
            name: c.name,
            suffix: c.currency,
          }))}
        />
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
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-ax-green-100 text-ax-green-800 px-2.5 py-1 rounded-lg flex-shrink-0">
            <Flag code={country.code} name={country.name} size="sm" />
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
