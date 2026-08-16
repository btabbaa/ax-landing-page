"use client";

import { useEffect, useMemo, useState } from "react";
import Link   from "next/link";
import { useSearchParams } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import { PHONE_DEARBORN, WHATSAPP_URL } from "@/lib/contact";
import Flag from "@/components/ui/Flag";

/* ---------- Sending (USA) data ---------- */

const agentStates = [
  { code: "MI", name: "Michigan" },
  { code: "IL", name: "Illinois" },
  { code: "NJ", name: "New Jersey" },
  { code: "TX", name: "Texas" },
  { code: "VA", name: "Virginia" },
  { code: "MD", name: "Maryland" },
  { code: "FL", name: "Florida" },
  { code: "NY", name: "New York" },
  { code: "GA", name: "Georgia" },
];

/* Cities with an active branch or partner agent, per state */
const stateCities: Record<string, { city: string; type: "Flagship Branch" | "Partner Agent" }[]> = {
  MI: [
    { city: "Dearborn",         type: "Flagship Branch" },
    { city: "Dearborn Heights", type: "Partner Agent" },
    { city: "Detroit",          type: "Partner Agent" },
    { city: "Sterling Heights", type: "Partner Agent" },
  ],
  IL: [
    { city: "Chicago",    type: "Flagship Branch" },
    { city: "Skokie",     type: "Partner Agent" },
    { city: "Bridgeview", type: "Partner Agent" },
  ],
  NJ: [
    { city: "Paterson",    type: "Partner Agent" },
    { city: "Jersey City", type: "Partner Agent" },
    { city: "Newark",      type: "Partner Agent" },
  ],
  TX: [
    { city: "Houston",     type: "Partner Agent" },
    { city: "Dallas",      type: "Partner Agent" },
    { city: "San Antonio", type: "Partner Agent" },
  ],
  VA: [
    { city: "Alexandria",  type: "Partner Agent" },
    { city: "Falls Church", type: "Partner Agent" },
  ],
  MD: [
    { city: "Baltimore",     type: "Partner Agent" },
    { city: "Silver Spring", type: "Partner Agent" },
  ],
  FL: [
    { city: "Miami",   type: "Partner Agent" },
    { city: "Orlando", type: "Partner Agent" },
    { city: "Tampa",   type: "Partner Agent" },
  ],
  NY: [
    { city: "Brooklyn", type: "Partner Agent" },
    { city: "Buffalo",  type: "Partner Agent" },
    { city: "Yonkers",  type: "Partner Agent" },
  ],
  GA: [
    { city: "Atlanta",  type: "Partner Agent" },
    { city: "Marietta", type: "Partner Agent" },
  ],
};

const branches = [
  {
    city:    "Dearborn",
    state:   "Michigan",
    address: ["5846 Schaefer Rd", "Dearborn, MI 48126"],
    phone:   "+1 (313)-447-0502",
    email:   "info@atlanticxchange.com",
    hours: [
      { d: "Monday – Friday", h: "9:00 AM – 6:00 PM" },
      { d: "Saturday",        h: "10:00 AM – 6:00 PM" },
      { d: "Sunday",          h: "Closed" },
    ],
  },
  {
    city:    "Chicago",
    state:   "Illinois",
    address: ["2551 W Devon Ave", "Chicago, IL 60659"],
    phone:   "+1 (773) 961-7366",
    email:   "info@atlanticxchange.com",
    hours: [
      { d: "Monday – Friday", h: "9:00 AM – 6:00 PM" },
      { d: "Saturday",        h: "10:00 AM – 6:00 PM" },
      { d: "Sunday",          h: "Closed" },
    ],
  },
];

/* ---------- Receiving (worldwide) data ---------- */

type Country = { iso: string; name: string; currency: string; time: string; method: string };

