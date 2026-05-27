import type { Service } from "./_types";
import { estatePlanning } from "./estate-planning";
import { livingTrusts } from "./living-trusts";
import { irrevocableTrusts } from "./irrevocable-trusts";
import { businessTrusts } from "./business-trusts";
import { assetProtection } from "./asset-protection";
import { wills } from "./wills";
import { probateAssistance } from "./probate-assistance";
import { powerOfAttorney } from "./power-of-attorney";
import { healthcareDirectives } from "./healthcare-directives";
import { businessSuccession } from "./business-succession";

export type { Service, IconName } from "./_types";

export const services: Service[] = [
  estatePlanning,
  livingTrusts,
  irrevocableTrusts,
  businessTrusts,
  assetProtection,
  wills,
  probateAssistance,
  powerOfAttorney,
  healthcareDirectives,
  businessSuccession,
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
