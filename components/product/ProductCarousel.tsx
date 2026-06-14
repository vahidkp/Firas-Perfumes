import { Carousel } from '@/components/ui/Carousel';
import { ProductCard } from './ProductCard';
import type { Product } from '@/lib/types';

/** Edge-peek carousel of product cards — used for Best Sellers & Related Products. */
export function ProductCarousel({ products }: { products: Product[] }) {
  return (
    <Carousel slideClassName="basis-[60%] sm:basis-[33%] lg:basis-[20%]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Carousel>
  );
}
