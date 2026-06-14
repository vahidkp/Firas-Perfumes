import { ProductCarousel } from '@/components/product/ProductCarousel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { products } from '@/data/products';

export function BestSellers() {
  const bestSellers = products.filter((p) => p.badges?.includes('Bestseller')).slice(0, 8);

  return (
    <section className="bg-ivory">
      <div className="container-px py-14 sm:py-20">
        <SectionHeading eyebrow="Most Loved" title="Best Sellers" />
        <ProductCarousel products={bestSellers} />
      </div>
    </section>
  );
}
