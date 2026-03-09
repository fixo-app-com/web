import { motion } from "framer-motion";
import { fadeUp } from "../animations";

interface PainPoint {
  question: string;
  answer: string;
}

const painPoints: PainPoint[] = [
  {
    question: "Surprised by that bill you forgot about?",
    answer: "Car insurance once a year, electricity every quarter. Fixo breaks every cost down to a monthly view so nothing catches you off guard.",
  },
  {
    question: "Lost in complex budgets?",
    answer: "One number tells you everything: what's left after your bills. That's your real spending power.",
  },
  {
    question: "Tired of logging every coffee?",
    answer: "Fixo only tracks what's fixed. Add your costs once and instantly see how much of your income is committed and how much is actually yours to spend.",
  },
];

export default function Testimonial(): React.JSX.Element {
  return (
    <section className="px-6 py-24 bg-fixo-50 border-y border-fixo-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-fixo-500 text-sm font-semibold uppercase tracking-wider mb-3">
            Sounds familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            The problems you already know
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:gap-8">
          {painPoints.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100"
            >
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                &ldquo;{p.question}&rdquo;
              </p>
              <div className="flex items-start gap-3">
                <span className="text-fixo-500 font-bold text-lg mt-0.5 shrink-0">&rarr;</span>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                  {p.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
