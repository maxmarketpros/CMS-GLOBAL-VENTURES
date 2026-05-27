import type { Service } from "./_types";

export const businessTrusts: Service = {
  slug: "business-trusts",
  name: "Business Trusts",
  shortName: "Business Trusts",
  iconName: "briefcase",
  oneLiner:
    "Trust-based structures that protect business owners — and their businesses.",
  h1: "Business Trust Formation in Granite Shoals, TX",
  metaTitle: "Business Trusts in Granite Shoals, TX",
  metaDescription:
    "Business trust formation in Granite Shoals, TX. Custom trust structures that hold LLC interests, shield business assets, and plan succession for Texas owners.",
  heroPhoto: "/stock/3.jpg",
  intro:
    "A business trust separates what you own from what you control. Your LLC, your equipment, your real estate — all of it sits inside a trust structure that protects against personal liability, simplifies succession, and keeps your ownership out of public records.",
  benefits: [
    {
      title: "Liability separation",
      description:
        "A creditor going after you personally cannot touch the business assets inside your trust — and vice versa.",
    },
    {
      title: "Privacy",
      description:
        "Business ownership inside a trust stays off public records. Your name does not appear in Secretary of State filings.",
    },
    {
      title: "Built-in succession",
      description:
        "When you pass or step away, the trust transitions ownership instantly — no probate, no public filing, no interruption.",
    },
  ],
  details: [
    "Texas does not have a separate Business Trust Act, but it has something better: a flexible Trust Code combined with the Texas Business Organizations Code.",
    "We coordinate with your CPA and existing operating agreements so the structure actually fits how your business runs.",
  ],
  sections: [
    {
      kind: "intro",
      eyebrow: "What a business trust actually is",
      title: "The structure that owns the structure.",
      body: [
        "Business trust is a term that gets used loosely. The way we use it, and the way Texas law treats it, is straightforward: a trust that owns a business interest. In practice that almost always means a trust holding the membership interests of an LLC, the stock of a closely-held corporation, or the units of a limited partnership. Your operating company stays exactly the same. What changes is who owns the operating company on paper — a trust, instead of you personally.",
        "The benefits of that change are quiet but real. Your name disappears from the Secretary of State filing. Your business interest disappears from your probate estate. A creditor with a personal judgment against you can attach the trust's distributions but cannot reach into the LLC and force a sale of its assets. And when you pass or step away, the trust continues operating exactly as it did the day before, under a successor trustee you named in advance.",
      ],
    },
    {
      kind: "alternating",
      eyebrow: "The standard architecture",
      title: "An LLC for liability. A trust on top for everything else.",
      body: [
        "We almost never recommend a trust owning operating assets directly. Trusts are designed for holding and transferring, not for running a business — they do not have the liability protection of an entity, and the trustee's duties to beneficiaries can conflict with the day-to-day decisions an owner needs to make. The structure that actually works for Texas business owners is layered: your operating business sits inside an LLC (or a series of LLCs), and that LLC's membership interest is owned by your trust.",
        "This gives you the best of both. The LLC supplies the liability shield, the corporate formalities, and the tax flexibility (single-member, pass-through, S-corp election, or whatever the situation calls for). The trust supplies privacy, succession, and integration with your personal estate plan. Together they form a structure that handles both the operating risk and the ownership question at the same time.",
      ],
      image: "/stock/10.jpg",
      imageAlt: "A business team reviewing financial documents",
      imageSide: "left",
      bullets: [
        {
          title: "Operating LLC",
          body: "Runs the business, holds operating accounts, enters contracts.",
        },
        {
          title: "Trust owns the LLC interest",
          body: "Your trust is the member, not you personally.",
        },
        {
          title: "Trustee acts on behalf of trust",
          body: "Can be you while you are running things, your successor after.",
        },
        {
          title: "Operating agreement coordinates",
          body: "We update yours so the trust ownership is recognized cleanly.",
        },
      ],
    },
    {
      kind: "cardGrid",
      eyebrow: "Use cases we see most",
      title: "The professions where this structure earns its keep.",
      subtitle:
        "Hill Country business owners come from a wide mix of industries. Some industries see disproportionate value from the trust-owned-LLC structure — these are the ones we encounter most.",
      columns: 2,
      items: [
        {
          icon: "briefcase",
          title: "General contractors and tradespeople",
          body: "Construction, electrical, plumbing, HVAC. High-liability work where personal-injury and workmanship claims are routine. Separating the operating company from the owner's name is meaningful protection.",
        },
        {
          icon: "vault",
          title: "Real-estate investors and landlords",
          body: "Each property in its own LLC, all LLCs owned by a single trust. The properties stay liability-separated, the ownership stays private, and succession happens in one document.",
        },
        {
          icon: "heart",
          title: "Doctors, dentists, and licensed professionals",
          body: "Practice ownership held through a trust protects personal assets if a non-malpractice claim attaches to the professional. Often paired with an irrevocable layer for higher-net-worth situations.",
        },
        {
          icon: "succession",
          title: "Ranch operators and ag families",
          body: "Land in an LLC for liability and lease management, the LLC owned by a trust for multi-generational continuity without breaking up the operation.",
        },
        {
          icon: "shield",
          title: "Restaurant and retail owners",
          body: "Public-facing businesses with slip-and-fall and employment risk. Trust ownership keeps the family's other assets and other businesses out of the firing line.",
        },
        {
          icon: "scroll",
          title: "Consultants and family offices",
          body: "Professional services where the brand and the owner are functionally the same — and where succession means handing off relationships, not just a building.",
        },
      ],
    },
    {
      kind: "deep",
      eyebrow: "The Texas legal landscape",
      title: "Why this works particularly well in Texas.",
      body: [
        "Texas does not have a separate Business Trust Act the way some states do. What it has instead is the Texas Business Organizations Code combined with the Texas Trust Code, and the combination is more flexible than a dedicated statute would be. The BOC, in effect since 2010, governs LLCs, partnerships, corporations, and series LLCs. The Trust Code (Texas Property Code, Title 9, Subtitle B) governs how trusts are formed, administered, and enforced. The two interact cleanly — an LLC's membership interest is intangible personal property, and trusts can hold intangible personal property without any special authorization.",
        "Texas also offers the Series LLC, which deserves mention separately. A Series LLC is a parent LLC that can spin off internal series, each of which has its own assets, members, and liability shield. We use Series LLCs when a client has multiple rental properties, multiple vehicles, or multiple revenue lines that benefit from being walled off from each other. The series cost less to set up and maintain than separate LLCs, and a single trust at the top can own the whole structure.",
        "On the tax side, the trust ownership is invisible during your lifetime if the trust is structured as a grantor trust. The IRS looks through the trust to you, so the LLC's K-1 flows to your personal return exactly as it did before. After your death, the trust either continues as a non-grantor trust (filing its own returns) or distributes the LLC interests to your beneficiaries, depending on the terms. We model both scenarios in the design phase and choose what fits.",
      ],
    },
    {
      kind: "comparison",
      eyebrow: "Two paths owners consider",
      title: "Trust-owned LLC vs. a holding-company arrangement.",
      subtitle:
        "Both can work. The choice depends on what you need privacy, control, and succession to actually do.",
      columns: [
        {
          heading: "Trust owns the operating LLC",
          tagline: "Our default recommendation",
          bullets: [
            "Trustee structure provides ownership-level continuity",
            "Ownership stays off public Secretary of State filings",
            "Integrates directly with personal estate plan",
            "Succession happens at the trust level — no entity restructuring",
            "Simple to add or remove LLCs over time",
            "Annual filing burden stays at the LLC level only",
          ],
        },
        {
          heading: "Holding LLC owns operating LLCs",
          tagline: "Right for some multi-entity setups",
          bullets: [
            "Stronger choice when multiple owners are involved",
            "Better for raising outside capital",
            "Owner still visible at the holding-LLC level",
            "Succession requires transferring holding-LLC interests",
            "Cleaner for businesses planning to sell or merge",
            "Often combined with a trust above the holding LLC",
          ],
        },
      ],
    },
    {
      kind: "faq",
      eyebrow: "Common questions",
      title: "What business owners want to know before we structure.",
      items: [
        {
          q: "Will moving my LLC into a trust trigger a tax event?",
          a: "Generally no. Transferring LLC interests into a revocable grantor trust is a non-event for tax purposes — the IRS treats the trust as you, so no gain or loss is recognized. Transfers into an irrevocable trust can be treated as gifts and may use part of your federal gift-tax exemption, which is something we model in advance.",
        },
        {
          q: "How does my operating agreement need to change?",
          a: "We coordinate with whoever drafted your operating agreement (or draft an amendment ourselves) to confirm the trust is recognized as a member, that the trustee can act on the member's behalf, and that any transfer restrictions, drag-along, or right-of-first-refusal provisions are updated to reference the trust correctly. Most amendments are short.",
        },
        {
          q: "What about banks, vendors, and contracts that have my personal name on them?",
          a: "Existing contracts can usually stay as they are — they are between the LLC and the counterparty, and the LLC has not changed. The trust ownership is at a level above. For loans personally guaranteed by you, the guarantee follows you (not the LLC) and is not affected. New contracts going forward use the LLC's name as always.",
        },
        {
          q: "What happens to the business if I become incapacitated?",
          a: "Your successor trustee — named in advance — steps into your role as decision-maker on the trust's behalf. Because the trust owns the LLC, that means the successor trustee can act as the member and either run the LLC or appoint someone who can. No court involvement is required, which is the entire point of the structure.",
        },
        {
          q: "Does this work for a single-member LLC?",
          a: "Yes, and it is one of the most common ways we use this structure. A single-member LLC owned by a revocable grantor trust is still disregarded for federal tax purposes (taxed on Schedule C or as an S-corp if elected). The trust adds the succession and privacy layer without changing the tax outcome.",
        },
      ],
    },
  ],
};
