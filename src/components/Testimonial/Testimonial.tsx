import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

interface Review {
  quote: string;
  author: string;
  role: string;
}

const reviews: Review[] = [
  {
    quote:
      "I tried every expense tracker out there but always quit after a week. Who has time to log every purchase? Fixo only asked for my fixed costs and I was done in five minutes.",
    author: "Marco R.",
    role: "Freelancer",
  },
  {
    quote:
      "I didn't need another app nagging me to scan receipts. Fixo showed me that 70% of my salary was already spoken for before I spent a cent on anything else.",
    author: "Elena T.",
    role: "Product Designer",
  },
  {
    quote:
      "Three bank accounts, a dozen subscriptions, rent, insurance. I never had the full picture. Now I set it up once and Fixo does the rest.",
    author: "James L.",
    role: "Software Engineer",
  },
];

function useSnapIndex(
  ref: React.RefObject<HTMLDivElement | null>,
  count: number,
) {
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const itemWidth = el.scrollWidth / count;
    const idx = Math.round(el.scrollLeft / itemWidth);
    setActive(Math.min(Math.max(idx, 0), count - 1));
  }, [ref, count]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [ref, onScroll]);

  const scrollTo = useCallback(
    (idx: number) => {
      const el = ref.current;
      if (!el) return;
      const itemWidth = el.scrollWidth / count;
      el.scrollTo({ left: itemWidth * idx, behavior: "smooth" });
    },
    [ref, count],
  );

  return { active, scrollTo };
}

export default function Testimonial(): React.JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { active, scrollTo } = useSnapIndex(scrollRef, reviews.length);

  return (
    <section className="px-6 py-24 bg-fixo-50 border-y border-fixo-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-fixo-500 text-sm font-semibold uppercase tracking-wider mb-8">
            Why people love Fixo
          </p>

          {/* Snap-scroll track */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-full px-2"
              >
                <blockquote className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-6">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <p className="text-fixo-600 font-medium">
                  {review.author}, {review.role}
                </p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === active ? "bg-fixo-500" : "bg-fixo-200"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
