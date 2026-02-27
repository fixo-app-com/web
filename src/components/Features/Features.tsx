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
    title: "Spese Fisse",
    desc: "Registra tutte le tue spese ricorrenti mensili in un unico posto. Niente più sorprese a fine mese.",
  },
  {
    icon: "🏷️",
    title: "Macro Categorie",
    desc: "Organizza le spese in categorie personalizzate: casa, trasporti, abbonamenti, assicurazioni e altro.",
  },
  {
    icon: "🏦",
    title: "Conti Bancari",
    desc: "Assegna ogni spesa al conto da cui viene addebitata. Vedi quanto esce da ciascun conto.",
  },
  {
    icon: "📊",
    title: "Totale & Ripartizione",
    desc: "Visualizza il totale delle spese fisse e la suddivisione per conto bancario in un colpo d'occhio.",
  },
];

export default function Features(): React.JSX.Element {
  return (
    <section id="features" className="px-6 py-24 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Tutto quello che ti serve
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Semplice, veloce e pensato per chi vuole avere il controllo sulle
            proprie spese ricorrenti.
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
              className="bg-gray-900 rounded-2xl p-7 border border-gray-800 hover:border-fixo-700 hover:shadow-lg hover:shadow-fixo-950/50 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
