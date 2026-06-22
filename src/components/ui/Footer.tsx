"use client";

import Image from "next/image";
import Link  from "next/link";
import { useState } from "react";

const links: Record<string, string[]> = {
  Services: ["Person to Person", "Business to Business", "SEPA Transfers", "Currency Exchange"],
  Company:  ["About Us", "How It Works", "Rates & Fees", "Compliance & Licenses"],
  Support:  ["Contact Us", "FAQ", "Track Transfer", "Partner Program"],
};

function FooterLinkGroup({ category, items }: { category: string; items: string[] }) {
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
          open ? "max-h-60 pb-4" : "max-h-0 sm:max-h-none"
        }`}
      >
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-white/45 text-sm hover:text-white transition-colors block py-0.5">
              {item}
            </a>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 sm:gap-10 mb-8 sm:mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2 pb-8 sm:pb-0 border-b border-white/[0.06] sm:border-0 mb-2 sm:mb-0">
            <Link href="/" className="inline-block mb-5 sm:mb-6">
              <Image
                src="/logo-white.svg"
                alt="Atlantic Xchange"
                width={180}
                height={52}
                className="h-9 sm:h-10 w-auto"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-5 sm:mb-6">
              Empowering individuals and businesses to move money globally —
              fast, affordable, and reliable.
            </p>
            <div className="space-y-1.5 text-sm text-white/45">
              <p>FinCEN Licensed · NMLS Registered</p>
              <p>256-bit SSL Encryption</p>
              <a href="mailto:info@atlanticxchange.com"
                className="hover:text-white transition-colors block">
                info@atlanticxchange.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-8">
            {(Object.entries(links) as [string, string[]][]).map(([category, items]) => (
              <FooterLinkGroup key={category} category={category} items={items} />
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Atlantic Xchange. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {["Privacy Policy", "Terms of Service", "Licenses"].map((l) => (
              <a key={l} href="#"
                className="text-white/30 text-xs hover:text-white/60 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
