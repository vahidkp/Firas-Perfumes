# FIRAS Perfume — Image Generation Prompts (ChatGPT / DALL·E)

These prompts generate every **non-product** image the website uses (hero, collection
panels, scent-note tiles, discovery cards, brand-story, lifestyle banner, social/OG card).
Product bottle/box photos are **excluded** — the client supplies retouched studio shots for
those.

## How to use
1. Paste a prompt into ChatGPT (GPT-4o / DALL·E 3) or your image tool of choice.
2. Generate at the **aspect ratio** noted for each (or generate large and crop).
3. Export as **WebP or JPG**, optimise (e.g. squoosh.app, target < 250 KB), and save to the
   **exact path** listed under "Replaces".
4. Update the file reference: the site currently points at a branded `.svg` placeholder of
   the same name. Either (a) keep the filename and just change the extension in code, or
   (b) save your file with the **same `.svg`-free name** and update the path in the listed
   source file. Simplest: save as the same base name with `.jpg` and update the one path.

## Brand art-direction (apply to every prompt)
- **Palette:** onyx black `#1A1A1A`, antique gold `#B8860B`, deep bottle-green `#1F3D2B`,
  soft teal `#8FCFC8`, ivory/cream `#F7F2E8`.
- **Mood:** regal, editorial, Middle-Eastern luxury perfumery; warm gold rim-light; soft
  shadows; marble / agate / silk / desert textures; lots of negative space for text overlay.
- **Avoid:** text, logos, watermarks, busy backgrounds, cartoon/illustration style, plastic
  look, harsh flat lighting.
- **Men's** = black + gold, masculine, dark and dramatic. **Women's** = green/teal + gold,
  soft, floral, luminous. **Misk/Attar** = warm amber/oud, intimate, mystical.

---

## 1. Home Hero — `public/images/hero/hero.svg`
**Aspect:** 16:9 (landscape, ~1920×1080). Used full-bleed; keep the left third darker for
white headline text.
> A cinematic luxury perfume hero banner. A single elegant fragrance bottle with a gold cap
> stands on a dark marble surface, dramatic warm gold rim-lighting, swirling black-and-gold
> agate texture in the background, soft smoke and bokeh, deep onyx-to-amber gradient. Empty
> negative space on the left for text. Editorial, high-end, photographic, 8k, shallow depth
> of field. No text, no logo.

---

## 2. Collection Split — "For Him" — `public/images/sections/for-him.svg`
**Aspect:** 3:4 (portrait, ~900×1200).
> A moody masculine luxury fragrance scene. A black-and-gold swirl perfume bottle on a dark
> stone ledge, surrounded by oud wood chips and dark amber glass, dramatic low-key lighting
> with golden highlights, onyx background with subtle gold marble veining. Premium, editorial,
> photographic, vertical composition with space at the bottom for a heading. No text.

## 3. Collection Split — "For Her" — `public/images/sections/for-her.svg`
**Aspect:** 3:4 (portrait, ~900×1200).
> An elegant feminine luxury fragrance scene. A green-and-gold swirl perfume bottle among
> soft teal peony and jasmine petals, delicate gold floral accents, luminous soft lighting,
> deep bottle-green to soft-teal gradient background. Romantic, airy, editorial, photographic,
> vertical, with negative space at the bottom for a heading. No text.

---

## 4. Discovery Cards (3) — `public/images/sections/discover-*.svg`
**Aspect:** 3:4 (portrait, ~800×1000).

**4a. Men's — `discover-men.svg`**
> Atmospheric flat-lay of a men's luxury perfume world: black-and-gold bottle, dark leather,
> oud wood, gold accents on onyx marble, warm directional light. Editorial, photographic, no text.

**4b. Women's — `discover-women.svg`**
> Atmospheric flat-lay of a women's luxury perfume world: green-and-gold bottle, soft teal
> silk, fresh florals, gold petals on a pale ivory surface, luminous light. Editorial,
> photographic, no text.

