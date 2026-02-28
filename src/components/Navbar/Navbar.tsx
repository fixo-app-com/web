export default function Navbar(): React.JSX.Element {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#">
          <img src="/logo.png" alt="Fixo" className="h-10 w-10" />
        </a>
        <a
          href="#cta"
          className="bg-fixo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-fixo-600 transition-colors"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
