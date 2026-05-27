import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { GoldButton } from "@/components/GoldButton";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsBar } from "@/components/StatsBar";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FormSection } from "@/components/FormSection";
import { Section, SectionHeader } from "@/components/Section";
import { AreasGrid } from "@/components/AreasGrid";
import { Icon } from "@/components/Icon";
import { JsonLd, faqSchema } from "@/components/JsonLd";
import { ReviewCard } from "@/components/ReviewCard";
import { services } from "@/data/services";
import { homeFaqs } from "@/data/faqs";
import { reviews } from "@/data/reviews";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Business Trust & Estate Planning in Granite Shoals, TX",
  description:
    "Trust formation, estate planning, and asset protection specialists serving Granite Shoals, TX and the Texas Hill Country. 500+ trusts established. 15+ years of experience. Schedule your free consultation today.",
  alternates: { canonical: "/" },
};

const pillars = [
  {
    eyebrow: "Pillar I",
    title: "Estate Planning",
    description:
      "A complete plan — trusts, wills, powers of attorney, advance directives — that tells your family and the courts exactly what should happen, on your terms.",
    image: "/stock/12.jpg",
    href: "/services/estate-planning/",
  },
  {
    eyebrow: "Pillar II",
    title: "Asset Protection",
    description:
      "Layered trust and entity structures that keep your home, your business, and your savings beyond the reach of lawsuits and future claims.",
    image: "/stock/17.jpg",
    href: "/services/asset-protection/",
  },
  {
    eyebrow: "Pillar III",
    title: "Business Trusts",
    description:
      "Trust-based structures that hold your LLC interests, protect your business assets, and pass ownership cleanly to the next generation.",
    image: "/stock/3.jpg",
    href: "/services/business-trusts/",
  },
];

