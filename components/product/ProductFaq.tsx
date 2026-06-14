import { Accordion } from '@/components/ui/Accordion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const faqs: { q: string; a: string }[] = [
  {
    q: 'Are these the original designer perfumes?',
    a: 'No. FIRAS fragrances are independent, premium-quality interpretations inspired by iconic scents. They are not affiliated with, or produced by, the original houses — we simply craft a faithful character at a fairer price.',
  },
  {
    q: 'How long does the fragrance last?',
    a: 'Our scents are blended at a high concentration for strong projection and all-day longevity — typically 6–10 hours on skin, and noticeably longer on clothing.',
  },
  {
    q: "What's the difference between the 50ml and 100ml?",
    a: 'Only the volume — the formula is identical. The 100ml offers better value per millilitre and is ideal if it has become a signature you reach for daily.',
  },
  {
    q: 'How is my order delivered?',
    a: 'Orders are dispatched from Al Thumama Complex, Qatar, with free shipping on eligible prepaid orders across the Gulf. You can also place and track your order directly with us on WhatsApp.',
  },
  {
    q: 'Can I return or exchange my order?',
    a: 'Yes — if something isn’t right, message us on WhatsApp at +974 77833024 and our team will help arrange an exchange or assist you in finding your perfect match.',
  },
];

export function ProductFaq() {
  return (
    <div>
      <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />
      <div className="mx-auto max-w-3xl">
        <Accordion
          variant="plain"
          defaultOpen={null}
          items={faqs.map((f) => ({ title: f.q, content: <p>{f.a}</p> }))}
        />
      </div>
    </div>
  );
}
