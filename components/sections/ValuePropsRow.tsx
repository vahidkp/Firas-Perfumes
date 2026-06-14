import { Gift, Truck, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Premium Ingredients',
    description: 'Long-lasting concentrations crafted with carefully sourced essences.',
  },
  {
    icon: Truck,
    title: 'Free Shipping on Prepaid Orders',
    description: 'Complimentary delivery across the Gulf on eligible prepaid orders.',
  },
  {
    icon: Gift,
    title: 'Complimentary Sample',
    description: 'Every order arrives with a free sample to discover your next signature.',
  },
];

export function ValuePropsRow() {
  return (
    <section className="border-y border-onyx/10 bg-[#f1ead9]">
      <div className="container-px py-12 sm:py-14">
        <p className="label-caps mb-10 text-center text-gold">
          Unlock Exclusive Online Benefits
        </p>
        <div className="grid gap-10 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 text-gold">
                <Icon className="h-6 w-6" aria-hidden strokeWidth={1.5} />
              </span>
              <h3 className="font-display text-lg tracking-wide">{title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-grey">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
