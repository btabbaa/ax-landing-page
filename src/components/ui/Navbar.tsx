"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AppDownloadPrompt from "@/components/ui/AppDownloadPrompt";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const primaryLinks = [
  { label: "Services",         href: "/services" },
  { label: "Money Transfer",   href: "/money-transfer" },
  { label: "Exchange",         href: "/currency-exchange" },
  { label: "Locations",        href: "/locations" },
  { label: "Track",            href: "/track" },
];

const companyLinks = [
  { label: "About",    href: "/about" },
  { label: "FAQ",      href: "/faq" },
  { label: "Partners", href: "/partners" },
  { label: "Contact",  href: "/contact" },
];

const mobileLinks = [
  { label: "Services",          href: "/services" },
  { label: "Money Transfer",    href: "/money-transfer" },
  { label: "Currency Exchange", href: "/currency-exchange" },
  { label: "Locations",         href: "/locations" },
  { label: "Track Transfer",    href: "/track" },
  { label: "FAQ",               href: "/faq" },
  { label: "About",             href: "/about" },
  { label: "Partners",          href: "/partners" },
  { label: "Contact Us",        href: "/contact" },
];

const APP_PROMPT_KEY = "ax-app-prompt-dismissed";
const isMobileViewport = () => window.matchMedia("(max-width: 1023px)").matches;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
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

  const close = () => {
    setOpen(false);
    setCompanyOpen(false);
  };

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

  const handleDownloadClick = (e: React.MouseEvent) => {
    close();
    const baselessPath = pathname.replace(basePath, "") || "/";
    if (baselessPath === "/" || baselessPath === "/money-transfer") {
      e.preventDefault();
      document.getElementById("download-app")?.scrollIntoView({ behavior: "smooth" });
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

          {/* Desktop nav — product first, then company */}
          <nav className="hidden lg:flex items-center h-16 gap-5 xl:gap-6">
            {primaryLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center h-8 text-[13px] leading-none font-medium text-white/65 hover:text-white transition-colors duration-150 whitespace-nowrap"
              >
                {l.label}
              </Link>
            ))}
            <div
              className="relative inline-flex items-center h-8"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center h-8 gap-1 text-[13px] leading-none font-medium text-white/65 hover:text-white transition-colors duration-150"
                aria-expanded={companyOpen}
                aria-haspopup="true"
                onClick={() => setCompanyOpen((v) => !v)}
              >
                Company
                <svg
                  className={`w-3 h-3 shrink-0 transition-transform ${companyOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-150 ${
                  companyOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="min-w-[160px] rounded-xl bg-navy-900 border border-white/10 shadow-2xl py-2">
                  {companyLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={close}
                      className="block px-4 py-2 text-[13px] font-medium text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTAs */}
          <div className="flex items-center gap-1.5">
            <Link
              href="#login"
              onClick={handleSignIn}
              className="hidden sm:inline-flex items-center px-2.5 py-1.5 text-[13px] font-medium text-white/70 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <a
              href="/#send"
              onClick={handleSendClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-ax-green-500 hover:bg-ax-green-600 active:bg-ax-green-700 text-white font-semibold text-[13px] transition-colors duration-150 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
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
            {mobileLinks.map((l) => (
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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
            <a
              href="/#download-app"
              onClick={handleDownloadClick}
              className="flex items-center justify-between gap-3 w-full px-4 py-3.5 rounded-xl bg-white/[0.06] border border-white/10 text-white font-semibold text-sm hover:bg-white/[0.1] transition-colors"
            >
              <span className="inline-flex items-center gap-2.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Download the App
              </span>
              <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

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
