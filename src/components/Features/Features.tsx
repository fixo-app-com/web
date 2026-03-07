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
    title: "Set It Once",
    desc: "No daily logging, no receipts, no forgotten transactions. Add your fixed expenses once and Fixo keeps track forever.",
  },
  {
    icon: "💰",
    title: "See Your Real Freedom",
    desc: "Know instantly how much of your paycheck is already spoken for, and how much you actually get to decide how to spend.",
  },
  {
    icon: "🏦",
    title: "Per-Wallet Clarity",
    desc: "Assign expenses to the accounts you pay from. See at a glance how much flows out of each bank, no linking required.",
  },
  {
    icon: "🛡️",
    title: "Emergency Ready",
    desc: "Mark expenses as essential and Fixo calculates your safety net. Know exactly how much you need saved for 3 to 60 months.",
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
            Why Fixo is different
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Traditional trackers make you log every purchase. Fixo takes a
            smarter approach: track only the fixed costs that eat your income
            on autopilot.
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
