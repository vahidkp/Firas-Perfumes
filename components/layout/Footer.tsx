import Link from 'next/link';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { NewsletterForm } from './NewsletterForm';
import { SITE, whatsappLink } from '@/lib/site';

const legal = ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Refund Policy'];
const service = ['Contact Us', 'My Account', 'FAQ', 'Order via WhatsApp'];
const about = ['Our Story', 'Misk & Attar Oils', 'Made in Palestine', 'Press'];

function ColumnLinks({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="label-caps mb-5 text-onyx">{title}</h4>
      <ul className="space-y-3 text-sm text-grey">
        {items.map((item) => (
          <li key={item}>
            <Link href="#" className="transition-colors hover:text-gold">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-onyx/10 bg-[#f1ead9] text-onyx">
      <div className="container-px py-12 sm:py-16">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr_1.5fr] lg:gap-x-10 lg:gap-y-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo tone="onyx" className="h-16 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-grey">
              Premium-quality fragrances inspired by the world&apos;s most iconic scents —
              crafted with care and bottled with pride in Palestine.
            </p>
          </div>

          <ColumnLinks title="Legal" items={legal} />
          <ColumnLinks title="Customer Service" items={service} />
          <ColumnLinks title="About" items={about} />

          <div>
            <h4 className="label-caps mb-5 text-onyx">Get 5% Off Your First Order</h4>
            <NewsletterForm />
            <div className="mt-6 flex items-center gap-4 text-onyx">
              <a href={SITE.instagramUrl} aria-label="Instagram" className="hover:text-gold">
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gold">
                <Facebook className="h-5 w-5" aria-hidden />
              </a>
              <a href={whatsappLink()} aria-label="WhatsApp" className="hover:text-gold">
                <MessageCircle className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-onyx text-ivory/70">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-4 text-center text-xs sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <span aria-hidden>🇵🇸</span> Made in Palestine · {SITE.location} · +974 77833024
          </p>
        </div>
      </div>
    </footer>
  );
}
