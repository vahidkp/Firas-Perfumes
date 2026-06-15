import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * FIRAS Perfume brand logo — the supplied gold crest lockup with the dark
 * background removed (transparent PNG), so it sits on any light surface.
 * `tone` / `showWordmark` are accepted for backward compatibility but no longer
 * change the artwork (the logo is a single fixed asset).
 */
export function Logo({
  className,
}: {
  className?: string;
  tone?: 'gold' | 'ivory' | 'onyx';
  showWordmark?: boolean;
}) {
  return (
    <Image
      src="/images/brand/logo.png"
      alt="FIRAS Perfume"
      width={585}
      height={741}
      priority
      className={cn('h-14 w-auto', className)}
    />
  );
}
