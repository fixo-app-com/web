import { motion } from "framer-motion";
import { fadeUp } from "../animations";

export default function Hero(): React.JSX.Element {
  return (
    <section className="pt-32 pb-20 px-6 lg:pt-44 lg:pb-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-block mb-6 px-4 py-1.5 bg-fixo-100 text-fixo-600 rounded-full text-sm font-semibold border border-fixo-200"
        >
          Not another daily expense tracker
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-gray-900"
        >
          Your fixed costs,
          <br />
          <span className="text-fixo-500">crystal clear</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          No daily logging needed. Fixo maps only the costs you can't
          avoid: rent, insurance, subscriptions, loans. Once those are clear,
          every penny left is yours — enjoy life or build your safety net.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex justify-center"
        >
          {/* App Store placeholder badge */}
          <a
            href="https://apps.apple.com/it/app/fixo/id6759840216"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 text-white font-semibold pl-4 pr-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 fill-current"
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-none opacity-70">
                Download on the
              </div>
              <div className="text-base font-bold leading-tight">App Store</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
