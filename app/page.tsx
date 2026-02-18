import Image from "next/image";
import Link from "next/link";
import logo from "../:public:logo.png";

export default function Home() {
  return (
    <div className="home-wrap">
      <section className="hero">
        <div className="hero-logo-wrap" aria-hidden="true">
          <Image
            src={logo}
            alt=""
            fill
            sizes="108px"
            className="hero-logo-image"
            priority
          />
        </div>
        <p className="kicker">Official website</p>
        <h1>PrivaSocial</h1>
        <p className="tagline">
          A privacy-first social platform for real people, real conversations,
          and real control.
        </p>
        <ul className="hero-pills" aria-label="Platform highlights">
          <li>Private by default</li>
          <li>No ad tracking</li>
          <li>Built for genuine social connection</li>
        </ul>
        <div className="actions">
          <Link href="/privacy" className="button button-primary">
            Privacy Policy
          </Link>
          <Link href="/support" className="button button-secondary">
            Support
          </Link>
        </div>
        <p className="note">No tracking. No analytics.</p>
      </section>

      <section className="value-grid" aria-label="Why PrivaSocial">
        <article className="value-card">
          <h2>Social without surveillance</h2>
          <p>
            Share updates and stay connected without being profiled for ads or
            behavioral targeting.
          </p>
        </article>
        <article className="value-card">
          <h2>Privacy-first by design</h2>
          <p>
            We keep data collection minimal and focused on account security and
            core app functionality.
          </p>
        </article>
        <article className="value-card">
          <h2>Simple, calm, and human</h2>
          <p>
            A clean experience designed for healthy social interaction instead
            of algorithmic noise.
          </p>
        </article>
      </section>
    </div>
  );
}
