export default function Footer(): React.JSX.Element {
  return (
    <footer className="px-6 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src="/logo.png" alt="Fixo" className="h-10 w-10" />
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Fixo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
