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
          className="inline-block mb-6 px-4 py-1.5 bg-fixo-950 text-fixo-300 rounded-full text-sm font-semibold border border-fixo-800/50"
        >
          Le tue spese fisse, finalmente chiare
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
        >
          Sai davvero quanto
          <br />
          <span className="text-fixo-400">spendi ogni mese?</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Fixo ti aiuta a mappare tutte le spese fisse mensili, organizzarle per
          categoria e conto bancario, e avere sempre il controllo totale sulle
          tue uscite ricorrenti.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cta"
            className="bg-fixo-600 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-fixo-500 transition-colors shadow-lg shadow-fixo-600/20"
          >
            Prova Fixo Gratis
          </a>
          <a
            href="#features"
            className="border-2 border-gray-700 text-gray-300 font-semibold px-8 py-4 rounded-full text-lg hover:border-fixo-500 hover:text-fixo-400 transition-colors"
          >
            Scopri di più
          </a>
        </motion.div>
      </div>
    </section>
  );
}
