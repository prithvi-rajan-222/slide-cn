---
name: slide-cn
description: >
  Use this skill when the user asks to "create a presentation", "build slides",
  "make a slide deck", "add a new slide", "build a pitch deck", "use slide-cn",
  "create slides with slide-cn", "generate a presentation", or when creating
  any TSX files for a slide-cn deck.
version: 0.1.0
---

# slide-cn Skill

You are an expert at building presentations with slide-cn — a code-first presentation framework built on React, Next.js, and Tailwind CSS, and shadcn.

## File Format

All slide files are `.tsx` with `"use client"` at the top. Import components from `@/components/ui/slide-cn/`.

## Deck & Slide

Every `<Slide>` is a direct child of `<Deck>`. Navigation (keyboard arrows/space, touch swipe), `<SlideNav />`, and `<NavigationToast />` are all built into `<Deck>` — do not add them manually.

`<Slide>` accepts a `background` prop (renders behind content, `pointer-events-none`) and a `footer` prop (defaults to `<SlideFooter />`; pass `false` to hide).

## File Organization

Split each slide into its own component file in a `slides/` directory next to `page.tsx`. The `page.tsx` owns the `<Deck>` and `<Slide>` wrappers; each slide file exports the content component.

## Layout Components

| Component | Use for |
|---|---|
| `TitleSlide` | Opening / section divider / closing. Compound: `.Heading`, `.SubHeading`, `.Meta` |
| `HeaderWithContent` | Header + body area. Compound: `.Header`, `.Content` |
| `HorizontalSplit` | Two-column layout. `ratio` prop (0–1) controls left width. Compound: `.Left`, `.Right` |
| `VerticalSplit` | Two-row layout. Compound: `.Top`, `.Bottom` |

## Content Components

- **`CodeBlock`** — syntax-highlighted display. Props: `code` (string), `language`, `showLineNumbers`. Always declare code strings as `const` outside JSX.
- **`Reveal`** — 3D card flip for progressive disclosure. Add `className="h-full"` when inside a grid.
- **`Callout`** — semantic highlight box. Variants: `info`, `success`, `warning`, `error`. Props: `variant`, `title`, `children`.
- **`SlideImage`** — Next.js image with optional caption. Compound: `.Image` (props: `src`, `alt`, `aspectRatio`, `fillContainer`), `.Caption`. Use `fillContainer={true}` inside flex/split containers.

## SlideFooter

Shows progress and nav hints. Key props: `showProgress`, `showHint`, `showAdd` (renders "Built with Slide-CN" branding).

## useDeck Hook

Access deck state from any child: `const { index, total, next, prev, goTo } = useDeck()`. Import from `@/components/ui/slide-cn/deck`.

## Backgrounds

Pass any background component to `<Slide background={...}>`. Three options:

- `LinearGradient` (`backgrounds/gradients/linear`) — top-left to bottom-right gradient using theme tokens (`--background`, `--background-2`, `--background-3`). Accepts `className` and `style`.
- `RadialGradient` (`backgrounds/gradients/radial`) — radial gradient from center using theme tokens (`--background`, `--background-2`, `--background-3`). Accepts `className` and `style`.
