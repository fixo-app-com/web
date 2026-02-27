export default function Footer(): React.JSX.Element {
  return (
    <footer className="px-6 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-lg font-extrabold text-fixo-400">fixo</span>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Fixo. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
