import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Section, SectionHeader } from "@/components/Section";
import { AreasGrid } from "@/components/AreasGrid";

export const metadata: Metadata = {
  title: "Areas Served — Highland Lakes & Texas Hill Country",
  description:
    "CMS Global Ventures serves families and business owners across Granite Shoals, Marble Falls, Horseshoe Bay, Kingsland, Llano, Burnet, Spicewood, Cottonwood Shores, Lakeway, Bee Cave, and Lago Vista, TX.",
  alternates: { canonical: "/areas-served/" },
};

export default function AreasHub() {
  return (
    <PageShell
      eyebrow="Where We Work"
      title={
        <>
          Serving the <span className="text-gold">Highland Lakes</span> &<br className="hidden sm:inline" /> the Texas Hill Country.
        </>
      }
      subtitle="We're based in Granite Shoals and serve families across the entire Highland Lakes region — Lake LBJ, Lake Marble Falls, Lake Travis, and surrounding communities. Click your town for local details."
      heroImage="/stock/1.jpg"
      heroImageAlt="Texas Hill Country service area"
      crumbs={[{ name: "Home", href: "/" }, { name: "Areas Served" }]}
    >
      <Section>
        <SectionHeader
          eyebrow="Cities We Serve"
          title={<>Local <span className="text-gold">to your part of the Hill Country.</span></>}
          subtitle="Every area page covers local landmarks, the relevant probate court, and the planning issues we see most often in that community."
        />
        <div className="mt-14">
          <AreasGrid />
        </div>
      </Section>
    </PageShell>
  );
}
