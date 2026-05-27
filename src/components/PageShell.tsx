import { Hero } from "./Hero";
import { GoldButton } from "./GoldButton";
import { FormSection } from "./FormSection";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "./JsonLd";
import { business } from "@/data/business";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  heroImage: string;
  heroImageAlt: string;
  crumbs?: Crumb[];
  children: React.ReactNode;
  showForm?: boolean;
};

export function PageShell({
  eyebrow,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  crumbs,
  children,
  showForm = true,
}: Props) {
  const schemaCrumbs = crumbs?.length
    ? crumbs.map((c) => ({ name: c.name, url: c.href ? `${business.url}${c.href}` : `${business.url}/` }))
    : null;

  return (
    <>
      {schemaCrumbs && <JsonLd data={breadcrumbSchema(schemaCrumbs)} />}
      <Hero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        image={heroImage}
        imageAlt={heroImageAlt}
        size="compact"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <GoldButton href={business.primaryCta.href}>Schedule Free Consultation</GoldButton>
          <GoldButton href="/services/" variant="ghost" arrow={false}>
            Our Services
          </GoldButton>
        </div>
      </Hero>

      {crumbs && crumbs.length > 0 && (
        <div className="border-b border-gold/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-4">
            <Breadcrumbs crumbs={crumbs} />
          </div>
        </div>
      )}

      {children}

      {showForm && <FormSection />}
    </>
  );
}
