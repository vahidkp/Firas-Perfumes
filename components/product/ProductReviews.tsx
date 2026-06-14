import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Review {
  name: string;
  location: string;
  date: string;
  rating: number;
  body: string;
}

const reviews: Review[] = [
  {
    name: 'Noura A.',
    location: 'Doha',
    date: 'May 2026',
    rating: 5,
    body: 'Genuinely impressed — the scent is rich and lasts the whole day. Beautifully packaged too. This is my third order from FIRAS.',
  },
  {
    name: 'Hamad K.',
    location: 'Al Rayyan',
    date: 'April 2026',
    rating: 5,
    body: 'Smells almost identical to the original at a fraction of the price. Projection is excellent and I get compliments every time.',
  },
  {
    name: 'Sara M.',
    location: 'Al Wakrah',
    date: 'April 2026',
    rating: 4,
    body: 'Lovely, elegant fragrance and quick delivery. I would have liked a touch more sweetness, but the quality is clearly there.',
  },
  {
    name: 'Yousef R.',
    location: 'Doha',
    date: 'March 2026',
    rating: 5,
    body: 'The complimentary sample sealed the deal — ended up ordering two more. Authentic quality and a really smooth WhatsApp checkout.',
  },
];

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={cn('inline-flex gap-0.5 text-gold', className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn('h-4 w-4', i < Math.round(rating) ? 'fill-gold' : 'fill-none text-onyx/20')}
        />
      ))}
    </span>
  );
}

export function ProductReviews({ productName }: { productName: string }) {
  const count = reviews.length;
  const average = reviews.reduce((sum, r) => sum + r.rating, 0) / count;

  return (
    <div>
      {/* Summary */}
      <div className="flex flex-col items-start gap-4 border-b border-onyx/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="label-caps mb-2 text-gold">Customer Reviews</p>
          <h2 className="font-display text-2xl sm:text-3xl">What People Are Saying</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-display text-4xl leading-none text-onyx">
            {average.toFixed(1)}
          </span>
          <span className="flex flex-col">
            <Stars rating={average} />
            <span className="mt-1 text-xs text-grey">
              Based on {count} review{count === 1 ? '' : 's'}
            </span>
          </span>
        </div>
      </div>

      {/* Review cards */}
      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        {reviews.map((review, i) => (
          <li
            key={`${review.name}-${i}`}
            className="flex min-w-0 flex-col rounded-sm border border-onyx/10 bg-[#fbf8f1] p-6"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <Stars rating={review.rating} />
              <span className="text-xs text-grey">{review.date}</span>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-onyx/80">“{review.body}”</p>
            <p className="mt-4 text-xs text-grey">
              <span className="label-caps text-onyx">{review.name}</span> · {review.location}
              <span className="ml-1 text-gold">· Verified buyer</span>
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-grey">
        Reviews reflect customer experiences with {productName} and other FIRAS fragrances.
      </p>
    </div>
  );
}
