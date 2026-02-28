import { Link } from "react-router-dom";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="px-6 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <nav className="flex gap-6">
          <Link
            to="/privacy"
            className="text-sm text-gray-400 hover:text-gray-600"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-sm text-gray-400 hover:text-gray-600"
          >
            Terms of Service
          </Link>
          <Link
            to="/support"
            className="text-sm text-gray-400 hover:text-gray-600"
          >
            Support
          </Link>
        </nav>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Fixo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
