import { business } from "@/data/business";

type Props = { data: object | object[] };

export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: business.name,
    image: `${business.url}/logo.png`,
    "@id": `${business.url}/#legalservice`,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: [
      "Granite Shoals",
      "Marble Falls",
      "Horseshoe Bay",
      "Kingsland",
      "Llano",
      "Burnet",
      "Spicewood",
      "Cottonwood Shores",
      "Lakeway",
      "Bee Cave",
      "Lago Vista",
      "Texas Hill Country",
    ].map((c) => ({ "@type": "City", name: c })),
    priceRange: "$$",
    description: business.shortDescription,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(name: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: { "@id": `${business.url}/#legalservice` },
    areaServed: { "@type": "State", name: "Texas" },
    url: `${business.url}/services/${slug}/`,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function faqPageSchema(items: { q: string; a: string }[]) {
  return faqSchema(items.map((i) => ({ question: i.q, answer: i.a })));
}

export function areaLocalBusinessSchema(args: {
  city: string;
  county: string;
  lat: number;
  lng: number;
  slug: string;
  description: string;
  zip?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${business.name} — ${args.city}, TX`,
    image: `${business.url}/logo.png`,
    "@id": `${business.url}/areas-served/${args.slug}/#legalservice`,
    url: `${business.url}/areas-served/${args.slug}/`,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: args.lat,
      longitude: args.lng,
    },
    areaServed: {
      "@type": "City",
      name: args.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: args.county,
      },
    },
    priceRange: "$$",
    description: args.description,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };
}

export function placeSchema(args: {
  city: string;
  county: string;
  lat: number;
  lng: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${args.city}, TX`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: args.lat,
      longitude: args.lng,
    },
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: args.county,
    },
  };
}
