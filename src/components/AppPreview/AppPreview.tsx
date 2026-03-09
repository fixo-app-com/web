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
      {/* iPhone 17 — 149.6 × 71.5 mm (≈2.09 ratio) */}
      <div className="relative w-[266px] sm:w-[286px]">
        {/* Side buttons */}
        <div className="absolute -right-[1.5px] top-[110px] w-[3px] h-[36px] rounded-r-sm bg-gray-700" />
        <div className="absolute -left-[1.5px] top-[80px] w-[3px] h-[12px] rounded-l-sm bg-gray-700" />
        <div className="absolute -left-[1.5px] top-[104px] w-[3px] h-[26px] rounded-l-sm bg-gray-700" />
        <div className="absolute -left-[1.5px] top-[138px] w-[3px] h-[26px] rounded-l-sm bg-gray-700" />

        {/* Body */}
        <div className="bg-[#1a1a1f] rounded-[3rem] p-[9px] shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_10px_30px_-6px_rgba(0,0,0,0.35)]">
          {/* Screen */}
          <div className="relative bg-gray-100 rounded-[2.35rem] overflow-hidden h-[470px] sm:h-[510px]">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-7 pt-[13px]">
              {/* Time */}
              <span className="text-[10px] font-semibold text-black">9:41</span>
              {/* Right icons: signal, wifi, battery */}
              <div className="flex items-center gap-[5px]">
                {/* Cellular signal bars */}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="text-black">
                  <rect x="0" y="7" width="2.5" height="3" rx="0.5" fill="currentColor" />
                  <rect x="3.5" y="5" width="2.5" height="5" rx="0.5" fill="currentColor" />
                  <rect x="7" y="2.5" width="2.5" height="7.5" rx="0.5" fill="currentColor" />
                  <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="currentColor" />
                </svg>
                {/* Wi-Fi */}
                <svg width="12" height="10" viewBox="0 0 16 12" fill="none" className="text-black">
                  <path d="M8 11.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill="currentColor" />
                  <path d="M4.93 7.83a4.38 4.38 0 016.14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2.34 5.24a7.88 7.88 0 0111.32 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {/* Battery */}
                <svg width="20" height="10" viewBox="0 0 25 12" fill="none" className="text-black">
                  <rect x="0.5" y="0.5" width="21" height="11" rx="2" stroke="currentColor" strokeOpacity="0.35" />
                  <rect x="2" y="2" width="18" height="8" rx="1" fill="currentColor" />
                  <path d="M23 4v4a2 2 0 000-4z" fill="currentColor" fillOpacity="0.35" />
                </svg>
              </div>
            </div>

            {/* Dynamic Island */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[84px] h-[25px] bg-black rounded-full z-30" />

            {/* Content */}
            <div className="pt-10 h-full overflow-hidden">
              {children}
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] rounded-full bg-black/15" />
          </div>
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
  const fixedPctColor =
    fixedPct <= 50
      ? "text-emerald-600"
      : fixedPct <= 70
        ? "text-yellow-500"
        : "text-red-500";
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
            <p className={`text-xl font-bold ${fixedPctColor}`}>{fixedPct}%</p>
            <p className="text-[9px] text-gray-500 mt-0.5">of your income goes to fixed expenses</p>
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
              from €{available} available
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
        Simulate how much cash you need to cover your expenses if your income stops.
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
            <p className="text-[8px] font-medium text-gray-400">Covered expenses</p>
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
          {essentialCount} expenses · €{essentialMonthly}/mo × {months} mo
        </p>
      </div>

      {/* Recommendation tip */}
      <div className="flex gap-2 rounded-xl bg-fixo-50 p-3">
        <svg className="w-3.5 h-3.5 text-fixo-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <p className="text-[8px] leading-3 text-gray-600 flex-1">
          Most financial advisors recommend saving at least 3 to 6 months of essential expenses for unexpected events. Adjust based on your job stability and personal comfort.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 4 — Categories                                              */
