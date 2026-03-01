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

You are an expert at building presentations with slide-cn — a code-first presentation framework built on React, Next.js, and Tailwind CSS. Follow these rules precisely when creating or editing slide decks.

## 1. File Format

All slide files are `.tsx`. Every file that renders slide-cn components (including the deck page) must have `"use client"` at the top. Import components from `@/components/ui/slide-cn/`.

```tsx
"use client";
import { Deck } from "@/components/ui/slide-cn/deck";
import { Slide } from "@/components/ui/slide-cn/slide";
```

## 2. Deck Setup

In a Next.js App Router page, wrap `<Deck>` in `<div className="fixed inset-0">`. This provides the positioned ancestor that `Deck` (`absolute inset-0 h-screen`) requires. Every `<Slide>` is a direct child of `<Deck>`.

```tsx
export default function PresentationPage() {
  return (
    <div className="fixed inset-0">
      <Deck>
        <Slide>
          <TitleSlideContent />
        </Slide>
        <Slide>
          <AnotherSlideContent />
        </Slide>
      </Deck>
    </div>
  );
}
```

`Deck` includes built-in keyboard navigation (→ / Space = next; ← = prev), touch/swipe, `<SlideNav />`, and `<NavigationToast />`. Do not add these manually. `showNavigationToast` defaults to `true` — omit it unless customizing.

## 3. Organizing a Presentation

Split each slide into its own component file inside a `slides/` directory next to `page.tsx`:

```
app/my-presentation/
  page.tsx                    ← Deck + Slide wrappers
  slides/
    title-slide.tsx
    problem-slide.tsx
    solution-slide.tsx
    features-slide.tsx
    closing-slide.tsx
```

The `page.tsx` composes them:

```tsx
"use client";
import { Deck } from "@/components/ui/slide-cn/deck";
import { Slide } from "@/components/ui/slide-cn/slide";
import { SlideFooter } from "@/components/ui/slide-cn/slide-footer";
import { TitleSlideContent } from "./slides/title-slide";
import { ProblemSlide } from "./slides/problem-slide";
import { SolutionSlide } from "./slides/solution-slide";
import { ClosingSlide } from "./slides/closing-slide";

export default function PresentationPage() {
  return (
    <div className="fixed inset-0">
      <Deck>
        <Slide footer={<SlideFooter showAdd />}>
          <TitleSlideContent />
        </Slide>
        <Slide footer={<SlideFooter showAdd />}>
          <ProblemSlide />
        </Slide>
        <Slide footer={<SlideFooter showAdd />}>
          <SolutionSlide />
        </Slide>
        <Slide footer={<SlideFooter showAdd />}>
          <ClosingSlide />
        </Slide>
      </Deck>
    </div>
  );
}
```

## 4. Layout Selection Guide

Choose the right layout component for each slide's purpose:

| Slide purpose | Layout |
|---|---|
| Opening title / section divider / closing | `TitleSlide` |
| Concept + code, text + image, two equal columns | `HorizontalSplit` |
| Header then list, grid of cards, or body content | `HeaderWithContent` |
| Sequential steps / before → after / timeline | `VerticalSplit` |
| Full-bleed immersive / image-first | Raw `Slide` with absolute overlays |

## 5. Inner Wrapper Pattern

Every slide component needs a specific inner wrapper — never skip this.

**TitleSlide slides** (centered, vertically + horizontally):
```tsx
<div className="relative h-full w-full flex items-center justify-center p-8 md:p-12 lg:p-16">
  <TitleSlide>
    ...
  </TitleSlide>
</div>
```

**HeaderWithContent slides** (full height, z-stacking for backgrounds):
```tsx
<div className="relative h-full w-full">
  <div className="relative z-10 p-8 md:p-12 lg:p-16">
    <HeaderWithContent>
      ...
    </HeaderWithContent>
  </div>
</div>
```

## 6. TitleSlide Component

Use for title slides, section dividers, and closing slides. Compound component pattern:

```tsx
import { TitleSlide } from "@/components/ui/slide-cn/title-slide";

<TitleSlide>
  <TitleSlide.Heading className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
    Your Presentation Title
  </TitleSlide.Heading>
  <TitleSlide.SubHeading className="mt-6">
    A compelling subtitle that supports your heading
  </TitleSlide.SubHeading>
  <TitleSlide.Meta className="mt-12 text-lg opacity-70">
    Author · Date · Context
  </TitleSlide.Meta>
</TitleSlide>
```

