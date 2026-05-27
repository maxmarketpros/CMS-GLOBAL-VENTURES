import type { Section } from "@/data/sections";

export type Area = {
  slug: string;
  city: string;
  county: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  localHook: string;
  driveTime: string;
  population?: string;
  landmarks: string[];
  heroPhoto: string;
  bodyPhoto: string;
  lat: number;
  lng: number;
  zip?: string;
  nearby: string[];
  sections: Section[];
};
