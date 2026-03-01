# slide-cn Component API Reference

Complete prop tables for all slide-cn components, verified against source code.

---

## Deck

**File:** `components/ui/slide-cn/deck.tsx`
**Directive:** `"use client"` (required)

Manages slide index via React context. Handles keyboard navigation (→/Space = next, ← = prev), touch swipe, and renders `<SlideNav />` and `<NavigationToast />` internally.

**Renders:** `<div className="absolute inset-0 overflow-hidden touch-pan-y md:touch-none h-screen">`

**Required setup:** Wrap in `<div className="fixed inset-0">` in a Next.js page to provide the positioned ancestor.

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | required | `<Slide>` components |
| `className` | `string` | — | Additional CSS classes on root div |
| `showNavigationToast` | `boolean` | `true` | Shows navigation hint overlay on first load |
| `navigationToastProps` | `object` | — | Props forwarded to `<NavigationToast />` |

**useDeck() hook** — returns `{ index: number, total: number, next: () => void, prev: () => void, goTo: (i: number) => void }` from context. Available to any child component.

---

## Slide

**File:** `components/ui/slide-cn/slide.tsx`
**Directive:** `"use client"` (parent Deck already handles this)

Individual slide wrapper. Handles swipe gestures (60px distance OR 600px/s velocity). Only has exit animation (`exit={{ opacity: 0 }}`); no entry animation.

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | required | Slide content |
| `background` | `React.ReactNode` | — | Background layer; renders in `absolute inset-0` with `pointer-events-none` |
| `footer` | `React.ReactNode \| false` | `<SlideFooter />` | Footer component; pass `false` to disable |

---

## TitleSlide

**File:** `components/ui/slide-cn/title-slide.tsx`

Compound component for title/section/closing slides. Renders centered content.

**Usage pattern:** Always wrap in `<div className="relative h-full w-full flex items-center justify-center p-8 md:p-12 lg:p-16">`.

| Sub-component | Element | Default classes | Notes |
|---|---|---|---|
| `TitleSlide` | `div` | `flex flex-col items-center text-center` | Root container |
| `TitleSlide.Heading` | `h1` | `text-6xl font-bold` | Main title |
| `TitleSlide.SubHeading` | `p` | `text-2xl text-muted-foreground` | Subtitle |
| `TitleSlide.Meta` | `p` | `text-sm text-muted-foreground` | Author / date / context |

All sub-components accept `className` (merged) and spread `...props`.

---

## HeaderWithContent

**File:** `components/ui/slide-cn/header-with-content.tsx`

Vertical layout: large header at top, flexible content area below.

**Root styles:** `flex flex-col w-full h-full p-4 md:p-8 gap-4`

**Usage pattern:** Always wrap in:
```tsx
<div className="relative h-full w-full">
  <div className="relative z-10 p-8 md:p-12 lg:p-16">
    <HeaderWithContent>...</HeaderWithContent>
  </div>
</div>
```

| Sub-component | Element | Default classes | Notes |
|---|---|---|---|
| `HeaderWithContent` | `div` | `flex flex-col w-full h-full p-4 md:p-8 gap-4` | Root |
| `HeaderWithContent.Header` | `h1` | `font-bold text-2xl md:text-4xl lg:text-6xl tracking-tight antialiased` | Slide title |
| `HeaderWithContent.Content` | `div` | `text-muted-foreground text-sm md:text-xl lg:text-2xl flex-1` | Body area (takes remaining height) |

All sub-components accept `className` (merged) and spread `...props`.

---

## HorizontalSplit

**File:** `components/ui/slide-cn/horizontal-split.tsx`

Two-column layout. Desktop: CSS grid. Mobile: stacks vertically (`grid-cols-1`).

| Prop | Type | Default | Description |
|---|---|---|---|
| `ratio` | `number` | `0.5` | Left column width as fraction (0.2–0.8). Applied as `--split-ratio` CSS variable |
| `className` | `string` | — | Override or extend root classes |
| `style` | `React.CSSProperties` | — | Inline styles (merged with ratio variable) |
| `children` | `React.ReactNode` | required | Should be `.Left` and `.Right` |

**Desktop grid:** `grid-cols-[var(--split-ratio)_1fr] items-center`
**Mobile:** `grid-cols-1`

| Sub-component | Element | Default classes |
|---|---|---|
| `HorizontalSplit.Left` | `div` | `h-full w-full` |
| `HorizontalSplit.Right` | `div` | `h-full w-full` |

**Tip:** Override to flex for mobile stacking: `<HorizontalSplit className="flex flex-col md:flex-row">`

---

## VerticalSplit

**File:** `components/ui/slide-cn/vertical-split.tsx`

Two-row layout (stacked vertically). Use for sequential steps, before/after comparisons, or timeline slides.

| Sub-component | Element | Notes |
|---|---|---|
| `VerticalSplit.Top` | `div` | Top row |
| `VerticalSplit.Bottom` | `div` | Bottom row |

---

## Reveal

**File:** `components/ui/slide-cn/reveal.tsx`

Progressive disclosure via 3D card flip. Hides content until clicked. One-way only (cannot un-reveal).

