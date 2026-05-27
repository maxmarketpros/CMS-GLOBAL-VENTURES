import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Section, SectionHeader } from "@/components/Section";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Resources | CMS Global Ventures",
  description:
    "Useful resources and links for Texas estate planning — Texas Bar, Texas Secretary of State, Burnet County, Llano County, IRS, Social Security, and more.",
  alternates: { canonical: "/resources/" },
};

type Resource = {
  name: string;
  description: string;
  url: string;
  domain: string;
};

const groups: { title: string; eyebrow: string; resources: Resource[] }[] = [
  {
    title: "Texas Government",
    eyebrow: "Official Sources",
    resources: [
      {
        name: "Texas Secretary of State",
        description: "Entity filings, certificates of formation, business records.",
        url: "https://www.sos.state.tx.us/",
        domain: "sos.state.tx.us",
      },
      {
        name: "Texas State Law Library",
        description: "Authoritative source for Texas statutes including the Estates Code and Trust Code.",
        url: "https://www.sll.texas.gov/",
        domain: "sll.texas.gov",
      },
      {
        name: "Texas Comptroller of Public Accounts",
        description: "Franchise tax filings and state-level tax information for entities.",
        url: "https://comptroller.texas.gov/",
        domain: "comptroller.texas.gov",
      },
    ],
  },
  {
    title: "County Resources",
    eyebrow: "Local Probate",
    resources: [
      {
        name: "Burnet County",
        description: "County clerk, probate court, real property records for Granite Shoals, Marble Falls, Burnet, Spicewood, and Cottonwood Shores.",
        url: "https://www.burnetcountytexas.org/",
        domain: "burnetcountytexas.org",
      },
      {
        name: "Llano County",
        description: "County clerk, probate, and property records for Kingsland, Llano, and Horseshoe Bay (Llano County side).",
        url: "https://www.co.llano.tx.us/",
        domain: "co.llano.tx.us",
      },
      {
        name: "Travis County",
        description: "County clerk and probate court for Lakeway, Bee Cave, Lago Vista, and West Austin clients.",
        url: "https://www.traviscountytx.gov/",
        domain: "traviscountytx.gov",
      },
    ],
  },
  {
    title: "Federal",
    eyebrow: "IRS & Social Security",
    resources: [
      {
        name: "Internal Revenue Service",
        description: "Estate-tax information, EIN applications for trusts, and Form 706/709 references.",
        url: "https://www.irs.gov/",
        domain: "irs.gov",
      },
      {
        name: "Social Security Administration",
        description: "Survivor benefits, retirement planning, and SSA forms relevant to estate planning.",
        url: "https://www.ssa.gov/",
        domain: "ssa.gov",
      },
      {
        name: "Medicare.gov",
        description: "Healthcare coverage information important for long-term-care and incapacity planning.",
        url: "https://www.medicare.gov/",
        domain: "medicare.gov",
      },
    ],
  },
];

function ResourceCard({ r }: { r: Resource }) {
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className="lift block border border-gold/15 bg-ink-card p-6 group"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="h-10 w-10 flex-shrink-0 border border-gold/30 bg-ink flex items-center justify-center overflow-hidden">
          <img
            src={`https://www.google.com/s2/favicons?domain=${r.domain}&sz=64`}
            alt=""
            width={20}
            height={20}
            className="opacity-90"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg text-bone leading-tight group-hover:text-gold transition-colors">
            {r.name}
          </h3>
          <div className="text-[10px] uppercase tracking-widest text-bone-dim mt-1">{r.domain}</div>
        </div>
        <Icon
          name="arrow-right"
          size={14}
          strokeWidth={2}
          className="-rotate-45 text-bone-dim group-hover:text-gold transition-colors flex-shrink-0"
        />
      </div>
      <p className="text-sm leading-relaxed text-bone-muted">{r.description}</p>
    </a>
  );
}

export default function ResourcesPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title={
        <>
          Trusted sources <br className="hidden sm:inline" />
          <span className="text-gold">we point clients to.</span>
        </>
      }
      subtitle="A curated set of government and reference sites worth bookmarking if you're planning your estate or working through one."
      heroImage="/stock/15.jpg"
      heroImageAlt="Estate planning resources"
      crumbs={[{ name: "Home", href: "/" }, { name: "Resources" }]}
    >
      {groups.map((g) => (
        <Section key={g.title} className="border-t border-gold/10 first:border-t-0">
          <SectionHeader eyebrow={g.eyebrow} title={g.title} />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {g.resources.map((r) => (
              <ResourceCard key={r.url} r={r} />
            ))}
          </div>
        </Section>
      ))}
    </PageShell>
  );
}
