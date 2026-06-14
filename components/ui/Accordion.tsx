'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export function Accordion({
  items,
  defaultOpen = 0,
  variant = 'caps',
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
  /** 'caps' = compact uppercase labels; 'plain' = sentence-case questions (FAQ). */
  variant?: 'caps' | 'plain';
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  const titleClass =
    variant === 'plain'
      ? 'font-display text-base sm:text-lg'
      : 'font-body text-sm font-medium uppercase tracking-[0.12em]';

  return (
    <div className="divide-y divide-onyx/15 border-y border-onyx/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={cn(
                  'flex w-full items-center justify-between gap-4 py-4 text-left',
                  titleClass
                )}
              >
                {item.title}
                <ChevronDown
                  aria-hidden
                  className={cn(
                    'h-4 w-4 shrink-0 text-gold transition-transform duration-200',
                    isOpen && 'rotate-180'
                  )}
                />
              </button>
            </h3>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden text-sm leading-relaxed text-grey">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
