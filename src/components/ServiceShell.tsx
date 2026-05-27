import Link from "next/link";
import type { Service } from "@/data/services";
import { services } from "@/data/services";
import { Hero } from "./Hero";
import { GoldButton } from "./GoldButton";
import { FormSection } from "./FormSection";
import { Section, SectionHeader } from "./Section";
import { Breadcrumbs } from "./Breadcrumbs";
import { AreaChips } from "./AreasGrid";
import {
  JsonLd,
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "./JsonLd";
import { business } from "@/data/business";
import { Icon } from "./Icon";
import { Sections } from "./sections/Sections";

type Props = { service: Service };

export function ServiceShell({ service }: Props) {
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const faqSection = service.sections.find((s) => s.kind === "faq");
  const schemas: object[] = [
    serviceSchema(service.name, service.metaDescription, service.slug),
    breadcrumbSchema([
      { name: "Home", url: `${business.url}/` },
      { name: "Services", url: `${business.url}/services/` },
      { name: service.name, url: `${business.url}/services/${service.slug}/` },
    ]),
  ];
  if (faqSection && faqSection.kind === "faq") {
    schemas.push(faqPageSchema(faqSection.items));
  }

  return (
    <>
      <JsonLd data={schemas} />

      <Hero
        eyebrow={`Service · ${service.shortName}`}
        title={service.h1}
        subtitle={service.intro}
        image={service.heroPhoto}
        imageAlt={`${service.name} services in Granite Shoals, TX`}
        size="compact"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <GoldButton href={business.primaryCta.href}>
            Schedule Free Consultation
          </GoldButton>
          <GoldButton href="/services/" variant="ghost" arrow={false}>
            All Services
          </GoldButton>
        </div>
      </Hero>

      {/* Breadcrumbs */}
      <div className="border-b border-gold/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-4">
          <Breadcrumbs
            crumbs={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services/" },
              { name: service.shortName },
            ]}
          />
        </div>
      </div>

      <Sections sections={service.sections} />

      {/* Related services */}
      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="Related Services"
          title="Plans rarely use just one tool."
          subtitle="Most plans combine more than one service. These pair naturally with what you are reading about."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="lift block border border-gold/15 bg-ink-card p-8 group"
            >
              <div className="h-12 w-12 flex items-center justify-center border border-gold/40 text-gold mb-5">
                <Icon name={s.iconName} size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-bone group-hover:text-gold transition-colors leading-tight mb-2">
                {s.name}
              </h3>
              <p className="text-sm leading-relaxed text-bone-muted">
                {s.oneLiner}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold">
                Learn more
                <Icon name="arrow-right" size={12} strokeWidth={2} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Areas served */}
      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="Where We Work"
          title="Highland Lakes and Hill Country coverage."
          subtitle="We work with families across central Texas. Click your town for local details."
        />
        <div className="mt-10">
          <AreaChips />
        </div>
      </Section>

      <FormSection />
    </>
  );
}
