'use client';

import { Star } from 'lucide-react';
import { Carousel } from '@/components/ui/Carousel';
import { SectionHeading } from '@/components/ui/SectionHeading';

const testimonials = [
  {
    quote:
      'The Imperial Valley is indistinguishable from the original — and it lasts all day. FIRAS has become my signature.',
    name: 'Khalid A.',
    location: 'Doha',
  },
  {
    quote:
      'Beautiful packaging, fast delivery and the Misk Al Tahara oil is pure luxury. Exactly what I was hoping for.',
    name: 'Mariam S.',
    location: 'Doha',
  },
  {
    quote:
      'Good Girl smells incredible and the gold-on-green bottle looks stunning on my dresser. Highly recommend.',
    name: 'Layla H.',
    location: 'Al Wakrah',
  },
  {
    quote:
      'Authentic quality at a fair price. The complimentary sample was a lovely touch — I ordered it next.',
    name: 'Yousef M.',
    location: 'Al Rayyan',
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="bg-ivory">
      <div className="container-px py-14 sm:py-20">
        <SectionHeading eyebrow="Loved by Our Customers" title="Testimonials" />
        <Carousel
          slideClassName="basis-[88%] sm:basis-[48%] lg:basis-[32%]"
          showArrows={false}
          showDots
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col items-center border border-onyx/10 bg-[#fbf8f1] p-8 text-center"
            >
              <div className="mb-5 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" aria-hidden />
                ))}
              </div>
              <blockquote className="flex-1 font-display text-lg italic leading-relaxed text-onyx/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <span className="label-caps text-onyx">{t.name}</span>
                <span className="mt-1 block text-xs text-grey">{t.location}</span>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