**Flip axis auto-detection:** landscape content (width ≥ height) → rotateX (top-to-bottom); portrait (width < height) → rotateY (left-to-right). Uses `ResizeObserver` to stay correct on resize.

**Transition:** 0.6s ease-in-out. Back face shows "Click to reveal" with `backdrop-blur-sm` glass effect.

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | required | Content to reveal |
| `className` | `string` | — | Classes on the outer wrapper. **Always add `h-full`** when inside a grid |

**Important:** The back face uses `backdrop-blur`, so a non-transparent ancestor background is required for it to look correct.

---

## Callout

**File:** `components/ui/slide-cn/callout.tsx`

Semantic highlighted container. Static — not a dismissible alert.

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"info" \| "success" \| "warning" \| "error"` | `"info"` | Visual style and icon |
| `title` | `string` | — | Optional bold heading inside the callout |
| `children` | `React.ReactNode` | — | Body content |
| `className` | `string` | — | Additional CSS classes |

**Variant colors:**
- `info` → blue border/bg, `Info` icon
- `success` → green border/bg, `CheckCircle` icon
- `warning` → yellow border/bg, `AlertTriangle` icon
- `error` → red border/bg, `AlertCircle` icon

**Base classes:** `w-full rounded-lg border p-4 flex items-start gap-4`

---

## CodeBlock

**File:** `components/ui/slide-cn/code-block.tsx`

Syntax-highlighted code display using `react-syntax-highlighter` with `vscDarkPlus` theme. Display only — not editable.

| Prop | Type | Default | Description |
|---|---|---|---|
| `code` | `string` | required | The source code string to display |
| `language` | `string` | `"javascript"` | Syntax highlighting language (e.g., `"typescript"`, `"tsx"`, `"python"`, `"bash"`) |
| `showLineNumbers` | `boolean` | `true` | Show line numbers in gutter |

**Tip:** Declare code strings as `const` outside JSX to keep template literals clean.

---

## SlideImage

**File:** `components/ui/slide-cn/slide-image.tsx`

Compound component for images with optional captions. Uses Next.js `<Image>` and `AspectRatio`.

| Sub-component | Key Props | Defaults | Notes |
|---|---|---|---|
| `SlideImage` | `className`, `...props` | `flex flex-col items-center gap-2` | Root container |
| `SlideImage.Image` | `src`, `alt`, `aspectRatio?`, `objectFit?`, `priority?`, `fillContainer?` | `aspectRatio=16/9`, `objectFit="cover"`, `priority=false`, `fillContainer=false` | The image |
| `SlideImage.Caption` | `children`, `className` | `text-sm text-muted-foreground` | Caption text |

**`fillContainer={true}`** — fills the parent container (`relative w-full h-full flex-1`) instead of using `AspectRatio`. Use this when placing an image inside a `HorizontalSplit.Right` or any flex container.

---

## SlideFooter

**File:** `components/ui/slide-cn/slide-footer.tsx`

Default footer for slides. Shows progress, keyboard hints, and optional branding. Non-sticky, part of content flow.

| Prop | Type | Default | Description |
|---|---|---|---|
| `showProgress` | `boolean` | `true` | Shows "Slide X / Y" counter |
| `showHint` | `boolean` | `true` | Shows keyboard arrows (desktop) or swipe hint (mobile) |
| `showAdd` | `boolean` | `false` | Shows "Built with Slide-CN" branding link |
| `className` | `string` | — | Additional CSS classes |

**Layout:** Three-column grid: left=progress, center=branding, right=hint.

---

## SlideNav

**File:** `components/ui/slide-cn/slide-nav.tsx`

Navigation buttons rendered inside `Deck` automatically. Do not add manually.

---

## NavigationToast

**File:** `components/ui/slide-cn/navigation-toast.tsx`

Toast overlay that shows navigation hints on first load. Rendered inside `Deck` automatically — controlled by `showNavigationToast` prop on `Deck`.

---

## GradientBackground

**File:** `components/ui/slide-cn/backgrounds/dark-mode-gradient.tsx`

Dark cinematic gradient background. Pass to `<Slide background={...}>`.

```tsx
import { GradientBackground } from "@/components/ui/slide-cn/backgrounds/dark-mode-gradient";

<Slide background={<GradientBackground />}>
  ...
</Slide>
```

**Renders:** `<div className="-z-10 h-full w-full bg-gradient-to-br from-zinc-900 via-neutral-950 to-black" />`

---

## useDeck (hook)

**File:** `components/ui/slide-cn/deck.tsx` (exported from)

Access deck state from any component inside `<Deck>`.

```tsx
import { useDeck } from "@/components/ui/slide-cn/deck";

function MyComponent() {
  const { index, total, next, prev, goTo } = useDeck();
  return <span>{index + 1} / {total}</span>;
}
```

| Property | Type | Description |
|---|---|---|
| `index` | `number` | Current slide index (0-based) |
| `total` | `number` | Total number of slides |
| `next()` | `() => void` | Go to next slide |
| `prev()` | `() => void` | Go to previous slide |
| `goTo(i)` | `(i: number) => void` | Jump to specific slide index |
