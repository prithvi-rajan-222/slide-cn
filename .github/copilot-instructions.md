# GitHub Copilot Instructions for Slide-CN

This repository contains slide-cn — a code-first presentation framework built on React, Next.js, Tailwind CSS, and shadcn.

---

## Creating Presentations

When asked to create a presentation, build slides, make a slide deck, add a new slide, or generate any TSX files for a slide-cn deck, follow these conventions:

### File Format

All slide files are `.tsx` with `"use client"` at the top. Import components from `@/components/ui/slide-cn/`.

### Deck & Slide

Every `<Slide>` is a direct child of `<Deck>`. Navigation (keyboard arrows/space, touch swipe), `<SlideNav />`, and `<NavigationToast />` are all built into `<Deck>` — do not add them manually.

`<Slide>` accepts a `background` prop (renders behind content, `pointer-events-none`) and a `footer` prop (defaults to `<SlideFooter />`; pass `false` to hide).

### File Organization

Split each slide into its own component file in a `slides/` directory next to `page.tsx`. The `page.tsx` owns the `<Deck>` and `<Slide>` wrappers; each slide file exports the content component.

### Layout Components

| Component | Use for |
|---|---|
| `TitleSlide` | Opening / section divider / closing. Compound: `.Heading`, `.SubHeading`, `.Meta` |
| `HeaderWithContent` | Header + body area. Compound: `.Header`, `.Content` |
| `HorizontalSplit` | Two-column layout. `ratio` prop (0–1) controls left width. Compound: `.Left`, `.Right` |
| `VerticalSplit` | Two-row layout. Compound: `.Top`, `.Bottom` |

### Content Components

- **`CodeBlock`** — syntax-highlighted display. Props: `code` (string), `language`, `showLineNumbers`. Always declare code strings as `const` outside JSX.
- **`Reveal`** — 3D card flip for progressive disclosure. Add `className="h-full"` when inside a grid.
- **`Callout`** — semantic highlight box. Variants: `info`, `success`, `warning`, `error`. Props: `variant`, `title`, `children`.
- **`SlideImage`** — Next.js image with optional caption. Compound: `.Image` (props: `src`, `alt`, `aspectRatio`, `fillContainer`), `.Caption`. Use `fillContainer={true}` inside flex/split containers.

### SlideFooter

Shows progress and nav hints. Key props: `showProgress`, `showHint`, `showAdd` (renders "Built with Slide-CN" branding).

### useDeck Hook

Access deck state from any child: `const { index, total, next, prev, goTo } = useDeck()`. Import from `@/components/ui/slide-cn/deck`.

### Backgrounds

Pass any background component to `<Slide background={...}>`. Three options:

- `LinearGradient` (`backgrounds/gradients/linear`) — top-left to bottom-right gradient using theme tokens (`--background`, `--background-2`, `--background-3`).
- `RadialGradient` (`backgrounds/gradients/radial`) — radial gradient from center using theme tokens (`--background`, `--background-2`, `--background-3`).

---

## Generating Themes

When asked to generate a theme, create a colour scheme, add a theme, or when the user provides oklch color values:

### Inputs Required

Ask the user for these 4 values if not already provided:

```
bg1      oklch(...)   first background/gradient color
bg2      oklch(...)   second background/gradient color
bg3      oklch(...)   third background/gradient color
primary  oklch(...)   primary brand/action color
```

### Derivation Rules

**Surfaces** — derived from bg1's hue and chroma:
```
dark mode:  --card: bg1 L+0.06, --popover: bg1 L+0.10, --muted: bg1 L+0.04
light mode: --card: bg1 L-0.06, --popover: bg1 L-0.10, --muted: bg1 L-0.04
```

**Secondary** — same hue as primary, chroma halved:
```
dark mode:  lightness 0.25, chroma primary_chroma/2, same hue
light mode: lightness 0.70, chroma primary_chroma/2, same hue
```

**Accent** = bg3 directly. **Ring** = primary. **Destructive** = `oklch(0.55 0.22 25)` always.

### Output Format

Output the complete `cssVars` JSON block with `theme`, `light`, and `dark` keys, ready to paste into a registry item. Round oklch values to 4 decimal places.

---

## Project Structure

- `components/ui/slide-cn/` — component library distributed via shadcn registry
- `web/features/` — landing page sections
- `content/docs/` — MDX documentation files
- `app/demos/` — live presentation demos
- `registry.json` — defines publishable components

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — build the project
- `pnpm lint` — run Next.js linter
- `pnpm registry:build` — generate component JSON files in `public/r/`
