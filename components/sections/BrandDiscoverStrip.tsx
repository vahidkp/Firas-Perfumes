import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';

const cards = [
  {
    title: "Men's Collection",
    image: '/images/sections/discover-men.jpg',
    href: '/shop?collection=men',
  },
  {
    title: "Women's Collection",
    image: '/images/sections/discover-women.jpg',
    href: '/shop?collection=women',
  },
  {
    title: 'Misk & Attar Oils',
    image: '/images/sections/discover-misk.jpg',
    href: '/shop?collection=misk',
  },
];

export function BrandDiscoverStrip() {
  return (
    <section className="bg-ivory">
      <div className="container-px py-14 sm:py-20">
        <SectionHeading
          eyebrow="Discover"
          title="A Curated World of Scent"
          subtitle="A myriad of fragrances, handpicked and crafted across our three signature lines."
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className="group flex flex-col items-center">
              {/* arched-top card, matching the reference's archway tiles */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[999px] border border-gold/20">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/30 to-transparent" />
              </div>
              <h3 className="mt-6 font-display text-xl tracking-wide">{card.title}</h3>
              <span className="label-caps mt-2 border-b border-gold pb-1 text-gold transition-colors group-hover:text-onyx">
                Shop Now
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
