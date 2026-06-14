import Image from 'next/image';
import Link from 'next/link';

interface Panel {
  image: string;
  script: string;
  eyebrow: string;
  ctaHref: string;
}

const panels: Panel[] = [
  {
    image: '/images/sections/for-her.jpg',
    script: 'For Her',
    eyebrow: 'The Emerald Line',
    ctaHref: '/shop?collection=women',
  },
  {
    image: '/images/sections/for-him.jpg',
    script: 'For Him',
    eyebrow: 'The Onyx Line',
    ctaHref: '/shop?collection=men',
  },
];

export function CollectionSplit() {
  return (
    <section className="bg-ivory">
      <div className="container-px py-14 sm:py-20">
        <p className="label-caps mb-3 text-center text-gold">The Perfect Balance</p>
        <h2 className="mb-10 text-center font-display text-3xl tracking-wide sm:mb-12 sm:text-[2.5rem]">
          Two Lines, One Signature
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {panels.map((panel) => (
            <div
              key={panel.script}
              className="group relative aspect-[5/6] overflow-hidden sm:aspect-[4/5]"
            >
              <Image
                src={panel.image}
                alt={`${panel.script} collection`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Radial scrim centered behind the text so the overlay stays legible
                  on any image — the bottles are dark/busy exactly where the text sits. */}
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(26,26,26,0.55)_0%,_rgba(26,26,26,0.15)_45%,_transparent_75%)]"
                aria-hidden
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center text-ivory">
                <p className="label-caps text-gold-light drop-shadow">{panel.eyebrow}</p>
                <h3 className="font-display text-4xl italic drop-shadow-md xs:text-5xl sm:text-6xl">
                  {panel.script}
                </h3>
                <Link
                  href={panel.ctaHref}
                  className="label-caps mt-2 border border-ivory px-7 py-3 text-ivory backdrop-blur-[2px] transition-colors hover:bg-ivory hover:text-onyx"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
