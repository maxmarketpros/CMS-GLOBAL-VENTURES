import type { Area } from "./_types";
import { marbleFalls } from "./marble-falls";
import { horseshoeBay } from "./horseshoe-bay";
import { kingsland } from "./kingsland";
import { llano } from "./llano";
import { burnet } from "./burnet";
import { spicewood } from "./spicewood";
import { cottonwoodShores } from "./cottonwood-shores";
import { lakeway } from "./lakeway";
import { beeCave } from "./bee-cave";
import { lagoVista } from "./lago-vista";

export type { Area } from "./_types";

export const areas: Area[] = [
  marbleFalls,
  horseshoeBay,
  kingsland,
  llano,
  burnet,
  spicewood,
  cottonwoodShores,
  lakeway,
  beeCave,
  lagoVista,
];

export const getArea = (slug: string): Area | undefined =>
  areas.find((a) => a.slug === slug);