const whyUs = [
  {
    icon: "map" as const,
    title: "Hill Country roots",
    description: "Local to Granite Shoals. We know Burnet County, Llano County, and the lake communities better than anyone you could hire out of Austin.",
  },
  {
    icon: "users" as const,
    title: "Generational focus",
    description: "We don't build one-time plans. We build structures that work for your kids and your grandkids — and we review them every few years.",
  },
  {
    icon: "check" as const,
    title: "Transparent process",
    description: "Flat fees, plain English, no surprises. You'll know what you're paying — and what you're getting — before we draft a single document.",
  },
  {
    icon: "calendar" as const,
    title: "Free consultations",
    description: "Every conversation starts free. We'd rather earn your trust over coffee than charge you to find out if we're a fit.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* HERO */}
      <Hero
        eyebrow="Granite Shoals, TX · Texas Hill Country"
        title={
          <>
            Business Trust & <br className="hidden sm:inline" />
            <span className="text-gold">Estate Planning</span>
            <br className="hidden sm:inline" /> in Granite Shoals, TX.
          </>
        }
        subtitle={
          <>
            We help families and business owners across the Highland Lakes protect what
            they've built — with custom trusts, asset-protection structures, and estate
            plans built to last generations.
          </>
        }
        image="/stock/3.jpg"
        imageAlt="Estate planning and trust formation specialists in Granite Shoals, Texas"
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <GoldButton href={business.primaryCta.href}>Schedule Free Consultation</GoldButton>
          <GoldButton href="/services/" variant="ghost" arrow={false}>
            Explore Our Services
          </GoldButton>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs sm:text-sm text-bone-muted">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-gold" />
            500+ trusts established
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-gold" />
            100% client satisfaction
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-gold" />
            15+ years serving Texas
          </div>
        </div>
      </Hero>

      {/* INTRO + STATS */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="hr-gold" />
              <span className="text-xs font-medium uppercase tracking-widest text-gold">Who We Serve</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-bone leading-[1.05] tracking-tight">
              Generational protection,<br />
              <span className="text-gold">built in Texas Hill Country.</span>
            </h2>
            <p className="mt-7 text-base sm:text-lg leading-relaxed text-bone-muted max-w-2xl">
              CMS Global Ventures helps Hill Country families, lake-home owners, and business owners build the structures that keep their assets private, their wishes clear, and their families out of probate court. We've spent fifteen years learning what works when life gets complicated — and we build plans designed for that exact moment.
            </p>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-bone-muted max-w-2xl">
              Whether you're protecting a lake house on Lake LBJ, a ranch in Llano County, or a business you've spent decades building, the right plan keeps your name out of public records, your assets out of court, and your family in control.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <GoldButton href="/about/">About CMS Global Ventures</GoldButton>
              <GoldButton href="/process/" variant="ghost">Our Process</GoldButton>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-gold/20 bg-ink-card p-8 lg:p-10">
              <div className="text-[10px] uppercase tracking-widest text-gold mb-8">
                By The Numbers
              </div>
              <StatsBar />
              <div className="mt-10 pt-8 border-t border-ink-border">
                <div className="font-display text-2xl text-bone leading-tight">
                  "Built for the families we'd want our own families to trust."
                </div>
                <div className="mt-5 text-[10px] uppercase tracking-widest text-bone-dim">
                  — CMS Global Ventures
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES GRID */}
      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="What We Do"
          title={
            <>
              Ten services. <span className="text-gold">One coordinated plan.</span>
            </>
          }
          subtitle="Most clients use three or four of these services together. We build them as a single, coordinated plan — not a stack of separate documents."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.slice(0, 8).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
          {/* The "View all" card */}
          <Link
            href="/services/"
            className="lift block border border-gold/15 bg-ink-elevated p-8 sm:p-9 relative overflow-hidden flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <div className="flex items-center justify-center h-14 w-14 border border-gold/40 text-gold mb-6">
                <Icon name="arrow-right" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl text-bone leading-tight mb-3">
                View all 10 services
              </h3>
              <p className="text-sm text-bone-muted">
                Plus business succession, healthcare directives, and more.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold">
              All services
            </div>
          </Link>
          <Link
            href={business.primaryCta.href}
            className="lift block border border-gold bg-gold-gradient p-8 sm:p-9 relative overflow-hidden flex flex-col justify-between min-h-[280px] text-ink"
          >
            <div>
              <div className="flex items-center justify-center h-14 w-14 border border-ink/60 mb-6">
                <Icon name="calendar" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl leading-tight mb-3">
                Free 30-minute consultation
              </h3>
              <p className="text-sm opacity-80">
                Tell us your situation. We'll tell you what we'd build — and what it costs.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest">
              Schedule now →
            </div>
          </Link>
        </div>
      </Section>

      {/* THREE PILLARS */}
      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="Our Three Pillars"
          title={
            <>
              Three areas of focus. <br className="hidden sm:inline" />
              <span className="text-gold">One philosophy of planning.</span>
            </>
          }
          subtitle="Estate planning, asset protection, and business trusts share more than they differ. We build them as parts of the same plan."
        />
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group relative overflow-hidden border border-gold/20 aspect-[3/4] block"
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(min-width:1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
              <div className="absolute inset-0 p-7 sm:p-8 flex flex-col justify-end">
                <div className="text-[10px] uppercase tracking-widest text-gold mb-3">
                  {p.eyebrow}
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-bone leading-tight mb-3 group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-bone-muted mb-5 max-w-md">
                  {p.description}
                </p>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold">
                  Learn more
                  <Icon
                    name="arrow-right"
                    size={12}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="Our Process"
          title="Four steps. No surprises."
          subtitle="From first conversation to signed binder, every step is planned, transparent, and quoted up front."
        />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </Section>

      {/* AREAS SERVED */}
      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="Areas Served"
          title={
            <>
              Serving the <span className="text-gold">Highland Lakes</span> &<br className="hidden sm:inline" /> the Texas Hill Country.
            </>
          }
          subtitle="We're based in Granite Shoals — and we serve families from Lake LBJ to Lake Travis. Click your town for local details."
        />
        <div className="mt-14">
          <AreasGrid />
        </div>
        <div className="mt-10 text-center">
          <GoldButton href="/areas-served/" variant="ghost">
            View all areas served
          </GoldButton>
        </div>
      </Section>

      {/* WHY US */}
      <Section className="border-t border-gold/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="hr-gold" />
              <span className="text-xs font-medium uppercase tracking-widest text-gold">Why CMS Global Ventures</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-bone leading-[1.05] tracking-tight">
              Why families<br />
              <span className="text-gold">choose us.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-bone-muted">
              We're not the biggest. We're not in Austin. We're not chasing volume. We're a Hill Country trust services firm built around a small number of clients we serve really well — for years, not transactions.
            </p>
            <div className="mt-8">
              <GoldButton href="/about/">More about us</GoldButton>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/10 border border-gold/10">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-ink-card p-7">
                <div className="h-10 w-10 flex items-center justify-center border border-gold/40 text-gold mb-5">
                  <Icon name={w.icon} size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-bone leading-tight mb-2">{w.title}</h3>
                <p className="text-sm text-bone-muted leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-gold/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="hr-gold" />
                <span className="text-xs font-medium uppercase tracking-widest text-gold">Common Questions</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-bone leading-[1.05] tracking-tight">
                Frequently asked.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-bone-muted">
                The questions we hear most often from new clients. If yours isn't here, the answer is one phone call away.
              </p>
              <div className="mt-8">
                <GoldButton href="/faq/" variant="ghost">View full FAQ</GoldButton>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion faqs={homeFaqs} />
          </div>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section className="border-t border-gold/10">
        <SectionHeader
          align="center"
          eyebrow="Client Reviews"
          title={<>What our <span className="text-gold">clients say.</span></>}
          subtitle="Real words from families and business owners across the Texas Hill Country who've built their plans with us."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <GoldButton href="/reviews/" variant="ghost">Read all reviews</GoldButton>
        </div>
      </Section>

      {/* CONTACT FORM */}
      <FormSection />
    </>
  );
}
