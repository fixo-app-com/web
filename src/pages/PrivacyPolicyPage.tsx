import { useEffect } from "react";

export default function PrivacyPolicyPage(): React.JSX.Element {
  useEffect(() => {
    document.title = "Privacy Policy — Fixo";
  }, []);

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 p-8">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-8">
            Effective date: March 1, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Fixo ("we", "our", or "us") is a personal finance app that helps
              you track fixed expenses. This Privacy Policy explains what
              information we collect, how we use it, and the choices you have.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              Information We Collect
            </h2>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed space-y-2">
              <li>
                <strong>Account information</strong> — email address and
                authentication credentials via Firebase Auth (email/password).
              </li>
              <li>
                <strong>Financial data you enter</strong> — expenses,
                categories, wallets, budget settings, and currency preferences.
              </li>
              <li>
                <strong>Crash data</strong> — we use Firebase Crashlytics to
                automatically collect anonymous crash reports and diagnostic
                information when the app encounters an error. This data is not
                linked to your identity and is used solely to improve app
                stability. It is not used for advertising, tracking, or shared
                with third parties beyond Firebase infrastructure.
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              We do <strong>not</strong> collect location data, contacts,
              photos, device identifiers, or advertising data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use the information you provide solely to operate and improve
              the Fixo service — authenticating your account and storing your
              expense data so it syncs across your devices. We do not use your
              data for advertising, analytics, or any form of tracking.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              Data Storage &amp; Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your data is stored in Google Cloud Firestore, secured with HTTPS
              encryption in transit and per-user Firestore security rules that
              ensure only you can access your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Data Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell, rent, or share your personal information with
              third parties. Firebase (Google) acts as our infrastructure
              provider and processes data on our behalf under their terms of
              service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              Data Retention &amp; Deletion
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your data is retained as long as your account exists. You can
              delete your account and all associated data directly from the app
              in Settings. Alternatively, contact us at{" "}
              <a
                href="mailto:support@fixo-app.com"
                className="text-fixo-500 hover:underline"
              >
                support@fixo-app.com
              </a>{" "}
              and we will process your request within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Fixo is not directed at children under 13. We do not knowingly
              collect personal information from children. If you believe a child
              has provided us with personal data, please contact us so we can
              remove it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy, contact us at{" "}
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
