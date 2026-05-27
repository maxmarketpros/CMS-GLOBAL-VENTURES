import type { Section as SectionData } from "@/data/sections";
import { Intro } from "./Intro";
import { Alternating } from "./Alternating";
import { CardGrid } from "./CardGrid";
import { Checklist } from "./Checklist";
import { Comparison } from "./Comparison";
import { Stats } from "./Stats";
import { Deep } from "./Deep";
import { Faq } from "./Faq";
import { Photo } from "./Photo";
import { Quote } from "./Quote";
import { MapEmbed } from "./MapEmbed";

type Props = {
  sections: SectionData[];
};

export function Sections({ sections }: Props) {
  return (
    <>
      {sections.map((section, i) => {
        switch (section.kind) {
          case "intro":
            return <Intro key={i} {...section} />;
          case "alternating":
            return <Alternating key={i} {...section} />;
          case "cardGrid":
            return <CardGrid key={i} {...section} />;
          case "checklist":
            return <Checklist key={i} {...section} />;
          case "comparison":
            return <Comparison key={i} {...section} />;
          case "stats":
            return <Stats key={i} {...section} />;
          case "deep":
            return <Deep key={i} {...section} />;
          case "faq":
            return <Faq key={i} {...section} />;
          case "photo":
            return <Photo key={i} {...section} />;
          case "quote":
            return <Quote key={i} {...section} />;
          case "mapEmbed":
            return <MapEmbed key={i} {...section} />;
        }
      })}
    </>
  );
}