**4c. Misk & Oud — `discover-misk.svg`**
> Atmospheric flat-lay of Arabian attar oils: small gold-capped oil bottles, oud wood chips,
> amber resin, brass incense burner with soft smoke, warm candlelight on dark wood. Mystical,
> intimate, editorial, photographic, no text.

---

## 5. Scent-Note Tiles (6) — `public/images/notes/*.svg`
**Aspect:** 1:1 (square, ~600×600). Displayed inside a **circle**, so keep the subject
centered. Macro, tactile, single-ingredient close-ups on a softly blurred background.

| File | Prompt |
|---|---|
| `oud.svg` | Macro close-up of dark oud agarwood chips with glints of gold, warm amber light, soft dark background. Photographic, no text. |
| `musk.svg` | Macro of soft white musk powder and cream-coloured silk folds, warm neutral tones, gentle light. Photographic, no text. |
| `floral.svg` | Macro of fresh jasmine and teal-toned peony petals with gold pollen, soft luminous light. Photographic, no text. |
| `citrus.svg` | Macro of sliced bergamot and lemon with water droplets, bright fresh light, gold accents. Photographic, no text. |
| `woody.svg` | Macro of polished sandalwood and cedar shavings, warm brown and gold tones, soft shadow. Photographic, no text. |
| `amber.svg` | Macro of glowing amber resin and golden honey-like droplets, warm backlight, dark background. Photographic, no text. |

---

## 6. Brand Story — `public/images/sections/brand-story.svg`
**Aspect:** 4:3 (~1000×750).
> An artisanal perfume-making still life: gold-capped bottles, a perfumer's brass scale,
> dried botanicals, oud wood and rose petals on warm ivory linen, soft natural window light,
> a subtle Palestinian craftsmanship feel. Warm, authentic, editorial, photographic. No text.

---

## 7. Lifestyle Banner — `public/images/sections/lifestyle.svg`
**Aspect:** 16:7 (wide, ~1920×840). Used full-bleed with a dark overlay + centered headline,
so keep the center calm.
> A wide atmospheric desert-dusk scene with golden sand dunes, drifting incense smoke, warm
> low sun, and faint gold sparkle in the air; deep onyx and amber tones. Cinematic, moody,
> luxurious, photographic, lots of empty sky for a centered headline. No text.

---

## 8. Social / Open Graph card — `public/images/brand/og-default.svg`
**Aspect:** 1.91:1 (~1200×630). Appears when the site is shared on WhatsApp/Instagram/etc.
> A luxury perfume brand social-share image: a black-and-gold and a green-and-gold perfume
> bottle side by side on dark marble with warm gold rim-light, centered, generous margins,
> elegant and minimal. Photographic, premium. Leave room — a logo/wordmark is added later.
> No text.

---

## Optional upgrades (nice-to-have, not required to launch)
- **Favicon / app icon:** the gold FIRAS crest on an onyx square, 512×512, flat, crisp.
- **Brands strip logos:** if you add a "trusted/inspired-by" logo row later, use plain
  monochrome gold wordmarks on ivory.
- **Per-SKU product photos** (client-supplied, NOT generated here): one retouched master
  bottle per gender + box shot; drop into `public/images/products/` replacing the
  `men-bottle.svg`, `women-bottle.svg`, `misk-bottle.svg`, etc. placeholders. Update paths in
  `data/products.ts` if you change extensions.

## Swapping a placeholder for a real image (example)
The placeholders are `.svg`. To use a generated `hero.jpg`:
1. Save it to `public/images/hero/hero.jpg`.
2. In `app/page.tsx`, change `image="/images/hero/hero.svg"` → `image="/images/hero/hero.jpg"`.
That's it — `next/image` handles the rest. The same pattern applies to every file above
(section paths live in their component under `components/sections/`, note tiles in
`CategoryExplorer.tsx`, product images in `data/products.ts`).
