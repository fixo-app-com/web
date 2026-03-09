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
/*  Shared: Section header (matches SectionHeader design-system)       */
/* ------------------------------------------------------------------ */
function SectionLabel({ title }: { title: string }): React.JSX.Element {
  return (
    <p className="text-[8px] font-semibold uppercase tracking-wide text-gray-400 mb-1.5">
      {title}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared: ViewMode toggle (matches ChipGroup compact)                */
/* ------------------------------------------------------------------ */
function ViewModeChips(): React.JSX.Element {
  return (
    <div className="flex gap-1.5">
      <span className="px-2.5 py-1 bg-fixo-100 text-fixo-600 text-[9px] font-medium rounded-xl">
        Monthly
      </span>
      <span className="px-2.5 py-1 bg-white text-gray-500 text-[9px] font-medium rounded-xl">
        Yearly
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 1 — Home                                                    */
/* ------------------------------------------------------------------ */
function HomeScreen(): React.JSX.Element {
  const income = 2000;
  const totalCosts = 1445;
  const available = income - totalCosts;
  const fixedPct = Math.round((totalCosts / income) * 100);
  const dailyBudget = Math.round(available / 30);

  const topExpenses = [
    { name: "Rent", amount: 650 },
    { name: "Car insurance", amount: 180 },
    { name: "Health insurance", amount: 120 },
    { name: "Electricity", amount: 95 },
    { name: "Internet", amount: 45 },
  ];

  return (
    <div className="px-3 pb-4">
      {/* Header */}
      <p className="text-base font-bold text-gray-900 mb-2">Home</p>
      <ViewModeChips />

      {/* Overview section */}
      <div className="mt-3">
        <SectionLabel title="Overview" />

        {/* BudgetCard — hero metric + two secondary tiles */}
        <div className="bg-white rounded-2xl p-3">
          {/* Hero metric: Income */}
          <div className="flex flex-col items-center py-0.5">
            <div className="flex items-center gap-1">
              <p className="text-[8px] font-medium uppercase tracking-wide text-gray-400">
                Monthly Income
              </p>
              {/* Edit icon */}
              <svg className="w-2.5 h-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
              </svg>
            </div>
            <p className="text-xl font-bold text-gray-900 mt-0.5">
              €{income.toLocaleString("en")}
            </p>
          </div>

          {/* Secondary metrics row */}
          <div className="flex gap-2 mt-2">
            <div className="flex-1 items-center rounded-xl bg-gray-50 p-2 text-center">
              <p className="text-[8px] font-medium text-gray-400">Total Costs</p>
              <p className="text-[11px] font-semibold text-red-500 mt-0.5">
                €{totalCosts.toLocaleString("en")}
              </p>
            </div>
            <div className="flex-1 items-center rounded-xl bg-gray-50 p-2 text-center">
              <p className="text-[8px] font-medium text-gray-400">Available</p>
              <p className="text-[11px] font-semibold text-emerald-600 mt-0.5">
                €{available.toLocaleString("en")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Cost Ratio */}
      <div className="mt-3">
        <SectionLabel title="Fixed costs" />
        <div className="bg-white rounded-2xl p-3">
          <div className="flex flex-col items-center py-0.5">
            <p className="text-xl font-bold text-emerald-600">{fixedPct}%</p>
            <p className="text-[9px] text-gray-500 mt-0.5">of income is fixed</p>
            <p className="text-[8px] text-gray-400">Ideal: under 50%</p>
          </div>
        </div>
      </div>

      {/* Daily Budget */}
      <div className="mt-3">
        <SectionLabel title="Daily budget" />
        <div className="bg-white rounded-2xl p-3">
          <div className="flex flex-col items-center py-0.5">
            <div className="flex items-baseline">
              <p className="text-xl font-bold text-gray-900">€{dailyBudget}</p>
              <p className="text-[11px] font-semibold text-gray-500">/day</p>
            </div>
            <p className="text-[9px] text-gray-500 mt-0.5">
              From €{available} available
            </p>
          </div>
        </div>
      </div>

      {/* Top Expenses */}
      <div className="mt-3">
        <SectionLabel title="Top expenses" />
        <div className="bg-white rounded-2xl p-3">
          {topExpenses.map((e, i) => (
            <div key={e.name}>
              {i > 0 && <div className="h-px bg-gray-100" />}
              <div className={`flex justify-between ${i === 0 ? "pb-1.5" : i === topExpenses.length - 1 ? "pt-1.5" : "py-1.5"}`}>
                <span className="text-[10px] font-medium text-gray-900">
                  {e.name}
                </span>
                <span className="text-[10px] font-semibold text-gray-900">
                  €{e.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 2 — Wallets                                                 */
/* ------------------------------------------------------------------ */
function WalletsScreen(): React.JSX.Element {
  const wallets = [
    { initial: "IS", name: "Intesa Sanpaolo", total: 720, bg: "#007A33" },
    { initial: "N", name: "N26", total: 385, bg: "#36A18B" },
    { initial: "R", name: "Revolut", total: 210, bg: "#0075EB" },
    { initial: "W", name: "Wise", total: 130, bg: "#9FE870" },
  ];

  return (
    <div className="px-3 pb-4 relative h-full">
      {/* Header */}
      <p className="text-base font-bold text-gray-900 mb-2">Wallets</p>

      {/* Toggle + Sort row */}
      <div className="flex items-center justify-between mb-3">
        <ViewModeChips />
        <div className="flex items-center gap-1 text-gray-400">
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
          </svg>
          <span className="text-[8px] font-medium">A-Z</span>
        </div>
      </div>

      {/* Wallet cards */}
      <div className="space-y-2">
        {wallets.map((w) => (
          <div
            key={w.name}
            className="flex items-center bg-white rounded-2xl p-3"
          >
            {/* Bank icon circle */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-3"
              style={{ backgroundColor: w.bg }}
            >
              <span className="text-[9px] font-bold text-white">{w.initial}</span>
            </div>
            <p className="flex-1 text-[11px] font-semibold text-gray-900 truncate">
              {w.name}
            </p>
            <p className="text-[11px] font-semibold text-gray-900">
              €{w.total}
            </p>
          </div>
        ))}
      </div>

      {/* FAB — Floating Action Button (bottom-right) */}
      <div className="absolute bottom-4 right-3">
        <div className="w-10 h-10 rounded-full bg-fixo-400 flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 3 — Emergency Fund                                         */
/* ------------------------------------------------------------------ */
function EmergencyScreen(): React.JSX.Element {
  const essentialCount = 8;
  const essentialMonthly = 1170;
  const months = 6;
  const target = essentialMonthly * months;

  /* Slider snap-point index: 6 months is index 1 out of [3,6,12,18,24,36,48,60] */
  const sliderPct = (1 / 7) * 100;

  return (
    <div className="px-3 pb-4">
      {/* Header */}
      <p className="text-base font-bold text-gray-900 mb-1">Emergency Fund</p>
      <p className="text-[9px] text-gray-500 mb-3">
        Your safety net based on essential expenses
      </p>

      {/* Essentials Summary — two-column card */}
      <div className="bg-white rounded-2xl p-3 mb-3">
        <div className="flex items-center">
          <div className="flex-1 flex flex-col items-center">
            <div className="flex items-center gap-0.5">
              <p className="text-lg font-bold text-gray-900">{essentialCount}</p>
              {/* Info icon */}
              <svg className="w-2.5 h-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <p className="text-[8px] font-medium text-gray-400">Essential expenses</p>
          </div>
          <div className="w-px self-stretch bg-gray-200" />
          <div className="flex-1 flex flex-col items-center">
            <p className="text-lg font-bold text-gray-900">
              €{essentialMonthly.toLocaleString("en")}
            </p>
            <p className="text-[8px] text-gray-400">Monthly cost</p>
          </div>
        </div>
      </div>

      {/* Your Target section */}
      <SectionLabel title="Your target" />
      <div className="bg-white rounded-2xl p-3 mb-3">
        {/* Slider track */}
        <div className="relative h-3 flex items-center mb-1">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div
              className="h-full bg-fixo-400 rounded-full"
              style={{ width: `${sliderPct}%` }}
            />
          </div>
          <div
            className="absolute w-3.5 h-3.5 bg-fixo-400 rounded-full border-2 border-white shadow"
            style={{ left: `calc(${sliderPct}% - 7px)` }}
          />
        </div>
        <p className="text-sm font-bold text-gray-900 text-center mt-1">
          {months} months
        </p>
        <p className="text-xl font-bold text-fixo-500 text-center mt-2">
          €{target.toLocaleString("en")}
        </p>
        <p className="text-[8px] text-gray-400 text-center mt-1">
          {essentialCount} expenses × €{essentialMonthly} × {months} months
        </p>
      </div>

      {/* Recommendation tip */}
      <div className="flex gap-2 rounded-xl bg-fixo-50 p-3">
        <svg className="w-3.5 h-3.5 text-fixo-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <p className="text-[8px] leading-3 text-gray-600 flex-1">
          Experts recommend saving 3-6 months of essential expenses as an emergency fund.
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
