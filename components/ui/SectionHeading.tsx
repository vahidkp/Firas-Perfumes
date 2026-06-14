import { cn } from '@/lib/utils';

/** Centered, editorial section heading — small letter-spaced eyebrow over a refined
 *  serif title with a short gold rule beneath, matching the reference layout. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = 'onyx',
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: 'onyx' | 'ivory';
  className?: string;
}) {
  return (
    <div className={cn('mx-auto mb-10 max-w-2xl text-center sm:mb-12', className)}>
      {eyebrow && <p className="label-caps mb-3 text-gold">{eyebrow}</p>}
      <h2
        className={cn(
          'font-display text-3xl font-normal tracking-wide sm:text-[2.5rem]',
          tone === 'ivory' ? 'text-ivory' : 'text-onyx'
        )}
      >
        {title}
      </h2>
      <span
        className="mx-auto mt-5 block h-px w-16 bg-gold/70"
        aria-hidden
      />
      {subtitle && (
        <p
          className={cn(
            'mx-auto mt-5 max-w-xl text-sm leading-relaxed',
            tone === 'ivory' ? 'text-ivory/70' : 'text-grey'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
