import Image from 'next/image';
import { SITE } from '@/lib/site';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Al+Thumama+Complex+Qatar';

export function ContactLocationStrip() {
  return (
    <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
      <Image
        src="/images/sections/lifestyle.jpg"
        alt="FIRAS boutique ambience"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-onyx/55" />
      <div className="container-px relative flex h-full flex-col items-center justify-center text-center text-ivory">
        <p className="label-caps mb-3 text-gold-light">Visit · Order · Connect</p>
        <h2 className="font-display text-3xl font-normal tracking-wide sm:text-5xl">
          Al Thumama Complex — Qatar
        </h2>
        <p className="mt-3 text-sm text-ivory/80">
          @{SITE.instagram} · WhatsApp +974 77833024
        </p>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="label-caps mt-7 border border-ivory px-7 py-3 text-ivory transition-colors hover:bg-ivory hover:text-onyx"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}
