"use client";

import Image from "next/image";
import Link  from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services",     href: "/#services"    },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Rates",        href: "/rates"        },
  { label: "Partners",     href: "/#partners"    },
  { label: "About",        href: "/about"        },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-800 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={close}>
            <Image
              src="/logo-white.svg"
              alt="Atlantic Xchange"
              width={160}
              height={46}
              className="h-8 sm:h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/65 hover:text-white transition-colors duration-150"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="flex items-center gap-2">
            <Link
              href="#login"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="#send"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-ax-green-500 hover:bg-ax-green-600 active:bg-ax-green-700 text-white font-semibold text-sm transition-colors duration-150"
              onClick={close}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Money
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2.5 -mr-1 text-white/70 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="relative block w-5 h-4">
                <span className={`absolute left-0 h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${open ? "top-[7px] rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-[7px] h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "w-0 opacity-0" : "w-5 opacity-100"}`} />
                <span className={`absolute left-0 h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${open ? "top-[7px] -rotate-45" : "top-[14px]"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
          onClick={close}
        />

        {/* Panel — slides down from top */}
        <div
          className={`absolute top-16 left-0 right-0 bg-navy-900 border-b border-white/[0.08] shadow-2xl transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="flex items-center justify-between py-4 border-b border-white/[0.06] text-base font-medium text-white/70 hover:text-white transition-colors last:border-0"
              >
                <span>{l.label}</span>
                <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>

          {/* Mobile bottom CTA */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex gap-3">
            <Link
              href="#login"
              onClick={close}
              className="flex-1 text-center py-3.5 rounded-xl border border-white/15 text-white font-semibold text-sm hover:bg-white/[0.06] transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="#send"
              onClick={close}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-ax-green-500 hover:bg-ax-green-600 text-white font-bold text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Money
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
