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
        className="max-w-3xl mx-auto text-center bg-gradient-to-br from-fixo-800 to-fixo-950 rounded-3xl p-12 sm:p-16 border border-fixo-700/30"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Inizia a usare Fixo oggi
        </h2>
        <p className="text-fixo-300 text-lg mb-8 max-w-md mx-auto">
          Mappa le tue spese fisse in pochi minuti. Gratis, senza carta di
          credito.
        </p>
        <a
          href="#"
          className="inline-block bg-fixo-500 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-fixo-400 transition-colors shadow-lg shadow-fixo-600/20"
        >
          Prova Fixo Gratis
        </a>
      </motion.div>
    </section>
  );
}
