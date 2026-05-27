import type { Section } from "@/data/sections";

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
  sections: Section[];
};
