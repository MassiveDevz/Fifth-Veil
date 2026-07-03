import Header from "../components/Header";

export const metadata = {
  title: "Terms of Service | Fifth Veil",
  description: "Read the terms that govern access to and use of Fifth Veil.",
};

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
      <div className="space-y-3 text-white/90">{children}</div>
    </section>
  );
}

export default function TermsOfServicePage() {
  return (
    <main className="bg-fifth-black ">
      <Header />
      <div className="max-w-[1600px] mx-auto text-white px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <header className="space-y-4">
            <h1 className="text-4xl font-light uppercase tracking-wide">Terms of Service</h1>
            <p className="text-sm text-white/70">Effective Date: July 3, 2026</p>
            <p className="text-white/90">By accessing or using this website, you agree to the following Terms of Service.</p>
          </header>

          <div className="mt-10 space-y-10 border-t border-fifth-gold/40 pt-10">
            <Section title="1. Overview">
              <p>
                This platform is a directory providing publicly available listings and information about adult lifestyle venues. We do not
                operate, own, or verify all listed venues or services.
              </p>
            </Section>

            <Section title="2. Eligibility">
              <p>You must be at least 18 years old to use this site.</p>
            </Section>

            <Section title="3. Prohibited Use & FOSTA-SESTA Compliance">
              <p>
                Fifth Veil is an informational directory only. This platform does not facilitate, promote, or enable prostitution, sex
                trafficking, or any form of commercial sexual services. Users may not use this platform to solicit, advertise, or arrange
                commercial sexual activity of any kind.
              </p>
              <p>
                Any listing, submission, or communication found to facilitate illegal activity — including but not limited to sex
                trafficking or prostitution — will be removed immediately and reported to the appropriate authorities in compliance with the
                Allow States and Victims to Fight Online Sex Trafficking Act (FOSTA-SESTA).
              </p>
            </Section>

            <Section title="4. No Guarantees">
              <p>We do not guarantee:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                <li>accuracy of listings</li>
                <li>availability of venues or events</li>
                <li>safety, legality, or quality of third-party services</li>
              </ul>
              <p>Users access all information at their own discretion.</p>
            </Section>

            <Section title="5. User Responsibility">
              <p>
                You agree to use this site legally and responsibly. You are solely responsible for any actions you take based on information
                found here.
              </p>
            </Section>

            <Section title="6. Content & Listings">
              <p>We reserve the right to:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                <li>modify or remove listings at any time</li>
                <li>restrict access to any part of the site</li>
                <li>remove content deemed inappropriate, inaccurate, or in violation of these terms</li>
              </ul>
            </Section>

            <Section title="7. Intellectual Property & DMCA">
              <p>
                All content submitted to Fifth Veil — including photos, descriptions, and logos — must be owned by or licensed to the
                submitting party. By submitting content, you represent that you have the right to do so.
              </p>
              <p>
                If you believe content on this platform infringes your copyright, please contact us at [Your Email] with the subject line
                "DMCA Takedown Request" and include: a description of the copyrighted work, a link to the infringing content, your contact
                information, and a statement that you have a good faith belief the use is unauthorized. We will respond promptly and remove
                infringing content as required by the Digital Millennium Copyright Act (DMCA).
              </p>
            </Section>

            <Section title="8. Third-Party Links">
              <p>This site may contain links to third-party websites. We are not responsible for their content or policies.</p>
            </Section>

            <Section title="9. Limitation of Liability">
              <p>We are not liable for any damages, losses, or issues arising from the use of this website or third-party listings.</p>
            </Section>

            <Section title="10. Governing Law">
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the State of [Your State], without
                regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive
                jurisdiction of the courts located in [Your State].
              </p>
            </Section>

            <Section title="11. Changes">
              <p>We may update these Terms at any time without prior notice.</p>
            </Section>

            <Section title="12. Contact">
              <p>For questions, contact:</p>
              <p className="font-semibold">thefifthveilco@gmail.com</p>
            </Section>

            <Section title="13. Disclaimer">
              <p>This website provides informational listings only.</p>
              <p>We do not:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-fifth-gold">
                <li>verify or endorse any listed venues or services</li>
                <li>guarantee accuracy, availability, or safety of listings</li>
                <li>operate or manage any third-party locations</li>
              </ul>
              <p>All users access and use this information at their own discretion and risk.</p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
