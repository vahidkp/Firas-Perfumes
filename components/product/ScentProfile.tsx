import Image from 'next/image';
import { SCENT_NOTE_LABELS } from '@/lib/utils';
import type { ScentNote } from '@/lib/types';

const groups: { key: 'top' | 'middle' | 'base'; label: string }[] = [
  { key: 'top', label: 'Top Notes' },
  { key: 'middle', label: 'Heart Notes' },
  { key: 'base', label: 'Base Notes' },
];

// `fresh` has no dedicated artwork — fall back to the closest note image.
const NOTE_IMAGES: Record<ScentNote, string> = {
  oud: '/images/notes/oud.jpg',
  musk: '/images/notes/musk.jpg',
  floral: '/images/notes/floral.jpg',
  citrus: '/images/notes/citrus.jpg',
  woody: '/images/notes/woody.jpg',
  amber: '/images/notes/amber.jpg',
  fresh: '/images/notes/citrus.jpg',
};

export function ScentProfile({
  notes,
}: {
  notes: { top: ScentNote[]; middle: ScentNote[]; base: ScentNote[] };
}) {
  return (
    <div className="rounded-sm border border-onyx/10 bg-ivory p-6 sm:p-8">
      <h2 className="font-display text-2xl">Scent Profile</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-3">
        {groups.map((group) => (
          <div key={group.key}>
            <p className="label-caps mb-4 text-gold">{group.label}</p>
            {notes[group.key].length > 0 ? (
              <ul className="flex flex-wrap gap-x-6 gap-y-5">
                {notes[group.key].map((note, i) => (
                  <li
                    key={`${note}-${i}`}
                    className="flex w-16 flex-col items-center gap-2 text-center"
                  >
                    <div className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-gold/30 ring-offset-2 ring-offset-ivory">
                      <Image
                        src={NOTE_IMAGES[note]}
                        alt={`${SCENT_NOTE_LABELS[note]} note`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs">{SCENT_NOTE_LABELS[note]}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-grey">—</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
