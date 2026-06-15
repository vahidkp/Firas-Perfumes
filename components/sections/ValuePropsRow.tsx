type IconProps = { className?: string };

/* Bespoke duotone icons (tinted fill + crisp outline, brand gold) drawn for the
   section — a spray atomizer, a delivery truck, and a ribboned gift. */

function SprayIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M11.5 15a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" fill="currentColor" fillOpacity={0.13} />
      <path d="M11.5 21h8v5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" fill="currentColor" fillOpacity={0.22} />
      <rect x="12.9" y="9.6" width="5.2" height="3.4" rx="0.6" fill="currentColor" fillOpacity={0.13} />
      <path d="M13.6 9.6V7.8a1 1 0 0 1 1-1h2.7" />
      <rect x="13.4" y="5.2" width="3.8" height="1.7" rx="0.6" fill="currentColor" fillOpacity={0.22} />
      <g fill="currentColor" stroke="none">
        <circle cx="20.2" cy="5.6" r="0.65" />
        <circle cx="22.8" cy="4.6" r="0.75" />
        <circle cx="21.6" cy="7.7" r="0.55" />
        <circle cx="24.4" cy="6.8" r="0.6" />
        <circle cx="23.2" cy="9.2" r="0.5" />
        <circle cx="25.8" cy="5.1" r="0.5" />
      </g>
    </svg>
  );
}

function TruckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="10.5" width="15" height="11" rx="1.5" fill="currentColor" fillOpacity={0.13} />
      <path d="M18 13.5h4.7a1.5 1.5 0 0 1 1.16.55l2.85 3.45a1.5 1.5 0 0 1 .34.96V21.5H18z" fill="currentColor" fillOpacity={0.13} />
      <path d="M19.6 14.9h2.3l1.7 2h-4z" fill="currentColor" fillOpacity={0.22} />
      <circle cx="9" cy="23.4" r="2.4" fill="currentColor" fillOpacity={0.13} />
      <circle cx="9" cy="23.4" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="22.4" cy="23.4" r="2.4" fill="currentColor" fillOpacity={0.13} />
      <circle cx="22.4" cy="23.4" r="0.7" fill="currentColor" stroke="none" />
      <path d="M1.5 13.8h3.2M0.8 17.3h3.2M2 20.8h2.4" />
    </svg>
  );
}

function GiftIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5.5 14.5h21v10a1.5 1.5 0 0 1-1.5 1.5h-18a1.5 1.5 0 0 1-1.5-1.5z" fill="currentColor" fillOpacity={0.13} />
      <rect x="4" y="11" width="24" height="3.5" rx="1" fill="currentColor" fillOpacity={0.22} />
      <path d="M16 14.5v11.5" />
      <path d="M16 11c-1.1-3-4.4-3.3-5.3-1.4-.7 1.6.9 2.6 5.3 1.4z" fill="currentColor" fillOpacity={0.22} />
      <path d="M16 11c1.1-3 4.4-3.3 5.3-1.4.7 1.6-.9 2.6-5.3 1.4z" fill="currentColor" fillOpacity={0.22} />
      <circle cx="16" cy="11.1" r="1.05" fill="currentColor" fillOpacity={0.22} />
    </svg>
  );
}

const items = [
  {
    Icon: SprayIcon,
    title: 'Premium Ingredients',
    description: 'Long-lasting concentrations crafted with carefully sourced essences.',
  },
  {
    Icon: TruckIcon,
    title: 'Free Shipping on Prepaid Orders',
    description: 'Complimentary delivery across the Gulf on eligible prepaid orders.',
  },
  {
    Icon: GiftIcon,
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
          {items.map(({ Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 text-gold">
                <Icon className="h-8 w-8" />
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
