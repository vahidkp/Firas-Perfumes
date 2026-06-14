import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MiniCartDrawer } from '@/components/cart/MiniCartDrawer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { SITE } from '@/lib/site';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'FIRAS Perfume',
    'inspired perfume',
    'oud',
    'attar',
    'misk',
    'Palestine perfume',
    'Qatar fragrance',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    images: ['/images/brand/og-default.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-sm focus:bg-onyx focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MiniCartDrawer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
