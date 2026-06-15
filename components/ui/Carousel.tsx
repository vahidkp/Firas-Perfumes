'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselProps {
  children: React.ReactNode[];
  /** Tailwind basis classes per breakpoint for each slide. */
  slideClassName?: string;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
}

export function Carousel({
  children,
  slideClassName = 'basis-[80%] sm:basis-[45%] lg:basis-[24%]',
  showArrows = true,
  showDots = false,
  className,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {children.map((child, i) => (
            <div key={i} className={cn('min-w-0 shrink-0', slideClassName)}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-between sm:flex">
          <button
            type="button"
            aria-label="Previous"
            onClick={scrollPrev}
            className="pointer-events-auto -ml-3 flex h-10 w-10 items-center justify-center rounded-full border border-onyx/15 bg-ivory text-onyx shadow-md transition-colors hover:text-gold lg:-ml-5"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={scrollNext}
            className="pointer-events-auto -mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-onyx/15 bg-ivory text-onyx shadow-md transition-colors hover:text-gold lg:-mr-5"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      )}

      {showDots && snaps.length > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                'h-2 rounded-full transition-all',
                i === selected ? 'w-6 bg-gold' : 'w-2 bg-onyx/20'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
