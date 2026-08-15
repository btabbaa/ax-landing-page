"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AppDownloadPrompt from "@/components/ui/AppDownloadPrompt";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navLinks = [
  { label: "Services",       href: "/services"    },
  { label: "Partners",       href: "/partners"    },
  { label: "About",          href: "/about"       },
  { label: "How It Works",   href: "/how-it-works" },
  { label: "Rates",          href: "/rates"       },
  { label: "Track Transfer", href: "/track"       },
  { label: "Locations",      href: "/locations"   },
  { label: "Contact Us",     href: "/contact"     },
];

const APP_PROMPT_KEY = "ax-app-prompt-dismissed";
const isMobileViewport = () => window.matchMedia("(max-width: 1023px)").matches;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [appPrompt, setAppPrompt] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open || appPrompt ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, appPrompt]);

  useEffect(() => {
    if (!isMobileViewport()) return;
    if (sessionStorage.getItem(APP_PROMPT_KEY)) return;
    setAppPrompt(true);
  }, []);

  const close = () => setOpen(false);

  const dismissAppPrompt = () => {
    setAppPrompt(false);
    sessionStorage.setItem(APP_PROMPT_KEY, "1");
  };

  const handleSendClick = (e: React.MouseEvent) => {
    close();
    const baselessPath = pathname.replace(basePath, "") || "/";
    if (baselessPath === "/") {
      e.preventDefault();
      document.getElementById("send")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSignIn = (e: React.MouseEvent) => {
    close();
    if (isMobileViewport()) {
      e.preventDefault();
      setAppPrompt(true);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-800 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={close}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/logo-white.svg`}
              alt="Atlantic Xchange"
              className="h-8 sm:h-9 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
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
              onClick={handleSignIn}
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <a
              href="/#send"
              onClick={handleSendClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-ax-green-500 hover:bg-ax-green-600 active:bg-ax-green-700 text-white font-semibold text-sm transition-colors duration-150 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Money
            </a>

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
              onClick={handleSignIn}
              className="flex-1 text-center py-3.5 rounded-xl border border-white/15 text-white font-semibold text-sm hover:bg-white/[0.06] transition-colors"
            >
              Sign In
            </Link>
            <a
              href="/#send"
              onClick={handleSendClick}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-ax-green-500 hover:bg-ax-green-600 text-white font-bold text-sm transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Money
            </a>
          </div>
        </div>
      </div>

      <AppDownloadPrompt open={appPrompt} onClose={dismissAppPrompt} />
    </>
  );
}
