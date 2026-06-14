import Image from 'next/image';

export function LifestyleBanner() {
  return (
    <section className="relative h-[44vh] min-h-[340px] w-full overflow-hidden">
      <Image
        src="/images/sections/lifestyle.jpg"
        alt="Atmospheric desert and oud lifestyle scene"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-onyx/35" />
      <div className="container-px relative flex h-full flex-col items-center justify-center text-center text-ivory">
        <p className="label-caps mb-4 text-gold-light">The Art of Fragrance</p>
        <h2 className="max-w-2xl font-display text-3xl font-normal leading-tight sm:text-5xl">
          A Scent for Every Story You Tell
        </h2>
      </div>
    </section>
  );
}
