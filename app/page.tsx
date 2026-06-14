import { HeroBanner } from '@/components/sections/HeroBanner';
import { BestSellers } from '@/components/sections/BestSellers';
import { ValuePropsRow } from '@/components/sections/ValuePropsRow';
import { CollectionSplit } from '@/components/sections/CollectionSplit';
import { CategoryExplorer } from '@/components/sections/CategoryExplorer';
import { FeaturedGrid } from '@/components/sections/FeaturedGrid';
import { BrandsStrip } from '@/components/sections/BrandsStrip';
import { BrandDiscoverStrip } from '@/components/sections/BrandDiscoverStrip';
import { BrandStoryBlock } from '@/components/sections/BrandStoryBlock';
import { LifestyleBanner } from '@/components/sections/LifestyleBanner';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { ContactLocationStrip } from '@/components/sections/ContactLocationStrip';
import { Reveal } from '@/components/ui/Reveal';

export default function HomePage() {
  return (
    <>
      <HeroBanner
        image="/images/hero/hero.jpg"
        eyebrow="Made in Palestine · Inspired Luxury"
        heading="The Art of Inspired Luxury"
        subheading="Premium fragrances inspired by the world's most iconic scents — for him, for her, and timeless Misk attar oils."
        ctaLabel="Shop the Collection"
        ctaHref="/shop"
      />
      <Reveal>
        <BestSellers />
      </Reveal>
      <ValuePropsRow />
      <Reveal>
        <CollectionSplit />
      </Reveal>
      <CategoryExplorer />
      <Reveal>
        <FeaturedGrid />
      </Reveal>
      <BrandsStrip />
      <Reveal>
        <BrandDiscoverStrip />
      </Reveal>
      <BrandStoryBlock />
      <LifestyleBanner />
      <TestimonialsCarousel />
      <ContactLocationStrip />
    </>
  );
}
