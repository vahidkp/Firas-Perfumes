import type { Product } from '@/lib/types';

/**
 * FIRAS catalogue — the 11 SKUs supplied by the client (4 men, 5 women, 2 Misk).
 *
 * Image status (Jun 2026): real client product photos are wired into the two
 * Misk attars plus two flagship men's and two women's SKUs. The remaining SKUs
 * still use the SVG placeholders until the client's retouched photos arrive —
 * men & women lines share one bottle/box design per gender, so the same master
 * art applies across each line.
 */

// --- Placeholder artwork (awaiting client photos) ---
const MEN_BOTTLE = '/images/products/men-bottle.svg';
const MEN_BOX = '/images/products/men-box.svg';
const MEN_LIFESTYLE = '/images/products/men-lifestyle.svg';
const WOMEN_BOTTLE = '/images/products/women-bottle.svg';
const WOMEN_BOX = '/images/products/women-box.svg';
const WOMEN_LIFESTYLE = '/images/products/women-lifestyle.svg';

// --- Real client product photography (shared per gendered line) ---
const MEN_REAL = [
  '/images/products/men-bottle.jpg',
  '/images/products/men-bottle-alt.jpg',
  '/images/products/men-box.jpg',
];
const WOMEN_REAL = [
  '/images/products/women-bottle.jpg',
  '/images/products/women-bottle-alt.jpg',
  '/images/products/women-box.jpg',
];

