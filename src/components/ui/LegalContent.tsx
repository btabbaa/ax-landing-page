import Reveal from "@/components/ui/Reveal";

export type LegalSection = {
  heading: string;
  body: string[];
};

interface LegalContentProps {
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalContent({ lastUpdated, sections }: LegalContentProps) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal variant="fade-up" duration={600}>
          <p className="text-gray-400 text-sm mb-10">Last updated: {lastUpdated}</p>
        </Reveal>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} variant="fade-up" delay={i * 50} duration={600}>
              <div>
                <h2 className="font-heading font-bold text-navy-800 text-xl sm:text-2xl mb-3">
                  {section.heading}
                </h2>
                <div className="space-y-3">
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="text-gray-600 text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade-up" delay={100} duration={600}>
          <div className="mt-14 bg-navy-50 border border-navy-100 rounded-2xl p-6 sm:p-8">
            <p className="text-navy-700 text-sm leading-relaxed">
              Questions about this policy? Contact us at{" "}
              <a
                href="mailto:legal@atlanticxchange.com"
                className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
              >
                legal@atlanticxchange.com
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
