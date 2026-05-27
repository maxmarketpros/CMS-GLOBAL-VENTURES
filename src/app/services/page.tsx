import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Estate Planning & Trust Services in Granite Shoals, TX",
  description:
    "Ten coordinated services — estate planning, living and irrevocable trusts, business trusts, asset protection, wills, probate, POAs, healthcare directives, and business succession. CMS Global Ventures, Granite Shoals, TX.",
  alternates: { canonical: "/services/" },
};

export default function ServicesHub() {
  return (
    <PageShell
      eyebrow="What We Build"
      title={
        <>
          Estate Planning & <br className="hidden sm:inline" />
          <span className="text-gold">Trust Services.</span>
        </>
      }
      subtitle="Ten coordinated services for Granite Shoals, TX and the Texas Hill Country. Most clients use three or four together as part of a single, integrated plan."
      heroImage="/stock/17.jpg"
      heroImageAlt="CMS Global Ventures services overview"
      crumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
    >
      <Section>
        <SectionHeader
          eyebrow="All Services"
          title={<>Pick what you need. <span className="text-gold">We'll build the rest.</span></>}
          subtitle="Click any service to learn more. Or skip ahead and schedule a free consultation — we'll tell you what we'd recommend in your situation."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
