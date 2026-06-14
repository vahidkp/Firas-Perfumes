import { SCENT_NOTE_LABELS } from '@/lib/utils';
import type { ScentNote } from '@/lib/types';

const groups: { key: 'top' | 'middle' | 'base'; label: string }[] = [
  { key: 'top', label: 'Top Notes' },
  { key: 'middle', label: 'Heart Notes' },
  { key: 'base', label: 'Base Notes' },
];

export function ScentProfile({
  notes,
}: {
  notes: { top: ScentNote[]; middle: ScentNote[]; base: ScentNote[] };
}) {
  return (
    <div className="rounded-sm border border-onyx/10 bg-ivory p-6 sm:p-8">
      <h2 className="font-display text-2xl">Scent Profile</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {groups.map((group) => (
          <div key={group.key}>
            <p className="label-caps mb-3 text-gold">{group.label}</p>
            {notes[group.key].length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {notes[group.key].map((note, i) => (
                  <li
                    key={`${note}-${i}`}
                    className="rounded-full border border-onyx/15 px-3 py-1 text-xs"
                  >
                    {SCENT_NOTE_LABELS[note]}
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