All sub-components accept `className` and spread `...props` — override freely.

## 7. HeaderWithContent Component

Use when a slide has a clear header and body area. Sub-components compose the layout:

```tsx
import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";

<HeaderWithContent>
  <HeaderWithContent.Header>Slide Title</HeaderWithContent.Header>
  <HeaderWithContent.Content>
    {/* Any content: grids, lists, text, cards */}
    <p className="text-2xl text-muted-foreground">Supporting text here.</p>
    <div className="grid grid-cols-2 gap-8 mt-8">
      {/* cards */}
    </div>
  </HeaderWithContent.Content>
</HeaderWithContent>
```

## 8. HorizontalSplit Component

Use for two-column layouts. The `ratio` prop (0.2–0.8) controls the left column width. Default is 0.5 (equal split).

```tsx
import { HorizontalSplit } from "@/components/ui/slide-cn/horizontal-split";

<HorizontalSplit ratio={0.45}>
  <HorizontalSplit.Left className="flex flex-col justify-center p-6 space-y-6">
    <h2 className="text-3xl font-bold">Left Side</h2>
    <p className="text-muted-foreground">Explanation text.</p>
  </HorizontalSplit.Left>
  <HorizontalSplit.Right>
    {/* Right side content: code, image, etc. */}
  </HorizontalSplit.Right>
</HorizontalSplit>
```

For flex-based stacking on mobile, override the grid: `<HorizontalSplit className="flex flex-col md:flex-row">`. Both `.Left` and `.Right` are `h-full w-full`.

## 9. Code Demo Slides

Use `HorizontalSplit` with explanation on the left and `CodeBlock` on the right:

