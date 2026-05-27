import type { IconName } from "@/data/services";

const PATHS: Record<IconName | "phone" | "mail" | "check" | "arrow-right" | "menu" | "x" | "chevron-down" | "plus" | "minus" | "map" | "clock" | "calendar" | "users" | "sparkle", string> = {
  scroll:
    "M5 7c0-1.1.9-2 2-2h11v12c0 1.1-.9 2-2 2H7l-2-2V7Zm0 0a2 2 0 1 0 0 4h2",
  vault:
    "M4 5h16v14H4V5Zm5 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-3v-1m0 8v-1M9 12H8m8 0h-1",
  lock:
    "M7 11V8a5 5 0 1 1 10 0v3m-12 0h14v9H5v-9Zm7 4v2",
  briefcase:
    "M3 8h18v12H3V8Zm6 0V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",
  shield:
    "M12 3 4 6v6c0 4.4 3.4 8.5 8 9 4.6-.5 8-4.6 8-9V6l-8-3Z",
  feather:
    "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76ZM16 8 2 22m12-14H8",
  balance:
    "M12 3v18M3 6h18M7 6l-4 8a4 4 0 0 0 8 0L7 6Zm10 0-4 8a4 4 0 0 0 8 0l-4-8Z",
  signature:
    "M3 17c2-4 5-7 8-7s4 4 7 4 4-2 4-2M3 21h18",
  heart:
    "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z",
  succession:
    "M7 17l5-5 4 4 5-5M3 21h18M3 3v18",
  phone:
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z",
  mail:
    "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Zm0 0 8 7 8-7",
  check: "m5 12 5 5L20 7",
  "arrow-right": "M5 12h14m-7-7 7 7-7 7",
  menu: "M3 6h18M3 12h18M3 18h18",
  x: "M6 6l12 12M6 18 18 6",
  "chevron-down": "m6 9 6 6 6-6",
  plus: "M12 5v14m-7-7h14",
  minus: "M5 12h14",
  map: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14",
  clock: "M12 7v5l3 3M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  calendar:
    "M3 7h18v13H3V7Zm0 0V5c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v2M8 3v4M16 3v4",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M15 3.13a4 4 0 0 1 0 7.75",
  sparkle: "M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2 2-6Z",
};

export type AnyIconName = keyof typeof PATHS;

export const iconPath = (name: AnyIconName): string => PATHS[name];
