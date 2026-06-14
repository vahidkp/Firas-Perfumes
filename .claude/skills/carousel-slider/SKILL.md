---
name: carousel-slider
description: "Use when implementing horizontally scrollable or sliding content — Best Sellers row, Related Products, Testimonials. Trigger on 'add a carousel', 'make this scrollable', or 'build a slider'."
---

# Carousel / Slider

## Overview
Implements smooth, swipeable horizontal carousels used in three places: Home "Best Sellers", Home "Testimonials", and Product Detail "Related Products". Recommended library: Embla Carousel (lightweight, headless, pairs well with Tailwind) or Framer Motion drag-based carousel as an alternative.

## Setup (Embla)
```bash
npm install embla-carousel-react
```

## Component: `Carousel`

```tsx
import useEmblaCarousel from 'embla-carousel-react';

interface CarouselProps {
  children: React.ReactNode[];
  slidesPerView?: { base: number; md: number; lg: number };
}

export function Carousel({ children, slidesPerView = { base: 1.2, md: 2.5, lg: 4 } }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ align: 'start', dragFree: true });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {children.map((child, i) => (
          <div key={i} className="shrink-0 basis-[80%] md:basis-[40%] lg:basis-[24%]">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Usage Conventions

- **Best Sellers (Home)**: wraps `ProductCard` components, `slidesPerView` ~4 on desktop, ~1.2 on mobile (partial next-card visible, matching Scentido's edge-peek style)
- **Related Products (Product Detail)**: same as Best Sellers but filtered to same collection/scent family
- **Testimonials (Home)**: wraps testimonial cards (quote, stars, name), `slidesPerView` 1 on mobile, up to 3 on desktop; include dot indicators below

## Checklist
- [ ] Carousel is swipeable on touch devices and draggable on desktop
- [ ] Edge-peek effect (partial next slide visible) matches the reference site's feel
- [ ] Testimonials carousel includes pagination dots
- [ ] No layout shift when carousel mounts (reserve height via aspect ratios on slide content)
- [ ] Keyboard users can tab through carousel items in order
