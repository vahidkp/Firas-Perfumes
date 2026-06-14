/** Central brand / contact configuration used across header, footer, cart, SEO. */
export const SITE = {
  name: 'FIRAS Perfume',
  tagline: 'Premium Inspired Fragrances',
  description:
    'FIRAS Perfume offers premium-quality fragrances inspired by iconic designer scents, crafted with high-quality ingredients for a long-lasting experience. Made in Palestine.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://firasperfume.com',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '97477833024',
  instagram: 'FERAS_BARFAN',
  instagramUrl: 'https://instagram.com/FERAS_BARFAN',
  location: 'Al Thumama Complex, Qatar',
  announcement: 'Complimentary sample with every order · Free shipping on prepaid orders',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: "Men's Collection", href: '/shop?collection=men' },
  { label: "Women's Collection", href: '/shop?collection=women' },
  { label: 'Misk & Oud', href: '/shop?collection=misk' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
