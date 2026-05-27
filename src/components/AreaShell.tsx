import Link from "next/link";
import type { Area } from "@/data/areas";
import { services } from "@/data/services";
import { Hero } from "./Hero";
import { GoldButton } from "./GoldButton";
import { ProcessTimeline } from "./ProcessTimeline";
import { FormSection } from "./FormSection";
import { Section, SectionHeader } from "./Section";
import { Breadcrumbs } from "./Breadcrumbs";
import { AreaChips } from "./AreasGrid";
import { JsonLd, breadcrumbSchema } from "./JsonLd";
import { business } from "@/data/business";
import { Icon } from "./Icon";

type Props = { area: Area };

export function AreaShell({ area }: Props) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${business.url}/` },
          { name: "Areas Served", url: `${business.url}/areas-served/` },
          { name: area.city, url: `${business.url}/areas-served/${area.slug}/` },
        ])}
      />

      <Hero
        eyebrow={`Area Served · ${area.county}`}
        title={area.h1}
        subtitle={area.intro}
        image="/stock/5.jpg"
        imageAlt={`Estate planning and trust services for ${area.city}, TX`}
        size="compact"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <GoldButton href={business.primaryCta.href}>Schedule Free Consultation</GoldButton>
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

      {/* Local context */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow={`Local · ${area.city}, TX`}
              title={<>Built for {area.city} families.</>}
              subtitle={area.localHook}
            />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-gold/10 border border-gold/10">
              <div className="bg-ink-card p-6">
                <div className="text-[10px] uppercase tracking-widest text-gold mb-2">Drive Time</div>
                <div className="font-display text-xl text-bone leading-tight">{area.driveTime}</div>
              </div>
              <div className="bg-ink-card p-6">
                <div className="text-[10px] uppercase tracking-widest text-gold mb-2">County</div>
                <div className="font-display text-xl text-bone leading-tight">{area.county}</div>
              </div>
              <div className="bg-ink-card p-6">
                <div className="text-[10px] uppercase tracking-widest text-gold mb-2">Population</div>
                <div className="font-display text-xl text-bone leading-tight">{area.population ?? "—"}</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-gold/20 bg-ink-card p-8">
              <div className="text-[10px] uppercase tracking-widest text-gold mb-5">
                Landmarks We Know
              </div>
              <ul className="space-y-3">
                {area.landmarks.map((l) => (
                  <li key={l} className="flex items-center gap-3 text-bone">
                    <span className="h-1 w-1 bg-gold" />
                    {l}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-ink-border">
                <a href={business.phoneHref} className="block">
                  <div className="text-[10px] uppercase tracking-widest text-bone-dim">Call us about {area.city}</div>
                  <div className="font-display text-2xl text-gold mt-1">{business.phone}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services available in this area */}
      <Section className="border-t border-gold/10 !pt-20">
        <SectionHeader
          eyebrow="What We Build"
          title={`Trust and estate planning services for ${area.city}.`}
          subtitle="Every service below is available to clients in this area. Most clients use two or three together in a single plan."
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

      {/* Process */}
      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="Our Process"
          title="The same plan, wherever you live."
          subtitle="Whether your home is in Marble Falls or Lago Vista, our four-step process is the same."
        />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </Section>

      {/* Other areas */}
      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="Other Hill Country Areas"
          title="Where else we work."
          subtitle="We serve families and business owners across the Highland Lakes and Texas Hill Country."
        />
        <div className="mt-10">
          <AreaChips excludeSlug={area.slug} />
        </div>
      </Section>

      <FormSection />
    </>
  );
}
