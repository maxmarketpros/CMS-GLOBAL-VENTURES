import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact — Granite Shoals, TX",
  description:
    "Get in touch with CMS Global Ventures. Phone (512) 234-2864 or email info@cmshomeimprovement.pro. Serving Granite Shoals and the Texas Hill Country.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Get In Touch"
      title={
        <>
          Let's start the <br className="hidden sm:inline" />
          <span className="text-gold">conversation.</span>
        </>
      }
      subtitle="We're here to help families and business owners across the Highland Lakes protect what matters. Call, email, or use the form below — every first conversation is free."
      heroImage="/stock/1.jpg"
      heroImageAlt="Contact CMS Global Ventures"
      crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      showForm={true}
    >
      {/* Form is included by PageShell; nothing else needed here */}
      <div />
    </PageShell>
  );
}