/* ------------------------------------------------------------------ */
function CategoriesScreen(): React.JSX.Element {
  const categories = [
    { emoji: "🏠", name: "Housing", expenses: 3, total: 845 },
    { emoji: "🚗", name: "Transport", expenses: 2, total: 230 },
    { emoji: "📺", name: "Subscriptions", expenses: 4, total: 48 },
    { emoji: "💡", name: "Utilities", expenses: 3, total: 185 },
    { emoji: "🏥", name: "Health", expenses: 1, total: 120 },
    { emoji: "📱", name: "Phone", expenses: 1, total: 17 },
  ];

  return (
    <div className="px-3 pb-4 relative h-full">
      {/* Header */}
      <p className="text-base font-bold text-gray-900 mb-2">Categories</p>

      {/* Toggle + Sort row */}
      <div className="flex items-center justify-between mb-3">
        <ViewModeChips />
        <div className="flex items-center gap-1 text-gray-400">
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
          </svg>
          <span className="text-[8px] font-medium">Highest</span>
        </div>
      </div>

      {/* Category cards */}
      <div className="space-y-2">
        {categories.map((c) => (
          <div
            key={c.name}
            className="flex items-center bg-white rounded-2xl p-3"
          >
            {/* Emoji */}
            <span className="text-base mr-3 shrink-0">{c.emoji}</span>
            {/* Name + count */}
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-gray-900 truncate">
                {c.name}
              </p>
              <p className="text-[8px] text-gray-400">
                {c.expenses} {c.expenses === 1 ? "expense" : "expenses"}
              </p>
            </div>
            {/* Amount + chevron */}
            <p className="text-[11px] font-semibold text-gray-900 mr-1">
              €{c.total}
            </p>
            <svg className="w-3 h-3 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        ))}
      </div>

      {/* FAB */}
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
/*  Screens data                                                       */
/* ------------------------------------------------------------------ */
const screens = [
  { label: "Home", component: <HomeScreen /> },
  { label: "Categories", component: <CategoriesScreen /> },
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
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    for (let i = 0; i < Math.min(el.children.length, count); i++) {
      const child = el.children[i] as HTMLElement;
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(center - childCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    }
    setActive(closest);
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
      if (!el || !el.children[idx]) return;
      const child = el.children[idx] as HTMLElement;
      el.scrollTo({
        left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2,
        behavior: "smooth",
      });
    },
    [ref],
  );

  return { active, scrollTo };
}

/* ------------------------------------------------------------------ */
/*  Shared scrollable phone slider (mobile swipe + desktop scroll)     */
/* ------------------------------------------------------------------ */
function PhoneSlider(): React.JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { active, scrollTo } = useSnapIndex(scrollRef, screens.length);

  /* Prevent vertical scroll from getting trapped in the horizontal container */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        window.scrollBy(0, e.deltaY);
      }
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Scrollable track — full viewport width, no clipping */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-clip snap-x snap-mandatory scroll-smooth w-screen px-[calc(50vw-140px)] sm:px-[calc(50vw-143px)]"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
        }}
      >
        {screens.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="snap-center shrink-0 flex flex-col items-center px-3 sm:px-5 py-8"
          >
            <PhoneFrame>{s.component}</PhoneFrame>
            <p className="text-sm font-semibold text-gray-500 mt-4">
              {s.label}
            </p>
          </motion.div>
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
/*  Main AppPreview component                                          */
/* ------------------------------------------------------------------ */
export default function AppPreview(): React.JSX.Element {
  return (
    <section className="pb-6">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="text-center mb-12 px-6">
          <p className="text-sm font-semibold text-fixo-500 uppercase tracking-wider mb-3">
            Built for clarity
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Everything at a glance
          </h2>
        </div>

        <PhoneSlider />
      </motion.div>
    </section>
  );
}
