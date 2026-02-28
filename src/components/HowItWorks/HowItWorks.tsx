import { motion } from "framer-motion";
import { fadeUp } from "../animations";

interface Step {
  step: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    step: "01",
    title: "Name your wallets",
    desc: "Create a wallet for each account you pay bills from — no linking required, just a name.",
  },
  {
    step: "02",
    title: "Organize by category",
    desc: "Group your fixed costs into categories like Housing, Transport, Insurance, or Subscriptions.",
  },
  {
    step: "03",
    title: "See your real picture",
    desc: "Instantly know how much of your income is locked in, per category and per account.",
  },
];

export default function HowItWorks(): React.JSX.Element {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
            How it works
          </h2>
          <p className="text-gray-500 text-lg">
            Three steps to full clarity on your fixed costs.
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-12">
          {steps.map((s: Step, i: number) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="text-center"
            >
              <span className="text-5xl font-extrabold text-fixo-200 block mb-3">
                {s.step}
              </span>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
