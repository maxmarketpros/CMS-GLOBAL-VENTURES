import type { Area } from "./_types";

export const kingsland: Area = {
  slug: "kingsland",
  city: "Kingsland",
  county: "Llano County",
  h1: "Trust & Estate Services for Kingsland, TX Residents",
  metaTitle: "Kingsland Estate Planning & Trusts",
  metaDescription:
    "Trust formation and estate planning for Kingsland, TX families. Custom plans for Lake LBJ homeowners, retirees, and Hill Country business owners.",
  intro:
    "Kingsland anchors the western shore of Lake LBJ at the confluence of the Llano and Colorado rivers. Multi-generational ranching families, retirees who chose the lake for its quiet, and newer residents who came for the same reason.",
  localHook:
    "Llano County is one of the friendlier probate jurisdictions in Texas, but the right trust structure keeps your family out of court entirely.",
  driveTime: "10 minutes from our Granite Shoals service area",
  population: "~7,100",
  landmarks: [
    "Lake LBJ",
    "The Slab on the Llano River",
    "Antlers Hotel",
  ],
  heroPhoto: "/stock/15.jpg",
  bodyPhoto: "/stock/7.jpg",
  lat: 30.6602,
  lng: -98.4422,
  zip: "78639",
  nearby: ["llano", "horseshoe-bay", "marble-falls"],
  sections: [
    {
      kind: "intro",
      eyebrow: "Kingsland, Texas",
      title: "Where two rivers meet — and where families plan generations ahead.",
      body: [
        "Kingsland sits at the spot where the Llano River runs into the Colorado, a confluence that gives the town both its character and its identity. The Slab — a low-water crossing on the Llano just upstream of the confluence — is one of the most photographed places in the Hill Country. The Antlers Hotel, built in 1901 as a Sunday-house retreat for ranching families coming in to town from the surrounding country, still operates today as one of the longest-running hotels in central Texas. Lake LBJ extends from the confluence northward, and Kingsland's western shore frontage is what defines the modern town.",
        "The demographics here skew older than the surrounding communities. The median age in Kingsland is just over fifty, meaningfully higher than Marble Falls or even Horseshoe Bay. The town has long been a quiet retirement destination — Hill Country fishing, lake recreation, low cost of living relative to Austin, no state income tax. Our Kingsland clients tend to share a planning profile: they have been here a while, they own their home outright, they care deeply about the family land passing intact to the next generation, and they have strong opinions about probate they have learned by watching it happen to other people's estates.",
      ],
    },
    {
      kind: "photo",
      image: "/stock/7.jpg",
      alt: "A peaceful Texas Hill Country retirement community",
      caption:
        "Kingsland — long-time Hill Country retirement community on the western shore of Lake LBJ.",
      aspect: "wide",
    },
    {
      kind: "deep",
      eyebrow: "The Kingsland planning profile",
      title: "Retirees, ranch land, and lake homes — all in one plan.",
      body: [
        "More than thirty-five percent of Kingsland households include someone over the age of sixty-five, and a substantial portion of those households have been here for two or three decades. The estate planning conversations we have in Kingsland reflect that. We do not spend a lot of time explaining what a trust is — most of our Kingsland clients already know. We spend our time on the details that matter for their specific situation: how to handle the family land outside Llano, whether to gift some of it to children now or wait, how to keep the lake home from causing a family argument among siblings who all want different things.",
        "The combination of land and lake property is genuinely common here. We frequently see families with a hundred-plus acres of pasture or hunting land outside Kingsland and a lake home in town — and the planning has to handle both, often with different structures. Land that is being actively used for agriculture qualifies for ag-valuation property tax treatment, which we preserve through the trust funding. Lake property qualifies for homestead if it is the primary residence, which we also preserve. The mistake families make is treating both properties the same way; the right approach respects what each one actually is.",
        "Mineral rights and royalty interests show up in roughly a quarter of Kingsland engagements. Even when the surface estate has been sold off, the mineral interest can be a meaningful asset — particularly with the resurgence of central Texas oil and gas activity. Mineral interests deed into a trust the same way real estate does, but the recording happens with the county clerk and the operator needs to be notified to redirect royalty checks. We handle that paperwork as part of funding.",
      ],
    },
    {
      kind: "mapEmbed",
      query: "Kingsland, TX",
      lat: 30.6602,
      lng: -98.4422,
      zoom: 13,
      address: "Kingsland, Llano County, Texas 78639",
      caption:
        "Kingsland is our closest service area — about 10 minutes west of Granite Shoals on the western shore of Lake LBJ.",
    },
    {
      kind: "alternating",
      eyebrow: "Land plus lake — one structure that respects both",
      title: "Multi-property plans for families who own more than one piece.",
      body: [
        "A typical Kingsland engagement involves at least two properties — the home in town or on the lake, and family land outside town that has been in the same name for decades. We design the trust to hold both, but we structure them differently. The personal residence (whether in town or on the lake) goes into the trust directly and preserves homestead and over-65 exemptions. The land outside town often goes into a separate LLC that the trust owns, so the agricultural-use valuation is preserved, liability from hunting leases or cattle operations is contained, and the operating side of the land stays separate from the family home.",
        "When the family wants to start handing land to the next generation, we use a combination of gifting (within the annual exclusion and the lifetime exemption) and installment sales to a grantor trust. The next-generation owner takes title (or a beneficial interest), the senior generation retains income through a structured note, and the appreciation moves out of the senior estate without triggering a current tax event. Done over five to ten years, this approach can shift meaningful value to the next generation while leaving the senior owners fully comfortable.",
      ],
      image: "/stock/11.jpg",
      imageAlt: "A signed deed transferring land to a family trust",
      imageSide: "right",
      bullets: [
        {
          title: "Personal residence in trust",
          body: "Preserves homestead and over-65 exemptions.",
        },
        {
          title: "Land in a trust-owned LLC",
          body: "Contains liability and protects ag-valuation status.",
        },
        {
          title: "Mineral rights deeded with the surface",
          body: "Or separately if they are owned independently.",
        },
        {
          title: "Annual gifting and installment sale",
          body: "Phased transfer to the next generation without tax surprises.",
        },
      ],
    },
    {
      kind: "cardGrid",
      eyebrow: "What we build for Kingsland families",
      title: "Services your neighbors are using.",
      subtitle:
        "These are the services Kingsland clients use most. Many engagements combine three or four into a single integrated plan.",
      columns: 3,
      items: [
        {
          icon: "scroll",
          title: "Estate Planning",
          body: "Comprehensive plans built for multi-property families.",
        },
        {
          icon: "vault",
          title: "Living Trusts",
          body: "Avoid Llano County probate entirely.",
        },
        {
          icon: "lock",
          title: "Irrevocable Trusts",
          body: "Medicaid planning, ILITs, and legacy structures.",
        },
        {
          icon: "shield",
          title: "Asset Protection",
          body: "Layered defense for ranch and lake-property owners.",
        },
        {
          icon: "balance",
          title: "Probate Assistance",
          body: "When a loved one passed without a plan, we help the family through it.",
        },
        {
          icon: "heart",
          title: "Healthcare Directives",
          body: "Statutory Texas directives every hospital recognizes.",
        },
      ],
    },
    {
      kind: "faq",
      eyebrow: "Kingsland FAQ",
      title: "What Kingsland clients ask first.",
      items: [
        {
          q: "We have land in the family — can it stay in our name forever?",
          a: "Effectively yes, through trust ownership. A multi-generational dynasty trust can hold family land for the maximum period Texas law allows (Texas does not have a true rule against perpetuities for trusts and instead applies a 300-year limit under Property Code §112.036). Combined with a trust-owned LLC for the operating side, the structure can carry land forward through several generations without it ever entering anyone's individual estate.",
        },
        {
          q: "How does ag-valuation work when land moves into a trust?",
          a: "Ag-valuation (formally 1-d-1 open-space valuation) attaches to the land itself based on its current use. Transferring into a qualifying revocable trust does not terminate the ag-valuation as long as the same agricultural use continues. The Llano County Appraisal District treats the trust as the owner going forward, but the historical use and current ag status carry through cleanly.",
        },
        {
          q: "Will the trust affect our over-65 property-tax freeze?",
          a: "No, when structured correctly. Texas Tax Code §11.13(j) preserves the over-65 freeze and homestead exemption when property is transferred to a revocable trust of which the original owner is a trustor and beneficiary, provided the owner continues to occupy the property as a primary residence.",
        },
        {
          q: "We are six miles outside Kingsland — do you still come this far?",
          a: "Yes. We meet Kingsland-area clients at home, at our Granite Shoals service area (about ten minutes east), or anywhere convenient. Many of our Llano County clients live outside the city limits, and we drive to wherever your home and your records actually live.",
        },
      ],
    },
  ],
};
