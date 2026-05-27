import Link from "next/link";
import type { Area } from "@/data/areas";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { Hero } from "./Hero";
import { GoldButton } from "./GoldButton";
import { FormSection } from "./FormSection";
import { Section, SectionHeader } from "./Section";
import { Breadcrumbs } from "./Breadcrumbs";
import {
  JsonLd,
  breadcrumbSchema,
  areaLocalBusinessSchema,
  placeSchema,
  faqPageSchema,
} from "./JsonLd";
import { business } from "@/data/business";
import { Icon } from "./Icon";
import { Sections } from "./sections/Sections";

type Props = { area: Area };

export function AreaShell({ area }: Props) {
  const faqSection = area.sections.find((s) => s.kind === "faq");
  const nearbyAreas = area.nearby
    .map((slug) => areas.find((a) => a.slug === slug))
    .filter((a): a is Area => a !== undefined);

  const schemas: object[] = [
    breadcrumbSchema([
      { name: "Home", url: `${business.url}/` },
      { name: "Areas Served", url: `${business.url}/areas-served/` },
      { name: area.city, url: `${business.url}/areas-served/${area.slug}/` },
    ]),
    areaLocalBusinessSchema({
      city: area.city,
      county: area.county,
      lat: area.lat,
      lng: area.lng,
      slug: area.slug,
      description: area.metaDescription,
      zip: area.zip,
    }),
    placeSchema({
      city: area.city,
      county: area.county,
      lat: area.lat,
      lng: area.lng,
    }),
  ];
  if (faqSection && faqSection.kind === "faq") {
    schemas.push(faqPageSchema(faqSection.items));
  }

  return (
    <>
      <JsonLd data={schemas} />

      <Hero
        eyebrow={`Area Served · ${area.county}`}
        title={area.h1}
        subtitle={area.intro}
        image={area.heroPhoto}
        imageAlt={`Estate planning and trust services for ${area.city}, TX`}
        size="compact"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <GoldButton href={business.primaryCta.href}>
            Schedule Free Consultation
          </GoldButton>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/40 text-gold text-[11px] font-semibold uppercase tracking-widest hover:border-gold hover:bg-gold/5 transition-all"
          >
            <Icon name="phone" size={14} strokeWidth={2} />
            {business.phone}
          </a>
        </div>
      </Hero>

      <div className="border-b border-gold/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-4">
          <Breadcrumbs
            crumbs={[
              { name: "Home", href: "/" },
              { name: "Areas Served", href: "/areas-served/" },
              { name: area.city },
            ]}
          />
        </div>
      </div>

      <Sections sections={area.sections} />

      {/* Services available in this area — kept at shell level for cross-linking */}
      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="Available locally"
          title={`Every service we offer, available in ${area.city}.`}
          subtitle="The chips below link to the full service pages. Most clients combine two or three services into a single plan."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gold/10 border border-gold/10">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="bg-ink-card hover:bg-ink-elevated transition-colors p-6 group"
            >
              <div className="h-10 w-10 flex items-center justify-center border border-gold/40 text-gold mb-4 group-hover:border-gold transition-colors">
                <Icon name={s.iconName} size={18} strokeWidth={1.5} />
              </div>
              <div className="font-display text-base text-bone group-hover:text-gold transition-colors leading-tight">
                {s.shortName}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Nearby areas — uses area.nearby for tighter local internal linking */}
      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="Nearby in the Hill Country"
          title={`Communities near ${area.city} we also serve.`}
          subtitle="These are the closest cities in our coverage map — each with its own dedicated planning page."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyAreas.map((n) => (
            <Link
              key={n.slug}
              href={`/areas-served/${n.slug}/`}
              className="lift block border border-gold/15 bg-ink-card p-6 group"
            >
              <div className="text-[10px] uppercase tracking-widest text-gold mb-2">
                {n.county}
              </div>
              <div className="font-display text-xl text-bone group-hover:text-gold transition-colors leading-tight">
                {n.city}, TX
              </div>
              <div className="mt-2 text-xs text-bone-muted">
                {n.driveTime}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <FormSection />
    </>
  );
}
