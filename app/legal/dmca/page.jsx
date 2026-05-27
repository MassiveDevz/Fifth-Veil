export const metadata = {
  title: "DMCA Policy | Fifth Veil",
  description: "Submit a copyright takedown request or counter-notice to Fifth Veil.",
};

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
      <div className="space-y-3 text-white/90">{children}</div>
    </section>
  );
}

export default function DmcaPage() {
  return (
    <main className="bg-fifth-black text-white">
      <div className="max-w-[2000px] px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <header className="space-y-4">
            <h1 className="text-4xl font-light uppercase tracking-wide">DMCA Policy</h1>
            <p className="text-white/90">
              Fifth Veil respects intellectual property rights. If you believe content on this platform infringes your copyright, please
              follow the process below.
            </p>
          </header>

          <div className="mt-10 space-y-10 border-t border-fifth-gold/40 pt-10">
            <Section title="1. Overview">
              <p>
                Fifth Veil complies with the Digital Millennium Copyright Act (DMCA). We will respond to valid takedown notices and remove
                infringing content promptly.
              </p>
            </Section>

            <Section title="2. How to Submit a Takedown Request">
              <p>
                To submit a valid DMCA takedown notice, email us at <span className="font-semibold">[Your Email]</span> with the subject
                line <span className="font-semibold">"DMCA Takedown Request"</span> and include all of the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                <li>A description of the copyrighted work you claim has been infringed</li>
                <li>The URL or specific location of the allegedly infringing content on Fifth Veil</li>
                <li>Your full name, mailing address, phone number, and email address</li>
                <li>
                  A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its
                  agent, or the law
                </li>
                <li>
                  A statement that the information in your notice is accurate, and under penalty of perjury, that you are the copyright
                  owner or authorized to act on their behalf
                </li>
                <li>Your physical or electronic signature</li>
              </ul>
              <p>Incomplete notices will not be processed.</p>
            </Section>

            <Section title="3. Counter-Notice Process">
              <p>
                If you believe your content was removed in error, you may submit a counter-notice to{" "}
                <span className="font-semibold">[Your Email]</span> with the subject line{" "}
                <span className="font-semibold">"DMCA Counter-Notice"</span> including:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                <li>Identification of the content that was removed and its previous location</li>
                <li>
                  A statement under penalty of perjury that you have a good faith belief the content was removed as a result of mistake or
                  misidentification
                </li>
                <li>Your full name, address, phone number, and email address</li>
                <li>A statement that you consent to the jurisdiction of the federal court in your district</li>
                <li>Your physical or electronic signature</li>
              </ul>
              <p>
                Upon receipt of a valid counter-notice, we may restore the content within 10–14 business days unless the original
                complainant seeks a court order.
              </p>
            </Section>

            <Section title="4. Repeat Infringers">
              <p>Fifth Veil reserves the right to terminate accounts or remove listings associated with repeat copyright infringers.</p>
            </Section>

            <Section title="5. Contact">
              <p>Send all DMCA-related correspondence to:</p>
              <p className="font-semibold">[Your Email]</p>
              <p>Please do not send unrelated inquiries to this address.</p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
