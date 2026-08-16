import Reveal from "@/components/ui/Reveal";
import StoreBadges from "@/components/ui/StoreBadges";
import Flag from "@/components/ui/Flag";

const features = [
  "Send to 150+ countries from your phone",
  "Live rates and fees before you confirm",
  "Track every transfer in real time",
  "Save recipients for faster next sends",
];

export default function AppDownloadSection() {
  return (
    <section id="download-app" className="py-16 sm:py-24 bg-navy-800 relative overflow-hidden scroll-mt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[520px] h-[520px] opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #008db5 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[420px] h-[420px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #62ba46 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal variant="fade-right" duration={700}>
            <div>
              <p className="text-teal-400 text-xs font-bold uppercase tracking-[0.15em] mb-4">
                Atlantic Xchange App
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Send money from your phone
              </h2>
              <p className="text-white/55 text-base sm:text-lg leading-relaxed max-w-md mb-8">
                The fastest way to send, track, and manage transfers — built for
                the same rates and protection you get online or in a branch.
              </p>

              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-white/75 text-sm">
                    <span className="w-5 h-5 rounded-full bg-ax-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-ax-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <StoreBadges variant="outline" />
            </div>
          </Reveal>

          <Reveal variant="fade-left" delay={120} duration={700}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[260px] sm:w-[280px]">
                <div className="rounded-[2.2rem] border border-white/15 bg-navy-950 p-3 shadow-2xl">
                  <div className="rounded-[1.7rem] bg-navy-900 overflow-hidden">
                    <div className="flex justify-center pt-3 pb-2">
                      <span className="w-16 h-1.5 rounded-full bg-white/15" />
                    </div>
                    <div className="px-5 pb-6 pt-2">
                      <p className="text-white/40 text-[11px] font-semibold uppercase tracking-wider mb-1">
                        Atlantic Xchange
                      </p>
                      <p className="font-heading font-extrabold text-white text-xl mb-5">
                        Send Money
                      </p>
                      <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4 mb-3">
                        <p className="text-white/40 text-[11px] mb-1">You send</p>
                        <p className="font-heading font-bold text-white text-2xl">$500.00</p>
                      </div>
                      <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4 mb-4">
                        <p className="text-white/40 text-[11px] mb-1">Recipient gets</p>
                        <p className="font-heading font-bold text-ax-green-400 text-2xl inline-flex items-center gap-2">
                          <Flag code="jo" name="Jordan" />
                          355.00 JOD
                        </p>
                      </div>
                      <div className="w-full rounded-xl bg-ax-green-500 text-white text-sm font-bold py-3 text-center">
                        Continue
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
