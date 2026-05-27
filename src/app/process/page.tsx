import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Section, SectionHeader } from "@/components/Section";
import { ProcessTimeline, defaultProcess } from "@/components/ProcessTimeline";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Our Process — Plain-English Estate Planning Steps",
  description:
    "Four steps from first conversation to signed binder. Free consultation, plan design, document drafting, and asset funding — flat fees, no surprises.",
  alternates: { canonical: "/process/" },
};

const detailed = defaultProcess.map((step, i) => ({
  ...step,
  details: [
    "30 minutes. No cost. No obligation. We meet you in person, on the phone, or via video.",
    "Two weeks. We design the structure that fits your situation, then walk you through it in plain English before drafting anything.",
    "One to two weeks. Documents are custom-drafted, reviewed with you, and signed under proper witness and notarization.",
    "Ongoing. We retitle your assets into the trust, set the structure up correctly, and stay with you for the life of the plan.",
  ][i],
  duration: ["~30 minutes", "~2 weeks", "~1–2 weeks", "Ongoing"][i],
}));

export default function ProcessPage() {
  return (
    <PageShell
      eyebrow="How We Work"
      title={
        <>
          Four steps. <span className="text-gold">No surprises.</span>
        </>
      }
      subtitle="A simple, transparent process from the first conversation to a signed and funded plan. Flat fees, plain English, no hourly billing."
      heroImage="/stock/2.jpg"
      heroImageAlt="Our process at CMS Global Ventures"
      crumbs={[{ name: "Home", href: "/" }, { name: "Our Process" }]}
    >
      <Section>
        <SectionHeader
          eyebrow="The Four Steps"
          title="A clear path, every time."
          subtitle="Every client walks through these four steps. The plan changes; the process doesn't."
        />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </Section>

      <Section className="border-t border-gold/10">
        <div className="space-y-px bg-gold/10 border border-gold/10">
          {detailed.map((step, i) => (
            <div key={step.number} className="bg-ink-card p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-2 flex lg:flex-col items-start gap-4">
                <div className="font-display text-5xl lg:text-6xl text-gold leading-none">{step.number}</div>
                <div className="h-12 w-12 flex items-center justify-center border border-gold/40 text-gold">
                  <Icon name={step.icon} size={20} strokeWidth={1.5} />
                </div>
              </div>
              <div className="lg:col-span-10">
                <div className="flex items-center gap-4 flex-wrap mb-3">
                  <h3 className="font-display text-2xl lg:text-3xl text-bone leading-tight">{step.title}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-gold border border-gold/40 px-3 py-1">
                    {step.duration}
                  </span>
                </div>
                <p className="text-base text-bone-muted leading-relaxed max-w-3xl mb-4">{step.description}</p>
                <p className="text-base text-bone-muted leading-relaxed max-w-3xl">{step.details}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-gold/10">
        <SectionHeader
          eyebrow="What's Different"
          title={<>Where most plans fail: <span className="text-gold">funding.</span></>}
          subtitle="A trust only works if your assets are actually inside it. Most plans never get there. Ours always do — it's step four for a reason."
        />
        <div className="mt-10 max-w-3xl text-base leading-relaxed text-bone-muted space-y-4">
          <p>
            Funding is the step where ownership of your home, your accounts, your business interests, and your investment property gets retitled into the trust. It's tedious. It involves a lot of small paperwork at banks, brokerages, and the county clerk's office. And it's the step most other planners hand off to you as homework.
          </p>
          <p>
            We don't. We handle the retitling for you — or walk you through every account, signature, and form when self-service is required. The plan isn't done until your assets are inside it.
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
