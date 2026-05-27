import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Section, SectionHeader } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";
import { allFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to the questions we hear most often about trusts, estate planning, probate, asset protection, and how CMS Global Ventures works.",
  alternates: { canonical: "/faq/" },
};

export default function FAQPage() {
  return (
    <PageShell
      eyebrow="Frequently Asked"
      title={
        <>
          Common questions, <br className="hidden sm:inline" />
          <span className="text-gold">honest answers.</span>
        </>
      }
      subtitle="If your question isn't here, the answer is one phone call away. Every question is welcome and every consultation is free."
      heroImage="/stock/20.jpg"
      heroImageAlt="Frequently asked questions about estate planning"
      crumbs={[{ name: "Home", href: "/" }, { name: "FAQ" }]}
    >
      <JsonLd data={faqSchema(allFaqs)} />
      <Section>
        <SectionHeader
          eyebrow="All Questions"
          title={<>Everything we get asked, <span className="text-gold">in one place.</span></>}
        />
        <div className="mt-10 max-w-4xl">
          <FAQAccordion faqs={allFaqs} defaultOpen={-1} />
        </div>
      </Section>
    </PageShell>
  );
}
