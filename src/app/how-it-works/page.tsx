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
    "Send money in 3 simple steps: choose the amount and destination, confirm your transfer, then pay, send, and track.",
};

const steps = [
  {
    number: "01",
    title:  "Choose",
    desc:   "Enter the amount and destination.",
    color:  "bg-navy-800",
  },
  {
    number: "02",
    title:  "Confirm",
    desc:   "Verify your identity and review your transfer.",
    color:  "bg-teal-600",
  },
  {
    number: "03",
    title:  "Send",
    desc:   "Pay, send, and track your money.",
    color:  "bg-ax-green-500",
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
          highlight="3 Simple Steps"
          subtitle="Choose, confirm, and send — that's the whole process."
          accentColor="green"
        />

        {/* Steps */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
              <div aria-hidden className="hidden md:flex absolute top-9 left-[16.5%] right-[16.5%] items-center justify-between pointer-events-none">
                <div className="flex-1 h-px bg-navy-200" />
                <div className="w-2 h-2 rounded-full bg-teal-400 mx-4 flex-shrink-0" />
                <div className="flex-1 h-px bg-navy-200" />
              </div>

              {steps.map((step, i) => (
                <Reveal key={step.number} variant="fade-up" delay={i * 120} duration={650}>
                  <div className="flex items-start gap-5 md:flex-col md:items-center md:text-center">
                    <div
                      className={`w-[72px] h-[72px] rounded-2xl ${step.color} text-white flex items-center justify-center font-heading font-extrabold text-xl relative z-10 flex-shrink-0`}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1 pt-2 md:pt-0">
                      <h3 className="font-heading font-bold text-navy-800 text-lg sm:text-xl mb-2 md:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm sm:text-base leading-relaxed md:max-w-xs">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="fade-up" delay={200} duration={600}>
              <div className="mt-10 sm:mt-14 text-center">
                <a
                  href="/#send"
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
