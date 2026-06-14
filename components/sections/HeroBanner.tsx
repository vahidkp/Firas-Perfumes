import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface HeroBannerProps {
  image: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function HeroBanner({
  image,
  eyebrow,
  heading,
  subheading,
  ctaLabel = 'Shop the Collection',
  ctaHref = '/shop',
}: HeroBannerProps) {
  return (
    <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
      <Image
        src={image}
        alt="FIRAS signature fragrance on a soft luxe backdrop"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* bottom-weighted scrim — darkens behind the text for legibility while
          keeping the top of the frame airy and editorial */}
      <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-onyx/30 to-onyx/5" />

      <div className="container-px relative flex h-full flex-col items-center justify-end pb-16 text-center sm:pb-20">
        {eyebrow && (
          <p
            className="label-caps mb-4 text-ivory/90 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className="max-w-3xl font-display text-3xl font-normal leading-[1.12] text-ivory drop-shadow-sm animate-fade-up xs:text-4xl sm:text-6xl"
          style={{ animationDelay: '0.2s' }}
        >
          {heading}
        </h1>
        {subheading && (
          <p
            className="mt-4 max-w-md text-[0.9375rem] text-ivory/85 animate-fade-up sm:text-base"
            style={{ animationDelay: '0.3s' }}
          >
            {subheading}
          </p>
        )}
        <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Button href={ctaHref} variant="light" size="lg">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
