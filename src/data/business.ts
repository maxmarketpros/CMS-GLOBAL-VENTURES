export const business = {
  name: "CMS Global Ventures",
  legalName: "CMS Global Ventures",
  tagline: "Generational protection, built in Texas Hill Country.",
  shortDescription:
    "Trust formation, estate planning, and asset protection services for families and business owners in Granite Shoals, TX and the Highland Lakes.",
  phone: "(512) 234-2864",
  phoneHref: "tel:+15122342864",
  email: "info@cmshomeimprovement.pro",
  emailHref: "mailto:info@cmshomeimprovement.pro",
  address: {
    street: "",
    city: "Granite Shoals",
    state: "TX",
    zip: "78654",
    country: "US",
  },
  geo: {
    lat: 30.5786,
    lng: -98.3553,
  },
  hours: {
    "Mon–Fri": "9:00 AM – 5:00 PM",
    "Sat": "By appointment",
    "Sun": "Closed",
  },
  serviceAreaName: "Granite Shoals & The Texas Hill Country",
  primaryCta: {
    label: "Schedule Free Consultation",
    href: "/free-consultation/",
  },
  stats: [
    { value: "500+", label: "Trusts established" },
    { value: "100%", label: "Client satisfaction" },
    { value: "15+", label: "Years serving Texas" },
  ],
  social: {} as Record<string, string>,
  url: "https://cmsglobalventures.com",
  copyrightYear: 2026,
  disclaimer:
    "CMS Global Ventures provides trust formation, estate planning, and asset protection services. We are not a law firm and do not provide legal advice. For legal counsel on your specific situation, please consult a licensed Texas attorney.",
};

export type Business = typeof business;
