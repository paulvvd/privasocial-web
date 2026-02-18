import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the PrivaSocial platform.",
};

export default function PrivacyPage() {
  return (
    <article className="page">
      <h1>Privacy Policy</h1>
      <p className="policy-effective">
        Effective date: February 18, 2026
      </p>
      <p className="page-intro">
        At PrivaSocial, we are committed to protecting your personal data and
        your privacy rights. This Privacy Policy explains what we collect, how
        we use it, and the choices you have.
      </p>

      <section>
        <h2>Who we are</h2>
        <p>
          PrivaSocial is a privacy-first social platform. For any privacy or
          data requests, contact us at{" "}
          <a href="mailto:support@privasocial.app">support@privasocial.app</a>.
        </p>
      </section>

      <section>
        <h2>Information we collect</h2>
        <p>We collect only information needed to provide and secure the service:</p>
        <ul>
          <li>Email address</li>
          <li>Username and profile information you provide</li>
          <li>User content you create or upload</li>
          <li>Security logs, such as sign-in activity and abuse-prevention events</li>
        </ul>
      </section>

      <section>
        <h2>What we do not do</h2>
        <ul>
          <li>We do not sell personal data.</li>
          <li>We do not run advertising tracking.</li>
          <li>We do not use analytics cookies for marketing purposes.</li>
        </ul>
      </section>

      <section>
        <h2>How we use information</h2>
        <p>We use personal data only for legitimate service purposes, including:</p>
        <ul>
          <li>Creating and managing your account</li>
          <li>Delivering core platform functionality</li>
          <li>Maintaining platform security and preventing abuse</li>
          <li>Complying with legal obligations where required</li>
        </ul>
      </section>

      <section>
        <h2>Data sharing</h2>
        <p>
          We share data only with essential service providers needed to operate
          PrivaSocial, such as Supabase for infrastructure and data storage.
          These providers are contractually required to handle data securely and
          only for service delivery.
        </p>
      </section>

      <section>
        <h2>Data retention</h2>
        <p>
          We retain personal data only as long as necessary to provide the
          service, maintain security, and comply with legal obligations. When
          data is no longer needed, we delete or anonymize it.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We apply technical and organizational measures designed to protect
          personal data from unauthorized access, loss, misuse, or alteration.
          No system can be guaranteed 100% secure, but we continuously improve
          our safeguards.
        </p>
      </section>

      <section>
        <h2>Your GDPR rights</h2>
        <p>
          If you are in the European Economic Area, you may have rights to
          access, correct, delete, restrict, or object to processing of your
          personal data, and to request data portability. To exercise these
          rights, email{" "}
          <a href="mailto:support@privasocial.app">support@privasocial.app</a>.
        </p>
      </section>

      <section>
        <h2>Children&apos;s privacy</h2>
        <p>
          PrivaSocial is intended for users aged 13 and older. In regions where
          a higher digital consent age applies (including certain EU countries),
          users must meet the applicable minimum age, which may be 16.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions or requests about this policy can be sent to{" "}
          <a href="mailto:support@privasocial.app">support@privasocial.app</a>.
        </p>
      </section>
    </article>
  );
}
