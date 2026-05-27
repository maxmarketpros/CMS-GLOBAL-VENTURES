import type { AnyIconName } from "@/lib/icons";

type IconName = AnyIconName;

export type Section =
  | {
      kind: "intro";
      eyebrow: string;
      title: string;
      body: string[];
      align?: "left" | "center";
    }
  | {
      kind: "alternating";
      eyebrow: string;
      title: string;
      body: string[];
      image: string;
      imageAlt: string;
      imageSide: "left" | "right";
      bullets?: { title: string; body?: string }[];
    }
  | {
      kind: "cardGrid";
      eyebrow: string;
      title: string;
      subtitle?: string;
      columns?: 2 | 3 | 4;
      items: { icon?: IconName; title: string; body: string }[];
    }
  | {
      kind: "checklist";
      eyebrow: string;
      title: string;
      subtitle?: string;
      columns?: 1 | 2;
      items: { title: string; body?: string }[];
    }
  | {
      kind: "comparison";
      eyebrow: string;
      title: string;
      subtitle?: string;
      columns: { heading: string; tagline?: string; bullets: string[] }[];
    }
  | {
      kind: "stats";
      eyebrow: string;
      title: string;
      subtitle?: string;
      items: { value: string; label: string; sublabel?: string }[];
    }
  | {
      kind: "deep";
      eyebrow: string;
      title: string;
      body: string[];
    }
  | {
      kind: "faq";
      eyebrow: string;
      title: string;
      items: { q: string; a: string }[];
    }
  | {
      kind: "photo";
      image: string;
      alt: string;
      caption?: string;
      aspect?: "wide" | "square" | "tall";
    }
  | {
      kind: "quote";
      body: string;
      attribution?: string;
    }
  | {
      kind: "mapEmbed";
      query: string;
      lat: number;
      lng: number;
      zoom?: number;
      caption?: string;
      address?: string;
    };
