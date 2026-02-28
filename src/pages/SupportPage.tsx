import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function SupportPage(): React.JSX.Element {
  useEffect(() => {
    document.title = "Support — Fixo";
  }, []);

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 p-8">
          <h1 className="text-3xl font-bold mb-8">Support</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Need help or have a question? Email us at{" "}
              <a
                href="mailto:support@fixo-app.com"
                className="text-fixo-500 hover:underline"
              >
                support@fixo-app.com
              </a>
              . We typically respond within 48 hours.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Account Deletion</h2>
            <p className="text-gray-600 leading-relaxed">
              To delete your account and all associated data, email{" "}
              <a
                href="mailto:support@fixo-app.com"
                className="text-fixo-500 hover:underline"
              >
                support@fixo-app.com
              </a>{" "}
              with the email address linked to your account. We will process
              your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              To learn how we handle your data, read our{" "}
              <Link to="/privacy" className="text-fixo-500 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
