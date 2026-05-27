import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Section, SectionHeader } from "@/components/Section";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Schedule Your Free Consultation | CMS Global Ventures",
  description:
    "Schedule your free 30-minute consultation with CMS Global Ventures. No cost. No obligation. We'll tell you exactly what we'd recommend and what it costs.",
  alternates: { canonical: "/free-consultation/" },
};

const includes = [
  {
    title: "30 focused minutes",
    description: "Long enough to understand your situation. Short enough to respect your time.",
  },
  {
    title: "A direct recommendation",
    description: "We'll tell you what we'd build, why, and what it costs — before you commit to anything.",
  },
  {
    title: "No pressure, no obligation",
    description: "If we're not the right fit, we'll say so and point you to someone who is. No follow-up sales calls.",
  },
  {
    title: "Plain English answers",
    description: "We don't use jargon. You'll leave the conversation knowing more than when you started, regardless of what you decide.",
  },
];

export default function FreeConsultationPage() {
  return (
    <PageShell
      eyebrow="Start Here"
      title={
        <>
          Schedule your <br className="hidden sm:inline" />
          <span className="text-gold">free consultation.</span>
        </>
      }
      subtitle="Thirty minutes. No cost. No obligation. Just an honest conversation about your situation and what we'd recommend."
      heroImage="/stock/13.jpg"
      heroImageAlt="Schedule a free consultation with CMS Global Ventures"
      crumbs={[{ name: "Home", href: "/" }, { name: "Free Consultation" }]}
      showForm={true}
    >
      <Section>
        <SectionHeader
          eyebrow="What's Included"
          title={<>What you get from <span className="text-gold">your first conversation.</span></>}
          subtitle="The free consultation is exactly what it sounds like — a real conversation, not a sales pitch."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10 border border-gold/10">
          {includes.map((inc, i) => (
            <div key={inc.title} className="bg-ink-card p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-5">
                <span className="font-display text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-gold/30" />
              </div>
              <h3 className="font-display text-xl text-bone leading-tight mb-3">{inc.title}</h3>
              <p className="text-sm text-bone-muted leading-relaxed">{inc.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-gold/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="What To Bring"
              title="A few notes — nothing complicated."
              subtitle="No prep required. But these things help us be more useful in the first conversation."
            />
            <ul className="mt-8 space-y-4 text-base text-bone-muted">
              {[
                "A rough sense of what you own (home, accounts, business interests)",
                "Names of people who matter — spouse, children, business partners",
                "Any existing estate documents you already have",
                "Questions, concerns, or fears about your current situation",
                "What you're hoping a plan would accomplish",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 h-5 w-5 border border-gold flex items-center justify-center text-gold">
                    <Icon name="check" size={12} strokeWidth={2.5} />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="border border-gold/20 bg-ink-card p-8 lg:p-10 h-full">
              <div className="text-[10px] uppercase tracking-widest text-gold mb-6">Three Ways To Meet</div>
              <div className="space-y-5">
                {[
                  { icon: "users" as const, title: "In person", description: "At our service location in Granite Shoals or we'll come to you." },
                  { icon: "phone" as const, title: "Phone call", description: "A simple call if that fits your schedule better." },
                  { icon: "calendar" as const, title: "Video call", description: "Zoom or Google Meet — for distance clients or anyone short on time." },
                ].map((m) => (
                  <div key={m.title} className="flex items-start gap-4">
                    <div className="h-10 w-10 flex items-center justify-center border border-gold/40 text-gold flex-shrink-0">
                      <Icon name={m.icon} size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-display text-lg text-bone leading-tight">{m.title}</div>
                      <div className="text-sm text-bone-muted mt-1">{m.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
