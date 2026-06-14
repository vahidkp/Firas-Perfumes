import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function BrandStoryBlock() {
  return (
    <section id="about" className="scroll-mt-28 border-y border-onyx/10 bg-[#f1ead9]">
      <div className="container-px py-14 sm:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 min-w-0 md:order-1">
            <p className="label-caps mb-4 text-gold">In Focus</p>
            <h2 className="font-display text-3xl tracking-wide sm:text-[2.5rem]">
              Crafted with Heritage, Bottled with Pride
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-grey">
              <p>
                FIRAS Perfume is a Palestine-made house dedicated to recreating the
                world&apos;s most beloved fragrances with uncompromising quality. Each scent
                is composed from premium ingredients and aged for depth, longevity and that
                unmistakable signature trail.
              </p>
              <p>
                From our black-and-gold men&apos;s line to the emerald women&apos;s collection
                and our concentrated Misk attar oils, every bottle carries the craftsmanship
                and pride of its origin.
              </p>
            </div>
            <Button href="/shop" variant="secondary" className="mt-8">
              Explore the Collection
            </Button>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden md:order-2">
            <Image
              src="/images/sections/brand-story.jpg"
              alt="FIRAS perfume craftsmanship and packaging"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
