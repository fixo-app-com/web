import { motion } from "framer-motion";
import { fadeUp } from "../animations";

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: "📌",
    title: "Only Fixed Costs",
    desc: "No daily coffee tracking. Fixo is built for the expenses you can't avoid — rent, utilities, insurance, subscriptions, loans.",
  },
  {
    icon: "💰",
    title: "Income Clarity",
    desc: "See at a glance how much of your monthly income is already committed to fixed costs, and how much you truly have left.",
  },
  {
    icon: "🏦",
    title: "Per-Wallet Breakdown",
    desc: "Create wallets for your accounts and assign each expense to one. See how much flows out of each wallet every month — no bank linking needed.",
  },
  {
    icon: "🛡️",
    title: "Emergency Fund",
    desc: "Mark expenses as essential and let Fixo calculate how much you need to save for 3 to 60 months of safety net.",
  },
];

export default function Features(): React.JSX.Element {
  return (
    <section id="features" className="px-6 pt-12 pb-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
            Built for what matters
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Fixo doesn&apos;t track every purchase — it gives you full
            transparency on the recurring costs that silently eat your income.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f: Feature, i: number) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-fixo-300 hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
