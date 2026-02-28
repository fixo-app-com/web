import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "../animations";

/* ------------------------------------------------------------------ */
/*  Phone Frame                                                        */
/* ------------------------------------------------------------------ */
function PhoneFrame({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="flex flex-col items-center shrink-0">
      <div className="relative w-[260px] sm:w-[280px] bg-gray-900 rounded-[2.5rem] p-3 border border-gray-800 shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-10" />
        <div className="bg-gray-100 rounded-[2rem] overflow-hidden pt-6 h-[420px] sm:h-[460px]">
          {children}
        </div>
        <div className="flex justify-center mt-2">
          <div className="w-28 h-1 rounded-full bg-gray-600" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 1 — Home                                                    */
/* ------------------------------------------------------------------ */
function HomeScreen(): React.JSX.Element {
  const categories = [
    { emoji: "🏠", name: "Housing", count: 3, total: 850 },
    { emoji: "🚗", name: "Transport", count: 2, total: 320 },
    { emoji: "📺", name: "Subscriptions", count: 5, total: 95 },
    { emoji: "🛡️", name: "Insurance", count: 2, total: 180 },
  ];
  const total = categories.reduce((s, c) => s + c.total, 0);
  const budget = 2000;
  const available = budget - total;

  return (
    <div className="px-3 pb-4">
      <p className="text-lg font-bold text-gray-900 mb-3">Home</p>
      <div className="bg-white rounded-2xl p-3 mb-3">
        <div className="flex items-center gap-1 mb-1">
          <p className="text-[10px] font-medium text-gray-500">
            Monthly budget
          </p>
          <svg
            className="w-2.5 h-2.5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
          </svg>
        </div>
        <p className="text-2xl font-bold text-gray-900 text-center my-2">
          €{budget.toLocaleString("en")}
        </p>
        <div className="border-t border-gray-100 pt-2 space-y-1">
          <div className="flex justify-between">
            <span className="text-[10px] text-gray-500">Ordinary costs</span>
            <span className="text-[10px] font-semibold text-gray-700">
              €{total.toLocaleString("en")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] text-gray-500">Available</span>
            <span className="text-[10px] font-semibold text-emerald-600">
              €{available.toLocaleString("en")}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mb-3">
        <span className="px-2.5 py-1 bg-fixo-100 text-fixo-600 text-[10px] font-bold rounded-xl">
          Monthly
        </span>
        <span className="px-2.5 py-1 bg-white text-gray-500 text-[10px] font-bold rounded-xl">
          Yearly
        </span>
      </div>
      <div className="space-y-2">
        {categories.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-2 bg-white rounded-2xl px-3 py-2.5"
          >
            <span className="text-base">{c.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-gray-900 truncate">
                {c.name}
              </p>
              <p className="text-[9px] text-gray-500">
                {c.count} expense{c.count > 1 ? "s" : ""}
              </p>
            </div>
            <p className="text-[11px] font-semibold text-gray-900">
              €{c.total}
            </p>
            <svg
              className="w-3 h-3 text-gray-400 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 2 — Wallets                                                 */
/* ------------------------------------------------------------------ */
function WalletsScreen(): React.JSX.Element {
  const wallets = [
    { abbr: "IS", name: "Intesa Sanpaolo", total: 720, color: "#007A33" },
    { abbr: "N2", name: "N26", total: 385, color: "#36A18B" },
    { abbr: "RE", name: "Revolut", total: 210, color: "#0075EB" },
    { abbr: "WI", name: "Wise", total: 130, color: "#9FE870" },
  ];

  return (
    <div className="px-3 pb-4">
      <p className="text-lg font-bold text-gray-900 mb-4">Wallets</p>
      <div className="space-y-2">
        {wallets.map((w) => (
          <div
            key={w.name}
            className="flex items-center gap-2.5 bg-white rounded-2xl px-3 py-3"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: w.color }}
            >
              <span className="text-[9px] font-bold text-white">
                {w.abbr}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-gray-900 truncate">
                {w.name}
              </p>
            </div>
            <p className="text-[11px] font-semibold text-gray-900">
              €{w.total}
            </p>
            <svg
              className="w-3 h-3 text-gray-400 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <div className="bg-fixo-500 rounded-full px-4 py-2 flex items-center">
          <span className="text-white text-[10px] font-semibold">
            Add wallet
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 3 — Emergency Fund                                         */
/* ------------------------------------------------------------------ */
function EmergencyScreen(): React.JSX.Element {
  const essentialMonthly = 1170;
  const months = 6;
  const target = essentialMonthly * months;

  return (
    <div className="px-3 pb-4">
      <p className="text-lg font-bold text-gray-900 mb-4">Emergency</p>
      <p className="text-[10px] font-medium text-gray-500 mb-0.5">
        Monthly essential expenses
      </p>
      <p className="text-xl font-bold text-gray-900 mb-6">
        €{essentialMonthly.toLocaleString("en")}
      </p>
      <p className="text-[10px] font-medium text-gray-500 mb-2">
        Time period
      </p>
      <div className="relative mb-1.5">
        <div className="h-1 bg-gray-200 rounded-full">
          <div
            className="h-full bg-fixo-400 rounded-full"
            style={{ width: "30%" }}
          />
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-fixo-400 rounded-full border-2 border-white shadow"
          style={{ left: "calc(30% - 8px)" }}
        />
      </div>
      <p className="text-[11px] font-semibold text-gray-700 text-center mb-6">
        {months} months
      </p>
      <div className="bg-white rounded-2xl p-4">
        <p className="text-[10px] font-medium text-gray-500 mb-1">
          Emergency fund target
        </p>
        <p className="text-2xl font-bold text-fixo-500">
          €{target.toLocaleString("en")}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screens data                                                       */
/* ------------------------------------------------------------------ */
const screens = [
  { label: "Home", component: <HomeScreen /> },
  { label: "Wallets", component: <WalletsScreen /> },
  { label: "Emergency Fund", component: <EmergencyScreen /> },
];

/* ------------------------------------------------------------------ */
/*  Snap-scroll hook: tracks active index from scroll position         */
/* ------------------------------------------------------------------ */
function useSnapIndex(ref: React.RefObject<HTMLDivElement | null>, count: number) {
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const itemWidth = el.scrollWidth / count;
    const idx = Math.round(scrollLeft / itemWidth);
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

/* ------------------------------------------------------------------ */
/*  Mobile slider — native scroll-snap, draggable                     */
/* ------------------------------------------------------------------ */
function MobileSlider(): React.JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { active, scrollTo } = useSnapIndex(scrollRef, screens.length);

  return (
    <div className="flex flex-col items-center">
      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 w-full"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
        }}
      >
        {screens.map((s) => (
          <div
            key={s.label}
            className="snap-center shrink-0 flex flex-col items-center"
            style={{ width: "100%" }}
          >
            <PhoneFrame>{s.component}</PhoneFrame>
            <p className="text-sm font-semibold text-gray-500 mt-4">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2.5 mt-6">
        {screens.map((s, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`View ${s.label} screen`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === active ? "bg-fixo-500" : "bg-fixo-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop layout — all 3 side by side                                */
/* ------------------------------------------------------------------ */
function DesktopLayout(): React.JSX.Element {
  return (
    <div className="flex items-start justify-center gap-12">
      {screens.map((s, i) => (
        <motion.div
          key={s.label}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          className="flex flex-col items-center"
        >
          <PhoneFrame>{s.component}</PhoneFrame>
          <p className="text-sm font-semibold text-gray-500 mt-4">
            {s.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main AppPreview component                                          */
/* ------------------------------------------------------------------ */
export default function AppPreview(): React.JSX.Element {
  return (
    <section className="px-6 pb-6">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-fixo-500 uppercase tracking-wider mb-3">
            Built for clarity
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Everything at a glance
          </h2>
        </div>

        <div className="lg:hidden">
          <MobileSlider />
        </div>
        <div className="hidden lg:block">
          <DesktopLayout />
        </div>
      </motion.div>
    </section>
  );
}
