import Reveal from "@/components/ui/Reveal";

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

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <Reveal variant="fade-up" duration={700}>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-4">
              How It Works
            </p>
            <h2 className="font-heading font-extrabold text-navy-800 text-3xl sm:text-4xl lg:text-5xl mb-4">
              3 simple steps
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Sending money is straightforward — choose, confirm, and send.
            </p>
          </div>
        </Reveal>

        {/* Steps — vertical cards on mobile, horizontal grid on md+ */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {/* Desktop connector line */}
          <div aria-hidden className="hidden md:flex absolute top-9 left-[16.5%] right-[16.5%] items-center justify-between pointer-events-none">
            <div className="flex-1 h-px bg-navy-200" />
            <div className="w-2 h-2 rounded-full bg-teal-400 mx-4 flex-shrink-0" />
            <div className="flex-1 h-px bg-navy-200" />
          </div>

          {/* Mobile vertical connector */}
          <div aria-hidden className="md:hidden absolute left-[35px] top-[72px] bottom-[72px] w-px bg-navy-200" />

          {steps.map((step, i) => (
            <Reveal key={i} variant="fade-up" delay={i * 160} duration={700}>
              {/* Mobile: horizontal card layout. Desktop: centered column */}
              <div className="flex items-start gap-5 md:flex-col md:items-center md:text-center">
                <div
                  className={`w-[72px] h-[72px] rounded-2xl ${step.color} text-white flex items-center justify-center font-heading font-extrabold text-xl relative z-10 flex-shrink-0`}
                >
                  {step.number}
                </div>
                <div className="flex-1 pt-2 md:pt-0">
                  <h3 className="font-heading font-bold text-navy-800 text-lg sm:text-xl mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed md:max-w-xs">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal variant="fade-up" delay={300} duration={600}>
          <div className="text-center mt-10 sm:mt-14">
            <a
              href="/#send"
              className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors duration-150 touch-manipulation"
            >
              Start Sending Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
