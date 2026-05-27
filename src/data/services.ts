export type Service = {
  slug: string;
  name: string;
  shortName: string;
  iconName: IconName;
  oneLiner: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroPhoto: string;
  intro: string;
  benefits: { title: string; description: string }[];
  details: string[];
};

export type IconName =
  | "scroll"
  | "vault"
  | "lock"
  | "briefcase"
  | "shield"
  | "feather"
  | "balance"
  | "signature"
  | "heart"
  | "succession";

export const services: Service[] = [
  {
    slug: "estate-planning",
    name: "Estate Planning",
    shortName: "Estate Planning",
    iconName: "scroll",
    oneLiner: "A complete plan for how your wealth and wishes pass to the next generation.",
    h1: "Estate Planning Services in Granite Shoals, TX",
    metaTitle: "Estate Planning in Granite Shoals, TX | CMS Global Ventures",
    metaDescription:
      "Custom estate planning in Granite Shoals, TX and the Texas Hill Country. Wills, trusts, asset protection, and probate-free transfers built around your family. 500+ plans built. Schedule your free consultation.",
    heroPhoto: "/stock/12.jpg",
    intro:
      "An estate plan is more than a will. It is a coordinated set of documents that tells the world — and the courts — what should happen to your home, your business, your accounts, and your loved ones when you can no longer speak for yourself. CMS Global Ventures builds estate plans for Texas Hill Country families that keep your assets private, your wishes clear, and your children out of probate court.",
    benefits: [
      {
        title: "Probate avoidance",
        description:
          "We design plans that bypass the public probate process so your family keeps their privacy and avoids months of delay.",
      },
      {
        title: "Asset protection built-in",
        description:
          "Layered trusts and entity structures keep your property shielded from creditors, lawsuits, and predatory claims.",
      },
      {
        title: "Generational continuity",
        description:
          "Your wealth, your business, and your land stay in the family — on terms you set, not the state's default rules.",
      },
    ],
    details: [
      "A foundational estate plan typically includes a revocable living trust, a pour-over will, durable powers of attorney for finances and healthcare, advance directives, HIPAA authorizations, and updated beneficiary designations on retirement accounts and life insurance.",
      "We coordinate every piece so the documents actually work together — and we walk you through funding your trust (the step most plans get wrong) so your assets are titled correctly the day we hand over your binder.",
    ],
  },
  {
    slug: "living-trusts",
    name: "Living Trusts",
    shortName: "Living Trusts",
    iconName: "vault",
    oneLiner: "A revocable trust that keeps your estate private, fast, and out of probate.",
    h1: "Living Trust Services in Granite Shoals, TX",
    metaTitle: "Living Trusts in Granite Shoals, TX | CMS Global Ventures",
    metaDescription:
      "Revocable living trust formation in Granite Shoals, TX. Keep your estate out of probate, protect your privacy, and stay in full control of your assets during your lifetime.",
    heroPhoto: "/stock/11.jpg",
    intro:
      "A revocable living trust is the single most useful tool in modern estate planning. You stay in complete control of your assets while you're alive and well. When you become incapacitated or pass away, your successor trustee steps in immediately — no probate, no court, no public filings, no waiting.",
    benefits: [
      {
        title: "Skip probate entirely",
        description:
          "Assets titled in your trust pass to your beneficiaries without going through the Burnet or Llano County probate courts.",
      },
      {
        title: "Private by default",
        description:
          "Unlike a will, a trust never becomes public record. Your finances stay between your family and your trustee.",
      },
      {
        title: "Built for incapacity, not just death",
        description:
          "If a stroke or accident leaves you unable to manage your affairs, your successor trustee takes over instantly — no guardianship hearing required.",
      },
    ],
    details: [
      "A living trust works only if your assets are actually inside it. We handle the funding step — retitling your home, your accounts, your LLC interests, and your investment property into the trust — so the structure works the day we hand it over.",
      "You can amend or revoke a living trust at any time. It's flexible, private, and inexpensive to maintain.",
    ],
  },
  {
    slug: "irrevocable-trusts",
    name: "Irrevocable Trusts",
    shortName: "Irrevocable Trusts",
    iconName: "lock",
    oneLiner: "Maximum protection — your assets are legally separated from you for life.",
    h1: "Irrevocable Trust Services in Texas",
    metaTitle: "Irrevocable Trusts in Granite Shoals, TX | CMS Global Ventures",
    metaDescription:
      "Irrevocable trust formation in Granite Shoals, TX. Permanent asset protection, tax-efficient wealth transfer, and Medicaid planning for Hill Country families.",
    heroPhoto: "/stock/14.jpg",
    intro:
      "An irrevocable trust permanently separates assets from your personal estate. Once funded, the assets are no longer yours in the eyes of creditors, lawsuits, or estate-tax calculations. That's the trade — you give up direct control in exchange for the strongest protection the law allows.",
    benefits: [
      {
        title: "Strongest asset protection available",
        description:
          "Assets inside an irrevocable trust are legally beyond the reach of future creditors, judgments, and even long-term care costs.",
      },
      {
        title: "Estate-tax efficiency",
        description:
          "Removes assets from your taxable estate, which matters for high-net-worth Hill Country lake homeowners and business owners.",
      },
      {
        title: "Medicaid and long-term-care planning",
        description:
          "Properly structured, an irrevocable trust can preserve family wealth while qualifying you for Medicaid benefits after the five-year look-back.",
      },
    ],
    details: [
      "Irrevocable trust planning is not for everyone. We walk you through the trade-offs before we recommend one — and we use them in the right situations: legacy wealth, special-needs beneficiaries, life-insurance ownership, charitable giving, and long-term-care preparation.",
      "Common variants we build include ILITs (irrevocable life insurance trusts), SLATs (spousal lifetime access trusts), Medicaid-asset-protection trusts, and special-needs trusts.",
    ],
  },
  {
    slug: "business-trusts",
    name: "Business Trusts",
    shortName: "Business Trusts",
    iconName: "briefcase",
    oneLiner: "Trust-based structures that protect business owners — and their businesses.",
    h1: "Business Trust Formation in Granite Shoals, TX",
    metaTitle: "Business Trusts in Granite Shoals, TX | CMS Global Ventures",
    metaDescription:
      "Business trust formation in Granite Shoals, TX. Custom trust structures that hold LLC interests, shield business assets, and plan succession for Texas business owners.",
    heroPhoto: "/stock/3.jpg",
    intro:
      "A business trust separates what you own from what you control. Your LLC, your equipment, your real estate, your intellectual property — all of it sits inside a trust structure that protects against personal liability, simplifies succession, and keeps your ownership out of public records.",
    benefits: [
      {
        title: "Liability separation",
        description:
          "A creditor going after you personally can't touch the business assets inside your trust — and vice versa.",
      },
      {
        title: "Privacy",
        description:
          "Business ownership inside a trust stays off public records. Your name doesn't appear in Secretary of State filings.",
      },
      {
        title: "Built-in succession",
        description:
          "When you pass or step away, the trust transitions ownership instantly — no fight, no probate, no business interruption.",
      },
    ],
    details: [
      "Texas does not have a separate Business Trust Act, but it has something better: a flexible Trust Code combined with the Texas Business Organizations Code. We use revocable and irrevocable trusts that own LLC membership interests — often paired with Series LLCs — to give you the privacy of a trust and the liability protection of an LLC at the same time.",
      "We coordinate with your CPA and existing operating agreements so the structure actually fits how your business runs.",
    ],
  },
  {
    slug: "asset-protection",
    name: "Asset Protection",
    shortName: "Asset Protection",
    iconName: "shield",
    oneLiner: "Layered legal structures that put a wall between you and future claims.",
    h1: "Asset Protection Services in Granite Shoals, TX",
    metaTitle: "Asset Protection in Granite Shoals, TX | CMS Global Ventures",
    metaDescription:
      "Asset protection planning in Granite Shoals, TX. Custom trust structures, LLCs, and entity layering to shield your wealth from lawsuits, creditors, and unforeseen claims.",
    heroPhoto: "/stock/17.jpg",
    intro:
      "Asset protection isn't one document. It's a system. Trusts. LLCs. Homestead. Insurance. Retirement-account structuring. Each layer makes you a harder target. The right plan, built before there's a problem, can mean the difference between losing everything in a lawsuit and barely noticing it happened.",
    benefits: [
      {
        title: "Multi-layer defense",
        description:
          "We combine trusts, LLCs, and equity-stripping techniques so a creditor would have to defeat several legal structures to reach anything.",
      },
      {
        title: "Texas homestead maximization",
        description:
          "Texas has some of the strongest homestead protections in the country. We make sure yours is fully claimed and properly stacked with the rest of your plan.",
      },
      {
        title: "Built early, before there's a claim",
        description:
          "Asset protection only works when it's done before a lawsuit is on the horizon. Transfers made after a claim arises can be unwound as fraudulent.",
      },
    ],
    details: [
      "Texas is one of the most protective states in the country for personal assets. Your homestead, your retirement accounts, your annuities, and your life-insurance cash value are largely off-limits to creditors by statute. We build the rest of your structure to take maximum advantage of that.",
      "Business owners, real-estate investors, lake-home owners, and professionals in high-liability fields benefit most from a layered plan.",
    ],
  },
  {
    slug: "wills",
    name: "Wills",
    shortName: "Last Will & Testament",
    iconName: "feather",
    oneLiner: "A simple, signed document that names your guardians, executors, and beneficiaries.",
    h1: "Last Will & Testament Services in Granite Shoals, TX",
    metaTitle: "Wills in Granite Shoals, TX | CMS Global Ventures",
    metaDescription:
      "Last will & testament preparation in Granite Shoals, TX. Custom-drafted Texas wills that name guardians, appoint executors, and protect your family. Schedule your free consultation.",
    heroPhoto: "/stock/2.jpg",
    intro:
      "Every adult in Texas needs a will. If you have minor children, a will is the only place you can name their guardian. If you own a home, a will tells the probate court who inherits it. Without one, the state of Texas decides — and the answer is rarely what your family would have chosen.",
    benefits: [
      {
        title: "Name your children's guardians",
        description:
          "Without a will, a Texas court decides who raises your kids. A will lets you make that choice yourself.",
      },
      {
        title: "Choose your executor",
        description:
          "You pick the person who handles your estate, not a court appointee.",
      },
      {
        title: "Coordinate with your trust",
        description:
          "If you have a living trust, your will becomes a pour-over backstop — anything not titled in your trust still ends up there.",
      },
    ],
    details: [
      "We draft self-proving Texas wills under the Texas Estates Code with witness affidavits, so probate (if needed) moves quickly.",
      "For most families, a will alone is not enough. We pair it with a trust, powers of attorney, and advance directives for full coverage.",
    ],
  },
  {
    slug: "probate-assistance",
    name: "Probate Assistance",
    shortName: "Probate Assistance",
    iconName: "balance",
    oneLiner: "Step-by-step help navigating Texas probate after a loved one's passing.",
    h1: "Probate Assistance Services in Granite Shoals, TX",
    metaTitle: "Probate Assistance in Granite Shoals, TX | CMS Global Ventures",
    metaDescription:
      "Probate assistance in Granite Shoals, Burnet County, and Llano County, TX. Step-by-step guidance through the Texas probate process after a loved one's passing.",
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
          "We work directly with executors, beneficiaries, CPAs, and the court so probate doesn't become a family argument.",
      },
    ],
    details: [
      "Texas is one of the more probate-friendly states in the country thanks to independent administration. Most estates can be settled without ongoing court supervision once the executor is qualified.",
      "Future probate can almost always be avoided through proper planning. After we help you through your loved one's estate, we'll show you how to keep your own family out of probate altogether.",
    ],
  },
  {
    slug: "power-of-attorney",
    name: "Power of Attorney",
    shortName: "Power of Attorney",
    iconName: "signature",
    oneLiner: "Naming someone you trust to act for you if you cannot act for yourself.",
    h1: "Power of Attorney Services in Granite Shoals, TX",
    metaTitle: "Power of Attorney in Granite Shoals, TX | CMS Global Ventures",
    metaDescription:
      "Durable power of attorney preparation in Granite Shoals, TX. Texas-compliant financial and healthcare POAs that protect you and your family during incapacity.",
    heroPhoto: "/stock/4.jpg",
    intro:
      "A durable power of attorney names someone you trust to handle your finances — pay your bills, sign your taxes, manage your business — if you become unable to do it yourself. Without one, your family has to ask a court to appoint a guardian, which is slow, public, and expensive.",
    benefits: [
      {
        title: "Avoid guardianship court",
        description:
          "A signed POA replaces the need for a guardianship hearing if you're ever incapacitated.",
      },
      {
        title: "Two types, both important",
        description:
          "We draft a Texas Statutory Durable Power of Attorney for finances and a Medical Power of Attorney for healthcare decisions — both should be in your binder.",
      },
      {
        title: "Springing or immediate",
        description:
          "You choose whether your POA is active the moment you sign it, or only kicks in after a doctor certifies you're incapacitated.",
      },
    ],
    details: [
      "Texas law has specific requirements for a durable power of attorney to be valid. We use the current statutory form and tailor the powers granted to fit your situation — broad enough to be useful, narrow enough to be safe.",
      "We pair every POA with a HIPAA authorization so your named agent can actually talk to your doctors.",
    ],
  },
  {
    slug: "healthcare-directives",
    name: "Healthcare Directives",
    shortName: "Healthcare Directives",
    iconName: "heart",
    oneLiner: "Your medical wishes, in writing, so your family is never left guessing.",
    h1: "Healthcare Directives & Living Wills in Texas",
    metaTitle: "Healthcare Directives in Granite Shoals, TX | CMS Global Ventures",
    metaDescription:
      "Advance directives, living wills, and HIPAA authorizations for Granite Shoals, TX families. Make your medical wishes clear before a crisis.",
    heroPhoto: "/stock/22.jpg",
    intro:
      "Advance directives let you decide — in advance — what kind of medical care you want if you can't speak for yourself. They protect your family from having to guess, and they protect you from getting treatment you'd never have chosen.",
    benefits: [
      {
        title: "Directive to Physicians (Living Will)",
        description:
          "Documents your wishes about life-sustaining treatment if you have a terminal or irreversible condition.",
      },
      {
        title: "Medical Power of Attorney",
        description:
          "Names the one person who speaks for you on medical decisions when you can't.",
      },
      {
        title: "HIPAA Authorization",
        description:
          "Gives your family and your medical agent legal access to your doctors and medical records.",
      },
    ],
    details: [
      "We use Texas statutory forms so every hospital in the state recognizes your directives without question.",
      "We coordinate these documents with your trust, will, and financial POA so everything in your binder speaks the same language.",
    ],
  },
  {
    slug: "business-succession",
    name: "Business Succession",
    shortName: "Business Succession",
    iconName: "succession",
    oneLiner: "A plan that keeps your business running — and in the right hands — after you step away.",
    h1: "Business Succession Planning in Texas",
    metaTitle: "Business Succession in Granite Shoals, TX | CMS Global Ventures",
    metaDescription:
      "Business succession planning in Granite Shoals, TX. Custom trust and buy-sell structures that keep your Texas business running through retirement, disability, or death.",
    heroPhoto: "/stock/6.jpg",
    intro:
      "Seventy percent of family businesses don't survive the transition to the second generation. A succession plan is what separates the businesses that last from the ones that don't. We build trust-based, buy-sell-backed succession structures that keep your company running through your retirement, your disability, and your eventual passing.",
    benefits: [
      {
        title: "Defined trigger events",
        description:
          "Retirement, death, disability, divorce — we define exactly what happens to your ownership in each case.",
      },
      {
        title: "Trust-based ownership",
        description:
          "Your interest in the business sits inside a trust, so transfer happens automatically — no probate, no public filing, no business interruption.",
      },
      {
        title: "Funded buy-sell agreements",
        description:
          "We coordinate with life-insurance and disability policies so the cash to buy out a departing owner is actually there when it's needed.",
      },
    ],
    details: [
      "Succession planning works best when it's done five to ten years before you actually need it. We start with the structure now, refine it as your business evolves, and review it every two to three years.",
      "We coordinate with your CPA, financial advisor, and existing partners so the plan respects the agreements you've already made.",
    ],
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
