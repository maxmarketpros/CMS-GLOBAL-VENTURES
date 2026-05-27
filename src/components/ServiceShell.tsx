import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/data/services";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { Hero } from "./Hero";
import { GoldButton } from "./GoldButton";
import { ProcessTimeline } from "./ProcessTimeline";
import { FormSection } from "./FormSection";
import { Section, SectionHeader } from "./Section";
import { Breadcrumbs } from "./Breadcrumbs";
import { AreaChips } from "./AreasGrid";
import { JsonLd, breadcrumbSchema, serviceSchema } from "./JsonLd";
import { business } from "@/data/business";
import { Icon } from "./Icon";

type Props = { service: Service };

export function ServiceShell({ service }: Props) {
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service.name, service.metaDescription, service.slug),
          breadcrumbSchema([
            { name: "Home", url: `${business.url}/` },
            { name: "Services", url: `${business.url}/services/` },
            { name: service.name, url: `${business.url}/services/${service.slug}/` },
          ]),
        ]}
      />

      <Hero
        eyebrow={`Service · ${service.shortName}`}
        title={service.h1}
        subtitle={service.intro}
        image={service.heroPhoto}
        imageAlt={`${service.name} services in Granite Shoals, TX`}
        size="compact"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <GoldButton href={business.primaryCta.href}>Schedule Free Consultation</GoldButton>
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

      {/* Benefits */}
      <Section>
        <SectionHeader
          eyebrow="Why It Matters"
          title={<>Built for what you've worked for.</>}
          subtitle={`Every ${service.shortName.toLowerCase()} plan we build comes back to three things: protect your assets, simplify the transfer, and keep your family in control.`}
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10 border border-gold/10">
          {service.benefits.map((b, i) => (
            <div key={i} className="bg-ink-card p-8 lg:p-10">
              <div className="font-display text-3xl text-gold leading-none">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-6 font-display text-xl text-bone leading-tight">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone-muted">{b.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Details */}
      <Section className="!pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/20">
              <Image
                src={service.heroPhoto}
                alt={service.name}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] uppercase tracking-widest text-gold mb-2">
                  {service.shortName}
                </div>
                <div className="font-display text-2xl text-bone leading-tight">
                  {service.oneLiner}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="hr-gold" />
              <span className="text-xs uppercase tracking-widest text-gold">How It Works</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-bone leading-tight mb-6">
              The right structure, built around your situation.
            </h2>
            {service.details.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-bone-muted mb-5">
                {p}
              </p>
            ))}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 h-5 w-5 border border-gold flex items-center justify-center text-gold">
                    <Icon name="check" size={12} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-bone">{b.title}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <GoldButton href={business.primaryCta.href}>Schedule Free Consultation</GoldButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="Our Process"
          title="Four steps. No surprises."
          subtitle="From the first conversation to the final signed binder, every step is planned, transparent, and quoted up front."
        />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </Section>

      {/* Related services */}
      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="Related Services"
          title="Stronger together."
          subtitle="Most plans combine more than one service. These pair naturally with what you're reading about."
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
              <p className="text-sm leading-relaxed text-bone-muted">{s.oneLiner}</p>
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
          title="Serving the Highland Lakes & Hill Country."
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
