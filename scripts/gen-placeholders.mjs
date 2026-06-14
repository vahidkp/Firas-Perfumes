// Generates refined, editorial SVG placeholders matching the reference layout in the
// FIRAS palette. Bottles sit on soft ivory like real catalogue shots. Replace with
// retouched product photos / generated art (see IMAGE_PROMPTS.md).
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const ROOT = join(process.cwd(), 'public', 'images');

const GOLD = '#B8860B';
const GOLD_LIGHT = '#D4AF37';
const ONYX = '#1A1A1A';
const GREEN = '#1F3D2B';
const TEAL = '#8FCFC8';
const IVORY = '#F7F2E8';
const SAND = '#EFE6D6';

/** A refined perfume bottle illustration centered at (cx, baseY), scaled by s. */
function bottle(cx, baseY, s, body, body2, cap = GOLD) {
  const w = 120 * s;
  const h = 175 * s;
  const x = cx - w / 2;
  const y = baseY - h;
  const id = `b${Math.round(cx)}${Math.round(baseY)}`;
  return `
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${body}"/>
      <stop offset="1" stop-color="${body2}"/>
    </linearGradient>
    <linearGradient id="${id}c" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${GOLD_LIGHT}"/>
      <stop offset="1" stop-color="${cap}"/>
    </linearGradient>
  </defs>
  <ellipse cx="${cx}" cy="${baseY + 6 * s}" rx="${56 * s}" ry="${9 * s}" fill="#000" opacity="0.12"/>
  <rect x="${cx - 16 * s}" y="${y - 30 * s}" width="${32 * s}" height="${34 * s}" rx="${5 * s}" fill="url(#${id}c)"/>
  <rect x="${cx - 9 * s}" y="${y - 6 * s}" width="${18 * s}" height="${12 * s}" fill="${cap}" opacity="0.85"/>
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${16 * s}" fill="url(#${id})"/>
  <path d="M${x + 10 * s} ${y + h * 0.32} Q${cx} ${y + h * 0.16} ${x + w - 10 * s} ${y + h * 0.32}"
        stroke="${GOLD_LIGHT}" stroke-width="${1.4 * s}" fill="none" opacity="0.6"/>
  <path d="M${x + 10 * s} ${y + h * 0.55} Q${cx} ${y + h * 0.40} ${x + w - 10 * s} ${y + h * 0.55}"
        stroke="${GOLD_LIGHT}" stroke-width="${1.2 * s}" fill="none" opacity="0.4"/>
  <rect x="${x + 9 * s}" y="${y + 9 * s}" width="${14 * s}" height="${h - 24 * s}" rx="${7 * s}" fill="#fff" opacity="0.12"/>`;
}

