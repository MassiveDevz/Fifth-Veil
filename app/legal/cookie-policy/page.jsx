import Header from "../components/Header";

export const metadata = {
  title: "Cookie Policy | Fifth Veil",
  description: "Learn how The Fifth Veil uses cookies and similar technologies on our website.",
};

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
      <div className="space-y-3 text-white/90">{children}</div>
    </section>
  );
}

export default function CookiePolicyPage() {
  return (
    <main className="bg-fifth-black">
      <Header />
      <div className="bg-fifth-black text-white">
        <div className="max-w-[1600px] mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <header className="space-y-4">
              <h1 className="text-4xl font-light uppercase tracking-wide">Cookie Policy</h1>
              <p className="text-sm text-white/70">Effective Date: July 3, 2026</p>
              <p className="text-white/90">
                This Cookie Policy explains how The Fifth Veil uses cookies and similar technologies when you visit our
                website.
              </p>
              <p className="text-white/90">
                By continuing to use this site, you agree to the use of cookies as described below, unless you disable
                them through your browser settings or cookie preferences.
              </p>
            </header>

            <div className="mt-10 space-y-10 border-t border-fifth-gold/40 pt-10">
              <Section title="1. What Are Cookies?">
                <p>
                  Cookies are small text files stored on your device when you visit a website. They help websites
                  function properly, improve performance, and understand how users interact with the platform.
                </p>
                <p>Cookies may be:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                  <li>
                    <strong>Session cookies</strong> (deleted when you close your browser)
                  </li>
                  <li>
                    <strong>Persistent cookies</strong> (stored until they expire or are deleted)
                  </li>
                </ul>
              </Section>

              <Section title="2. How We Use Cookies">
                <p>We use cookies for the following purposes:</p>

                <h3 className="text-lg font-medium">Essential Cookies</h3>
                <p>These are required for the website to function properly, including:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                  <li>Saving your cookie consent preferences</li>
                  <li>Basic site functionality</li>
                </ul>

                <h3 className="text-lg font-medium">Analytics Cookies</h3>
                <p>We use analytics tools such as Google Analytics to understand:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                  <li>How users navigate the site</li>
                  <li>Which pages are most visited</li>
                  <li>Performance and usability improvements</li>
                </ul>
                <p>These cookies help us improve the quality and structure of The Fifth Veil.</p>
                <p>Analytics tracking is only activated after user consent.</p>
              </Section>

              <Section title="3. Google Analytics">
                <p>We use Google Analytics to collect aggregated, anonymized usage data.</p>
                <p>Google Analytics may collect:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Device and browser type</li>
                  <li>General location (country/city level)</li>
                  <li>Anonymous IP-based data (where applicable)</li>
                </ul>
                <p>We do not use Google Analytics to personally identify users.</p>
                <p>Google may process this data according to its own privacy policies.</p>
              </Section>

              <Section title="4. Cookie Consent">
                <p>When you first visit The Fifth Veil, you are presented with a cookie consent banner.</p>
                <p>You may:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                  <li>Accept all cookies (enables analytics)</li>
                  <li>Decline non-essential cookies (disables analytics tracking)</li>
                </ul>
                <p>Your preference is stored in a cookie named:</p>
                <p className="font-semibold">cookie_consent</p>
                <p>
                  This cookie stores a value of <strong>accepted</strong> or <strong>declined</strong> and is retained
                  for one year, allowing us to remember your choice for future visits.
                </p>
              </Section>

              <Section title="5. Managing Cookies">
                <p>You can control or delete cookies at any time through your browser settings.</p>
                <p>Most browsers allow you to:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                  <li>Block cookies entirely</li>
                  <li>Delete existing cookies</li>
                  <li>Set preferences for specific websites</li>
                </ul>
                <p>Please note that disabling cookies may affect site functionality.</p>
              </Section>

              <Section title="6. Third-Party Cookies">
                <p>
                  Some third-party services we use (such as Google Analytics) may set their own cookies to collect usage
                  data.
                </p>
                <p>We do not control these cookies directly. We only enable them when consent is provided.</p>
              </Section>

              <Section title="7. Do Not Track">
                <p>
                  Some browsers include a &ldquo;Do Not Track&rdquo; feature. At this time, we do not respond to all DNT
                  signals, but we do respect explicit cookie consent choices made through our banner.
                </p>
              </Section>

              <Section title="8. Data Retention">
                <p>
                  Analytics data is retained for a limited period in accordance with Google Analytics settings and is
                  used only for aggregated reporting and site improvement.
                </p>
              </Section>

              <Section title="9. Updates to This Policy">
                <p>We may update this Cookie Policy from time to time to reflect changes in:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                  <li>Legal requirements</li>
                  <li>Analytics tools</li>
                  <li>Website functionality</li>
                </ul>
                <p>Updates will be posted on this page with a revised effective date.</p>
              </Section>

              <Section title="10. Contact">
                <p>If you have any questions about this Cookie Policy, you can contact us at:</p>
                <p className="font-semibold">thefifthveilco@gmail.com</p>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
