"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

type TransferStatus = "submitted" | "processing" | "in_transit" | "delivered";

interface TransferRecord {
  ref: string;
  status: TransferStatus;
  recipientName: string;
  destination: string;
  amountSent: number;
  amountReceived: number;
  currencyReceived: string;
  createdOn: string;
  estimatedDelivery: string;
  deliveredOn?: string;
}

/**
 * Demo dataset — this project is statically exported with no backend,
 * so lookups are simulated against a small set of sample reference numbers.
 */
const DEMO_TRANSFERS: Record<string, TransferRecord> = {
  AX7841235690: {
    ref: "AX7841235690",
    status: "delivered",
    recipientName: "Layla Hammoud",
    destination: "Amman, Jordan",
    amountSent: 350,
    amountReceived: 2461.15,
    currencyReceived: "JOD",
    createdOn: "Jul 3, 2026",
    estimatedDelivery: "Jul 4, 2026",
    deliveredOn: "Jul 4, 2026 · 9:12 AM",
  },
  AX5590123847: {
    ref: "AX5590123847",
    status: "in_transit",
    recipientName: "Omar Khalil",
    destination: "Cairo, Egypt",
    amountSent: 500,
    amountReceived: 15296.5,
    currencyReceived: "EGP",
    createdOn: "Jul 6, 2026",
    estimatedDelivery: "Jul 7, 2026",
  },
  AX3321987654: {
    ref: "AX3321987654",
    status: "processing",
    recipientName: "Sara Idris",
    destination: "Dubai, UAE",
    amountSent: 200,
    amountReceived: 723.94,
    currencyReceived: "AED",
    createdOn: "Jul 7, 2026",
    estimatedDelivery: "Jul 8, 2026",
  },
};

const STEPS: { key: TransferStatus; label: string; desc: string; icon: ReactNode }[] = [
  {
    key: "submitted",
    label: "Submitted",
    desc: "We've received your transfer",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    key: "processing",
    label: "Processing",
    desc: "Verifying transfer details",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    key: "in_transit",
    label: "In Transit",
    desc: "On its way to recipient",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM18.75 18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 15.75V6a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5v9.75m-12 0h12m0 0h2.25a1.5 1.5 0 001.5-1.5v-2.379a1.5 1.5 0 00-.44-1.06L18 9.75h-3v6" />
      </svg>
    ),
  },
  {
    key: "delivered",
    label: "Delivered",
    desc: "Funds received",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function getStepIndex(status: TransferStatus) {
  return STEPS.findIndex((s) => s.key === status);
}

function StatusBadge({ status }: { status: TransferStatus }) {
  const map: Record<TransferStatus, { label: string; className: string }> = {
    submitted: { label: "Submitted", className: "bg-white/10 text-white/80" },
    processing: { label: "Processing", className: "bg-teal-400/15 text-teal-300" },
    in_transit: { label: "In Transit", className: "bg-teal-400/15 text-teal-300" },
    delivered: { label: "Delivered", className: "bg-ax-green-400/15 text-ax-green-300" },
  };
  const s = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 ${s.className} text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {s.label}
    </span>
  );
}