```tsx
import { HorizontalSplit } from "@/components/ui/slide-cn/horizontal-split";
import { CodeBlock } from "@/components/ui/slide-cn/code-block";

const codeExample = `function greet(name: string) {
  return \`Hello, \${name}!\`;
}`;

<HorizontalSplit ratio={0.45}>
  <HorizontalSplit.Left className="flex flex-col justify-center p-6 space-y-6">
    <h2 className="text-3xl font-bold">Feature Name</h2>
    <p className="text-muted-foreground leading-relaxed">
      Explanation of what the code does and why it matters.
    </p>
  </HorizontalSplit.Left>
  <HorizontalSplit.Right className="flex items-center p-6">
    <CodeBlock code={codeExample} language="typescript" />
  </HorizontalSplit.Right>
</HorizontalSplit>
```

`CodeBlock` defaults: `language="javascript"`, `showLineNumbers={true}`. Uses vscDarkPlus theme. Always pass code as a `const` string declared outside the JSX.

## 10. Reveal Cards (Progressive Disclosure)

Use `Reveal` for interactive step-by-step storytelling. Each card is hidden behind a frosted-glass back face until clicked. One-way only (cannot un-reveal).

Always set `className="h-full"` on `<Reveal>` when inside a grid so it fills the cell.

```tsx
import { Reveal } from "@/components/ui/slide-cn/reveal";

<div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8">
  <Reveal className="h-full">
    <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl
      border-2 border-emerald-200 dark:border-emerald-900/50
      bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-emerald-950/20
      hover:scale-105 transition-transform h-full">
      <div className="rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 p-4">
        <Rocket className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
      </div>
      <h3 className="text-2xl font-bold">Card Title</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Description text here.
      </p>
    </div>
  </Reveal>
</div>
```

The `Reveal` component auto-detects flip axis: landscape content flips top-to-bottom (rotateX), portrait flips left-to-right (rotateY).

## 11. Callout Component

Use semantic variants to match message intent:

```tsx
import { Callout } from "@/components/ui/slide-cn/callout";

<Callout variant="info" title="Note">Neutral tip or contextual note.</Callout>
<Callout variant="success" title="Result">Positive outcome or achievement.</Callout>
<Callout variant="warning" title="Caveat">Something to watch out for.</Callout>
<Callout variant="error" title="Problem">A failure or issue being discussed.</Callout>
```

Variant colors: `info`=blue, `success`=green, `warning`=yellow, `error`=red. Includes icon automatically.

## 12. SlideImage Component

Use `SlideImage` for images with optional captions. Compound pattern:

```tsx
import { SlideImage } from "@/components/ui/slide-cn/slide-image";

<SlideImage>
  <SlideImage.Image src="/path/to/image.png" alt="Description" aspectRatio={16/9} />
  <SlideImage.Caption>Figure caption here</SlideImage.Caption>
</SlideImage>
```

Use `fillContainer={true}` on `SlideImage.Image` when you want it to fill a parent container (e.g., the right side of a `HorizontalSplit`).

## 13. Backgrounds

Pass any React node to `<Slide background={...}>`. The background renders in an `absolute inset-0` layer behind slide content with `pointer-events-none`.

Use `GradientBackground` from `@/components/ui/slide-cn/backgrounds/dark-mode-gradient` for a dark cinematic look:

```tsx
import { GradientBackground } from "@/components/ui/slide-cn/backgrounds/dark-mode-gradient";
import { SlideFooter } from "@/components/ui/slide-cn/slide-footer";

<Slide background={<GradientBackground />} footer={<SlideFooter showAdd />}>
  <TitleSlideContent />
</Slide>
```

For custom backgrounds, create a component that renders an absolutely-positioned element inside a `h-full w-full` container.

## 14. Footer

`<SlideFooter />` is the default footer — automatically shows slide progress and keyboard hints. Override with the `footer` prop on `<Slide>`:

- `footer={<SlideFooter />}` — default (progress + keyboard hint)
- `footer={<SlideFooter showAdd />}` — adds slide-cn branding (use for your own presentations)
- `footer={<SlideFooter showHint={false} />}` — hides navigation hint
- `footer={false}` — disables footer entirely

## 15. Typography and Color Hierarchy

Apply consistent typographic scale across slides:

**Gradient heading** (use on title slides for impact):
```tsx
<TitleSlide.Heading className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
  Main Title
</TitleSlide.Heading>
```

**Large supporting text**:
```tsx
<p className="text-2xl md:text-3xl text-muted-foreground">Supporting statement.</p>
```

**Body text inside cards**:
```tsx
<p className="text-sm text-muted-foreground leading-relaxed">Card description.</p>
```

Always pair light and dark variants: `border-emerald-200 dark:border-emerald-900/50`, `bg-emerald-100 dark:bg-emerald-900/30`, `text-emerald-600 dark:text-emerald-400`.

## 16. Card Pattern

The standard icon + title + description card for feature grids:

```tsx
<div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl
  border-2 border-{color}-200 dark:border-{color}-900/50
  bg-gradient-to-br from-{color}-50/50 to-transparent dark:from-{color}-950/20
  hover:scale-105 transition-transform">
  <div className="rounded-2xl bg-{color}-100 dark:bg-{color}-900/30 p-4">
    <Icon className="h-10 w-10 text-{color}-600 dark:text-{color}-400" />
  </div>
  <h3 className="text-2xl font-bold">Card Title</h3>
  <p className="text-sm text-muted-foreground leading-relaxed">Description.</p>
</div>
```

Suggested color palette for multi-card grids: `emerald`, `violet`, `cyan`, `amber` (distinct, visually balanced).

## 17. Spacing and Polish Rules

- **Container gaps**: `space-y-8` between major content sections
- **Card grids**: `gap-8` between cards; `items-stretch` for equal-height cards
- **Card padding**: `p-6` for smaller cards, `p-8` for larger feature cards
- **Icon containers**: `p-4 rounded-2xl` for feature icons, `p-3 rounded-lg` for inline icons
- **Icon sizing**: `h-10 w-10` for feature card icons, `h-6 w-6` for inline icons
- **Border radius**: `rounded-2xl` for large cards and icon containers, `rounded-lg` for smaller elements
- **Hover effects**: `hover:scale-105 transition-transform` on interactive-feeling cards
- **Opacity modifiers**: use `opacity-70` on meta text, `opacity-50` on subtle branding

## 18. Reference Files

When you need complete prop tables or full multi-slide deck examples:

- **`references/components.md`** — exhaustive API reference for every component (props, types, defaults, sub-components, notes)
- **`references/patterns.md`** — full TSX source for complete 6-slide product pitch deck and technical deep-dive deck
