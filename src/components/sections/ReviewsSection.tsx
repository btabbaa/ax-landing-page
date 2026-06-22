import Reveal from "@/components/ui/Reveal";

const reviews = [
  {
    name:   "Chris M.",
    rating: 5,
    text:   "Had money to exchange — not a typical currency. They were patient, friendly, and made sure I got the best rate. I didn't think I could get so much back. The best place to go!",
    since:  "Customer since 2023",
  },
  {
    name:   "Terrance N.",
    rating: 5,
    text:   "Fast and friendly! Got THB Thai baht for our 4-week Southeast Asia trip. Currency was ready for pickup within 20hrs — cheapest exchange fee in the metro area: ZERO.",
    since:  "Customer since 2022",
  },
  {
    name:   "Dan S.",
    rating: 5,
    text:   "Professional, thorough, and pleasant. Atlantic Xchange had the best conversion rates after researching Chase and other banks. Will definitely do business again.",
    since:  "Customer since 2024",
  },
  {
    name:   "William P.",
    rating: 5,
    text:   "Friendly people. Fast service. They had the currency I needed and their exchange rate was better than the airport. Highly recommend.",
    since:  "Customer since 2023",
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
            <div className="flex items-center gap-3 bg-navy-50 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 self-start">
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
            </div>
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
              <div
                key={i}
                className="snap-start flex-shrink-0 w-[80vw] max-w-[300px] bg-navy-50 rounded-2xl border border-navy-100 p-6 flex flex-col gap-4"
              >
                <StarRow count={r.rating} />
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-navy-100">
                  <div className="w-9 h-9 rounded-full bg-navy-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-navy-800 font-semibold text-sm leading-none">{r.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{r.since}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* End spacer */}
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

        {/* sm+: regular grid */}
        <div className="hidden sm:grid max-w-7xl mx-auto px-6 lg:px-10 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-navy-50 rounded-2xl border border-navy-100 p-6 flex flex-col gap-5 h-full">
              <StarRow count={r.rating} />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                <div className="w-9 h-9 rounded-full bg-navy-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-navy-800 font-semibold text-sm leading-none">{r.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{r.since}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
