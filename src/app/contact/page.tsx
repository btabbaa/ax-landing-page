import type { Metadata } from "next";
import Navbar         from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer         from "@/components/ui/Footer";
import PageHero       from "@/components/ui/PageHero";
import Reveal         from "@/components/ui/Reveal";
import Link           from "next/link";
import {
  SUPPORT_EMAIL,
  INFO_EMAIL,
  PHONE_DEARBORN,
  PHONE_CHICAGO,
  WHATSAPP,
  WHATSAPP_URL,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact & Support — Atlantic Xchange",
  description:
    "Reach Atlantic Xchange by email, 24-hour WhatsApp, or phone. Our support team is ready to help with transfers, accounts, and branch questions.",
};

const channels = [
  {
    key:   "email",
    title: "Email",
    tag:   "Written support",
    desc:  "Send us the details of your transfer or account question. We typically reply within 2 hours on business days.",
    href:  `mailto:${SUPPORT_EMAIL}`,
    cta:   "Email Support",
    value: SUPPORT_EMAIL,
    color: "bg-navy-800",
    external: false,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key:   "whatsapp",
    title: "WhatsApp",
    tag:   "24-hour support",
    desc:  "Message us any time, day or night. 24-hour WhatsApp support for transfers, accounts, and pickup questions.",
    href:  WHATSAPP_URL,
    cta:   "Open WhatsApp",
    value: WHATSAPP.display,
    color: "bg-ax-green-500",
    external: true,
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.43 0 .07 5.36.07 11.96c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63a11.94 11.94 0 005.8 1.48h.01c6.61 0 11.97-5.36 11.97-11.96 0-3.2-1.25-6.2-3.48-8.41zM12.03 21.15h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.69.97.99-3.6-.24-.37a9.9 9.9 0 01-1.52-5.3c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 012.91 7.01c0 5.47-4.46 9.92-9.98 9.92zm5.44-7.43c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
      </svg>
    ),
  },
  {
    key:   "phone",
    title: "Phone Call",
    tag:   "Talk to a person",
    desc:  "Call either flagship branch during business hours. We'll help with transfers, pickup locations, and account questions.",
    href:  `tel:${PHONE_DEARBORN.tel}`,
    cta:   "Call Dearborn",
    value: PHONE_DEARBORN.display,
    color: "bg-teal-600",
    external: false,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const offices = [
  {
    city:    "Dearborn",
    state:   "Michigan",
    address: ["5846 Schaefer Rd", "Dearborn, MI 48126"],
    phone:   PHONE_DEARBORN,
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
    phone:   PHONE_CHICAGO,
    hours: [
      { d: "Monday – Friday", h: "9:00 AM – 6:00 PM" },
      { d: "Saturday",        h: "10:00 AM – 6:00 PM" },
      { d: "Sunday",          h: "Closed" },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact & Support"
          title="How Can We "
          highlight="Help You?"
          subtitle="Reach us by email, 24-hour WhatsApp, or phone — whichever is easiest. Real people, real answers, no runaround."
          accentColor="green"
        />

        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <Reveal variant="fade-up" duration={700}>
              <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">
                  Support Channels
                </p>
                <h2 className="font-heading font-extrabold text-navy-800 text-3xl sm:text-4xl">
                  Email, 24-hour WhatsApp, or a phone call
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
              {channels.map((ch, i) => (
                <Reveal key={ch.key} variant="fade-up" delay={i * 80} duration={650}>
                  <div id={ch.key} className="h-full flex flex-col bg-navy-50/60 border border-navy-100 rounded-2xl p-7 sm:p-8 scroll-mt-24">
                    <div className={`${ch.color} text-white w-14 h-14 rounded-xl flex items-center justify-center mb-5`}>
                      {ch.icon}
                    </div>
                    <p className="text-teal-600 text-[11px] font-bold uppercase tracking-widest mb-2">{ch.tag}</p>
                    <h3 className="font-heading font-bold text-navy-800 text-xl mb-2">{ch.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{ch.desc}</p>
                    <p className="font-semibold text-navy-800 text-sm mb-5 break-all">{ch.value}</p>
                    <a
                      href={ch.href}
                      {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="inline-flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
                    >
                      {ch.cta}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <Reveal variant="fade-up" duration={700}>
              <div className="text-center mb-10 sm:mb-14">
                <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">
                  Visit Us
                </p>
                <h2 className="font-heading font-extrabold text-navy-800 text-3xl sm:text-4xl">
                  Flagship Branches
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
              {offices.map((office, i) => (
                <Reveal key={office.city} variant="fade-up" delay={i * 80} duration={650}>
                  <div className="h-full bg-white border border-navy-100 rounded-2xl p-6 sm:p-7">
                    <h3 className="font-heading font-bold text-navy-800 text-lg mb-1">{office.city}</h3>
                    <p className="text-navy-400 text-xs font-medium mb-4">{office.state}, USA</p>
                    <address className="not-italic text-sm text-gray-500 space-y-1 mb-4">
                      {office.address.map((line) => <p key={line}>{line}</p>)}
                    </address>
                    <a
                      href={`tel:${office.phone.tel}`}
                      className="flex items-center gap-2 text-navy-700 font-semibold text-sm hover:text-teal-600 transition-colors mb-5"
                    >
                      {office.phone.display}
                    </a>
                    <div className="border-t border-navy-100 pt-4 space-y-1.5">
                      {office.hours.map((row) => (
                        <div key={row.d} className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">{row.d}</span>
                          <span className={`font-semibold ${row.h === "Closed" ? "text-gray-400" : "text-navy-700"}`}>
                            {row.h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="fade-up" delay={160} duration={600}>
              <p className="text-center text-gray-400 text-sm mt-8">
                General inquiries:{" "}
                <a href={`mailto:${INFO_EMAIL}`} className="text-teal-600 font-semibold hover:text-teal-700">
                  {INFO_EMAIL}
                </a>
                {" · "}
                <Link href="/locations" className="text-teal-600 font-semibold hover:text-teal-700">
                  See all locations
                </Link>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
