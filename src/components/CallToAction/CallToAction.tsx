import { motion } from "framer-motion";
import { scaleIn } from "../animations";

export default function CallToAction(): React.JSX.Element {
  return (
    <section id="cta" className="px-6 py-24">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center bg-white rounded-3xl p-12 sm:p-16 border border-gray-100"
      >
        <img
          src="/logo.png"
          alt="Fixo"
          className="h-16 w-16 mx-auto mb-6"
        />
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Know your real budget
        </h2>
        <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
          Map every fixed cost in minutes and see how much of your income is
          truly yours. Free, no credit card required.
        </p>
        {/* App Store placeholder badge */}
        <a
          href="#"
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
    </section>
  );
}
