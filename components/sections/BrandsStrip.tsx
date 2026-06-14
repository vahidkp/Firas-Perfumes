/**
 * "Inspired by the Greats" — a marquee of the fragrance houses our scents are
 * interpreted from. Logos are pulled from a logo CDN at runtime:
 *   • If NEXT_PUBLIC_BRANDFETCH_CLIENT_ID is set, we use Brandfetch (crisp,
 *     full-colour brand logos). Free client ID: https://brandfetch.com/developers.
 *   • Otherwise we fall back to Google's logo/favicon CDN, which needs no key.
 * Logos render monochrome to keep the strip elegant and on-brand.
 */
const brands = [
  { name: 'Creed', domain: 'creedboutique.com' },
  { name: 'Chanel', domain: 'chanel.com' },
  { name: 'Armani', domain: 'armani.com' },
  { name: 'Gucci', domain: 'gucci.com' },
  { name: 'Lancôme', domain: 'lancome.com' },
  { name: 'Carolina Herrera', domain: 'carolinaherrera.com' },
  { name: 'Ajmal', domain: 'ajmalperfume.com' },
];

const BRANDFETCH_ID = process.env.NEXT_PUBLIC_BRANDFETCH_CLIENT_ID;

function logoUrl(domain: string): string {
  return BRANDFETCH_ID
    ? `https://cdn.brandfetch.io/${domain}/w/240/h/120?c=${BRANDFETCH_ID}`
    : `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

export function BrandsStrip() {
  return (
    <section className="border-y border-onyx/10 bg-ivory">
      <div className="container-px py-12 sm:py-14">
        <p className="label-caps mb-2 text-center text-gold">Inspired by the Greats</p>
        <h2 className="mb-10 text-center font-display text-2xl tracking-wide sm:text-3xl">
          The Houses Behind Our Craft
        </h2>

        {/* marquee row of inspired-by houses */}
        <div className="relative overflow-hidden">
          {/* edge fades so logos ease in/out instead of hard-cutting */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ivory to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ivory to-transparent sm:w-20" />

          <div className="flex w-max animate-marquee items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
            {[...brands, ...brands].map((brand, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${brand.name}-${i}`}
                src={logoUrl(brand.domain)}
                alt={`${brand.name} logo`}
                aria-hidden={i >= brands.length}
                loading="lazy"
                width={120}
                height={36}
                className="h-7 w-auto max-w-[140px] shrink-0 object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-9"
              />
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-grey">
          FIRAS fragrances are independent interpretations and are not affiliated with the
          brands shown.
        </p>
      </div>
    </section>
  );
}
