import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | CMS Global Ventures",
  description: "Privacy policy for CMS Global Ventures and cmsglobalventures.com.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="How we handle the information you share with us."
      heroImage="/stock/14.jpg"
      heroImageAlt="Privacy policy"
      crumbs={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]}
      showForm={false}
    >
      <Section>
        <div className="prose prose-invert max-w-3xl mx-auto text-bone-muted space-y-6 text-base leading-relaxed">
          <p className="text-bone-dim text-sm">Last updated: January 2026</p>

          <h2 className="font-display text-2xl text-bone">1. Information we collect</h2>
          <p>
            When you submit a form, call us, or email us, we collect the information you choose to share — typically your name, phone number, email address, and a brief description of your situation. We do not require you to share sensitive financial or identity information to start a conversation with us.
          </p>

          <h2 className="font-display text-2xl text-bone">2. How we use your information</h2>
          <p>
            We use the information you provide to respond to your inquiry, schedule consultations, and follow up about the services you're interested in. We do not sell, rent, or trade your information to third parties.
          </p>

          <h2 className="font-display text-2xl text-bone">3. Form processing</h2>
          <p>
            Contact forms on this site are processed through LeadConnector (LeadConnector / GoHighLevel), which acts as a data processor on our behalf. Your submissions are stored in our customer-relationship management system so that we can respond and keep a record of our communications.
          </p>

          <h2 className="font-display text-2xl text-bone">4. Cookies and analytics</h2>
          <p>
            This site may use cookies and basic analytics to understand how visitors use our pages and to improve the site over time. We do not use cookies to identify you personally without your consent.
          </p>

          <h2 className="font-display text-2xl text-bone">5. Communications</h2>
          <p>
            By submitting a form or otherwise contacting us, you consent to be contacted by CMS Global Ventures regarding your inquiry. You can opt out of further communications at any time by replying to any email from us or asking us by phone.
          </p>

          <h2 className="font-display text-2xl text-bone">6. Security</h2>
          <p>
            We take reasonable steps to protect the information you share with us. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-display text-2xl text-bone">7. Children's privacy</h2>
          <p>This site is not directed to children under 13 and we do not knowingly collect information from them.</p>

          <h2 className="font-display text-2xl text-bone">8. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. When we do, we'll update the "last updated" date above. Material changes will be posted prominently on this page.
          </p>

          <h2 className="font-display text-2xl text-bone">9. Contact</h2>
          <p>
            Questions about this privacy policy? Reach us at info@cmshomeimprovement.pro or (512) 234-2864.
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
