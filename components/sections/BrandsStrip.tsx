/**
 * "Inspired by the Greats" — the fragrance houses our scents interpret.
 * Self-hosted logos (public/images/brands) run as a seamless infinite marquee.
 * The set is duplicated and the track translates -50%, so the loop is continuous;
 * padding-right equals the gap so the seam is invisible. Each house here is one
 * we actually reference in the catalogue.
 */
const brands = [
  { name: 'Creed', file: '/images/brands/creed.svg' },
  { name: 'Chanel', file: '/images/brands/chanel.svg' },
  { name: 'Giorgio Armani', file: '/images/brands/armani.svg' },
  { name: 'Gucci', file: '/images/brands/gucci.svg' },
  { name: 'Lancôme', file: '/images/brands/lancome.svg' },
  { name: 'Carolina Herrera', file: '/images/brands/carolina-herrera.svg' },
];

export function BrandsStrip() {
  return (
    <section className="border-y border-onyx/10 bg-ivory">
      <div className="container-px py-12 sm:py-16">
        <p className="label-caps mb-2 text-center text-gold">Inspired by the Greats</p>
        <h2 className="mb-12 text-center font-display text-2xl tracking-wide sm:text-3xl">
          The Houses Behind Our Craft
        </h2>

        <div className="relative overflow-hidden">
          {/* edge fades so logos ease in/out instead of hard-cutting */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ivory to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ivory to-transparent sm:w-24" />

          {/* gap === pr keeps the duplicated loop seamless; pauses on hover */}
          <div className="flex w-max animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused] sm:gap-20 sm:pr-20">
            {[...brands, ...brands].map((brand, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${brand.name}-${i}`}
                src={brand.file}
                alt={`${brand.name} logo`}
                aria-hidden={i >= brands.length}
                loading="lazy"
                className="h-8 w-auto max-w-[140px] shrink-0 object-contain opacity-75 transition-opacity duration-300 hover:opacity-100 sm:h-9"
              />
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-grey">
          FIRAS fragrances are independent interpretations and are not affiliated with the
          brands shown.
        </p>
      </div>
    </section>
  );
}
