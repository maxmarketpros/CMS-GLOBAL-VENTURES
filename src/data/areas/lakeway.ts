import type { Area } from "./_types";

export const lakeway: Area = {
  slug: "lakeway",
  city: "Lakeway",
  county: "Travis County",
  h1: "Lakeway Estate Planning Specialists — Trust Services for Lake Travis Families",
  metaTitle: "Lakeway Estate Planning & Trusts",
  metaDescription:
    "Estate planning, trust formation, and asset protection for Lakeway, TX. High-net-worth planning for Lake Travis professionals, executives, and retirees.",
  intro:
    "Lakeway concentrates more high-net-worth households per square mile than almost anywhere in central Texas. Multiple residences, executive compensation, equity in a business or two, blended families. Plans that handle complexity without becoming complex to live with.",
  localHook:
    "Travis County probate is one of the busiest in the state. Plans built to avoid it altogether save Lakeway families months of delay.",
  driveTime: "45 minutes from our Granite Shoals service area",
  population: "~19,200",
  landmarks: ["Lake Travis", "Live Oak Golf Course", "Lakeway Resort"],
  heroPhoto: "/stock/18.jpg",
  bodyPhoto: "/stock/13.jpg",
  lat: 30.369,
  lng: -97.9892,
  zip: "78734",
  nearby: ["bee-cave", "lago-vista", "spicewood"],
  sections: [
    {
      kind: "intro",
      eyebrow: "Lakeway, Texas",
      title: "Concentrated wealth, custom plans.",
      body: [
        "Lakeway is the densest concentration of high-net-worth households in our service area — a Lake Travis-side community in western Travis County that has grown nearly seventy percent over the past decade and now houses just under twenty thousand residents with a median household income approaching two hundred thousand dollars. The growth has been driven by Austin executives, retired professionals, and tech-sector wealth flowing west out of the city. The demographics have settled into a distinctive pattern: median age in the high forties, eighty-six percent owner-occupied housing, and an unusually large share of households with multiple residences and meaningful business ownership.",
        "Our Lakeway engagements reflect the demographic. Plans here are rarely simple. The typical client owns a primary home in Lakeway, a second home somewhere else (often the coast, the mountains, or a destination outside Texas), equity in one or more operating businesses, and the kind of investment portfolio that requires its own coordinated planning. Blended-family situations are common — adult children from prior marriages, current spouse with separate property, sometimes grandchildren in the picture as direct beneficiaries. Every one of those dimensions has to be reconciled in a single coherent plan.",
      ],
    },
    {
      kind: "photo",
      image: "/stock/13.jpg",
      alt: "Lake Travis at golden hour",
      caption:
        "Lakeway — Lake Travis-side wealth concentration, high-net-worth planning territory.",
      aspect: "wide",
    },
    {
      kind: "stats",
      eyebrow: "The Lakeway profile",
      title: "Demographics that drive complex plans.",
      subtitle:
        "These numbers explain why Lakeway plans tend toward layered, multi-trust structures rather than single-document approaches.",
      items: [
        {
          value: "$190K",
          label: "Median household income",
          sublabel:
            "Among the highest in central Texas — sustained over the past decade.",
        },
        {
          value: "50",
          label: "Median age",
          sublabel:
            "Older, more established households with substantial accumulated assets.",
        },
        {
          value: "86%",
          label: "Owner-occupied",
          sublabel:
            "Heavy residential ownership, often with secondary properties as well.",
        },
        {
          value: "23%",
          label: "Age 65+",
          sublabel:
            "Strong retiree base alongside still-working executives.",
        },
      ],
    },
    {
      kind: "mapEmbed",
      query: "Lakeway, TX",
      lat: 30.369,
      lng: -97.9892,
      zoom: 13,
      address: "Lakeway, Travis County, Texas 78734",
      caption:
        "Lakeway sits about 45 minutes southeast of our Granite Shoals service area. We meet Lakeway clients at home, at a private meeting space in the city, or at our office when that fits the schedule.",
    },
    {
      kind: "deep",
      eyebrow: "Why Travis County probate is its own issue",
      title: "What a high-net-worth Lakeway estate looks like in probate court.",
      body: [
        "Travis County operates one of the busier probate dockets in the state — handling estates from Austin, the western Travis County corridor (Lakeway, Bee Cave, Lago Vista, West Lake Hills), and a portion of the surrounding metro. Even with independent administration, a Travis County estate typically takes longer than Burnet or Llano County estates simply because the docket is heavier and the typical estate is more complex. Six to twelve months is a common range. Estates with substantial business interests or contested provisions can run two to three years.",
        "More importantly, Travis County probate is public in exactly the way high-net-worth families dislike most. Inventories filed in Travis County probate are scanned and indexed; anyone with internet access and a few minutes can pull the inventory of an estate filed years ago. For a Lakeway family with a substantial estate, several real properties, and accounts at multiple institutions, that public inventory is a roadmap of the family's net worth at the moment of the deceased's death. For most clients, that exposure is a non-starter — and it is one of the strongest reasons high-net-worth Lakeway families build trust-based plans designed to skip probate entirely.",
        "The other Travis County-specific issue is jurisdiction shopping. When an estate has property in multiple counties (Travis plus Llano, Burnet, or out of state), ancillary proceedings are required in each county where real estate sits, multiplying time and cost. A funded trust eliminates ancillary probate completely because the property is already titled in the trust and transfers under the trust's terms, not under any state's probate code.",
      ],
    },
    {
      kind: "alternating",
      eyebrow: "Blended families and multi-residence estates",
      title: "Two dimensions that almost always need bespoke design.",
      body: [
        "Roughly two-thirds of our Lakeway engagements involve at least one of two complications: a blended family with children from prior marriages, or an estate with multiple residences in different states. Often both. Each complication requires planning beyond a standard joint trust.",
        "Blended-family planning typically uses a combination of separate revocable trusts (one per spouse) coordinated through a marital agreement and a carefully structured death-time disposition. The current spouse receives income or limited access for life; the principal eventually passes to the deceased spouse's children from a prior marriage. Done right, this protects both the surviving spouse and the deceased spouse's lineal heirs. Done wrong, it produces exactly the family-court litigation it was meant to prevent. We work through the structure carefully — and we coordinate with the family's financial advisor and CPA so the tax outcomes are intentional.",
        "Multi-residence estates use a single trust holding properties in multiple states. We deed each property into the trust through the destination state's deed format and recording requirements — Texas property recorded with the Travis County clerk, Colorado property with the applicable Colorado county recorder, Florida property with the appropriate Florida county. The trust itself is one document; the funding is jurisdiction-specific. For Lakeway clients with property in three or more states, this is materially better than maintaining separate plans in each state.",
      ],
      image: "/stock/2.jpg",
      imageAlt: "A couple reviewing estate planning documents",
      imageSide: "right",
      bullets: [
        {
          title: "Separate trusts coordinated for blended families",
          body: "Protects current spouse and prior-marriage children at the same time.",
        },
        {
          title: "Single trust for multi-state property",
          body: "Holds real estate across state lines through targeted deed filings.",
        },
        {
          title: "ILITs for life-insurance ownership",
          body: "Common for households at or near the federal exemption.",
        },
        {
          title: "Buy-sell coordination with business partners",
          body: "Trust-owned interests integrated with partnership and operating agreements.",
        },
      ],
    },
    {
      kind: "cardGrid",
      eyebrow: "Services for Lakeway clients",
      title: "What high-net-worth Travis County planning involves.",
      subtitle:
        "Most Lakeway engagements combine five or six of these services into a single integrated structure. Complexity is the norm here.",
      columns: 3,
      items: [
        {
          icon: "scroll",
          title: "Estate Planning",
          body: "Coordinated multi-residence, multi-asset plans.",
        },
        {
          icon: "vault",
          title: "Living Trusts",
          body: "Foundation that holds property in multiple states.",
        },
        {
          icon: "lock",
          title: "Irrevocable Trusts",
          body: "ILITs, SLATs, dynasty trusts for legacy planning.",
        },
        {
          icon: "shield",
          title: "Asset Protection",
          body: "Layered defense for high-liability professionals and executives.",
        },
        {
          icon: "briefcase",
          title: "Business Trusts",
          body: "Trust-owned LLC structures for business equity.",
        },
        {
          icon: "succession",
          title: "Business Succession",
          body: "Exit planning for executives and entrepreneurs.",
        },
      ],
    },
    {
      kind: "faq",
      eyebrow: "Lakeway FAQ",
      title: "Questions from Lake Travis-side families.",
      items: [
        {
          q: "Can a Texas trust handle property we own in California or Colorado?",
          a: "Yes. Trusts are recognized across state lines, and a single Texas-formed trust can hold real property in any state. The deed-filing process is state-specific — we coordinate with deed-recording counsel in the destination state if needed — but the trust itself remains a single coherent document. Most of our Lakeway clients with multi-state property end up with one Texas trust rather than separate plans in each state.",
        },
        {
          q: "We have a blended family — how do we protect both our current spouse and our kids from a prior marriage?",
          a: "The standard approach is a coordinated pair of revocable trusts, sometimes paired with a QTIP trust (qualified terminable interest property trust) at the first death. The surviving spouse receives income and limited use of the marital assets for life; the principal eventually passes to the deceased spouse's children from the prior marriage. We design the structure carefully with both spouses present so the outcome is intentional on both sides.",
        },
        {
          q: "Does my trust have to be Texas-based if we are thinking about leaving Texas?",
          a: "A revocable trust generally follows the grantor — when you move, the trust effectively moves with you for income-tax purposes. The document does not need to be redrafted, though you may want to update the choice-of-law provision and have the POAs and healthcare directives reissued on the destination state's forms. For most Lakeway clients planning a future move, we draft the trust to be portable from day one.",
        },
        {
          q: "How do we handle equity in a private company within the trust?",
          a: "Equity is intangible personal property and can be held by the trust the same way bank accounts can. The transfer is an assignment of the stock (or LLC interest) from you personally to the trust, with the company's stock ledger updated accordingly. If the company has transfer restrictions in its operating agreement, we coordinate with the company to confirm the trust transfer is permitted and reflected in the company's records.",
        },
      ],
    },
  ],
};
