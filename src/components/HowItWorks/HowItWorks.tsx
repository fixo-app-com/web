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
    title: "Create your account",
    desc: "Sign up in seconds with Apple, Google, or email. No forms, no friction.",
  },
  {
    step: "02",
    title: "Add your wallets",
    desc: "Name each bank account you pay bills from: Intesa, N26, Revolut. No linking needed.",
  },
  {
    step: "03",
    title: "Enter your fixed costs",
    desc: "Add your recurring expenses once: rent, utilities, insurance, streaming. That's it, you're done.",
  },
  {
    step: "04",
    title: "See the full picture",
    desc: "Instantly see how much is committed, what's left, and where every penny goes. No daily effort.",
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
            Set it up once, get clarity forever. No daily work.
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-12">
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