function Stepper({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex items-start">
      {STEPS.map((step, i) => {
        const done = i < activeIndex;
        const current = i === activeIndex;
        const upcoming = i > activeIndex;

        return (
          <div key={step.key} className="flex-1 flex flex-col items-center text-center relative">
            {i > 0 && (
              <div
                className={`absolute top-5 right-1/2 w-full h-0.5 -z-10 ${
                  i <= activeIndex ? "bg-ax-green-500" : "bg-navy-100"
                }`}
              />
            )}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                done
                  ? "bg-ax-green-500 border-ax-green-500 text-white"
                  : current
                  ? "bg-teal-600 border-teal-600 text-white"
                  : "bg-white border-navy-100 text-gray-300"
              } ${upcoming ? "" : ""}`}
            >
              {done ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                step.icon
              )}
            </div>
            <p className={`mt-3 text-xs sm:text-sm font-bold ${current || done ? "text-navy-800" : "text-gray-400"}`}>
              {step.label}
            </p>
            <p className="hidden sm:block mt-0.5 text-[11px] text-gray-400 max-w-[110px]">{step.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function TrackTransfer() {
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<"idle" | "loading" | "found" | "not_found">("idle");
  const [result, setResult] = useState<TransferRecord | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ref = input.trim().toUpperCase().replace(/\s+/g, "");
    if (!ref) return;

    setPhase("loading");
    setResult(null);

    window.setTimeout(() => {
      const record = DEMO_TRANSFERS[ref];
      if (record) {
        setResult(record);
        setPhase("found");
      } else {
        setPhase("not_found");
      }
    }, 850);
  };

  const activeIndex = result ? getStepIndex(result.status) : -1;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Search card */}
        <Reveal variant="fade-up" duration={700}>
          <div className="bg-navy-50/60 border border-navy-100 rounded-3xl p-6 sm:p-10">
            <h2 className="font-heading font-extrabold text-navy-800 text-2xl sm:text-3xl mb-2 text-center">
              Enter Your Transfer Reference Number
            </h2>
            <p className="text-gray-500 text-sm sm:text-base text-center mb-8 max-w-lg mx-auto">
              You&rsquo;ll find this number in your confirmation email or SMS — it usually starts with &ldquo;AX&rdquo;.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <div className="relative flex-1">
                <svg
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                </svg>
                <input
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    if (phase !== "idle") setPhase("idle");
                  }}
                  placeholder="e.g. AX7841235690"
                  className="w-full bg-white border border-navy-200 rounded-xl pl-11 pr-4 py-3.5 text-navy-800 font-semibold tracking-wide placeholder:text-gray-400 placeholder:font-normal outline-none focus:border-teal-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={phase === "loading" || !input.trim()}
                className="inline-flex items-center justify-center gap-2 bg-ax-green-500 hover:bg-ax-green-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-colors whitespace-nowrap"
              >
                {phase === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Tracking…
                  </>
                ) : (
                  <>
                    Track Transfer
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Demo hint */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              <span className="text-xs text-gray-400">Try a demo number:</span>
              {Object.keys(DEMO_TRANSFERS).map((ref) => (
                <button
                  key={ref}
                  type="button"
                  onClick={() => setInput(ref)}
                  className="text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-100 px-2.5 py-1 rounded-full transition-colors"
                >
                  {ref}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Not found */}
        {phase === "not_found" && (
          <Reveal variant="fade-up" duration={500}>
            <div className="mt-8 bg-red-50 border border-red-100 rounded-2xl p-6 flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <div>
                <h3 className="font-heading font-bold text-navy-800 text-base mb-1">We couldn&rsquo;t find that transfer</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Double-check the reference number and try again, or{" "}
                  <a href="mailto:support@atlanticxchange.com" className="text-teal-600 font-semibold hover:text-teal-700">
                    contact our support team
                  </a>{" "}
                  for help.
                </p>
              </div>
            </div>
          </Reveal>
        )}

        {/* Result */}
        {phase === "found" && result && (
          <Reveal variant="fade-up" duration={600}>
            <div className="mt-8 rounded-3xl border border-navy-100 overflow-hidden">
              {/* Header */}
              <div className="bg-navy-800 px-6 sm:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Reference Number</p>
                  <p className="text-white font-heading font-bold text-lg tracking-wide">{result.ref}</p>
                </div>
                <StatusBadge status={result.status} />
              </div>

              {/* Stepper */}
              <div className="p-6 sm:p-10 bg-white">
                <Stepper activeIndex={activeIndex} />
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-navy-100 px-6 sm:px-8 py-6 bg-navy-50/40">
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Recipient</p>
                  <p className="text-navy-800 font-bold text-sm">{result.recipientName}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{result.destination}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Amount Sent</p>
                  <p className="text-navy-800 font-bold text-sm">${result.amountSent.toLocaleString()} USD</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Recipient Gets</p>
                  <p className="text-ax-green-600 font-bold text-sm">
                    {result.amountReceived.toLocaleString(undefined, { maximumFractionDigits: 2 })} {result.currencyReceived}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    {result.status === "delivered" ? "Delivered On" : "Est. Delivery"}
                  </p>
                  <p className="text-navy-800 font-bold text-sm">
                    {result.status === "delivered" ? result.deliveredOn : result.estimatedDelivery}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
