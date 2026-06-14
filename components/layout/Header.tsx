'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Search, User, Heart, ShoppingBag, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Drawer } from '@/components/ui/Drawer';
import { NAV_LINKS, SITE, whatsappLink } from '@/lib/site';
import { useCart } from '@/lib/store/cart';
import { useWishlist } from '@/lib/store/wishlist';
import { useCartDrawer } from '@/lib/store/drawer';
import { useMounted } from '@/lib/use-mounted';

function IconLink({
  children,
  label,
  href,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}) {
  const cls =
    'relative inline-flex items-center justify-center p-2 text-onyx transition-colors hover:text-gold';
  if (href) {
    return (
      <Link href={href} aria-label={label} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" aria-label={label} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mounted = useMounted();
  const cartCount = useCart((s) => s.totalCount());
  const wishCount = useWishlist((s) => s.ids.length);
  const openCart = useCartDrawer((s) => s.open);

  return (
    <header className="sticky top-0 z-50 border-b border-onyx/10 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/80">
      <div className="container-px">
        {/* Top row: search · logo · utility icons */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center py-3">
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Open menu"
              className="p-2 text-onyx hover:text-gold md:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
            <IconLink href="/shop" label="Search fragrances">
              <Search className="h-5 w-5" aria-hidden />
            </IconLink>
          </div>

          <Link href="/" aria-label="FIRAS Perfume home" className="min-w-0 justify-self-center">
            <Logo className="h-10 w-auto xs:h-12 sm:h-14" />
          </Link>

          <div className="flex items-center justify-end gap-0 xs:gap-0.5">
            <IconLink href={whatsappLink()} label="Account">
              <User className="h-5 w-5" aria-hidden />
            </IconLink>
            <IconLink href="/shop" label={`Wishlist (${mounted ? wishCount : 0})`}>
              <span className="relative">
                <Heart className="h-5 w-5" aria-hidden />
                {mounted && wishCount > 0 && <Dot>{wishCount}</Dot>}
              </span>
            </IconLink>
            <IconLink label={`Cart (${mounted ? cartCount : 0})`} onClick={openCart}>
              <span className="relative">
                <ShoppingBag className="h-5 w-5" aria-hidden />
                {mounted && cartCount > 0 && <Dot>{cartCount}</Dot>}
              </span>
            </IconLink>
          </div>
        </div>

        {/* Primary nav (desktop) */}
        <nav
          aria-label="Primary"
          className="hidden items-center justify-center gap-8 border-t border-onyx/10 py-3 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="label-caps text-onyx transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile nav drawer */}
      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        side="left"
        label="Menu"
      >
        <div className="flex items-center justify-between border-b border-gold/30 px-5 py-4">
          <Logo className="h-11 w-auto" />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="p-2 text-onyx hover:text-gold"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-col p-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-onyx/10 px-3 py-4 font-display text-lg text-onyx hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto border-t border-onyx/10 p-5 text-sm text-grey">
          <p className="label-caps mb-1 text-onyx">Contact</p>
          <a href={whatsappLink()} className="hover:text-gold">
            WhatsApp +974 77833024
          </a>
          <p className="mt-1">{SITE.location}</p>
        </div>
      </Drawer>
    </header>
  );
}

function Dot({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-ivory">
      {children}
    </span>
  );
}
