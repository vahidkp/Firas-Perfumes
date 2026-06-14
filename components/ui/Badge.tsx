import { cn } from '@/lib/utils';
import type { Collection, Badge as StatusBadge } from '@/lib/types';
import { COLLECTION_BADGE_LABELS } from '@/lib/utils';

const collectionStyles: Record<Collection, string> = {
  men: 'bg-onyx text-ivory',
  women: 'bg-teal text-onyx',
  misk: 'bg-gold text-onyx',
};

export function CollectionBadge({
  collection,
  className,
}: {
  collection: Collection;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-block rounded-sm px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em]',
        collectionStyles[collection],
        className
      )}
    >
      {COLLECTION_BADGE_LABELS[collection]}
    </span>
  );
}

export function StatusBadgePill({
  label,
  className,
}: {
  label: StatusBadge;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-block rounded-sm border border-gold bg-ivory/90 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-gold',
        className
      )}
    >
      {label}
    </span>
  );
}