function svg({ w, h, bg, bg2, label, sub = '', text = ONYX, bottleSpec, vignette = false }) {
  const cx = w / 2;
  const art = bottleSpec
    ? bottle(cx, h * (bottleSpec.baseY ?? 0.66), bottleSpec.s ?? Math.min(w, h) / 260, bottleSpec.body, bottleSpec.body2, bottleSpec.cap)
    : '';
  const vig = vignette
    ? `<rect width="${w}" height="${h}" fill="url(#vg)"/>`
    : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0.6" y2="1">
      <stop offset="0" stop-color="${bg}"/>
      <stop offset="1" stop-color="${bg2}"/>
    </linearGradient>
    <radialGradient id="vg" cx="0.5" cy="0.45" r="0.75">
      <stop offset="0.55" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.28"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  ${art}
  ${vig}
  ${label ? `<text x="${cx}" y="${h * 0.9}" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.round(Math.min(w, h) * 0.05)}" letter-spacing="4" fill="${text}" opacity="0.85">${label}</text>` : ''}
  ${sub ? `<text x="${cx}" y="${h * 0.95}" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.round(Math.min(w, h) * 0.022)}" letter-spacing="6" fill="${text}" opacity="0.55">${sub}</text>` : ''}
</svg>`;
}

const MEN = { body: '#2a2a2a', body2: ONYX, cap: GOLD };
const WOMEN = { body: '#2c5a44', body2: GREEN, cap: GOLD };
const MISK = { body: '#caa24a', body2: '#8a6a1e', cap: GOLD };

const assets = [
  // hero — soft, editorial, light silk
  ['hero/hero.svg', { w: 1920, h: 1000, bg: SAND, bg2: '#E2D4BE', label: '', bottleSpec: { ...MEN, body: '#3a2f1e', body2: '#241a0a', baseY: 0.62, s: 3.0 } }],

  // products — bottles on soft ivory (clean catalogue look)
  ['products/men-bottle.svg', { w: 800, h: 1000, bg: '#fbf8f1', bg2: IVORY, bottleSpec: { ...MEN, baseY: 0.74, s: 2.7 } }],
  ['products/men-box.svg', { w: 800, h: 1000, bg: ONYX, bg2: '#2b2b2b', label: 'GIFT BOX', text: IVORY }],
  ['products/men-lifestyle.svg', { w: 800, h: 1000, bg: '#241a0a', bg2: ONYX, label: '', vignette: true, bottleSpec: { ...MEN, baseY: 0.72, s: 2.6 } }],
  ['products/women-bottle.svg', { w: 800, h: 1000, bg: '#fbf8f1', bg2: IVORY, bottleSpec: { ...WOMEN, baseY: 0.74, s: 2.7 } }],
  ['products/women-box.svg', { w: 800, h: 1000, bg: TEAL, bg2: '#6bb8b0', label: 'GIFT BOX', text: ONYX }],
  ['products/women-lifestyle.svg', { w: 800, h: 1000, bg: '#3a5e50', bg2: GREEN, label: '', vignette: true, bottleSpec: { ...WOMEN, baseY: 0.72, s: 2.6 } }],
  ['products/misk-bottle.svg', { w: 800, h: 1000, bg: '#fbf8f1', bg2: IVORY, bottleSpec: { ...MISK, baseY: 0.76, s: 2.1 } }],
  ['products/misk-box.svg', { w: 800, h: 1000, bg: '#2a1f0e', bg2: ONYX, label: 'ATTAR', text: GOLD_LIGHT }],

  // For Him / For Her panels
  ['sections/for-him.svg', { w: 900, h: 1100, bg: '#23231f', bg2: ONYX, label: '', vignette: true, bottleSpec: { ...MEN, baseY: 0.66, s: 3.1 } }],
  ['sections/for-her.svg', { w: 900, h: 1100, bg: '#bfe0db', bg2: TEAL, label: '', bottleSpec: { ...WOMEN, baseY: 0.66, s: 3.1 } }],

  // Discover arched cards
  ['sections/discover-men.svg', { w: 800, h: 1000, bg: '#23231f', bg2: ONYX, label: '', vignette: true, bottleSpec: { ...MEN, baseY: 0.7, s: 2.6 } }],
  ['sections/discover-women.svg', { w: 800, h: 1000, bg: '#bfe0db', bg2: TEAL, label: '', bottleSpec: { ...WOMEN, baseY: 0.7, s: 2.6 } }],
  ['sections/discover-misk.svg', { w: 800, h: 1000, bg: '#e7d9bf', bg2: SAND, label: '', bottleSpec: { ...MISK, baseY: 0.72, s: 2.2 } }],

  // brand story + lifestyle
  ['sections/brand-story.svg', { w: 1000, h: 760, bg: '#efe6d6', bg2: '#e2d4be', label: '', bottleSpec: { ...MISK, baseY: 0.74, s: 2.4 } }],
  ['sections/lifestyle.svg', { w: 1920, h: 840, bg: '#caa24a', bg2: '#7a5a1e', label: '', vignette: true }],

  // OG card
  ['brand/og-default.svg', { w: 1200, h: 630, bg: SAND, bg2: '#E2D4BE', label: 'FIRAS PERFUME', sub: 'PREMIUM INSPIRED FRAGRANCES', bottleSpec: { ...MEN, body: '#3a2f1e', body2: '#241a0a', baseY: 0.7, s: 1.9 } }],
];

// scent-note circular tiles — soft tonal washes
const notes = {
  oud: ['#5a4423', '#3a2a12'],
  musk: ['#cdbfa6', '#a8987a'],
  floral: ['#bfe0db', TEAL],
  citrus: ['#e8d77a', '#c9b24a'],
  woody: ['#7a5a3a', '#4a3420'],
  amber: [GOLD_LIGHT, '#9a7415'],
};
for (const [name, [bg, bg2]] of Object.entries(notes)) {
  assets.push([`notes/${name}.svg`, { w: 320, h: 320, bg, bg2, label: '' }]);
}

for (const [path, opts] of assets) {
  const full = join(ROOT, path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, svg(opts));
}

console.log(`Generated ${assets.length} placeholder images under public/images/`);
