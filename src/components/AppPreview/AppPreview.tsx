import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "../animations";

interface Category {
  name: string;
  amount: number;
  color: string;
}

interface Account {
  name: string;
  amount: number;
  pct: number;
}

const mockCategories: Category[] = [
  { name: "Casa", amount: 850, color: "bg-fixo-500" },
  { name: "Trasporti", amount: 320, color: "bg-emerald-500" },
  { name: "Abbonamenti", amount: 95, color: "bg-amber-500" },
  { name: "Assicurazioni", amount: 180, color: "bg-rose-500" },
];

const mockAccounts: Account[] = [
  { name: "Conto Principale", amount: 1095, pct: 75.7 },
  { name: "Conto Secondario", amount: 350, pct: 24.3 },
];

export default function AppPreview(): React.JSX.Element {
  const total = mockCategories.reduce(
    (s: number, c: Category) => s + c.amount,
    0,
  );

  return (
    <section className="px-6 pb-24">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-gray-900 rounded-3xl border border-gray-800 p-6 sm:p-10 shadow-2xl shadow-black/40">
          {/* Mock header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-gray-500 font-medium">
                Spese fisse mensili
              </p>
              <p className="text-4xl font-extrabold tracking-tight text-gray-100">
                €{total.toLocaleString("it-IT")}
                <span className="text-lg text-gray-500 font-medium">/mese</span>
              </p>
            </div>
            <div className="hidden sm:flex gap-2">
              <span className="px-3 py-1 bg-fixo-950 text-fixo-300 text-xs font-semibold rounded-full border border-fixo-800/50">
                4 categorie
              </span>
              <span className="px-3 py-1 bg-emerald-950 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-800/50">
                2 conti
              </span>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3 mb-8">
            {mockCategories.map((cat: Category, i: number) => (
              <motion.div
                key={cat.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-center gap-4"
              >
                <div
                  className={`w-3 h-3 rounded-full ${cat.color} shrink-0`}
                />
                <span className="text-sm font-medium text-gray-300 w-32">
                  {cat.name}
                </span>
                <div className="flex-1 bg-gray-800 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${cat.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(cat.amount / total) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + i * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
                <span className="text-sm font-bold text-gray-100 w-16 text-right">
                  €{cat.amount}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Accounts split */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">
              Ripartizione per conto
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockAccounts.map((acc: Account, i: number) => (
                <motion.div
                  key={acc.name}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="bg-gray-800/50 rounded-2xl p-5 border border-gray-700/50"
                >
                  <p className="text-sm text-gray-400 font-medium mb-1">
                    {acc.name}
                  </p>
                  <p className="text-2xl font-extrabold text-gray-100">
                    €{acc.amount}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {acc.pct}% del totale
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
