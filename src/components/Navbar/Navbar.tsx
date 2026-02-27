export default function Navbar(): React.JSX.Element {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-extrabold tracking-tight text-fixo-400">
          fixo
        </span>
        <a
          href="#cta"
          className="bg-fixo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-fixo-500 transition-colors"
        >
          Inizia Gratis
        </a>
      </div>
    </nav>
  );
}
