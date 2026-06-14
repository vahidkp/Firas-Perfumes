import { ProductCard } from './ProductCard';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';

export function ProductGrid({
  products,
  columns = 4,
  className,
}: {
  products: Product[];
  columns?: 4 | 5;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12',
        columns === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4',
        className
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
