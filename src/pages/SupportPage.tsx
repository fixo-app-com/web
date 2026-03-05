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
            <h2 className="text-xl font-semibold mb-3">
              Signing In with Apple or Google
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Fixo supports Sign in with Apple and Sign in with Google for
              fast, secure account creation. Here are some things to keep in
              mind:
            </p>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed space-y-2">
              <li>
                <strong>Apple "Hide My Email"</strong> — if you chose to hide
                your email during Apple sign-in, Fixo receives a unique private
                relay address (e.g. abc123@privaterelay.appleid.com). All our
                emails will be sent to this relay and forwarded to your real
                inbox by Apple. You can manage relay addresses in{" "}
                <strong>Settings &gt; Apple ID &gt; Sign-In &amp; Security &gt;
                  Hide My Email</strong> on your Apple device.
              </li>
              <li>
                <strong>Google account</strong> — we receive your name, email,
                and profile picture from Google, used solely to create and
                identify your Fixo account.
              </li>
              <li>
                <strong>Switching sign-in methods</strong> — your account is
                linked to the method you used to sign up. If you need to change
                your sign-in method, contact us at{" "}
                <a
                  href="mailto:support@fixo-app.com"
                  className="text-fixo-500 hover:underline"
                >
                  support@fixo-app.com
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Account Deletion</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You can delete your account and all associated data directly from
              the app in <strong>Settings</strong>. Alternatively, email{" "}
              <a
                href="mailto:support@fixo-app.com"
                className="text-fixo-500 hover:underline"
              >
                support@fixo-app.com
              </a>{" "}
              with the email address linked to your account and we will process
              your request within 30 days.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you signed up with Apple or Google, we also recommend revoking
              Fixo's access from your Apple ID settings (
              <strong>Settings &gt; Apple ID &gt; Sign-In &amp; Security &gt;
                Sign in with Apple</strong>) or your{" "}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fixo-500 hover:underline"
              >
                Google Account permissions
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              To learn how we handle your data, read our{" "}
              <Link to="/privacy" className="text-fixo-500 hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms" className="text-fixo-500 hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
