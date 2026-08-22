import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer from "@/components/ui/Footer";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "FAQ — Atlantic Xchange",
  description:
    "Answers to the most common questions about sending money, exchange rates, fees, delivery times, supported countries, and account security.",
};

const faqGroups = [
  {
    group: "Transfers & Fees",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    faqs: [
      {
        q: "How long does a transfer take?",
        a: "Most transfers are completed within 24 hours. Some corridors — including USA to Jordan, Egypt, and Bangladesh — can be even faster, within a few hours during business days.",
      },
      {
        q: "What are the fees?",
        a: "Our standard fee is $2.99 per transfer, regardless of the amount. No percentage fees, no hidden charges. The fee is always displayed before you confirm.",
      },
      {
        q: "How much can I send?",
        a: "Once verified, you can send up to $10,000 per transaction and up to $50,000 per month. Higher limits are available for business accounts — contact us for details.",
      },
      {
        q: "Can I cancel a transfer?",
        a: "You can cancel a transfer within 30 minutes of submission if it hasn't been processed yet. Contact our support team immediately for assistance.",
      },
      {
        q: "What if my recipient doesn't receive the money?",
        a: "We guarantee delivery. If there's any issue, our support team will investigate and either complete the transfer or provide a full refund within 3 business days.",
      },
    ],
  },
  {
    group: "Supported Countries",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    faqs: [
      {
        q: "What countries do you support?",
        a: "We support transfers to 150+ countries including all major corridors: Middle East (Jordan, Egypt, Syria, UAE, Iraq), Asia (Bangladesh, China, Pakistan, India), Europe (via SEPA), Africa, and Latin America.",
      },
      {
        q: "Do you support transfers to Syria?",
        a: "Yes. We support transfers to Syria through our established partner network. Please contact us directly for the most up-to-date delivery options and rates for this corridor.",
      },
      {
        q: "Can I send money to China or Bangladesh?",
        a: "Yes. Both China (CNY) and Bangladesh (BDT) are supported. Exchange rates and delivery times vary — check our Rates page or the calculator on our homepage for the latest figures.",
      },
    ],
  },
  {
    group: "Security & Verification",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    faqs: [
      {
        q: "Is my money safe?",
        a: "Yes. Atlantic Xchange is a federally licensed money transmitter, registered with the US Treasury (FinCEN) and licensed in multiple US states. Every transfer is fully encrypted from start to finish, and your funds are held in dedicated accounts — separate from company funds — until they reach your recipient.",
      },
      {
        q: "Do I need to verify my identity every time?",
        a: "No. Identity verification (KYC) is done once when you first register. After that, all future transfers are instant — no re-verification needed.",
      },
      {
        q: "What documents do I need to register?",
        a: "A valid government-issued photo ID (passport, driver's licence, or state ID). For business accounts, additional documentation such as EIN and business registration may be required.",
      },
    ],
  },
  {
    group: "Currency Exchange",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    faqs: [
      {
        q: "What is the difference between Money Transfer and Currency Exchange?",
        a: "Money Transfer sends funds electronically from the USA to a recipient abroad — straight to their bank account or as cash pickup. Currency Exchange is a physical cash exchange at our branch: you bring US dollars and walk out with foreign currency (or vice versa).",
      },
      {
        q: "Do I need an appointment to exchange currency?",
        a: "No appointment needed for standard exchanges. Walk into any Atlantic Xchange branch during business hours. For large amounts, calling ahead is recommended so we can confirm availability.",
      },
      {
        q: "Are your exchange rates better than the bank?",
        a: "In most cases, yes. Banks often apply a wide spread on top of the mid-market rate. We publish our rates transparently so you can compare before visiting.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <PageHero
          eyebrow="FAQ"
          title="Frequently Asked "
          highlight="Questions"
          subtitle="Everything you need to know about sending money, exchange rates, fees, and how we keep your funds safe."
          accentColor="teal"
        />

        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="space-y-14">
              {faqGroups.map((group, gi) => (
                <Reveal key={group.group} variant="fade-up" delay={gi * 80} duration={700}>
                  <div>
                    {/* Group header */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-9 h-9 rounded-xl bg-navy-800 text-white flex items-center justify-center flex-shrink-0">
                        {group.icon}
                      </span>
                      <h2 className="font-heading font-bold text-navy-800 text-xl">{group.group}</h2>
                    </div>

                    {/* Questions */}
                    <div className="space-y-4">
                      {group.faqs.map((faq, fi) => (
                        <Reveal key={fi} variant="fade-up" delay={fi * 50} duration={600}>
                          <div className="bg-navy-50/60 rounded-2xl border border-navy-100 p-6">
                            <h3 className="font-heading font-bold text-navy-800 text-base mb-2.5 flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-navy-800 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                Q
                              </span>
                              {faq.q}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed pl-8">{faq.a}</p>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Still have questions */}
            <Reveal variant="fade-up" delay={200} duration={600}>
              <div className="mt-14 bg-navy-800 rounded-2xl p-8 sm:p-10 text-center">
                <p className="font-heading font-bold text-white text-xl sm:text-2xl mb-2">Still have questions?</p>
                <p className="text-white/55 text-sm sm:text-base mb-6 leading-relaxed">
                  Our team responds quickly — reach out by WhatsApp, phone, or email.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-ax-green-500 hover:bg-ax-green-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
                  >
                    Contact Support
                  </Link>
                  <Link
                    href="/rates"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
                  >
                    View Rates
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
