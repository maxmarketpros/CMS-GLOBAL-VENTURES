import type { Service } from "./_types";

export const probateAssistance: Service = {
  slug: "probate-assistance",
  name: "Probate Assistance",
  shortName: "Probate Assistance",
  iconName: "balance",
  oneLiner:
    "Step-by-step help navigating Texas probate after a loved one's passing.",
  h1: "Probate Assistance Services in Granite Shoals, TX",
  metaTitle: "Probate Assistance in Granite Shoals, TX",
  metaDescription:
    "Probate assistance in Granite Shoals, Burnet County, and Llano County, TX. Step-by-step guidance through Texas probate after a loved one's passing.",
  heroPhoto: "/stock/9.jpg",
  intro:
    "When a loved one passes without a trust, their estate generally has to go through probate — the court process for proving a will and transferring property. We help families in Burnet and Llano counties navigate Texas probate with as little stress and delay as possible.",
  benefits: [
    {
      title: "Texas-specific guidance",
      description:
        "Texas has multiple probate paths — independent administration, muniment of title, small estate affidavits. We help you choose the right one.",
    },
    {
      title: "Document preparation",
      description:
        "Inventories, applications, court filings — we prepare the paperwork your family needs to keep things moving.",
    },
    {
      title: "Coordination across heirs",
      description:
        "We work directly with executors, beneficiaries, CPAs, and the court so probate does not become a family argument.",
    },
  ],
  details: [
    "Texas is one of the more probate-friendly states in the country thanks to independent administration.",
    "Future probate can almost always be avoided through proper planning. After we help you through your loved one's estate, we will show you how to keep your own family out of probate altogether.",
  ],
  sections: [
    {
      kind: "intro",
      eyebrow: "After the loss",
      title: "What probate is, and what we do to help.",
      body: [
        "Probate is the court-supervised process for transferring assets from someone who has passed to their heirs or beneficiaries. In Texas, it is the default path when the deceased owned property that was not held in a trust, was not jointly owned with right of survivorship, and did not pass by beneficiary designation. The probate court — usually the county court at law where the deceased lived — admits the will to probate (if there is one), qualifies the executor, supervises payment of debts and taxes, and ultimately confirms distribution to the heirs.",
        "We are not a law firm and we do not represent you in court. What we do is help families prepare the documents the court will need, understand which procedural path their situation calls for, and coordinate with the licensed Texas attorney who files the case and appears in court. In many estates that is enough to keep the process organized, on schedule, and substantially less stressful than it would be otherwise.",
      ],
    },
    {
      kind: "deep",
      eyebrow: "Choosing your path",
      title: "Texas offers four probate routes. Not every estate needs them all.",
      body: [
        "Texas is genuinely one of the better states in the country in which to probate an estate, because the statutes provide several procedural paths and most estates can use the simpler ones. Choosing the right path at the outset is most of the work — once a case is filed under the wrong procedure, it is difficult and expensive to switch.",
        "Independent administration is the default for estates with a will that names an independent executor (which every will we draft does) and waives bond. The court qualifies the executor, the executor inventories and distributes the estate without ongoing supervision, and the estate is typically closed in four to nine months. Muniment of title is a streamlined procedure for estates where the only purpose of probate is to transfer real property under the will — no debts, no minor heirs, no executor needed to take action. It is a single court hearing, the will is admitted as a muniment (a public record establishing title), and the estate is done in 30 to 60 days.",
        "The small estate affidavit applies to estates worth $75,000 or less (excluding the homestead) where the deceased died without a will. It avoids formal probate entirely — the heirs file an affidavit, the court approves it, and the assets transfer. Finally, determination of heirship is the path for intestate estates that exceed the small-estate threshold or include real property. It is a more involved court process, typically requiring two disinterested witnesses to testify about family history.",
        "We sit down with you, look at the assets, look at the will (or lack of one), and identify which path the estate qualifies for. Sometimes the answer is obvious within the first ten minutes. Sometimes we run two or three calculations to see which path saves the family time and money. Either way, you leave the consultation knowing exactly what is ahead.",
      ],
    },
    {
      kind: "comparison",
      eyebrow: "Side by side",
      title: "The four Texas probate procedures, compared.",
      subtitle:
        "Which procedure fits depends on what the deceased owned, whether they had a will, and what needs to happen to settle the estate.",
      columns: [
        {
          heading: "Independent Administration",
          tagline: "The default with a will",
          bullets: [
            "Will names an independent executor and waives bond",
            "Court qualifies the executor in 30–60 days",
            "Executor acts without ongoing court supervision",
            "Typical close time: 4–9 months",
            "Best for estates with debts to settle or assets to liquidate",
          ],
        },
        {
          heading: "Muniment of Title",
          tagline: "Streamlined for real estate",
          bullets: [
            "Will exists, no significant unpaid debts (besides home mortgage)",
            "Only purpose is to transfer property under the will",
            "Single hearing, no executor needed",
            "Typical close time: 30–60 days",
            "Texas-specific procedure not found in most other states",
          ],
        },
        {
          heading: "Small Estate Affidavit",
          tagline: "For modest estates without a will",
          bullets: [
            "Estate value $75,000 or less excluding homestead",
            "No will (intestate)",
            "Heirs file affidavit, court approves administratively",
            "No formal probate proceedings",
            "Limited to specific asset types — not all estates qualify",
          ],
        },
        {
          heading: "Determination of Heirship",
          tagline: "Intestate estates above the small-estate threshold",
          bullets: [
            "No will exists",
            "Estate includes real property or exceeds $75,000",
            "Two disinterested witnesses testify about family history",
            "Court formally identifies legal heirs under Texas intestacy",
            "Longer process — typically 6–12 months",
          ],
        },
      ],
    },
    {
      kind: "checklist",
      eyebrow: "Executor's first 30 days",
      title: "What to do in the month after the loss.",
      subtitle:
        "If you have been named executor, this is the work that needs to happen first. We walk through it with you, but the executor is the one who signs and acts.",
      columns: 2,
      items: [
        {
          title: "Order 10 certified death certificates",
          body: "From the funeral home or vital records. Almost every institution wants one.",
        },
        {
          title: "Locate the original will",
          body: "The court needs the signed original, not a copy.",
        },
        {
          title: "Inventory accounts and titles",
          body: "Bank accounts, brokerage, real estate, vehicles, retirement, life insurance, business interests.",
        },
        {
          title: "Notify Social Security",
          body: "1-800-772-1213. Funeral home often does this automatically.",
        },
        {
          title: "Notify life-insurance carriers",
          body: "Beneficiaries can usually file claims before probate even begins.",
        },
        {
          title: "Forward mail to executor",
          body: "USPS forwarding catches subscription, bill, and creditor notices.",
        },
        {
          title: "Secure the home",
          body: "Change locks if needed. Confirm insurance is current. Check for valuables.",
        },
        {
          title: "Schedule a probate consultation",
          body: "Sooner is better — the timeline and procedure depend on early decisions.",
        },
      ],
    },
    {
      kind: "alternating",
      eyebrow: "Documents we will need",
      title: "What to gather before our first meeting.",
      body: [
        "The first probate meeting is faster, cheaper, and more useful when you arrive with documents in hand. Most families do not have everything — that is normal. Bring what you have, and we will help you find the rest. The goal of the first meeting is to identify the procedural path, estimate the timeline, and outline the next two or three steps. We do not need a complete picture to start; we need enough of one to make a plan.",
        "Most of these documents are findable in a single folder or drawer at the deceased's home. Bank statements come in the mail every month. Life-insurance policies are usually together. Vehicle titles are in a safe or filing cabinet. We give every executor a checklist after the first meeting, and we follow up to help find anything that is missing.",
      ],
      image: "/stock/15.jpg",
      imageAlt: "An organized stack of estate planning documents",
      imageSide: "left",
      bullets: [
        {
          title: "Death certificate",
          body: "Certified copy, with raised seal.",
        },
        {
          title: "Original will (and any codicils)",
          body: "The signed original, not a photocopy.",
        },
        {
          title: "Recent bank and brokerage statements",
          body: "Last 2–3 months for each account.",
        },
        {
          title: "Real-property deeds",
          body: "Home, ranch, lake property — county recordation copies.",
        },
        {
          title: "Vehicle and trailer titles",
          body: "Texas certificates of title.",
        },
        {
          title: "Life-insurance policies",
          body: "Declarations pages with current beneficiary information.",
        },
        {
          title: "Retirement and IRA statements",
          body: "Including current beneficiary designations.",
        },
        {
          title: "Last 2 years of tax returns",
          body: "Helps confirm assets and outstanding obligations.",
        },
      ],
    },
    {
      kind: "faq",
      eyebrow: "Probate questions",
      title: "What families ask in the first conversation.",
      items: [
        {
          q: "How long does Texas probate take?",
          a: "Muniment of title can close in 30 to 60 days. Independent administration typically runs four to nine months from filing to closing, depending on the complexity of the estate, whether there are debts to resolve, and how quickly assets can be located and transferred. Contested estates or those requiring determination of heirship can run twelve months or longer.",
        },
        {
          q: "Does the entire estate go through probate?",
          a: "No. Assets that pass by beneficiary designation (life insurance, retirement accounts), assets held in joint tenancy with right of survivorship, and assets titled in a living trust all pass outside probate. What is left over — typically the deceased's home, individually-titled accounts, vehicles, and personal property — is what probate handles.",
        },
        {
          q: "What if the deceased had debts? Will the family have to pay them?",
          a: "Debts of the deceased are paid from the estate, in the order Texas law prescribes — administration costs, funeral expenses, secured claims, taxes, and unsecured claims. Family members are not personally liable for the deceased's debts unless they co-signed. If the estate is insolvent, unsecured creditors are paid pro rata and any remainder is simply not paid.",
        },
        {
          q: "What if there is no will?",
          a: "The estate is intestate, and Texas intestate succession rules determine who inherits — typically the surviving spouse and children, with specific rules for separate vs. community property. The procedural path is either small estate affidavit (for modest estates without real property) or determination of heirship (for larger or real-property estates). We handle both.",
        },
        {
          q: "How can we avoid probate next time?",
          a: "A funded revocable living trust avoids probate for everything titled in the trust. Beneficiary designations on financial accounts and transfer-on-death deeds on real property avoid probate for those specific assets. The right approach depends on your situation, but most families can construct a plan that bypasses probate entirely. We are happy to begin that conversation once we have finished helping you with the current estate.",
        },
      ],
    },
  ],
};
