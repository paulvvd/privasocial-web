import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Support information for PrivaSocial.",
};

export default function SupportPage() {
  return (
    <article className="page">
      <h1>Support</h1>
      <p className="page-intro">
        Need help with your PrivaSocial account? We are here to help. Contact
        us at{" "}
        <a href="mailto:support@privasocial.app">support@privasocial.app</a>.
      </p>

      <section>
        <h2>Account deletion &amp; data requests</h2>
        <p>
          To request account deletion, data access, or data correction, email{" "}
          <a href="mailto:support@privasocial.app">support@privasocial.app</a>{" "}
          from the address associated with your account.
        </p>
      </section>

      <section>
        <h2>FAQ</h2>
        <ul>
          <li>
            <strong>I can&apos;t log in:</strong> Check your credentials and try
            resetting your password.
          </li>
          <li>
            <strong>I didn&apos;t get a verification email:</strong> Check spam
            and promotions folders, then contact support.
          </li>
          <li>
            <strong>How does privacy work?</strong> Review our Privacy Policy
            for details on data use and protection.
          </li>
        </ul>
      </section>
    </article>
  );
}
