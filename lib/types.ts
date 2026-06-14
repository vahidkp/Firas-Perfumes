export type Collection = 'men' | 'women' | 'misk';

export type ScentNote =
  | 'oud'
  | 'musk'
  | 'floral'
  | 'citrus'
  | 'woody'
  | 'fresh'
  | 'amber';

export type Badge = 'New' | 'Bestseller';

export interface Product {
  id: string;
  slug: string;
  name: string;
  collection: Collection;
  inspiredBy?: string;
  scentNotes: {
    top: ScentNote[];
    middle: ScentNote[];
    base: ScentNote[];
  };
  /** Headline price — treated as the price of the smallest size in `sizesMl`. */
  price: number;
  sizesMl?: number[];
  /** Optional exact per-size prices (ml → price). Overrides the derived value. */
  pricesByMl?: Record<number, number>;
  images: string[];
  description: string;
  badges?: Badge[];
}
