import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import StoreBadges from "@/components/ui/StoreBadges";

const options = [
  {
    id: "app",
    tag: "App",
    title: "Send Money in App",
    desc: "Download the Atlantic Xchange app and send from anywhere — track transfers and get notified the moment funds arrive.",
    accent: "bg-navy-800",
    tagBg: "bg-navy-50 text-navy-700",
    border: "hover:border-navy-300",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "online",
    tag: "Online",
    title: "Send Money Online",
    desc: "Start a transfer right here in your browser. See the exact rate and fee before you confirm — no download needed.",
    href: "/#send",
    cta: "Start Online",
    accent: "bg-teal-600",
    tagBg: "bg-teal-50 text-teal-700",
    border: "hover:border-teal-300",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: "location",
    tag: "In Person",
    title: "Send Cash at a Location",
    desc: "Walk into an Atlantic Xchange branch, send cash with help from our team, and leave with a receipt in minutes.",
    href: "/locations",
    cta: "Find a Location",
    accent: "bg-ax-green-500",
    tagBg: "bg-ax-green-50 text-ax-green-700",
    border: "hover:border-ax-green-200",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function SendOptionsSection() {
  return (
    <section id="send-options" className="py-16 sm:py-24 bg-navy-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal variant="fade-up" duration={700}>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Choose Your Way
            </p>
            <h2 className="font-heading font-extrabold text-navy-800 text-3xl sm:text-4xl lg:text-5xl mb-4">
              How Would You Like to Send?
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Send money in the app, online, or in person at an Atlantic Xchange location —
              whichever is easiest for you.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {options.map((option, i) => (
            <Reveal key={option.id} variant="fade-up" delay={i * 120} duration={700}>
              <div
                className={`group h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 ${option.border} transition-all duration-200 flex flex-col`}
              >
                <div className="flex items-start justify-between mb-5 sm:mb-7">
                  <div className={`${option.accent} text-white w-12 h-12 rounded-xl flex items-center justify-center`}>
                    {option.icon}
                  </div>
                  <span className={`text-[11px] font-bold ${option.tagBg} px-3 py-1 rounded-full`}>
                    {option.tag}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-navy-800 text-lg sm:text-xl mb-2 sm:mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {option.desc}
                </p>

                {option.id === "app" ? (
                  <StoreBadges size="sm" />
                ) : (
                  <Link
                    href={option.href!}
                    className="inline-flex items-center gap-1.5 text-teal-600 text-sm font-semibold group-hover:gap-3 transition-all"
                  >
                    <span>{option.cta}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
