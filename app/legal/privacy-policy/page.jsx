export const metadata = {
  title: "Privacy Policy | Fifth Veil",
  description: "Learn what data we collect, how we use it, and how we protect it.",
};

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
      <div className="space-y-3 text-white/90">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-fifth-black text-white">
      <div className="max-w-[2000px]  px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <header className="space-y-4">
            <h1 className="text-4xl font-light uppercase tracking-wide">Privacy Policy</h1>
            <p className="text-sm text-white/70">Effective Date: [Insert Date]</p>
            <p className="text-white/90">
              We respect your privacy and are committed to protecting any personal information you share with us.
            </p>
          </header>

          <div className="mt-10 space-y-10 border-t border-fifth-gold/40 pt-10">
            <Section title="1. Information We Collect">
              <p>We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                <li>Email address (when you subscribe or sign up for updates)</li>
                <li>Usage data (pages visited, clicks, time on site)</li>
                <li>Device and browser information</li>
                <li>IP address (for analytics and security)</li>
              </ul>
            </Section>

            <Section title="2. How We Use Information">
              <p>We use collected data to:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                <li>Send updates, feature announcements, and platform improvements</li>
                <li>Improve website performance and user experience</li>
                <li>Monitor traffic and prevent abuse or spam</li>
              </ul>
              <p>We do not sell your personal data.</p>
            </Section>

            <Section title="3. Submitted Content">
              <p>
                If you submit a listing, photo, or any other content to Fifth Veil, that content may be publicly displayed on the platform.
                By submitting content, you grant us a non-exclusive, royalty-free license to display and distribute that content in
                connection with the operation of the site.
              </p>
              <p>
                You are responsible for ensuring that any content you submit does not violate applicable laws or the rights of third
                parties.
              </p>
            </Section>

            <Section title="4. Data Retention">
              <p>
                We retain personal data only as long as necessary to fulfill the purposes outlined in this policy, or as required by
                applicable law. When data is no longer needed, we take reasonable steps to delete or anonymize it.
              </p>
            </Section>

            <Section title="5. Cookies & Analytics">
              <p>
                We may use cookies and third-party analytics tools (such as Google Analytics) to understand how users interact with the
                site.
              </p>
              <p>You can disable cookies in your browser settings.</p>
            </Section>

            <Section title="6. Email Communications">
              <p>
                If you provide your email, you may receive occasional updates. You can unsubscribe at any time using the link in our emails.
              </p>
            </Section>

            <Section title="7. Third-Party Services">
              <p>We may use third-party providers for:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                <li>Analytics</li>
                <li>Email delivery</li>
                <li>Hosting and infrastructure</li>
              </ul>
              <p>These providers only process data necessary to perform their services.</p>
            </Section>

            <Section title="8. Data Security">
              <p>We take reasonable steps to protect your information, but no system is 100% secure.</p>
            </Section>

            <Section title="9. Age Restriction">
              <p>This platform is intended for users 18 years of age or older. We do not knowingly collect data from minors.</p>
            </Section>

            <Section title="10. California Residents (CCPA)">
              <p>
                If you are a California resident, you have the right to request access to the personal information we have collected about
                you, request deletion of your personal information, and opt out of any sale of personal information (we do not sell personal
                data). To exercise these rights, contact us at the email below.
              </p>
            </Section>

            <Section title="11. Changes to This Policy">
              <p>We may update this Privacy Policy from time to time. Continued use of the site means you accept any updates.</p>
            </Section>

            <Section title="12. Contact">
              <p>If you have questions, contact us at:</p>
              <p className="font-semibold">[Your Email]</p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