export const products: Product[] = [
  // ---------------- Men's Collection ----------------
  {
    id: 'p01',
    slug: 'g-armani',
    name: 'G-Armani',
    collection: 'men',
    inspiredBy: 'Giorgio Armani Acqua di Giò',
    scentNotes: {
      top: ['citrus', 'fresh'],
      middle: ['woody'],
      base: ['musk', 'amber'],
    },
    price: 95,
    sizesMl: [50, 100],
    images: MEN_REAL,
    description:
      'A crisp, aquatic interpretation inspired by Giorgio Armani Acqua di Giò — bright citrus opening over a clean woody-musk drydown, crafted with premium ingredients for all-day wear.',
    badges: ['Bestseller'],
  },
  {
    id: 'p02',
    slug: 'imperial-valley',
    name: 'Imperial Valley',
    collection: 'men',
    inspiredBy: 'Creed Aventus',
    scentNotes: {
      top: ['citrus'],
      middle: ['woody', 'fresh'],
      base: ['musk', 'amber'],
    },
    price: 120,
    sizesMl: [50, 100],
    images: [MEN_BOTTLE, MEN_BOX, MEN_LIFESTYLE],
    description:
      'A bold, fruity-smoky signature inspired by Creed Aventus. Pineapple and bergamot lift into a confident woody-amber heart with lasting projection.',
    badges: ['Bestseller', 'New'],
  },
  {
    id: 'p03',
    slug: 'creed-aventus',
    name: 'Creed Aventus',
    collection: 'men',
    inspiredBy: 'Creed Aventus',
    scentNotes: {
      top: ['citrus', 'fresh'],
      middle: ['woody'],
      base: ['amber', 'musk'],
    },
    price: 130,
    sizesMl: [50, 100],
    images: MEN_REAL,
    description:
      'Our flagship men’s fragrance, a rich woody-fruity character inspired by Creed Aventus — refined, long-lasting and unmistakably regal.',
    badges: ['Bestseller'],
  },
  {
    id: 'p04',
    slug: 'oud-cady',
    name: 'Oud Cady',
    collection: 'men',
    inspiredBy: 'Maison Francis Kurkdjian Oud',
    scentNotes: {
      top: ['woody'],
      middle: ['oud', 'amber'],
      base: ['oud', 'musk'],
    },
    price: 140,
    sizesMl: [50, 100],
    images: [MEN_BOTTLE, MEN_BOX, MEN_LIFESTYLE],
    description:
      'A deep, resinous oud composition for the connoisseur — smoky Arabian oud wrapped in warm amber and musk for an opulent, enduring trail.',
  },
  {
    id: 'p05',
    slug: 'misk-oud-al-karam',
    name: 'Misk Oud Al Karam',
    collection: 'misk',
    scentNotes: {
      top: ['oud'],
      middle: ['oud', 'woody'],
      base: ['musk', 'amber'],
    },
    price: 50,
    sizesMl: [12],
    images: [
      '/images/products/misk-oud-al-karam.jpg',
      '/images/products/misk-oud-al-karam-2.jpg',
    ],
    description:
      'A concentrated Arabian oud attar oil — pure, alcohol-free and intensely long-lasting. A single touch carries the noble warmth of oud through the entire day.',
    badges: ['Bestseller'],
  },

  // ---------------- Women's Collection ----------------
  {
    id: 'p06',
    slug: 'good-girl',
    name: 'Good Girl',
    collection: 'women',
    inspiredBy: 'Carolina Herrera Good Girl',
    scentNotes: {
      top: ['floral'],
      middle: ['floral', 'amber'],
      base: ['woody', 'musk'],
    },
    price: 110,
    sizesMl: [50, 100],
    images: WOMEN_REAL,
    description:
      'A bold, sensual floral inspired by Carolina Herrera Good Girl — jasmine and tonka over a warm, addictive cocoa-amber base.',
    badges: ['Bestseller'],
  },
  {
    id: 'p07',
    slug: 'ajmal-lamsa',
    name: 'Ajmal Lamsa',
    collection: 'women',
    inspiredBy: 'Ajmal Lamsa',
    scentNotes: {
      top: ['citrus', 'floral'],
      middle: ['floral'],
      base: ['musk', 'woody'],
    },
    price: 100,
    sizesMl: [50, 100],
    images: [WOMEN_BOTTLE, WOMEN_BOX, WOMEN_LIFESTYLE],
    description:
      'A graceful, powdery floral inspired by Ajmal Lamsa — soft petals and citrus brightness settling into a tender musk veil.',
    badges: ['New'],
  },
  {
    id: 'p08',
    slug: 'chanel-no-5',
    name: 'Chanel No. 5',
    collection: 'women',
    inspiredBy: 'Chanel No. 5',
    scentNotes: {
      top: ['floral', 'citrus'],
      middle: ['floral'],
      base: ['musk', 'woody'],
    },
    price: 125,
    sizesMl: [50, 100],
    images: WOMEN_REAL,
    description:
      'A timeless aldehydic floral inspired by Chanel No. 5 — an elegant bouquet of rose and jasmine with a refined, classic musk drydown.',
    badges: ['Bestseller'],
  },
  {
    id: 'p09',
    slug: 'gucci-flora',
    name: 'Gucci Flora',
    collection: 'women',
    inspiredBy: 'Gucci Flora',
    scentNotes: {
      top: ['citrus', 'floral'],
      middle: ['floral'],
      base: ['woody', 'musk'],
    },
    price: 105,
    sizesMl: [50, 100],
    images: [WOMEN_BOTTLE, WOMEN_BOX, WOMEN_LIFESTYLE],
    description:
      'A luminous, youthful floral inspired by Gucci Flora — sparkling citrus and peony blooming into a soft sandalwood finish.',
  },
  {
    id: 'p10',
    slug: 'lancome-la-vie-est-belle',
    name: 'Lancôme La Vie Est Belle',
    collection: 'women',
    inspiredBy: 'Lancôme La Vie Est Belle',
    scentNotes: {
      top: ['fresh', 'citrus'],
      middle: ['floral'],
      base: ['amber', 'musk'],
    },
    price: 115,
    sizesMl: [50, 100],
    images: [WOMEN_BOTTLE, WOMEN_BOX, WOMEN_LIFESTYLE],
    description:
      'A sweet, radiant gourmand-floral inspired by Lancôme La Vie Est Belle — iris and praline wrapped in a warm, joyful amber.',
    badges: ['Bestseller'],
  },
  {
    id: 'p11',
    slug: 'misk-al-tahara',
    name: 'Misk Al Tahara',
    collection: 'misk',
    scentNotes: {
      top: ['musk'],
      middle: ['floral', 'musk'],
      base: ['musk'],
    },
    price: 45,
    sizesMl: [12],
    images: ['/images/products/misk-al-tahara.jpg'],
    description:
      'A pure white musk attar — clean, soft and powdery. This gentle, alcohol-free oil is treasured for its purity and delicate, comforting trail.',
    badges: ['New'],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 6): Product[] {
  const sameCollection = products.filter(
    (p) => p.collection === product.collection && p.id !== product.id
  );
  if (sameCollection.length >= limit) return sameCollection.slice(0, limit);
  const others = products.filter(
    (p) => p.collection !== product.collection && p.id !== product.id
  );
  return [...sameCollection, ...others].slice(0, limit);
}
