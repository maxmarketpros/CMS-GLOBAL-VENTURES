import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { Section, SectionHeader } from "@/components/Section";
import { StatsBar } from "@/components/StatsBar";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "About CMS Global Ventures — Granite Shoals Estate Planning",
  description:
    "CMS Global Ventures is a Hill Country trust formation, estate planning, and asset protection firm based in Granite Shoals, TX. 500+ plans built. 15+ years serving Texas families.",
  alternates: { canonical: "/about/" },
};

const principles = [
  {
    title: "Local first",
    description:
      "We're not a national brand running templates from a call center. We live and work in the Hill Country and we know how planning works here — county by county, court by court.",
  },
  {
    title: "Generational, not transactional",
    description:
      "An estate plan isn't a one-time purchase. It's an evolving structure. We're with you for the life of the plan — updates, reviews, family changes.",
  },
  {
    title: "Flat fees, plain English",
    description:
      "We tell you the price before we build the plan. We tell you what the plan says before you sign it. We don't bill in six-minute increments.",
  },
  {
    title: "Service-led",
    description:
      "We say no when a service isn't right for you. We refer out when something is beyond our scope. We'd rather lose a sale than build the wrong plan.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title={
        <>
          A Hill Country firm,<br />
          <span className="text-gold">built around trust.</span>
        </>
      }
      subtitle="CMS Global Ventures is a Granite Shoals-based trust services and estate planning firm serving families and business owners across the Highland Lakes and Texas Hill Country."
      heroImage="/stock/7.jpg"
      heroImageAlt="The CMS Global Ventures team"
      crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
    >
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Our Story"
              title="Started with a simple idea."
              subtitle="That Texas families deserved trust and estate planning services built around them — not built around billing hours."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-bone-muted max-w-2xl">
              <p>
                CMS Global Ventures was founded to bring real, sophisticated trust and estate planning services to Hill Country families who would otherwise have to drive into Austin to find them. We saw a gap — between the high-volume document-prep shops on one end and the big-firm hourly billers on the other — and we built our practice in that gap.
              </p>
              <p>
                Fifteen years and over five hundred plans later, we still do it the same way: free first conversations, flat fees, plans designed to work the moment they're signed, and a long-term relationship with every client we take on.
              </p>
              <p>
                We work with retirees protecting lake homes, business owners thinking about succession, ranching families passing land to the next generation, and young parents drafting their first wills. The plans look different. The principles don't.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-gold/20 bg-ink-card p-8 lg:p-10">
              <div className="text-[10px] uppercase tracking-widest text-gold mb-8">By The Numbers</div>
              <StatsBar />
            </div>
            <div className="mt-6 relative aspect-[4/3] overflow-hidden border border-gold/20">
              <Image src="/stock/5.jpg" alt="CMS Global Ventures office" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="What We Believe"
          title={<>Four principles. <span className="text-gold">Every plan.</span></>}
          subtitle="The convictions that shape how we work with every client and every plan we build."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10 border border-gold/10">
          {principles.map((p, i) => (
            <div key={p.title} className="bg-ink-card p-8 lg:p-10">
              <div className="font-display text-3xl text-gold leading-none mb-6">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display text-2xl text-bone leading-tight mb-3">{p.title}</h3>
              <p className="text-sm leading-relaxed text-bone-muted">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-gold/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-gold/20">
            <Image src="/stock/22.jpg" alt="Families we serve" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
          </div>
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="hr-gold" />
              <span className="text-xs uppercase tracking-widest text-gold">Who We Serve</span>
            </div>
            <h2 className="font-display text-4xl text-bone leading-tight mb-6">
              Families, business owners, and the next generation.
            </h2>
            <ul className="space-y-4 text-base text-bone-muted">
              {[
                "Highland Lakes homeowners and lake-house families",
                "Texas Hill Country ranching families passing land to heirs",
                "Business owners planning succession or asset protection",
                "Retirees and pre-retirees building a coordinated plan",
                "Young families drafting their first wills and guardianship designations",
                "Anyone who wants their assets protected and their wishes clear",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 h-1 w-1 bg-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
