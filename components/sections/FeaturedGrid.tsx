import { ProductGrid } from '@/components/product/ProductGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { products } from '@/data/products';

export function FeaturedGrid() {
  const featured = products.slice(0, 10);

  return (
    <section className="bg-ivory">
      <div className="container-px py-14 sm:py-20">
        <SectionHeading
          eyebrow="The Collection"
          title="Featured Fragrances"
          subtitle="A curated selection from our men's, women's and Misk attar lines — crafted for longevity and presence."
        />
        <ProductGrid products={featured} columns={5} />
        <div className="mt-14 flex justify-center">
          <Button href="/shop" variant="secondary">
            Shop All Fragrances
          </Button>
        </div>
      </div>
    </section>
  );
}
