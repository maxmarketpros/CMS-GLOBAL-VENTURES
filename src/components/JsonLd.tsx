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
