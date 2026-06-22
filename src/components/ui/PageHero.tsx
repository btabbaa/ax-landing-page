import Reveal from "@/components/ui/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title:   string;
  highlight?: string;
  subtitle: string;
  accentColor?: "teal" | "green";
}

export default function PageHero({ eyebrow, title, highlight, subtitle, accentColor = "teal" }: PageHeroProps) {
  const color = accentColor === "green" ? "text-ax-green-400" : "text-teal-400";
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <section className="relative bg-navy-800 pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
      {/* Ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(0,141,181,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal variant="fade-up" duration={700}>
          <p className="inline-flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-[0.18em] mb-4 sm:mb-5">
            <span className="w-5 h-px bg-teal-400/60" />
            {eyebrow}
          </p>
          <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-4 sm:mb-6 max-w-3xl">
            {titleParts[0]}
            {highlight && <span className={color}>{highlight}</span>}
            {titleParts[1]}
          </h1>
          <p className="text-white/55 text-base sm:text-xl max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
