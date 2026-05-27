import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Service | CMS Global Ventures",
  description: "Terms of service for CMS Global Ventures and cmsglobalventures.com.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Service"
      subtitle="The terms that apply when you use this site or our services."
      heroImage="/stock/14.jpg"
      heroImageAlt="Terms of service"
      crumbs={[{ name: "Home", href: "/" }, { name: "Terms" }]}
      showForm={false}
    >
      <Section>
        <div className="prose prose-invert max-w-3xl mx-auto text-bone-muted space-y-6 text-base leading-relaxed">
          <p className="text-bone-dim text-sm">Last updated: January 2026</p>

          <h2 className="font-display text-2xl text-bone">1. Not legal advice</h2>
          <p>
            CMS Global Ventures provides trust formation, estate planning, and asset protection services. We are not a law firm and we do not provide legal advice. Nothing on this website — including any information, document description, or response to your inquiry — constitutes legal advice or creates an attorney-client relationship. For legal counsel on your specific situation, please consult a licensed Texas attorney.
          </p>

          <h2 className="font-display text-2xl text-bone">2. Use of this site</h2>
          <p>
            This site is provided for informational purposes only. You are responsible for evaluating the information here against your own circumstances. We make no warranties about the accuracy, completeness, or suitability of any information on this site.
          </p>

          <h2 className="font-display text-2xl text-bone">3. Engagements</h2>
          <p>
            Any services we provide will be governed by a separate written engagement agreement that describes the scope of work, the fees, and the terms applicable to that engagement. This site does not constitute an offer to perform any services.
          </p>

          <h2 className="font-display text-2xl text-bone">4. Intellectual property</h2>
          <p>
            All content on this site — including text, design, logos, and graphics — is the property of CMS Global Ventures or its licensors and is protected under applicable intellectual-property laws. You may not reproduce, modify, distribute, or commercially exploit our content without written permission.
          </p>

          <h2 className="font-display text-2xl text-bone">5. Third-party links</h2>
          <p>
            This site may include links to third-party websites that we do not control. We are not responsible for the content, accuracy, or practices of any third-party sites.
          </p>

          <h2 className="font-display text-2xl text-bone">6. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, CMS Global Ventures is not liable for any indirect, incidental, consequential, or punitive damages arising out of your use of this site or any information found here.
          </p>

          <h2 className="font-display text-2xl text-bone">7. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Texas, without regard to its conflict-of-law principles. Any disputes will be resolved in the courts of Burnet County, Texas.
          </p>

          <h2 className="font-display text-2xl text-bone">8. Changes to these terms</h2>
          <p>We may update these terms from time to time. Continued use of the site after we post changes constitutes acceptance of those changes.</p>

          <h2 className="font-display text-2xl text-bone">9. Contact</h2>
          <p>
            Questions? Reach us at info@cmshomeimprovement.pro or (512) 234-2864.
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
