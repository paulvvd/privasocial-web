import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for PrivaSocial.",
};

export default function PrivacyPage() {
  return (
    <article className="page policy-page">
      <header className="policy-header">
        <h1>Privacy Policy</h1>
        <p className="policy-effective">
          <strong>Effective date:</strong> February 18, 2026
        </p>
        <p className="policy-lead">
          PrivaSocial operates the PrivaSocial mobile application and website. We
          are committed to protecting your privacy and collecting only the data
          necessary to provide a secure, privacy-first social platform.
        </p>
        <p className="policy-lead">
          This Privacy Policy explains what information we collect, how we use
          it, and your rights.
        </p>
      </header>

      <section className="policy-section">
        <h2>1. Who We Are</h2>
        <p>
          PrivaSocial is a privacy-focused social platform designed to minimize
          data collection and avoid tracking. If you have any questions about
          this Privacy Policy or your data, contact:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@privacy-social.com">
            support@privacy-social.com
          </a>
        </p>
      </section>

      <section className="policy-section">
        <h2>2. Information We Collect</h2>
        <p>
          We collect only the information required to operate the service.
        </p>

        <h3>Account Information</h3>
        <ul>
          <li>
            Email address (used for account creation, login, and security)
          </li>
        </ul>

        <h3>Profile Information (provided by you)</h3>
        <ul>
          <li>Username</li>
          <li>Display name</li>
          <li>Bio</li>
          <li>Profile picture (avatar)</li>
        </ul>

        <h3>User Content</h3>
        <ul>
          <li>Posts, comments, likes, follows</li>
          <li>Direct messages</li>
          <li>Reports submitted for moderation</li>
          <li>Media you upload (images)</li>
        </ul>

        <h3>Notifications</h3>
        <ul>
          <li>
            Push notification token (only if you grant notification permission)
          </li>
          <li>Notification metadata (e.g., likes, comments, follows)</li>
        </ul>

        <h3>Usage &amp; Technical Data</h3>
        <ul>
          <li>In-app interactions (likes, follows, message delivery/read status)</li>
          <li>
            Temporary technical logs required for security and service
            reliability
          </li>
          <li>
            Basic device/app data required for updates and service operation
          </li>
        </ul>

        <p>
          We <strong>do not collect precise location, contacts, advertising
          identifiers, or payment data.</strong>
        </p>
      </section>

      <section className="policy-section">
        <h2>3. How We Use Your Information</h2>
        <p>We use your information only to:</p>
        <ul>
          <li>Create and secure your account</li>
          <li>
            Provide core social features (profiles, posts, messaging,
            notifications)
          </li>
          <li>Deliver push notifications you request</li>
          <li>
            Maintain platform safety (abuse prevention, moderation, blocking)
          </li>
          <li>Improve reliability and performance</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          We do <strong>not sell your data</strong> and do <strong>not use your
          data for advertising tracking.</strong>
        </p>
      </section>

      <section className="policy-section">
        <h2>4. Data Sharing</h2>
        <p>
          We share data only with essential service providers required to
          operate the app:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> - authentication, database, storage, and
            infrastructure
          </li>
          <li>
            <strong>Expo Push Service</strong> - delivery of push notifications
          </li>
          <li>
            <strong>Infrastructure providers</strong> - secure hosting and
            network services
          </li>
        </ul>
        <p>
          These providers process data only on our behalf and under strict
          security controls.
        </p>
        <p>
          We do <strong>not sell, rent, or trade your personal data.</strong>
        </p>
      </section>

      <section className="policy-section">
        <h2>5. Data Retention</h2>
        <p>
          We retain data only as long as necessary to provide the service:
        </p>
        <ul>
          <li>
            Account and profile data: retained while your account is active
          </li>
          <li>
            User content (posts, messages, etc.): retained until deleted by you
            or required for safety/legal reasons
          </li>
          <li>
            Technical logs: retained temporarily for security and reliability
          </li>
        </ul>
        <p>
          You may request account and data deletion at any time (see Section 8).
        </p>
      </section>

      <section className="policy-section">
        <h2>6. Security</h2>
        <p>We use industry-standard security practices including:</p>
        <ul>
          <li>Encrypted connections (HTTPS)</li>
          <li>Secure authentication</li>
          <li>Access controls and database security policies</li>
          <li>Private storage for user media</li>
        </ul>
        <p>
          No system is completely secure, but we continuously improve
          protections.
        </p>
      </section>

      <section className="policy-section">
        <h2>7. Children&apos;s Privacy</h2>
        <p>
          PrivaSocial is not intended for children under the age required by
          applicable law (generally 13 to 16 depending on jurisdiction). We do
          not
          knowingly collect data from children.
        </p>
      </section>

      <section className="policy-section">
        <h2>8. Your Rights (GDPR)</h2>
        <p>
          If you are in the European Economic Area (EEA), you have the right
          to:
        </p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Restrict or object to processing</li>
          <li>Request data portability</li>
        </ul>
        <p>
          To exercise your rights, contact:{" "}
          <strong>support@privacy-social.com</strong>
        </p>
      </section>

      <section className="policy-section">
        <h2>9. Account Deletion</h2>
        <p>You may request account deletion at any time by contacting:</p>
        <p>
          <strong>support@privacy-social.com</strong>
        </p>
        <p>
          We will delete or anonymize your personal data where legally required,
          except where retention is necessary for security, legal, or
          abuse-prevention purposes.
        </p>
      </section>

      <section className="policy-section">
        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the effective date and, where appropriate, notify users.
        </p>
      </section>

      <section className="policy-section">
        <h2>11. Contact</h2>
        <p>If you have questions about privacy or your data:</p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@privacy-social.com">
            support@privacy-social.com
          </a>
        </p>
      </section>

      <p className="policy-end">End of Privacy Policy.</p>
    </article>
  );
}
