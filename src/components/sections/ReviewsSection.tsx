import Reveal from "@/components/ui/Reveal";

const reviews = [
  {
    name:    "Ahmad K.",
    origin:  "Sending to Jordan",
    rating:  5,
    text:    "بعتلك أهلي في الأردن كل شهر من سنتين. الأسعار دايماً أحسن من البنوك والتحويل يوصل بنفس اليوم. خدمة ممتازة وناس محترمين.",
    since:   "Customer since 2022",
  },
  {
    name:    "Fatima R.",
    origin:  "Sending to Egypt",
    rating:  5,
    text:    "I've been sending money to my family in Egypt for over two years. Atlantic Xchange always gives me better rates than my bank, and my family receives the money the same day. Truly the best service in Dearborn.",
    since:   "Customer since 2021",
  },
  {
    name:    "Omar S.",
    origin:  "Sending to Palestine",
    rating:  5,
    text:    "Fast, honest, and transparent. I can see the exact rate and fee before confirming — no surprises. My family in the West Bank always receives the funds within hours. I recommend them to everyone.",
    since:   "Customer since 2023",
  },
  {
    name:    "Nour B.",
    origin:  "Sending to Morocco",
    rating:  5,
    text:    "ما توقعت لقى خدمة بهالمستوى بشيكاغو. الأسعار تنافسية جداً مقارنة بالتطبيقات الأخرى والتحويل سريع. زبون دايم.",
    since:   "Customer since 2023",
  },
  {
    name:    "Mohammed A.",
    origin:  "Business transfers",
    rating:  5,
    text:    "We use Atlantic Xchange for our business payments to suppliers in Iraq and the UAE. The rates are competitive and the team is always professional. They handle large transfers without any issues.",
    since:   "Customer since 2020",
  },
  {
    name:    "Layla H.",
    origin:  "Sending to Syria",
    rating:  5,
    text:    "One of the few reliable services that handles Syria transfers. The staff are kind, patient, and speak Arabic — which made the whole process so much easier for my family. Highly recommend.",
    since:   "Customer since 2022",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-[14px] h-[14px] fill-ax-green-500" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Atlantic+Xchange+reviews";

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="bg-navy-50 rounded-2xl border border-navy-100 p-6 flex flex-col gap-4 h-full">
      <div className="flex items-start justify-between gap-2">
        <StarRow count={r.rating} />
        {/* Google G logo */}
        <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden>
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        &ldquo;{r.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-3 border-t border-navy-100">
        <div className="w-9 h-9 rounded-full bg-navy-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {r.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="text-navy-800 font-semibold text-sm leading-none">{r.name}</p>
          <p className="text-teal-600 text-xs mt-0.5 font-medium">{r.origin}</p>
          <p className="text-gray-400 text-xs mt-0.5">{r.since}</p>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-14">
          <Reveal variant="fade-right" duration={700}>
            <div>
              <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">
                Real Stories
              </p>
              <h2 className="font-heading font-extrabold text-navy-800 text-3xl sm:text-4xl lg:text-5xl">
                What Our Customers Say
              </h2>
            </div>
          </Reveal>

          <Reveal variant="fade-left" delay={150} duration={700}>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-navy-50 hover:bg-navy-100 transition-colors rounded-2xl px-4 py-3 sm:px-5 sm:py-4 self-start"
            >
              <div>
                <StarRow count={5} />
                <p className="text-navy-800 font-bold text-xl mt-1 leading-none">
                  4.8<span className="text-navy-400 font-medium text-sm"> / 5</span>
                </p>
              </div>
              <div className="w-px h-10 bg-navy-200" />
              <div>
                <p className="text-navy-600 text-xs font-medium">Based on</p>
                <p className="text-navy-800 font-semibold text-sm">200+ Google Reviews</p>
              </div>
            </a>
          </Reveal>
        </div>

      </div>

      {/* Cards — snap scroll on mobile, grid on sm+ */}
      <Reveal variant="fade-up" delay={100} duration={700}>
        {/* Mobile: horizontal scroll carousel */}
        <div className="sm:hidden">
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4"
            style={{ scrollbarWidth: "none" }}
          >
            {reviews.map((r, i) => (
              <div key={i} className="snap-start flex-shrink-0 w-[80vw] max-w-[300px]">
                <ReviewCard r={r} />
              </div>
            ))}
            <div className="flex-shrink-0 w-4" aria-hidden />
          </div>

          {/* Scroll hint dots */}
          <div className="flex justify-center gap-1.5 mt-3 px-4">
            {reviews.map((_, i) => (
              <div
                key={i}
                className={`rounded-full bg-navy-200 ${i === 0 ? "w-5 h-1.5" : "w-1.5 h-1.5"}`}
              />
            ))}
          </div>
        </div>

        {/* sm+: 3-col grid (6 reviews) */}
        <div className="hidden sm:grid max-w-7xl mx-auto px-6 lg:px-10 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </Reveal>

      {/* See all reviews CTA */}
      <Reveal variant="fade-up" delay={200} duration={600}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-8 sm:mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 text-sm font-semibold transition-colors group"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" aria-hidden>
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            See all 200+ reviews on Google
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
