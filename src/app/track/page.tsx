import type { Metadata } from "next";
import Navbar         from "@/components/ui/Navbar";
import ScrollProgress  from "@/components/ui/ScrollProgress";
import Footer           from "@/components/ui/Footer";
import PageHero          from "@/components/ui/PageHero";
import Reveal             from "@/components/ui/Reveal";
import TrackTransfer     from "@/components/sections/TrackTransfer";

export const metadata: Metadata = {
  title: "Track Your Transfer — Atlantic Xchange",
  description:
    "Enter your transfer reference number to check the real-time status of your money transfer with Atlantic Xchange.",
};

const helpItems = [
  {
    title: "Check Your Email",
    desc: "Your reference number was sent to your email address as soon as you submitted your transfer.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Check Your SMS",
    desc: "We also text your reference number to the mobile number linked to your account.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Still Can't Find It?",
    desc: "Reach out to our support team with your name and transfer date — we'll look it up for you.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m.375 0h.375m3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m.375 0h.375m3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m.375 0h.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    action: { label: "Contact Support", href: "/contact" },
  },
];

export default function TrackPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        {/* Hero */}
        <PageHero
          eyebrow="Transfer Tracking"
          title="Where's Your "
          highlight="Money?"
          subtitle="Enter your reference number below and get an instant, real-time update on your transfer — from submission to delivery."
          accentColor="green"
        />

        {/* Tracking form + result */}
        <TrackTransfer />

        {/* Where to find the reference number */}
        <section className="py-16 sm:py-20 bg-navy-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
            <Reveal variant="fade-up" duration={700}>
              <div className="text-center mb-12">
                <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">Need Help?</p>
                <h2 className="font-heading font-extrabold text-navy-800 text-3xl sm:text-4xl">
                  Where To Find Your Reference Number
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {helpItems.map((item, i) => (
                <Reveal key={item.title} variant="fade-up" delay={i * 100} duration={650}>
                  <div className="bg-white rounded-2xl border border-navy-100 p-6 h-full flex flex-col">
                    <div className="bg-navy-800 text-white w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="font-heading font-bold text-navy-800 text-base mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{item.desc}</p>
                    {item.action && (
                      <a
                        href={item.action.href}
                        className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
                      >
                        {item.action.label}
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
