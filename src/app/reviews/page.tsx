import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Client Reviews | CMS Global Ventures",
  description:
    "What clients say about working with CMS Global Ventures. Verified Google reviews from families and business owners across the Texas Hill Country.",
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  return (
    <PageShell
      eyebrow="Client Reviews"
      title={
        <>
          What our clients <span className="text-gold">say about us.</span>
        </>
      }
      subtitle="We let our clients speak for us. Below is a placeholder for verified Google reviews — drop in real reviews as they come in."
      heroImage="/stock/4.jpg"
      heroImageAlt="CMS Global Ventures client reviews"
      crumbs={[{ name: "Home", href: "/" }, { name: "Reviews" }]}
    >
      <Section>
        <SectionHeader
          align="center"
          eyebrow="Coming Soon"
          title={<>Verified <span className="text-gold">Google Reviews.</span></>}
          subtitle="We're working on collecting and publishing verified reviews here. In the meantime, ask us for references in your first consultation — we'll connect you with happy clients in your area."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border border-gold/15 bg-ink-card p-8 min-h-[300px] flex flex-col justify-between">
              <div className="text-gold text-2xl tracking-[0.2em]">★★★★★</div>
              <div>
                <p className="font-display text-lg text-bone-muted italic leading-relaxed">
                  "Review coming soon. See our Google Business profile for current verified reviews."
                </p>
                <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-widest text-bone-dim">
                  <span className="h-px w-6 bg-gold/40" />
                  Verified Google Review
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-gold/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-gold/20">
            <Image src="/stock/21.jpg" alt="Families we serve" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
          </div>
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="hr-gold" />
              <span className="text-xs uppercase tracking-widest text-gold">References Available</span>
            </div>
            <h2 className="font-display text-4xl text-bone leading-tight mb-6">
              Want to talk to past clients?
            </h2>
            <p className="text-base leading-relaxed text-bone-muted mb-6">
              Ask. We've worked with hundreds of families across the Hill Country and we're happy to connect you with clients in your area, your situation, or your line of work — with their permission, of course.
            </p>
            <p className="text-base leading-relaxed text-bone-muted">
              We find it's the single best way for new clients to get a real sense of how we work.
            </p>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