const regions: { name: string; countries: Country[] }[] = [
  {
    name: "Middle East",
    countries: [
      { iso: "jo", name: "Jordan",       currency: "JOD", time: "Same day",  method: "Cash Pickup & Bank Transfer" },
      { iso: "eg", name: "Egypt",        currency: "EGP", time: "1–2 hours", method: "Cash Pickup & Bank Transfer" },
      { iso: "sy", name: "Syria",        currency: "SYP", time: "24 hours",  method: "Cash Pickup" },
      { iso: "ae", name: "UAE",          currency: "AED", time: "Same day",  method: "Bank Transfer" },
      { iso: "iq", name: "Iraq",         currency: "IQD", time: "24 hours",  method: "Cash Pickup" },
    ],
  },
  {
    name: "Africa",
    countries: [
      { iso: "ma", name: "Morocco", currency: "MAD", time: "24 hours", method: "Cash Pickup & Bank Transfer" },
      { iso: "tn", name: "Tunisia", currency: "TND", time: "24 hours", method: "Bank Transfer" },
      { iso: "ng", name: "Nigeria", currency: "NGN", time: "24 hours", method: "Bank Transfer & Mobile Wallet" },
      { iso: "gh", name: "Ghana",   currency: "GHS", time: "24 hours", method: "Mobile Wallet & Bank Transfer" },
    ],
  },
  {
    name: "Asia",
    countries: [
      { iso: "pk", name: "Pakistan",    currency: "PKR", time: "1–2 hours", method: "Cash Pickup & Bank Transfer" },
      { iso: "bd", name: "Bangladesh",  currency: "BDT", time: "1–2 hours", method: "Cash Pickup, Bank Transfer & Mobile Wallet" },
      { iso: "cn", name: "China",       currency: "CNY", time: "Same day",  method: "Bank Transfer" },
      { iso: "ph", name: "Philippines", currency: "PHP", time: "24 hours",  method: "Cash Pickup & Bank Transfer" },
      { iso: "in", name: "India",       currency: "INR", time: "1–2 hours", method: "Bank Transfer" },
    ],
  },
  {
    name: "Europe",
    countries: [
      { iso: "gb", name: "United Kingdom", currency: "GBP", time: "Same day", method: "Bank Transfer" },
      { iso: "de", name: "Germany",        currency: "EUR", time: "Same day", method: "SEPA Bank Transfer" },
      { iso: "fr", name: "France",         currency: "EUR", time: "Same day", method: "SEPA Bank Transfer" },
    ],
  },
  {
    name: "Americas",
    countries: [
      { iso: "mx", name: "Mexico",   currency: "MXN", time: "Same day", method: "Cash Pickup & Bank Transfer" },
      { iso: "co", name: "Colombia", currency: "COP", time: "24 hours", method: "Bank Transfer" },
    ],
  },
];

const regionTabs = ["All", ...regions.map((r) => r.name)];

const REGION_ALIASES: Record<string, string> = {
  europe: "Europe",
  sepa: "Europe",
  "middle-east": "Middle East",
  "middle east": "Middle East",
  mena: "Middle East",
};

function resolveRegion(param?: string) {
  if (!param) return "All";
  const key = param.trim().toLowerCase().replace(/[+_]/g, " ");
  const exact = regionTabs.find((r) => r.toLowerCase() === key);
  if (exact) return exact;
  return REGION_ALIASES[key] ?? "All";
}

/* ---------- Component ---------- */

type Tab = "send" | "receive";

