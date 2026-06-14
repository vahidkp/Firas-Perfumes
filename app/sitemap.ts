import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/shop`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...products.map((p) => ({
      url: `${base}/product/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
