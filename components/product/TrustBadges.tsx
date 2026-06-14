import { Truck, Clock, ShieldCheck, BadgeCheck } from 'lucide-react';

const badges = [
  { icon: Truck, label: 'Free Shipping', sub: 'On eligible prepaid orders' },
  { icon: Clock, label: 'Long-Lasting', sub: 'High-concentration formula' },
  { icon: BadgeCheck, label: 'Made in Palestine', sub: 'Crafted with pride' },
  { icon: ShieldCheck, label: 'Authentic Quality', sub: 'Premium ingredients' },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {badges.map(({ icon: Icon, label, sub }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-2 rounded-sm border border-onyx/10 p-4 text-center"
        >
          <Icon className="h-6 w-6 text-gold" aria-hidden />
          <span className="text-xs font-medium">{label}</span>
          <span className="text-[11px] text-grey">{sub}</span>
        </div>
      ))}
    </div>
  );
}
