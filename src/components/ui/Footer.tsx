"use client";

import Link  from "next/link";
import { useState } from "react";
import { PHONE_DEARBORN, SUPPORT_EMAIL, WHATSAPP_URL } from "@/lib/contact";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type FooterLink = { label: string; href: string; external?: boolean };

const links: Record<string, FooterLink[]> = {
  Services: [
    { label: "Person to Person",     href: "/services" },
    { label: "Business to Business", href: "/services" },
    { label: "SEPA Transfers",       href: "/services" },
    { label: "Currency Exchange",    href: "/services" },
  ],
  Company: [
    { label: "About Us",              href: "/about" },
    { label: "How It Works",          href: "/how-it-works" },
    { label: "Rates & Fees",          href: "/rates" },
    { label: "Find a Location",       href: "/locations" },
    { label: "Partner Program",       href: "/partners" },
    { label: "Compliance & Licenses", href: "/about#licenses" },
  ],
  Support: [
    { label: "Contact Us",  href: "/contact" },
    { label: "Email",       href: `mailto:${SUPPORT_EMAIL}`, external: true },
    { label: "WhatsApp",    href: WHATSAPP_URL, external: true },
    { label: "Phone Call",  href: `tel:${PHONE_DEARBORN.tel}`, external: true },
    { label: "FAQ",         href: "/how-it-works#faq" },
    { label: "Track Transfer", href: "/track" },
  ],
  Legal: [
    { label: "Terms & Conditions",  href: "/legal/terms" },
    { label: "Privacy Policy",      href: "/legal/privacy" },
    { label: "Privacy Disclosure",  href: "/legal/privacy-disclosure" },
    { label: "Terms Of Use",        href: "/legal/terms-of-use" },
  ],
};

const offices = [
  {
    city:  "Dearborn",
    lines: ["5846 Schaefer Rd", "Dearborn, MI 48126"],
    phone: "+1 (313)-447-0502",
  },
  {
    city:  "Chicago",
    lines: ["2551 W Devon Ave", "Chicago, IL 60659"],
    phone: "+1 (773) 961-7366",
  },
];

function FooterLinkGroup({ category, items }: { category: string; items: FooterLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06] sm:border-0">
      {/* Mobile: accordion header */}
      <button
        className="sm:hidden w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-xs uppercase tracking-widest">{category}</span>
        <svg
          className={`w-4 h-4 text-white/40 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Desktop: always visible header */}
      <h4 className="hidden sm:block text-white font-semibold text-xs uppercase tracking-widest mb-4">
        {category}
      </h4>

      {/* Links — collapsible on mobile */}
      <ul
        className={`space-y-2.5 overflow-hidden transition-all duration-300 sm:block ${
          open ? "max-h-80 pb-4" : "max-h-0 sm:max-h-none"
        }`}
      >
        {items.map((item) => (
          <li key={item.label}>
            {item.external ? (
              <a
                href={item.href}
                {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-white/45 text-sm hover:text-white transition-colors block py-0.5"
              >
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className="text-white/45 text-sm hover:text-white transition-colors block py-0.5">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:items-end gap-0 sm:gap-10 mb-8 sm:mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2 pb-8 sm:pb-0 border-b border-white/[0.06] sm:border-0 mb-2 sm:mb-0">
            <Link href="/" className="inline-block mb-5 sm:mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/logo-white.svg`}
                alt="Atlantic Xchange"
                className="h-9 sm:h-10 w-auto"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-5 sm:mb-6">
              Empowering individuals and businesses to move money globally —
              fast, affordable, and reliable.
            </p>
            <div className="space-y-1.5 text-sm text-white/45">
             
              <a href="mailto:info@atlanticxchange.com"
                className="hover:text-white transition-colors block">
                info@atlanticxchange.com
              </a>
            </div>

            {/* Office locations */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-6">
              {offices.map((office) => (
                <div key={office.city}>
                  <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-3">
                    {office.city}
                  </h4>
                  <address className="not-italic space-y-1 text-sm text-white/45">
                    {office.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    <a
                      href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                      className="hover:text-white transition-colors block"
                    >
                      {office.phone}
                    </a>
                  </address>
                </div>
              ))}
            </div>

            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 mt-5 text-teal-400 text-sm font-semibold hover:text-teal-300 transition-colors"
            >
              See all locations
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Link columns */}
          <div className="sm:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-6 lg:gap-8">
            {(Object.entries(links) as [string, FooterLink[]][]).map(([category, items]) => (
              <FooterLinkGroup key={category} category={category} items={items} />
            ))}
          </div>
        </div>

        {/* Licensing disclosure */}
        <div className="border-t border-white/[0.08] pt-6 pb-6">
          <p className="text-white/35 text-[11px] sm:text-xs leading-relaxed max-w-4xl">
            Atlantic Xchange is licensed as a money transmitter in{" "}
            <Link href="/about#licenses" className="text-white/50 hover:text-white transition-colors">
              MI, IL, NJ, TX, VA, MD &amp; FL
            </Link>
            . Licensed as a money transmitter by the New York State Department of Financial
            Services. Licensed by the Georgia Department of Banking and Finance.
            NMLS ID # 1544045. All rights reserved. Conditions apply.
          </p>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Atlantic Xchange. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {links.Legal.map((l) => (
              <Link key={l.label} href={l.href}
                className="text-white/30 text-xs hover:text-white/60 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
