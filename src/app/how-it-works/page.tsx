import type { Metadata } from "next";
import Navbar         from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer         from "@/components/ui/Footer";
import PageHero       from "@/components/ui/PageHero";
import Reveal         from "@/components/ui/Reveal";
import Link           from "next/link";

export const metadata: Metadata = {
  title: "How It Works — Atlantic Xchange",
  description:
    "Learn exactly how to send money with Atlantic Xchange — from registration to delivery. Simple, fast, and transparent.",
};

const steps = [
  {
    number: "01",
    title:  "Create Your Free Account",
    desc:   "Sign up in minutes. All you need is a valid email address and a phone number. No credit check, no minimum balance.",
    detail: [
      "Enter your name, email, and phone number",
      "Verify your email with a 6-digit code",
      "Set a secure password",
      "Account is active instantly",
    ],
    color: "bg-navy-800",
    time:  "2 minutes",
  },
  {
    number: "02",
    title:  "Verify Your Identity (KYC)",
    desc:   "A one-time identity check required by US law to protect you and comply with anti-money laundering regulations.",
    detail: [
      "Upload a government-issued photo ID (passport or driver's license)",
      "Take a quick selfie for identity match",
      "Enter your residential address",
      "Verification typically completes within 30 minutes",
    ],
    color: "bg-teal-600",
    time:  "5 minutes",
  },
  {
    number: "03",
    title:  "Enter Transfer Details",
    desc:   "Choose your destination country, enter the amount, and see the exact exchange rate and fee before you confirm — no surprises.",
    detail: [
      "Select the destination country from 150+ options",
      "Enter the amount in USD",
      "Choose delivery method: bank transfer or cash pickup",
      "See the exact amount your recipient will receive",
    ],
    color: "bg-ax-green-500",
    time:  "1 minute",
  },
  {
    number: "04",
    title:  "Add Recipient Details",
    desc:   "Enter your recipient's information. For bank transfers, you'll need their bank account details. For cash pickup, just their name.",
    detail: [
      "For bank transfer: account number, routing/IBAN, bank name",
      "For cash pickup: full name as on their ID",
      "Save recipients for future transfers",
      "Supported in local language for key corridors",
    ],
    color: "bg-navy-700",
    time:  "2 minutes",
  },
  {
    number: "05",
    title:  "Pay & Confirm",
    desc:   "Review the final summary and pay securely. We accept bank transfers and major debit cards.",
    detail: [
      "Review: amount, rate, fee, and what recipient gets",
      "Pay via ACH bank transfer or debit card",
      "Receive instant confirmation by email and SMS",
      "Transfer reference number for tracking",
    ],
    color: "bg-teal-800",
    time:  "1 minute",
  },
  {
    number: "06",
    title:  "Track Until Delivered",
    desc:   "Follow your transfer in real time from our dashboard. Your recipient is notified at every stage.",
    detail: [
      "Real-time status updates in your dashboard",
      "Email and SMS notifications",
      "Recipient notified when funds arrive",
      "Average delivery: within 24 hours",
    ],
    color: "bg-ax-green-600",
    time:  "Automatic",
  },
];

const faqs = [
  {
    q: "How long does a transfer take?",
    a: "Most transfers are completed within 24 hours. Some corridors (e.g., USA to Jordan, Egypt, Bangladesh) can be even faster — within a few hours during business days.",
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
    q: "What countries do you support?",
    a: "We support transfers to 150+ countries including all major corridors: Middle East (Jordan, Egypt, Syria, UAE, Iraq), Asia (Bangladesh, China, Pakistan, India), Europe (via SEPA), Africa, and Latin America.",
  },
  {
    q: "Is my money safe?",
    a: "Yes. Atlantic Xchange is registered with FinCEN and holds state money transmitter licenses. All transfers are protected by 256-bit SSL encryption and held in segregated accounts.",
  },
  {
    q: "Can I cancel a transfer?",
    a: "You can cancel a transfer within 30 minutes of submission if it hasn't been processed yet. Contact our support team immediately for assistance.",
  },
  {
    q: "What if my recipient doesn't receive the money?",
    a: "We guarantee delivery. If there's any issue, our support team will investigate and either complete the transfer or provide a full refund within 3 business days.",
  },
  {
    q: "Do I need to verify my identity every time?",
    a: "No. Identity verification (KYC) is done once when you first register. After that, all future transfers are instant — no re-verification needed.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>

        {/* Hero */}
        <PageHero
          eyebrow="How It Works"
          title="Send Money in "
          highlight="6 Simple Steps"
          subtitle="From creating your account to your recipient receiving funds — the whole process is designed to be fast, transparent, and stress-free."
          accentColor="green"
        />

        {/* Steps */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="space-y-6">
              {steps.map((step, i) => (
                <Reveal key={step.number} variant="fade-up" delay={i * 60} duration={650}>
                  <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-0 rounded-2xl border border-navy-100 overflow-hidden">
                    {/* Left accent bar */}
                    <div className={`${step.color} w-full lg:w-2 h-2 lg:h-auto`} />

                    {/* Content */}
                    <div className="p-7 lg:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <span className={`${step.color} text-white text-sm font-extrabold w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                            {step.number}
                          </span>
                          <h3 className="font-heading font-bold text-navy-800 text-xl">{step.title}</h3>
                        </div>
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {step.time}
                        </span>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed mb-5">{step.desc}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.detail.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-sm text-gray-500">
                            <span className="w-4 h-4 rounded-full bg-ax-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-2.5 h-2.5 text-ax-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTA after steps */}
            <Reveal variant="fade-up" delay={200} duration={600}>
              <div className="mt-10 text-center">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors"
                >
                  Start Your First Transfer
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-navy-50 scroll-mt-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <Reveal variant="fade-up" duration={700}>
              <div className="text-center mb-14">
                <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">Got Questions?</p>
                <h2 className="font-heading font-extrabold text-navy-800 text-4xl lg:text-5xl">
                  Frequently Asked Questions
                </h2>
              </div>
            </Reveal>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <Reveal key={i} variant="fade-up" delay={i * 60} duration={600}>
                  <div className="bg-white rounded-2xl border border-navy-100 p-6">
                    <h3 className="font-heading font-bold text-navy-800 text-base mb-2 flex items-start gap-3">
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

            {/* Still have questions */}
            <Reveal variant="fade-up" delay={300} duration={600}>
              <div className="mt-10 bg-navy-800 rounded-2xl p-8 text-center text-white">
                <p className="font-heading font-bold text-xl mb-2">Still have questions?</p>
                <p className="text-white/55 text-sm mb-5">Our support team responds within 2 hours during business days.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-ax-green-500 hover:bg-ax-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  Contact Support
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
