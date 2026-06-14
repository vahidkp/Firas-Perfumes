import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProduct, getRelatedProducts } from '@/data/products';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfoPanel } from '@/components/product/ProductInfoPanel';
import { ScentProfile } from '@/components/product/ScentProfile';
import { TrustBadges } from '@/components/product/TrustBadges';
import { ProductReviews } from '@/components/product/ProductReviews';
import { ProductFaq } from '@/components/product/ProductFaq';
import { ProductCarousel } from '@/components/product/ProductCarousel';
import { Accordion } from '@/components/ui/Accordion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { COLLECTION_LABELS } from '@/lib/utils';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | FIRAS Perfume`,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const collectionLabel = COLLECTION_LABELS[product.collection];

  const accordionItems = [
    { title: 'Description', content: <p>{product.description}</p> },
    {
      title: 'Ingredients & Quality',
      content: (
        <p>
          This is a premium-quality fragrance inspired by{' '}
          {product.inspiredBy ?? 'a classic composition'} — independently crafted by FIRAS
          and not affiliated with, or produced by, the original brand. We use carefully
          sourced, high-concentration ingredients for an authentic character and
          long-lasting wear.
        </p>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <p>
          Free shipping on eligible prepaid orders across the Gulf. Orders are dispatched
          from Al Thumama Complex, Qatar. For exchanges or assistance, contact us on
          WhatsApp at +974 77833024.
        </p>
      ),
    },
  ];

  return (
    <>
      <div className="container-px py-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-grey">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={`/shop?collection=${product.collection}`}
                className="hover:text-gold"
              >
                {collectionLabel}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-onyx">{product.name}</li>
          </ol>
        </nav>
      </div>

      <section className="container-px pb-12 sm:pb-16">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />
          <div className="min-w-0">
            <ProductInfoPanel product={product} />
            <div className="mt-8">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <section className="container-px pb-12 sm:pb-16">
        <ScentProfile notes={product.scentNotes} />
      </section>

      <section className="container-px pb-12 sm:pb-16">
        <TrustBadges />
      </section>

      <section className="container-px pb-12 sm:pb-16">
        <ProductReviews productName={product.name} />
      </section>

      <section className="border-y border-onyx/10 bg-[#f1ead9]">
        <div className="container-px py-12 sm:py-16">
          <ProductFaq />
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-ivory">
          <div className="container-px py-12 sm:py-16">
            <SectionHeading
              eyebrow="You May Also Like"
              title="Related Fragrances"
            />
            <ProductCarousel products={related} />
          </div>
        </section>
      )}
    </>
  );
}
