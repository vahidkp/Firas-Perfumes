import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { ScentNote } from '@/lib/types';

const categories: { note: ScentNote; label: string; image: string }[] = [
  { note: 'oud', label: 'Oud', image: '/images/notes/oud.jpg' },
  { note: 'musk', label: 'Musk', image: '/images/notes/musk.jpg' },
  { note: 'floral', label: 'Floral', image: '/images/notes/floral.jpg' },
  { note: 'citrus', label: 'Citrus', image: '/images/notes/citrus.jpg' },
  { note: 'woody', label: 'Woody', image: '/images/notes/woody.jpg' },
  { note: 'amber', label: 'Amber', image: '/images/notes/amber.jpg' },
];

export function CategoryExplorer() {
  return (
    <section className="border-y border-onyx/10 bg-[#f1ead9]">
      <div className="container-px py-14 sm:py-20">
        <SectionHeading eyebrow="Elevate Your Scent Journey" title="Explore by Note" />
        <div className="flex justify-start gap-8 overflow-x-auto pb-2 hide-scrollbar sm:justify-center">
          {categories.map((cat) => (
            <Link
              key={cat.note}
              href={`/shop?note=${cat.note}`}
              className="group flex shrink-0 flex-col items-center gap-3"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full ring-1 ring-gold/30 ring-offset-2 ring-offset-[#f1ead9] transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28">
                <Image
                  src={cat.image}
                  alt={`${cat.label} scent family`}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <span className="font-display text-base tracking-wide">{cat.label}</span>
              <span className="label-caps text-[10px] text-gold">Explore</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
