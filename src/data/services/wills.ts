import type { Service } from "./_types";

export const wills: Service = {
  slug: "wills",
  name: "Wills",
  shortName: "Last Will & Testament",
  iconName: "feather",
  oneLiner:
    "A simple, signed document that names your guardians, executors, and beneficiaries.",
  h1: "Last Will & Testament Services in Granite Shoals, TX",
  metaTitle: "Wills in Granite Shoals, TX | CMS Global Ventures",
  metaDescription:
    "Last will & testament preparation in Granite Shoals, TX. Custom Texas wills that name guardians, appoint executors, and protect your family.",
  heroPhoto: "/stock/2.jpg",
  intro:
    "Every adult in Texas needs a will. If you have minor children, a will is the only place you can name their guardian. If you own a home, a will tells the probate court who inherits it. Without one, the state of Texas decides.",
  benefits: [
    {
      title: "Name your children's guardians",
      description:
        "Without a will, a Texas court decides who raises your kids. A will lets you make that choice yourself.",
    },
    {
      title: "Choose your executor",
      description: "You pick the person who handles your estate, not a court appointee.",
    },
    {
      title: "Coordinate with your trust",
      description:
        "If you have a living trust, your will becomes a pour-over backstop — anything not in the trust still ends up there.",
    },
  ],
  details: [
    "We draft self-proving Texas wills under the Texas Estates Code with witness affidavits, so probate (if needed) moves quickly.",
    "For most families, a will alone is not enough. We pair it with a trust, powers of attorney, and advance directives for full coverage.",
  ],
  sections: [
    {
      kind: "intro",
      eyebrow: "Where every plan starts",
      title: "The foundation document — and why it still matters.",
      body: [
        "A will is the document that tells the probate court three things: who is in charge of settling your estate (the executor), who inherits what is left after debts and taxes are paid (the beneficiaries), and — if you have minor children — who you choose to raise them (the guardian). Texas has its own intestate succession statute that fills in those answers if you do not, and the answers it provides are almost never the ones a family would have chosen, especially in blended households or families with stepchildren.",
        "We draft Texas wills that comply with the Texas Estates Code, are self-proving (signed before two witnesses and a notary with a self-proving affidavit attached), and are designed to move through probate efficiently — or, ideally, to pair with a funded trust so probate is never required at all.",
      ],
    },
    {
      kind: "alternating",
      eyebrow: "What a will does — and what it does not",
      title: "Useful, necessary, and not enough on its own.",
      body: [
        "Most families assume a will is the centerpiece of an estate plan. In practice, a will is the safety net beneath the centerpiece. It is what the probate court reads when you pass — it does not do anything while you are still alive. It does not avoid probate; it directs probate. It does not protect assets from creditors during your lifetime. It does not name a financial decision-maker if you become incapacitated. It does not handle medical decisions, end-of-life wishes, or HIPAA authorization.",
        "What a will does, and does well, is the things only a will can do. It is the only document where you can validly name a guardian for minor children. It is the document that controls assets you never placed in a trust. It is the document the executor follows. We draft yours to be unambiguous, signed correctly, and easy for a Texas probate court to admit — but we almost always recommend pairing it with a living trust and powers of attorney so the will is genuinely the safety net rather than the whole plan.",
      ],
      image: "/stock/20.jpg",
      imageAlt: "A signed legal document and pen on a desk",
      imageSide: "right",
      bullets: [
        {
          title: "Names a guardian for minor children",
          body: "The only legally effective place to do this.",
        },
        {
          title: "Names your executor",
          body: "And gives them the legal authority to act.",
        },
        {
          title: "Directs assets not in your trust",
          body: "Works as the pour-over catch-all for stray accounts and property.",
        },
        {
          title: "Does not avoid probate",
          body: "A will requires probate. Only a funded trust avoids it.",
        },
      ],
    },
    {
      kind: "checklist",
      eyebrow: "Decisions you will make",
      title: "The names you have to choose before we draft.",
      subtitle:
        "Drafting a will is mostly about decisions, not paperwork. These are the choices we will walk through together — and the ones you should think about before our first meeting.",
      columns: 2,
      items: [
        {
          title: "Primary executor",
          body: "The person who carries out the will. Trustworthy, organized, and willing to do real work.",
        },
        {
          title: "Backup executor",
          body: "If your first choice cannot serve when the time comes.",
        },
        {
          title: "Guardian for minor children",
          body: "Two names — primary and alternate. Different from financial trustee.",
        },
        {
          title: "Trustee for inherited assets",
          body: "Often a different person than the guardian. Handles money for the kids until they reach the age you set.",
        },
        {
          title: "Distribution age for children",
          body: "Outright at 18, staged at 25/30/35, or held in lifetime trust — your call.",
        },
        {
          title: "Specific bequests",
          body: "Particular items, dollar amounts, or charitable gifts that should go to a particular person or cause.",
        },
        {
          title: "Residuary beneficiaries",
          body: "Who inherits everything else after the specific gifts are made.",
        },
        {
          title: "Contingent beneficiaries",
          body: "What happens if a primary beneficiary predeceases you or disclaims.",
        },
      ],
    },
    {
      kind: "cardGrid",
      eyebrow: "Types of wills",
      title: "Four variants we draft, depending on the situation.",
      subtitle:
        "Not every will looks the same. The right type depends on whether you have a trust, what kind of assets you own, and how complicated the distribution needs to be.",
      columns: 4,
      items: [
        {
          icon: "feather",
          title: "Simple will",
          body: "Names executor, guardian, and beneficiaries. Distributes outright. Fits younger families without significant assets — usually paired with future trust-based planning.",
        },
        {
          icon: "vault",
          title: "Pour-over will",
          body: "Used in trust-based plans. Catches anything not titled in the trust and directs it into the trust at death. The will most of our clients sign.",
        },
        {
          icon: "scroll",
          title: "Testamentary trust will",
          body: "Creates a trust at death rather than during life. Used when the goal is to protect inheritance for minor or young-adult beneficiaries without a funded living trust.",
        },
        {
          icon: "balance",
          title: "Holographic will",
          body: "Handwritten and unwitnessed. Texas recognizes them, but they are difficult to admit to probate and frequently challenged. We do not draft them — we just probate them when families bring us one.",
        },
      ],
    },
    {
      kind: "deep",
      eyebrow: "Texas-specific procedure",
      title: "Self-proving and independent administration.",
      body: [
        "Texas has two procedural advantages built into its probate code that we use on every will we draft. The first is the self-proving affidavit. Under Section 251.104 of the Texas Estates Code, a will signed by the testator and witnessed by two witnesses can include a notarized affidavit at the end stating that the testator was of sound mind, signed voluntarily, and intended the document as their will. With that affidavit attached, the probate court can admit the will without recalling the witnesses to testify — which matters a great deal when witnesses are scattered, retired, or deceased twenty years after the will was signed.",
        "The second advantage is independent administration. When a will names an independent executor and waives bond — which every will we draft does, by default — the court qualifies the executor and then steps back. The executor inventories the estate, pays the debts, distributes the assets, and closes the estate without ongoing court supervision. Compared to dependent administration (which requires court approval for every significant action), independent administration cuts months off the process and reduces probate costs substantially. Texas is one of the more efficient probate jurisdictions in the country because of these two features, and we make sure every will we draft uses both.",
        "Even with both advantages, probate still takes four to nine months for a typical estate. That is faster than most states but slower than what a funded living trust achieves, which is zero. We draft your will to make probate as smooth as possible — but the goal in most cases is still to avoid it entirely through a properly funded trust, with the will quietly waiting as backup.",
      ],
    },
    {
      kind: "faq",
      eyebrow: "Will FAQ",
      title: "Things people ask before signing a will in Texas.",
      items: [
        {
          q: "How often should I update my will?",
          a: "Review every three to five years, and rewrite anytime there is a major life change — marriage, divorce, birth, death of a named executor or beneficiary, sale of a business, large real-estate transaction, or move to a different state. Minor changes can be made by codicil. Major changes are usually easier as a full rewrite.",
        },
        {
          q: "Where should I keep the original signed will?",
          a: "The original needs to be findable. We give every client a fireproof binder for home use, plus a digital backup, and we keep a notation in our records about who knows the binder exists. Some clients also use a safe-deposit box; if you do, name the executor as an authorized signer or the box becomes inaccessible at exactly the moment it matters.",
        },
        {
          q: "Can I disinherit a spouse or child in Texas?",
          a: "A spouse — partially. Texas community property rules give your spouse an outright interest in half of the community property regardless of what your will says. You can direct your half however you choose. You can also disinherit an adult child entirely with clear language in the will; we draft that language carefully if it is what you want, because it is one of the more common grounds for a will contest.",
        },
        {
          q: "What is a no-contest clause and should my will have one?",
          a: "A no-contest (in terrorem) clause says that any beneficiary who challenges the will forfeits their bequest. Texas enforces these clauses with limits — a challenge brought in good faith and with probable cause does not trigger forfeiture. We include them when family dynamics suggest they will deter frivolous challenges and skip them when they would create more problems than they solve.",
        },
        {
          q: "Will my Texas will work if I move to another state?",
          a: "Probably yes. Wills validly executed in Texas are generally recognized everywhere in the United States. The execution requirements (two witnesses and a notary for a self-proving will) meet the standards of every other state. We still recommend a brief review with a planner in the new state to catch any state-specific issues — community property versus common law, in particular, can shift how the will operates.",
        },
      ],
    },
  ],
};
