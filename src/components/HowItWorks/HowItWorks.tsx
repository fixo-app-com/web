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
    title: "Aggiungi i tuoi conti",
    desc: "Inserisci i conti bancari da cui vengono addebitate le spese.",
  },
  {
    step: "02",
    title: "Crea le categorie",
    desc: "Organizza le spese in macro categorie come casa, trasporti, abbonamenti.",
  },
  {
    step: "03",
    title: "Registra le spese fisse",
    desc: "Aggiungi ogni spesa ricorrente e assegnala a categoria e conto. Fixo fa il resto.",
  },
];

export default function HowItWorks(): React.JSX.Element {
  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Come funziona
          </h2>
          <p className="text-gray-400 text-lg">
            Tre semplici passaggi per avere tutto sotto controllo.
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
              <span className="text-5xl font-extrabold text-fixo-900 block mb-3">
                {s.step}
              </span>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
