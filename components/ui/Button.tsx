import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-body uppercase tracking-[0.15em] transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary: 'bg-gold text-ivory hover:bg-gold/90',
  secondary: 'border border-onyx text-onyx hover:bg-onyx hover:text-ivory',
  ghost: 'text-onyx hover:text-gold',
  light: 'border border-ivory text-ivory hover:bg-ivory hover:text-onyx',
};

const sizes: Record<Size, string> = {
  sm: 'text-[11px] px-4 py-2',
  md: 'text-xs px-6 py-3',
  lg: 'text-sm px-8 py-4',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string };

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps | AnchorProps
>(function Button(
  { variant = 'primary', size = 'md', className, children, ...props },
  ref
) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('href' in props && props.href !== undefined) {
    const { href, ...rest } = props as AnchorProps;
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(props as ButtonProps)}
    >
      {children}
    </button>
  );
});
