import { motion } from "framer-motion";
import { fadeUp } from "../animations";

export default function Testimonial(): React.JSX.Element {
  return (
    <section className="px-6 py-24 bg-fixo-950/80 backdrop-blur-sm border-y border-fixo-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-fixo-400 text-sm font-semibold uppercase tracking-wider mb-6">
            Perché le persone amano Fixo
          </p>
          <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-6">
            "Finalmente so esattamente dove vanno i miei soldi ogni mese.
            <br className="hidden sm:block" />
            Niente più conti a mente o fogli Excel infiniti."
          </blockquote>
          <p className="text-fixo-300 font-medium">
            Marco R. — Libero professionista
          </p>
        </motion.div>
      </div>
    </section>
  );
}
