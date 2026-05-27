import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const PUBLIC = resolve("public");

const INK = "#0A0A0B";
const GOLD = "#C5A572";
const GOLD_DEEP = "#B69F5E";
const BONE_MUTED = "#A1A1AA";

mkdirSync(PUBLIC, { recursive: true });

function squareMarkSvg(size) {
  const stroke = Math.max(1, Math.round(size / 64));
  const inset = Math.round(size * 0.12);
  const fontSize = Math.round(size * 0.46);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" fill="${INK}"/>
    <rect x="${inset / 2}" y="${inset / 2}" width="${size - inset}" height="${size - inset}" fill="none" stroke="${GOLD}" stroke-width="${stroke}" stroke-opacity="0.55"/>
    <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
      font-family="Georgia, 'Cormorant Garamond', serif"
      font-weight="600" font-size="${fontSize}" fill="${GOLD}"
      letter-spacing="${size * 0.02}">CMS</text>
  </svg>`;
}

async function makeIcon(size, outName) {
  const svg = Buffer.from(squareMarkSvg(size));
  const out = resolve(PUBLIC, outName);
  await sharp(svg).png({ compressionLevel: 9 }).toFile(out);
  console.log("wrote", out);
}

async function makeFavicon() {
  // 32x32 PNG that browsers will accept at /favicon.ico path (Chrome/Edge/Firefox treat .ico extension loosely)
  const svg = Buffer.from(squareMarkSvg(64));
  const buf = await sharp(svg).resize(32, 32).png({ compressionLevel: 9 }).toBuffer();
  // Write as both favicon.ico (raw PNG content — modern browsers accept it) and favicon.png
  const fs = await import("node:fs/promises");
  await fs.writeFile(resolve(PUBLIC, "favicon.ico"), buf);
  await fs.writeFile(resolve(PUBLIC, "favicon.png"), buf);
  console.log("wrote favicon.ico + favicon.png");
}

async function makeOgImage() {
  const W = 1200;
  const H = 630;
  // Composite: dark gradient background + centered wordmark + gold hairline + tagline
  const bg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0A0A0B"/>
        <stop offset="1" stop-color="#17171B"/>
      </linearGradient>
      <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${GOLD_DEEP}"/>
        <stop offset="1" stop-color="${GOLD}"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    <rect x="0" y="0" width="${W}" height="6" fill="url(#gold)"/>
    <rect x="0" y="${H - 6}" width="${W}" height="6" fill="url(#gold)"/>
    <text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle"
      font-family="Georgia, 'Cormorant Garamond', serif"
      font-weight="500" font-size="80" fill="#E5E5E7" letter-spacing="2">
      Business Trust &amp; Estate Planning
    </text>
    <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle"
      font-family="Georgia, 'Cormorant Garamond', serif"
      font-weight="500" font-size="64" fill="${GOLD}" letter-spacing="3">
      Granite Shoals, TX
    </text>
    <line x1="${W / 2 - 60}" y1="71%" x2="${W / 2 + 60}" y2="71%" stroke="${GOLD}" stroke-width="2"/>
    <text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle"
      font-family="-apple-system, 'Inter', Arial, sans-serif"
      font-weight="500" font-size="26" fill="${BONE_MUTED}" letter-spacing="6">
      CMS GLOBAL VENTURES
    </text>
  </svg>`;

  const out = resolve(PUBLIC, "og-image.jpg");
  await sharp(Buffer.from(bg)).jpeg({ quality: 88, mozjpeg: true }).toFile(out);
  console.log("wrote", out);
}

await Promise.all([
  makeIcon(192, "icon-192.png"),
  makeIcon(512, "icon-512.png"),
  makeIcon(180, "apple-icon.png"),
  makeFavicon(),
  makeOgImage(),
]);
console.log("done");
