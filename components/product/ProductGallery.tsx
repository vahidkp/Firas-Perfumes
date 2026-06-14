'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const hasThumbs = images.length > 1;

  return (
    <div className="flex min-w-0 flex-col-reverse gap-4 md:flex-row">
      {hasThumbs && (
        <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
          {images.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1} of ${name}`}
              aria-current={active === i}
              className={cn(
                'relative h-20 w-16 shrink-0 overflow-hidden rounded-sm border bg-onyx/5 transition-colors',
                active === i ? 'border-gold' : 'border-onyx/10 hover:border-gold/50'
              )}
            >
              <Image
                src={img}
                alt=""
                aria-hidden
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <div className="group relative aspect-[4/5] min-w-0 flex-1 overflow-hidden rounded-sm bg-onyx/5">
        <Image
          src={images[active]}
          alt={`${name} — inspired perfume by FIRAS`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
