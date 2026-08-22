import type { Metadata } from "next";
import Navbar         from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer         from "@/components/ui/Footer";
import PageHero       from "@/components/ui/PageHero";
import Reveal         from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us — Atlantic Xchange",
  description:
    "Learn about Atlantic Xchange — our mission, values, licenses, and the team behind the USA's most trusted money transfer service.",
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Licensed & Regulated",
    desc:  "Federally licensed by the US Treasury and registered in multiple states. Your money is handled by a fully compliant, government-approved business.",
    color: "bg-navy-800",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Speed & Efficiency",
    desc:  "Most transfers are processed within 24 hours. We've streamlined every step to get money where it needs to go — fast.",
    color: "bg-teal-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fair Pricing",
    desc:  "No hidden fees, no surprise charges. We show you the exact exchange rate and fee before you confirm — always.",
    color: "bg-ax-green-500",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Customer First",
    desc:  "Our support team is available to help at every step. Real people, real answers — not just automated responses.",
    color: "bg-navy-700",
  },
];

const licenses = [
  { name: "FinCEN",       full: "US Treasury — Financial Crimes Enforcement Network", number: "Registered Money Services Business", color: "border-navy-300 bg-navy-50" },
  { name: "NMLS",         full: "Nationwide Multistate Licensing System",              number: "NMLS ID # 1544045",                  color: "border-teal-200 bg-teal-50" },
  { name: "Encryption",   full: "256-bit SSL/TLS Encryption",                          number: "All transfers fully encrypted",      color: "border-ax-green-200 bg-ax-green-50" },
  { name: "State Lic.",   full: "State Money Transmitter Licenses",                    number: "Licensed in 9+ US states",           color: "border-navy-300 bg-navy-50" },
];

const licensedStates = [
  { code: "MI", name: "Michigan" },
  { code: "IL", name: "Illinois" },
  { code: "NJ", name: "New Jersey" },
  { code: "TX", name: "Texas" },
  { code: "VA", name: "Virginia" },
  { code: "MD", name: "Maryland" },
  { code: "FL", name: "Florida" },
];

const additionalRegulators = [
  {
    title: "New York",
    desc:  "Licensed as a money transmitter by the New York State Department of Financial Services.",
  },
  {
    title: "Georgia",
    desc:  "Licensed by the Georgia Department of Banking and Finance.",
  },
];

