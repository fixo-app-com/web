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
/*  Screen 1 -Home                                                    */
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
  const usedPercent = Math.round((total / budget) * 100);

  return (
    <div className="px-3 pb-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-lg font-bold text-gray-900">Home</p>
        <div className="flex gap-1">
          <span className="px-2 py-0.5 bg-fixo-100 text-fixo-600 text-[9px] font-bold rounded-lg">
            Monthly
          </span>
          <span className="px-2 py-0.5 bg-white text-gray-400 text-[9px] font-bold rounded-lg">
            Yearly
          </span>
        </div>
      </div>

      {/* Budget card with progress bar */}
      <div className="bg-white rounded-2xl p-3 mb-3">
        <p className="text-[10px] font-medium text-gray-400 mb-0.5">Budget</p>
        <p className="text-2xl font-bold text-gray-900 mb-2">
          €{budget.toLocaleString("en")}
        </p>
        {/* Progress bar */}
        <div className="h-2.5 bg-gray-100 rounded-full mb-2 overflow-hidden">
          <div
            className="h-full rounded-full bg-emerald-500"
            style={{ width: `${usedPercent}%` }}
          />
        </div>
        <div className="flex justify-between text-[9px]">
          <span className="text-gray-400">{usedPercent}% committed</span>
          <span className="font-semibold text-emerald-600">
            €{available} left
          </span>
        </div>
        <div className="border-t border-gray-50 mt-2 pt-2 flex gap-2">
          <div className="flex-1 bg-gray-50 rounded-xl px-2 py-1.5 text-center">
            <p className="text-[8px] text-gray-400">Costs</p>
            <p className="text-[11px] font-bold text-red-500">
              €{total.toLocaleString("en")}
            </p>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl px-2 py-1.5 text-center">
            <p className="text-[8px] text-gray-400">Available</p>
            <p className="text-[11px] font-bold text-emerald-600">
              €{available.toLocaleString("en")}
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-1.5">
        {categories.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-2 bg-white rounded-2xl px-3 py-2"
          >
            <span className="text-base">{c.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-gray-900 truncate">
                {c.name}
              </p>
              <p className="text-[9px] text-gray-400">
                {c.count} expense{c.count > 1 ? "s" : ""}
              </p>
            </div>
            <p className="text-[11px] font-semibold text-gray-900">
              €{c.total}
            </p>
            <svg
              className="w-3 h-3 text-gray-300 shrink-0"
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
/*  Screen 2 -Wallets                                                 */
/* ------------------------------------------------------------------ */
function WalletsScreen(): React.JSX.Element {
  const wallets = [
    { icon: "🏦", name: "Intesa Sanpaolo", total: 720, color: "#007A33" },
    { icon: "💳", name: "N26", total: 385, color: "#36A18B" },
    { icon: "💜", name: "Revolut", total: 210, color: "#0075EB" },
    { icon: "💚", name: "Wise", total: 130, color: "#9FE870" },
  ];

  return (
    <div className="px-3 pb-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-lg font-bold text-gray-900">Wallets</p>
        <div className="flex gap-1">
          <span className="px-2 py-0.5 bg-fixo-100 text-fixo-600 text-[9px] font-bold rounded-lg">
            Monthly
          </span>
          <span className="px-2 py-0.5 bg-white text-gray-400 text-[9px] font-bold rounded-lg">
            Yearly
          </span>
        </div>
      </div>

      <div className="space-y-1.5">
        {wallets.map((w) => (
          <div
            key={w.name}
            className="flex items-center gap-2.5 bg-white rounded-2xl px-3 py-2.5"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: w.color }}
            >
              <span className="text-sm">{w.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-gray-900 truncate">
                {w.name}
              </p>
              <p className="text-[9px] text-gray-400">Per month</p>
            </div>
            <p className="text-[11px] font-semibold text-gray-900">
              €{w.total}
            </p>
            <svg
              className="w-3 h-3 text-gray-300 shrink-0"
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

      <div className="flex justify-center mt-5">
        <div className="bg-fixo-500 rounded-full px-5 py-2 flex items-center gap-1.5">
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className="text-white text-[10px] font-semibold">
            Add wallet
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 3 -Emergency Fund                                         */
/* ------------------------------------------------------------------ */
function EmergencyScreen(): React.JSX.Element {
  const essentialCount = 8;
  const essentialMonthly = 1170;
  const months = 6;
  const target = essentialMonthly * months;

  const topExpenses = [
    { name: "Rent", amount: 650 },
    { name: "Car insurance", amount: 180 },
    { name: "Health insurance", amount: 120 },
  ];

  return (
    <div className="px-3 pb-4">
      <p className="text-lg font-bold text-gray-900 mb-1">Emergency Fund</p>
      <p className="text-[9px] text-gray-400 mb-3">
        Your safety net based on essential expenses
      </p>

      {/* Summary card */}
      <div className="bg-white rounded-2xl p-3 mb-3 flex gap-2">
        <div className="flex-1 text-center">
          <p className="text-xl font-bold text-gray-900">{essentialCount}</p>
          <p className="text-[8px] text-gray-400">Essential expenses</p>
        </div>
        <div className="w-px bg-gray-100" />
        <div className="flex-1 text-center">
          <p className="text-xl font-bold text-fixo-500">
            €{essentialMonthly.toLocaleString("en")}
          </p>
          <p className="text-[8px] text-gray-400">Monthly cost</p>
        </div>
      </div>

      {/* Coverage period */}
      <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Your target
      </p>
      <div className="bg-white rounded-2xl p-3 mb-3">
        <div className="relative mb-2">
          <div className="h-1.5 bg-gray-100 rounded-full">
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
        <p className="text-[11px] font-semibold text-gray-700 text-center mb-3">
          {months} months
        </p>
        <p className="text-2xl font-bold text-fixo-500 text-center">
          €{target.toLocaleString("en")}
        </p>
        <p className="text-[8px] text-gray-400 text-center mt-1">
          {essentialCount} expenses × €{essentialMonthly} × {months} months
        </p>
      </div>

      {/* Top expenses */}
      <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Top expenses
      </p>
      <div className="bg-white rounded-2xl p-3">
        {topExpenses.map((e, i) => (
          <div key={e.name}>
            <div className="flex justify-between py-1.5">
              <span className="text-[10px] font-medium text-gray-700">
                {e.name}
              </span>
              <span className="text-[10px] font-semibold text-gray-900">
                €{e.amount}
              </span>
            </div>
            {i < topExpenses.length - 1 && (
              <div className="border-t border-gray-50" />
            )}
          </div>
        ))}
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
/*  Mobile slider -native scroll-snap, draggable                     */
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
/*  Desktop layout -all 3 side by side                                */
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
