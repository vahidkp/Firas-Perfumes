import { cn } from '@/lib/utils';

/**
 * FIRAS crest wordmark — crown over a circular "F" monogram with the FIRAS /
 * PERFUME lockup. Rendered as inline SVG so it stays crisp and recolourable.
 * `tone` controls the colour: gold on any background, or solid ivory/onyx.
 */
export function Logo({
  className,
  tone = 'gold',
  showWordmark = true,
}: {
  className?: string;
  tone?: 'gold' | 'ivory' | 'onyx';
  showWordmark?: boolean;
}) {
  const color =
    tone === 'gold' ? '#B8860B' : tone === 'ivory' ? '#F7F2E8' : '#1A1A1A';

  return (
    <svg
      viewBox="0 0 200 96"
      role="img"
      aria-label="FIRAS Perfume"
      className={cn('h-12 w-auto', className)}
      fill="none"
    >
      <g stroke={color} fill={color}>
        {/* crown */}
        <path
          d="M86 18l4 8 5-9 5 9 5-9 5 9 4-8v10H86z"
          strokeWidth="1.2"
          strokeLinejoin="round"
          fillOpacity="0.95"
        />
        {/* circle monogram */}
        <circle cx="100" cy="44" r="15" strokeWidth="1.4" fill="none" />
        <circle cx="100" cy="44" r="18" strokeWidth="0.8" fill="none" opacity="0.6" />
        {/* F monogram */}
        <path
          d="M95 36h11v3h-8v4h6v3h-6v8h-3z"
          strokeWidth="0.3"
          fillOpacity="0.95"
        />
        {/* flourish dots */}
        <circle cx="78" cy="44" r="1.4" stroke="none" />
        <circle cx="122" cy="44" r="1.4" stroke="none" />
      </g>

      {showWordmark && (
        <g fill={color} stroke="none">
          <text
            x="100"
            y="78"
            textAnchor="middle"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="20"
            letterSpacing="4"
          >
            FIRAS
          </text>
          <text
            x="100"
            y="91"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="8"
            letterSpacing="6"
            opacity="0.85"
          >
            PERFUME
          </text>
        </g>
      )}
    </svg>
  );
}
