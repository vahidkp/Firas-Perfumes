import { Carousel } from '@/components/ui/Carousel';
import { ProductCard } from './ProductCard';
import type { Product } from '@/lib/types';

/** Edge-peek carousel of product cards — used for Best Sellers & Related Products. */
export function ProductCarousel({ products }: { products: Product[] }) {
  return (
    <Carousel
      slideClassName="basis-[80%] sm:basis-[calc(33.333%_-_0.84rem)] lg:basis-[calc(20%_-_1rem)]"
      showArrows={false}
      showDots
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Carousel>
  );
}
