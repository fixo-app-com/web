import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const features = [
  {
    icon: '📌',
    title: 'Spese Fisse',
    desc: 'Registra tutte le tue spese ricorrenti mensili in un unico posto. Niente più sorprese a fine mese.',
  },
  {
    icon: '🏷️',
    title: 'Macro Categorie',
    desc: 'Organizza le spese in categorie personalizzate: casa, trasporti, abbonamenti, assicurazioni e altro.',
  },
  {
    icon: '🏦',
    title: 'Conti Bancari',
    desc: 'Assegna ogni spesa al conto da cui viene addebitata. Vedi quanto esce da ciascun conto.',
  },
  {
    icon: '📊',
    title: 'Totale & Ripartizione',
    desc: 'Visualizza il totale delle spese fisse e la suddivisione per conto bancario in un colpo d\'occhio.',
  },
]

const mockCategories = [
  { name: 'Casa', amount: 850, color: 'bg-fixo-500' },
  { name: 'Trasporti', amount: 320, color: 'bg-emerald-500' },
  { name: 'Abbonamenti', amount: 95, color: 'bg-amber-500' },
  { name: 'Assicurazioni', amount: 180, color: 'bg-rose-500' },
]

const mockAccounts = [
  { name: 'Conto Principale', amount: 1095, pct: 75.7 },
  { name: 'Conto Secondario', amount: 350, pct: 24.3 },
]

function App() {
  const total = mockCategories.reduce((s, c) => s + c.amount, 0)

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-extrabold tracking-tight text-fixo-600">fixo</span>
          <a
            href="#cta"
            className="bg-fixo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-fixo-700 transition-colors"
          >
            Inizia Gratis
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:pt-44 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-block mb-6 px-4 py-1.5 bg-fixo-50 text-fixo-700 rounded-full text-sm font-semibold"
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
            <span className="text-fixo-600">spendi ogni mese?</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Fixo ti aiuta a mappare tutte le spese fisse mensili, organizzarle per categoria
            e conto bancario, e avere sempre il controllo totale sulle tue uscite ricorrenti.
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
              className="bg-fixo-600 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-fixo-700 transition-colors shadow-lg shadow-fixo-600/25"
            >
              Prova Fixo Gratis
            </a>
            <a
              href="#features"
              className="border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-lg hover:border-fixo-300 hover:text-fixo-600 transition-colors"
            >
              Scopri di più
            </a>
          </motion.div>
        </div>
      </section>

      {/* App Preview */}
      <section className="px-6 pb-24">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-2xl shadow-gray-200/60">
            {/* Mock header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm text-gray-400 font-medium">Spese fisse mensili</p>
                <p className="text-4xl font-extrabold tracking-tight text-gray-900">
                  €{total.toLocaleString('it-IT')}
                  <span className="text-lg text-gray-400 font-medium">/mese</span>
                </p>
              </div>
              <div className="hidden sm:flex gap-2">
                <span className="px-3 py-1 bg-fixo-100 text-fixo-700 text-xs font-semibold rounded-full">4 categorie</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">2 conti</span>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-3 mb-8">
              {mockCategories.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex items-center gap-4"
                >
                  <div className={`w-3 h-3 rounded-full ${cat.color} shrink-0`} />
                  <span className="text-sm font-medium text-gray-700 w-32">{cat.name}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${cat.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(cat.amount / total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="text-sm font-bold text-gray-900 w-16 text-right">€{cat.amount}</span>
                </motion.div>
              ))}
            </div>

            {/* Accounts split */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Ripartizione per conto</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mockAccounts.map((acc, i) => (
                  <motion.div
                    key={acc.name}
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="bg-white rounded-2xl p-5 border border-gray-100"
                  >
                    <p className="text-sm text-gray-500 font-medium mb-1">{acc.name}</p>
                    <p className="text-2xl font-extrabold text-gray-900">€{acc.amount}</p>
                    <p className="text-xs text-gray-400 mt-1">{acc.pct}% del totale</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24 bg-gray-50">
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
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Semplice, veloce e pensato per chi vuole avere il controllo sulle proprie spese ricorrenti.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-fixo-200 hover:shadow-lg hover:shadow-fixo-100/50 transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
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
            <p className="text-gray-500 text-lg">Tre semplici passaggi per avere tutto sotto controllo.</p>
          </motion.div>

          <div className="space-y-12 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-12">
            {[
              { step: '01', title: 'Aggiungi i tuoi conti', desc: 'Inserisci i conti bancari da cui vengono addebitate le spese.' },
              { step: '02', title: 'Crea le categorie', desc: 'Organizza le spese in macro categorie come casa, trasporti, abbonamenti.' },
              { step: '03', title: 'Registra le spese fisse', desc: 'Aggiungi ogni spesa ricorrente e assegnala a categoria e conto. Fixo fa il resto.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="text-center"
              >
                <span className="text-5xl font-extrabold text-fixo-100 block mb-3">{s.step}</span>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="px-6 py-24 bg-fixo-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-fixo-300 text-sm font-semibold uppercase tracking-wider mb-6">
              Perché le persone amano Fixo
            </p>
            <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-6">
              "Finalmente so esattamente dove vanno i miei soldi ogni mese.
              <br className="hidden sm:block" />
              Niente più conti a mente o fogli Excel infiniti."
            </blockquote>
            <p className="text-fixo-400 font-medium">Marco R. — Libero professionista</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="px-6 py-24">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-br from-fixo-600 to-fixo-800 rounded-3xl p-12 sm:p-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Inizia a usare Fixo oggi
          </h2>
          <p className="text-fixo-200 text-lg mb-8 max-w-md mx-auto">
            Mappa le tue spese fisse in pochi minuti. Gratis, senza carta di credito.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-fixo-700 font-bold px-10 py-4 rounded-full text-lg hover:bg-fixo-50 transition-colors shadow-lg"
          >
            Prova Fixo Gratis
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-lg font-extrabold text-fixo-600">fixo</span>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Fixo. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
