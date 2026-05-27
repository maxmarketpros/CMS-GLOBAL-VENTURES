export type Faq = {
  question: string;
  answer: string;
};

export const homeFaqs: Faq[] = [
  {
    question: "What is a business trust?",
    answer:
      "A business trust is a legal structure that holds business assets — typically your LLC membership interests, equipment, or real estate — inside a trust. It separates the assets from your personal name, shields them from personal creditors, and gives you a built-in succession plan if you become incapacitated or pass away. In Texas, we usually build business trusts using a combination of the Texas Trust Code and the Texas Business Organizations Code — a flexible structure that works alongside your existing LLC.",
  },
  {
    question: "How is this different from just having a will?",
    answer:
      "A will only takes effect after you pass away — and it has to be probated in court before anything can be distributed. A trust takes effect the moment you sign it, works during your lifetime if you become incapacitated, and transfers assets to your beneficiaries privately and immediately when you die. For most Texas families with real property, retirement accounts, or a business, a trust does what a will alone cannot.",
  },
  {
    question: "Do I need estate planning if I'm not wealthy?",
    answer:
      "Yes. Estate planning isn't about being rich — it's about being prepared. If you have minor children, you need a will to name their guardians. If you own a home, you need a plan to keep it out of probate. If you have an opinion about what should happen if you're incapacitated, you need durable powers of attorney. The right plan for a $200,000 estate looks different from the right plan for a $2 million estate, but both households need one.",
  },
  {
    question: "How long does it take to set up a trust?",
    answer:
      "A typical trust-based estate plan takes three to five weeks from your initial consultation to signed, funded documents. Step one is the consultation. Step two is plan design and document drafting (about two weeks). Step three is the signing meeting. Step four — the one most plans skip — is funding, where we retitle your assets into the trust. We don't consider a plan complete until that's done.",
  },
  {
    question: "Do you only serve Granite Shoals?",
    answer:
      "No. Granite Shoals is our home base, but we serve clients across the entire Highland Lakes and Texas Hill Country region — Marble Falls, Horseshoe Bay, Kingsland, Llano, Burnet, Spicewood, Cottonwood Shores, Lakeway, Bee Cave, Lago Vista, and Austin. If you live anywhere in the area, we can build your plan.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the plan you actually need — a simple will is not the same as a trust-based plan with asset protection layers. We use transparent flat fees, not hourly billing, so you'll know the full cost before you decide to move forward. Every initial consultation is free, and you'll leave it knowing exactly what's recommended and what it costs.",
  },
];

export const allFaqs: Faq[] = [
  ...homeFaqs,
  {
    question: "What is the difference between a revocable and an irrevocable trust?",
    answer:
      "A revocable (living) trust can be changed or undone at any time during your lifetime. You stay in full control, and the assets are still yours for tax and creditor purposes. An irrevocable trust cannot be changed once it's set up — you give up direct control in exchange for stronger protection. Assets in an irrevocable trust are usually outside your taxable estate and beyond the reach of future creditors. Most families start with a revocable trust; some add an irrevocable layer for high-value assets, life insurance, or long-term-care planning.",
  },
  {
    question: "What happens if I die without an estate plan in Texas?",
    answer:
      "If you die without a will or trust in Texas, the state's intestate succession statutes decide who inherits — and the answers are rarely what most families would have chosen, especially in blended families. The estate also has to go through probate, which is public, can take months, and costs the estate money. A simple estate plan avoids all of that.",
  },
  {
    question: "Will my plan work if I move out of Texas?",
    answer:
      "Most of it will. Trusts are generally recognized across all 50 states. Wills usually are too, though some technical requirements vary. If you move, we recommend a brief review with a planner in your new state to confirm everything still works as intended.",
  },
  {
    question: "Do I need to update my plan over time?",
    answer:
      "Yes — every three to five years, and any time something major changes (marriage, divorce, new child or grandchild, sale of a business, big real-estate purchase, move to a different state, death of a named trustee or beneficiary). A good plan is built to flex, but it still needs review.",
  },
];
