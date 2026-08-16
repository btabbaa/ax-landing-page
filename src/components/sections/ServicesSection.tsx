import Link  from "next/link";
import Reveal from "@/components/ui/Reveal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tag:    "P2P",
    title:  "Person to Person",
    desc:   "Send to friends and family worldwide. Cash pickup or direct bank transfer — always at the best exchange rate.",
    accent: "bg-navy-800",
    tagBg:  "bg-navy-50 text-navy-700",
    border: "hover:border-navy-300",
    href:   "/services#p2p",
    cta:    "Learn more",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    tag:    "B2B",
    title:  "Business to Business",
    desc:   "Transfer funds to vendors, suppliers, and partners internationally — compliant, fast, and at competitive rates.",
    accent: "bg-teal-600",
    tagBg:  "bg-teal-50 text-teal-700",
    border: "hover:border-teal-300",
    href:   "/services#b2b",
    cta:    "Learn more",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tag:    "SEPA",
    title:  "European Transfers",
    desc:   "Send directly to any European bank account with full SEPA compliance. 36 countries — no intermediary banks.",
    accent: "bg-ax-green-500",
    tagBg:  "bg-ax-green-50 text-ax-green-700",
    border: "hover:border-ax-green-200",
    href:   "/locations?region=Europe#coverage",
    cta:    "Find locations",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    tag:    "MENA",
    title:  "Middle East Transfers",
    desc:   "Send to Jordan, Egypt, UAE, and across the region — cash pickup or bank transfer, often the same day.",
    accent: "bg-navy-600",
    tagBg:  "bg-navy-50 text-navy-600",
    border: "hover:border-navy-200",
    href:   "/locations?region=Middle+East#coverage",
    cta:    "Find locations",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 sm:mb-14">
          <Reveal variant="fade-right" duration={700}>
            <div>
              <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">
                Our Services
              </p>
              <h2 className="font-heading font-extrabold text-navy-800 text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-lg">
                Everything You Need to Move Money
              </h2>
            </div>
          </Reveal>
          <Reveal variant="fade-left" delay={150} duration={700}>
            <p className="text-gray-500 max-w-xs text-base leading-relaxed lg:text-right">
              One platform for all your international transfer needs — personal or business.
            </p>
          </Reveal>
        </div>

        {/* Cards — 1 col on mobile, 2 on sm/md, 4 on lg+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((svc, i) => {
            const card = (
              <div
                className={`group bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 ${svc.border} transition-all duration-200 h-full cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-5 sm:mb-7">
                  <div className={`${svc.accent} text-white w-12 h-12 rounded-xl flex items-center justify-center`}>
                    {svc.icon}
                  </div>
                  <span className={`text-[11px] font-bold ${svc.tagBg} px-3 py-1 rounded-full`}>
                    {svc.tag}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-navy-800 text-lg sm:text-xl mb-2 sm:mb-3">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 sm:mb-7">{svc.desc}</p>
                <div className="flex items-center gap-1.5 text-teal-600 text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>{svc.cta}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            );

            return (
              <Reveal key={i} variant="fade-up" delay={i * 120} duration={700}>
                <Link href={svc.href} className="block h-full">{card}</Link>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal variant="fade-up" delay={150} duration={700}>
          <div className="mt-10 sm:mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-semibold text-sm transition-colors"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Reveal>

        {/* Logo strip */}
        <Reveal variant="fade-in" delay={200} duration={800}>
          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-8 sm:py-10 border-t border-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/logo-color.svg`}
              alt="Atlantic Xchange"
              className="h-8 sm:h-10 w-auto opacity-80"
            />
            <div className="h-px sm:h-8 sm:w-px bg-gray-200 w-16" />
            <p className="text-gray-400 text-sm text-center sm:text-left">
              Serving customers across <strong className="text-navy-700">150+ countries</strong> from the United States
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