export default function LocationsSection() {
  const searchParams = useSearchParams();
  const regionFromUrl = resolveRegion(searchParams.get("region") ?? undefined);
  const [tab, setTab] = useState<Tab>(regionFromUrl !== "All" ? "receive" : "send");
  const [search, setSearch] = useState("");
  const [activeRegion, setActiveRegion] = useState(regionFromUrl);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  useEffect(() => {
    const region = resolveRegion(searchParams.get("region") ?? undefined);
    if (region === "All") return;
    setTab("receive");
    setActiveRegion(region);
  }, [searchParams]);

  const visibleRegions = useMemo(() => {
    const q = search.trim().toLowerCase();
    return regions
      .filter((r) => activeRegion === "All" || r.name === activeRegion)
      .map((r) => ({ ...r, countries: r.countries.filter((c) => c.name.toLowerCase().includes(q)) }))
      .filter((r) => r.countries.length > 0);
  }, [search, activeRegion]);

  return (
    <section id="coverage" className="py-16 sm:py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Tab switcher */}
        <Reveal variant="fade-up" duration={700}>
          <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
            <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">
              Locations & Coverage
            </p>
            <h2 className="font-heading font-extrabold text-navy-800 text-3xl sm:text-4xl lg:text-5xl mb-6">
              Where You Can Send &amp; Receive
            </h2>

            <div className="inline-flex bg-navy-50 border border-navy-100 rounded-full p-1.5">
              <button
                onClick={() => setTab("send")}
                className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  tab === "send" ? "bg-navy-800 text-white" : "text-navy-500 hover:text-navy-800"
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <Flag code="us" name="United States" size="sm" />
                Sending — USA
              </button>
              <button
                onClick={() => setTab("receive")}
                className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  tab === "receive" ? "bg-navy-800 text-white" : "text-navy-500 hover:text-navy-800"
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18M12 21a9 9 0 100-18 9 9 0 000 18z" />
                </svg>
                Receiving — Worldwide
              </button>
            </div>
          </div>
        </Reveal>

        {/* ---------- SEND TAB ---------- */}
        {tab === "send" && (
          <div>
            <Reveal variant="fade-up" duration={600}>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-center mb-10">
                Every transfer originates in the United States — through our network of
                <span className="font-semibold text-navy-700"> 500+ partner agent locations</span>{" "}
                spread across many US states, or from one of our flagship branches below.
              </p>
            </Reveal>

            {/* Agent network states */}
            <Reveal variant="fade-up" delay={80} duration={600}>
              <div className="bg-navy-50/60 border border-navy-100 rounded-2xl p-6 sm:p-8 mb-10">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
                  <h3 className="font-heading font-bold text-navy-800 text-lg">
                    Agent Network Coverage
                  </h3>
                  <span className="text-navy-400 text-xs font-medium">Growing every month</span>
                </div>
                <p className="text-gray-500 text-sm mb-5">
                  Tap a state to see its branches and partner agent locations.
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
                  {agentStates.map((s, i) => {
                    const active = selectedState === s.code;
                    return (
                      <Reveal key={s.code} variant="zoom-in" delay={i * 40} duration={450}>
                        <button
                          type="button"
                          onClick={() => setSelectedState(active ? null : s.code)}
                          aria-pressed={active}
                          className={`w-full rounded-xl py-3.5 text-center border transition-colors ${
                            active
                              ? "bg-navy-800 border-navy-800 text-white"
                              : "bg-white border-navy-100 hover:border-teal-300 hover:bg-teal-50"
                          }`}
                        >
                          <p className={`font-heading font-extrabold text-base ${active ? "text-white" : "text-navy-800"}`}>
                            {s.code}
                          </p>
                          <p className={`text-[10px] mt-0.5 truncate px-1 ${active ? "text-white/70" : "text-navy-400"}`}>
                            {s.name}
                          </p>
                        </button>
                      </Reveal>
                    );
                  })}
                </div>

                {/* Selected state — offices & agents */}
                {selectedState && (
                  <Reveal variant="fade-up" duration={400}>
                    <div className="mt-6 pt-6 border-t border-navy-100">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-heading font-bold text-navy-800 text-sm">
                          {agentStates.find((s) => s.code === selectedState)?.name} — Offices &amp; Agents
                          <span className="text-navy-300 font-normal">
                            {" "}({stateCities[selectedState]?.length ?? 0})
                          </span>
                        </h4>
                        <button
                          onClick={() => setSelectedState(null)}
                          className="text-navy-400 hover:text-navy-700 text-xs font-semibold transition-colors"
                        >
                          Close ✕
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(stateCities[selectedState] ?? []).map((loc) => (
                          <div
                            key={loc.city}
                            className="flex items-center gap-3 bg-white border border-navy-100 rounded-xl p-4"
                          >
                            <span className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              loc.type === "Flagship Branch" ? "bg-navy-800 text-white" : "bg-teal-50 text-teal-600"
                            }`}>
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-navy-800 text-sm truncate">{loc.city}</p>
                              <p className={`text-xs truncate ${loc.type === "Flagship Branch" ? "text-teal-600 font-semibold" : "text-gray-400"}`}>
                                {loc.type}
                              </p>
                            </div>
                          </div>
                        ))}

                        {!(stateCities[selectedState]?.length) && (
                          <p className="text-gray-400 text-sm py-2">
                            No listed locations yet in this state — send online instead.
                          </p>
                        )}
                      </div>

                      <p className="text-gray-400 text-xs mt-4 leading-relaxed">
                        Full addresses and hours for flagship branches are listed below. For a nearby
                        partner agent, call or WhatsApp us — we&apos;ll share the closest location.
                      </p>
                      <div className="mt-4 flex flex-col sm:flex-row gap-2">
                        <a
                          href={`tel:${PHONE_DEARBORN.tel}`}
                          className="inline-flex items-center justify-center gap-2 bg-white border border-navy-100 hover:border-teal-300 text-navy-800 font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors"
                        >
                          Call {PHONE_DEARBORN.display}
                        </a>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-white border border-navy-100 hover:border-teal-300 text-navy-800 font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors"
                        >
                          WhatsApp
                        </a>
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center gap-2 bg-white border border-navy-100 hover:border-teal-300 text-navy-800 font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors"
                        >
                          All contact details
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                )}
              </div>
            </Reveal>

            {/* Flagship branches */}
            <Reveal variant="fade-up" delay={120} duration={600}>
              <h3 className="font-heading font-bold text-navy-800 text-lg mb-5">
                Flagship Branches
              </h3>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {branches.map((office, i) => (
                <Reveal key={office.city} variant="fade-up" delay={160 + i * 100} duration={650}>
                  <div className="h-full flex flex-col bg-navy-50/60 border border-navy-100 rounded-2xl p-6 sm:p-7">
                    <div className="flex items-start gap-3 mb-5">
                      <span className="w-11 h-11 rounded-xl bg-navy-800 text-white flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <div>
                        <h4 className="font-heading font-bold text-navy-800 text-lg">{office.city}</h4>
                        <p className="text-navy-400 text-xs font-medium inline-flex items-center gap-1.5">
                          <Flag code="us" name="United States" size="sm" />
                          {office.state}, USA
                        </p>
                      </div>
                    </div>

                    <address className="not-italic text-sm text-gray-500 space-y-1 mb-5">
                      {office.address.map((line) => <p key={line}>{line}</p>)}
                    </address>

                    <div className="space-y-1.5 text-sm mb-5">
                      <a href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                        className="flex items-center gap-2 text-navy-700 font-semibold hover:text-teal-600 transition-colors">
                        <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {office.phone}
                      </a>
                      <a href={`mailto:${office.email}`}
                        className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
                        <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {office.email}
                      </a>
                    </div>

                    <div className="border-t border-navy-100 pt-4 mt-auto space-y-1.5">
                      {office.hours.map((row) => (
                        <div key={row.d} className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">{row.d}</span>
                          <span className={`font-semibold ${row.h === "Closed" ? "text-gray-400" : "text-navy-700"}`}>{row.h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Online card */}
              <Reveal variant="fade-up" delay={160 + branches.length * 100} duration={650}>
                <div className="h-full flex flex-col justify-between bg-navy-800 rounded-2xl p-6 sm:p-7 text-white">
                  <div>
                    <span className="w-11 h-11 rounded-xl bg-ax-green-500 text-white flex items-center justify-center mb-5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <h4 className="font-heading font-bold text-lg mb-2">No Agent Near You?</h4>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      You don&apos;t need a physical location. Create an account and send money
                      securely online, from anywhere in the United States, 24/7.
                    </p>
                  </div>
                  <Link
                    href="/#send"
                    className="inline-flex items-center justify-center gap-2 bg-ax-green-500 hover:bg-ax-green-600 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                  >
                    Start a Transfer
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal variant="fade-up" delay={200} duration={600}>
              <p className="text-center text-gray-400 text-sm mt-10">
                Interested in becoming an agent in your state?{" "}
                <Link href="/contact" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Contact our partnerships team
                </Link>
                .
              </p>
            </Reveal>
          </div>
        )}

        {/* ---------- RECEIVE TAB ---------- */}
        {tab === "receive" && (
          <div>
            <Reveal variant="fade-up" duration={600}>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-center mb-10">
                Your recipient can receive funds in{" "}
                <span className="font-semibold text-navy-700">150+ countries and territories</span>{" "}
                — by cash pickup, bank transfer, or mobile wallet, depending on the destination.
              </p>
            </Reveal>

            {/* Search + region filter */}
            <Reveal variant="fade-up" delay={80} duration={600}>
              <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10">
                <div className="relative flex-1 sm:max-w-xs">
                  <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search country…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-navy-100 bg-navy-50 text-navy-800 text-sm outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {regionTabs.map((r) => (
                    <button
                      key={r}
                      onClick={() => setActiveRegion(r)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                        activeRegion === r
                          ? "bg-navy-800 text-white"
                          : "bg-navy-50 text-navy-500 border border-navy-100 hover:border-navy-300"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Region groups */}
            <div className="space-y-10">
              {visibleRegions.map((region, ri) => (
                <Reveal key={region.name} variant="fade-up" delay={ri * 60} duration={600}>
                  <div>
                    <h3 className="font-heading font-bold text-navy-700 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                      {region.name}
                      <span className="text-navy-300 font-normal">({region.countries.length})</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {region.countries.map((c) => (
                        <div
                          key={c.name}
                          className="flex items-center gap-3 bg-navy-50/60 border border-navy-100 rounded-xl p-4 hover:border-teal-300 transition-colors"
                        >
                          <Flag code={c.iso} name={c.name} size="lg" />
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-navy-800 text-sm truncate">{c.name}</p>
                            <p className="text-gray-400 text-xs truncate">{c.method}</p>
                          </div>
                          <span className="flex-shrink-0 text-[11px] font-medium text-teal-700 bg-teal-50 border border-teal-100 px-2 py-1 rounded-full whitespace-nowrap">
                            {c.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}

              {visibleRegions.length === 0 && (
                <p className="text-center text-gray-400 text-sm py-10">
                  No countries match your search.
                </p>
              )}
            </div>

            <Reveal variant="fade-up" delay={150} duration={600}>
              <p className="text-center text-gray-400 text-sm mt-10">
                + 130 more countries and territories worldwide. Don&apos;t see your destination?{" "}
                <Link href="/contact" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Ask our support team
                </Link>
                .
              </p>
            </Reveal>
          </div>
        )}

      </div>
    </section>
  );
}
