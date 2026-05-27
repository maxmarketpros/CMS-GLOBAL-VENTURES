import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { Section, SectionHeader } from "@/components/Section";
import { ReviewCard } from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "What clients say about working with CMS Global Ventures. Real testimonials from families and business owners across the Texas Hill Country.",
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
      subtitle="Six families and business owners. Six plans built. Six reasons we keep doing what we do."
      heroImage="/stock/4.jpg"
      heroImageAlt="CMS Global Ventures client reviews"
      crumbs={[{ name: "Home", href: "/" }, { name: "Reviews" }]}
    >
      <Section>
        <SectionHeader
          align="center"
          eyebrow="Verified Clients"
          title={<>Five stars, <span className="text-gold">six stories.</span></>}
          subtitle="A snapshot of recent feedback from across Granite Shoals, Marble Falls, Horseshoe Bay, Kingsland, Spicewood, and Lakeway."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
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
              Ask. We&apos;ve worked with hundreds of families across the Hill Country and we&apos;re happy to connect you with clients in your area, your situation, or your line of work &mdash; with their permission, of course.
            </p>
            <p className="text-base leading-relaxed text-bone-muted">
              We find it&apos;s the single best way for new clients to get a real sense of how we work.
            </p>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
