import TransferWidget from "@/components/ui/TransferWidget";
import Reveal from "@/components/ui/Reveal";

const trustBadges = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Federally Licensed",
    sub: "Regulated US money transmitter",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    label: "Secure & Encrypted",
    sub: "All transfers protected",
  },
  {
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    label: "4.8 / 5 Stars",
    sub: "200+ Google Reviews",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Zero Hidden Fees",
    sub: "What you see is what you pay",
  },
];

export default function HeroSection() {
  return (
    <section
      id="send"
      className="relative min-h-screen bg-navy-800 pt-16 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.07]"
        style={{ background: "radial-gradient(circle at 70% 30%, #008db5 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 left-0 w-[500px] h-[500px] opacity-[0.05]"
        style={{ background: "radial-gradient(circle at 30% 80%, #62ba46 0%, transparent 65%)" }}
      />
      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-0">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">

          {/* Left text column */}
          <div className="flex-1 pt-2 lg:pt-6 w-full">

            

            <Reveal variant="fade-up" delay={100} duration={800}>
              <h1 className="font-heading font-extrabold text-white leading-[1.08] mb-5">
                {/* Fluid type: 2.5rem mobile → 3.75rem sm → 4.5rem lg */}
                <span className="block text-[2.6rem] leading-[1.1] sm:text-6xl lg:text-7xl">Send Money</span>
                <span className="block text-[2.6rem] leading-[1.1] sm:text-6xl lg:text-7xl">
                  From <span className="text-teal-400">USA</span>
                </span>
                <span className="block text-[2.6rem] leading-[1.1] sm:text-6xl lg:text-7xl text-ax-green-400">
                  to the World
                </span>
              </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={220} duration={700}>
              <p className="text-white/60 text-base sm:text-lg max-w-md leading-relaxed mb-8">
              Move money across borders with competitive exchange rates, transparent fees,
              and reliable delivery — all from one trusted platform.
              </p>
            </Reveal>

            {/* Stats — equal 2×2 on mobile and desktop */}
            <Reveal variant="fade-up" delay={340} duration={700}>
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-7 max-w-lg lg:max-w-xl mb-8">
                {[
                  { value: "150+ Countries",    label: "Send money worldwide" },
                  { value: "Transparent Fees",  label: "Know exactly what you pay" },
                  { value: "Fast Delivery",     label: "Get your money there quickly" },
                  { value: "Licensed & Secure", label: "Your money is protected" },
                ].map((s) => (
                  <div key={s.value} className="min-w-0">
                    <p className="font-heading font-extrabold text-white text-[1.15rem] sm:text-xl leading-tight">
                      {s.value}
                    </p>
                    <p className="text-white/40 text-xs sm:text-sm mt-1.5 leading-snug">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="fade-in" delay={460} duration={600}>
              <a
                href="/money-transfer"
                className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white/90 transition-colors group"
              >
                <span>See how it works</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Reveal>
          </div>

          {/* Calculator */}
          <Reveal
            variant="fade-left"
            delay={200}
            duration={800}
            className="w-full lg:w-auto lg:flex-shrink-0 lg:self-start lg:sticky lg:top-24"
          >
            <TransferWidget />
          </Reveal>

        </div>
      </div>

      {/* Trust Bar */}
      <div className="relative mt-12 sm:mt-16 border-t border-white/[0.07] bg-navy-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-5">
          {/* 2-col grid on mobile, row on lg */}
          <div className="grid grid-cols-2 lg:flex lg:justify-between items-center gap-4 lg:gap-8">
            {trustBadges.map((b, i) => (
              <Reveal key={b.label} variant="fade-up" delay={i * 80} duration={500}>
                <div className="flex items-center gap-2.5">
                  <span className="text-ax-green-400 flex-shrink-0">{b.icon}</span>
                  <div>
                    <p className="text-white text-xs font-semibold leading-none">{b.label}</p>
                    <p className="text-white/35 text-[11px] mt-0.5 hidden sm:block">{b.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