const milestones = [
  { year: "2018", event: "Atlantic Xchange founded in the United States" },
  { year: "2019", event: "FinCEN registration and first state money transmitter license obtained" },
  { year: "2020", event: "Expanded to serve 50+ countries across the Middle East, Africa, and Europe" },
  { year: "2022", event: "Launched B2B transfer services for businesses and vendors" },
  { year: "2023", event: "Surpassed 10,000 active customers — $2M+ in monthly volume" },
  { year: "2025", event: "Agent partner network launched — 500+ agents across the USA" },
];

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>

        {/* Hero */}
        <PageHero
          eyebrow="About Atlantic Xchange"
          title="Moving Money for the People "
          highlight="Who Need It Most"
          subtitle="We started Atlantic Xchange with a single mission — to make international money transfers accessible, affordable, and trustworthy for everyone living in the United States."
          accentColor="teal"
        />

        {/* Mission Statement */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Reveal variant="fade-right" duration={700}>
                <div>
                  <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-4">Our Mission</p>
                  <h2 className="font-heading font-extrabold text-navy-800 text-4xl lg:text-5xl leading-tight mb-6">
                    Financial Borders Shouldn't Stop Families
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6">
                    Millions of people send money home every month — to support families, pay bills, and fund dreams. 
                    Yet traditional banks make this expensive, slow, and confusing.
                  </p>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    We built Atlantic Xchange to change that. With transparent pricing, real exchange rates, 
                    and dedicated support, we give every customer the financial access they deserve.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="fade-left" delay={150} duration={700}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "2018",   label: "Founded",              color: "bg-navy-800"     },
                    { value: "150+",   label: "Countries Served",     color: "bg-teal-600"     },
                    { value: "10K+",   label: "Happy Customers",      color: "bg-ax-green-500" },
                    { value: "$2M+",   label: "Monthly Volume",       color: "bg-navy-700"     },
                  ].map((s) => (
                    <div key={s.label} className={`${s.color} rounded-2xl p-6 text-white`}>
                      <p className="font-heading font-extrabold text-4xl leading-none mb-1">{s.value}</p>
                      <p className="text-white/65 text-sm">{s.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal variant="fade-up" duration={700}>
              <div className="text-center mb-14">
                <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">What Drives Us</p>
                <h2 className="font-heading font-extrabold text-navy-800 text-4xl lg:text-5xl">Our Core Values</h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <Reveal key={v.title} variant="fade-up" delay={i * 100} duration={650}>
                  <div className="bg-white rounded-2xl border border-navy-100 p-7 h-full">
                    <div className={`${v.color} text-white w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                      {v.icon}
                    </div>
                    <h3 className="font-heading font-bold text-navy-800 text-lg mb-2">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <Reveal variant="fade-up" duration={700}>
              <div className="text-center mb-14">
                <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">Our Journey</p>
                <h2 className="font-heading font-extrabold text-navy-800 text-4xl lg:text-5xl">Company Timeline</h2>
              </div>
            </Reveal>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[72px] top-0 bottom-0 w-px bg-navy-100 hidden sm:block" />

              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <Reveal key={m.year} variant="fade-right" delay={i * 80} duration={600}>
                    <div className="flex items-start gap-6 sm:gap-8">
                      <div className="flex-shrink-0 w-[88px] text-right">
                        <span className="inline-block bg-navy-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                          {m.year}
                        </span>
                      </div>
                      <div className="flex-1 pb-8 border-b border-navy-50 last:border-0">
                        <p className="text-gray-700 text-base leading-relaxed pt-0.5">{m.event}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Licenses & Compliance */}
        <section id="licenses" className="py-20 bg-navy-50 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal variant="fade-up" duration={700}>
              <div className="text-center mb-14">
                <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">Regulated & Trusted</p>
                <h2 className="font-heading font-extrabold text-navy-800 text-4xl lg:text-5xl mb-4">
                  Licenses & Compliance
                </h2>
                <p className="text-gray-500 text-lg max-w-xl mx-auto">
                  Atlantic Xchange operates under strict US federal and state financial regulations — 
                  so your money is always protected.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {licenses.map((l, i) => (
                <Reveal key={l.name} variant="zoom-in" delay={i * 80} duration={600}>
                  <div className={`rounded-2xl border-2 ${l.color} p-6 h-full`}>
                    <p className="font-heading font-extrabold text-navy-800 text-2xl mb-1">{l.name}</p>
                    <p className="text-navy-600 text-sm font-medium mb-2">{l.full}</p>
                    <p className="text-navy-400 text-xs">{l.number}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Licensed States */}
            <Reveal variant="fade-up" duration={700}>
              <div className="bg-white rounded-2xl border border-navy-100 p-7 sm:p-10 mb-8">
                <div className="text-center mb-8">
                  <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">
                    Nationwide Coverage
                  </p>
                  <h3 className="font-heading font-extrabold text-navy-800 text-2xl sm:text-3xl mb-3">
                    Government-Licensed to Send Money Across the USA
                  </h3>
                  <p className="text-gray-500 text-base max-w-2xl mx-auto">
                    Atlantic Xchange is officially licensed to operate as a money transmitter in multiple US states.
                    This means your transfers are legally protected and fully regulated at every step.
                  </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
                  {licensedStates.map((s, i) => (
                    <Reveal key={s.code} variant="zoom-in" delay={i * 60} duration={500}>
                      <div className="bg-navy-50 border border-navy-100 rounded-xl py-4 text-center hover:border-teal-300 hover:bg-teal-50 transition-colors">
                        <p className="font-heading font-extrabold text-navy-800 text-lg">{s.code}</p>
                        <p className="text-navy-400 text-[11px] mt-0.5">{s.name}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                  {additionalRegulators.map((r, i) => (
                    <Reveal key={r.title} variant="fade-up" delay={i * 80} duration={600}>
                      <div className="flex items-start gap-3 bg-teal-50/60 border border-teal-100 rounded-xl p-4">
                        <span className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </span>
                        <div>
                          <p className="font-heading font-bold text-navy-800 text-sm mb-1">{r.title}</p>
                          <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <p className="text-navy-400 text-xs text-center leading-relaxed">
                  NMLS ID # 1544045. All rights reserved. Conditions apply.
                </p>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={200} duration={600}>
              <div className="bg-navy-800 rounded-2xl p-8 text-white text-center">
                <p className="text-white/60 text-sm mb-2">Have compliance questions?</p>
                <p className="font-heading font-bold text-xl mb-4">
                  Our compliance team is available to answer any regulatory inquiries.
                </p>
                <a
                  href="mailto:compliance@atlanticxchange.com"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  Contact Compliance Team
                </a>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
