import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TermsOfServicePage(): React.JSX.Element {
  useEffect(() => {
    document.title = "Terms of Service — Fixo";
  }, []);

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 p-8">
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-400 mb-8">
            Effective date: February 28, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using Fixo ("the App"), you agree to be bound by
              these Terms of Service. If you do not agree to these terms, do not
              use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              2. Description of Service
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Fixo is a personal finance application that helps you track fixed
              expenses, organize spending by categories and wallets, and manage
              your monthly budget. The App is provided on an "as is" basis and
              may be updated or modified at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
            <p className="text-gray-600 leading-relaxed">
              You must create an account to use Fixo. You are responsible for
              maintaining the confidentiality of your account credentials and for
              all activity that occurs under your account. You must provide
              accurate and complete information when creating your account and
              notify us immediately of any unauthorized use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              4. User Data &amp; Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of the App is also governed by our{" "}
              <Link
                to="/privacy"
                className="text-fixo-500 hover:underline"
              >
                Privacy Policy
              </Link>
              , which describes how we collect, use, and protect your
              information. By using the App, you consent to the practices
              described in the Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">5. Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You agree not to:
            </p>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed space-y-2">
              <li>
                Use the App for any unlawful purpose or in violation of any
                applicable laws or regulations.
              </li>
              <li>
                Attempt to interfere with, compromise, or disrupt the App or its
                servers.
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any part of the App.
              </li>
              <li>
                Use automated systems or software to extract data from the App.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              6. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The App, including its design, code, graphics, and content, is
              owned by Fixo and protected by intellectual property laws. You are
              granted a limited, non-exclusive, non-transferable license to use
              the App for personal, non-commercial purposes. You retain ownership
              of the financial data you enter into the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">7. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We may suspend or terminate your access to the App at any time,
              with or without cause, and with or without notice. You may delete
              your account at any time from within the App. Upon termination, all
              data associated with your account will be permanently deleted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              8. Disclaimer of Warranties
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The App is provided "as is" and "as available" without warranties
              of any kind, either express or implied. We do not warrant that the
              App will be uninterrupted, error-free, or free of harmful
              components. Fixo is a tracking tool and does not provide financial
              advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To the fullest extent permitted by law, Fixo and its operators
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to
              your use of the App, including but not limited to loss of data,
              financial losses, or business interruption.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              10. Changes to These Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these Terms of Service from time to time. Changes
              will be posted on this page with an updated effective date.
              Continued use of the App after changes are posted constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about these Terms of Service, contact us
              at{" "}
              <a
                href="mailto:support@fixo-app.com"
                className="text-fixo-500 hover:underline"
              >
                support@fixo-app.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
