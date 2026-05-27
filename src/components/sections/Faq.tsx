import { Section, SectionHeader } from "../Section";
import { FAQAccordion } from "../FAQAccordion";

type Props = {
  eyebrow: string;
  title: string;
  items: { q: string; a: string }[];
};

export function Faq({ eyebrow, title, items }: Props) {
  const faqs = items.map((item) => ({ question: item.q, answer: item.a }));
  return (
    <Section className="border-t border-gold/10">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className="mt-12 max-w-4xl">
        <FAQAccordion faqs={faqs} defaultOpen={-1} />
      </div>
    </Section>
  );
}
