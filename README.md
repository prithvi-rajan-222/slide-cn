# Slide-CN

Code-first presentations built with React and Shadcn-UI.

Slide-CN is a code-first presentation framework for React. It gives you slide primitives, layouts, and presentation UX you can install through the shadcn registry and compose like the rest of your app.

---

## Why Slide-CN?

Traditional presentation tools often feel restrictive for developers. Slide-CN allows you to build and manage presentations using the same workflow you use for web applications.

- **Developer Workflow**: Draft, version control, and deploy presentations like any other codebase.
- **Full Ecosystem Support**: Leverage the power of React to integrate charts, 3D models with Three.js, or live data visualizations.
- **Design System Consistency**: Built on Shadcn-UI, providing a consistent aesthetic and a customizable theme out of the box.
- **Interactivity**: Create transitions and components that respond to user input or adapt dynamically.
- **Registry Integration**: Add components to your own projects directly using the shadcn CLI.

## What Makes It Different?

- **Slides are real React components**: use JSX, state, hooks, and your existing UI system.
- **Installable through shadcn**: bring only the pieces you want or use the default preset.
- **Built for interactive decks**: keyboard navigation, swipe gestures, layouts, reveals, and live components.
- **Fits a product team workflow**: version control, reviews, deploy previews, and reusable design tokens.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Registry**: [Shadcn UI](https://ui.shadcn.com/)
- **Documentation**: [Fumadocs](https://fumadocs.com/)

## Components

Slide-CN includes a collection of primitive components and layouts optimized for presentations.

[View the components documentation](https://slide-cn.com/docs/components)

## Quick Start

### Using Slide-CN in your project

Install the default preset:

```bash
pnpm dlx shadcn@latest add @slide-cn/slide-cn-default
```

Create your first deck:

```tsx
import { Deck } from "@/components/ui/slide-cn/deck";
import { Slide } from "@/components/ui/slide-cn/slide";
import { TitleSlide } from "@/components/ui/slide-cn/title-slide";

export default function PresentationPage() {
  return (
    <div className="fixed inset-0">
      <Deck>
        <Slide>
          <TitleSlide>
            <TitleSlide.Heading>Hello, Slide-CN</TitleSlide.Heading>
            <TitleSlide.SubHeading>
              Presentations as code
            </TitleSlide.SubHeading>
          </TitleSlide>
        </Slide>
      </Deck>
    </div>
  );
}
```

Run your app:

```bash
pnpm dev
```

### Local Development

```bash
git clone https://github.com/prithvi-rajan-222/slide-cn.git
cd slide-cn
pnpm install
pnpm lint
pnpm build
pnpm registry:build
pnpm dev
```

## Documentation

Full documentation, including installation guides and component demos, is available at [slide-cn.com/docs](https://slide-cn.com/docs).

## License

MIT License.
