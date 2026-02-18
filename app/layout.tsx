import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import logo from "../:public:logo.png";

export const metadata: Metadata = {
  title: {
    default: "PrivaSocial",
    template: "%s | PrivaSocial",
  },
  description: "A privacy-first social platform.",
  icons: {
    icon: logo.src,
    shortcut: logo.src,
    apple: logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="site-shell">
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <header className="site-header">
            <div className="container site-header-inner">
              <Link href="/" className="brand">
                <span className="brand-logo-wrap" aria-hidden="true">
                  <Image
                    src={logo}
                    alt=""
                    fill
                    sizes="36px"
                    className="brand-logo-image"
                    priority
                  />
                </span>
                <span>PrivaSocial</span>
              </Link>
              <nav aria-label="Main navigation" className="site-nav">
                <Link href="/">Home</Link>
                <Link href="/privacy">Privacy</Link>
                <Link href="/support">Support</Link>
              </nav>
            </div>
          </header>

          <main id="main-content" className="site-main">
            <div className="container">{children}</div>
          </main>

          <footer className="site-footer">
            <div className="container site-footer-inner">
              <p>© {year} PrivaSocial. All rights reserved.</p>
              <nav aria-label="Footer links" className="site-footer-links">
                <Link href="/privacy">Privacy</Link>
                <Link href="/support">Support</Link>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
