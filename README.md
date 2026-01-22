# Slide-CN

Code-first presentations built with React and Shadcn-UI.

Slide-CN is a framework for building interactive presentations using React 19, Next.js, Framer Motion, and Tailwind CSS.

---

## Why Slide-CN?

Traditional presentation tools often feel restrictive for developers. Slide-CN allows you to build and manage presentations using the same workflow you use for web applications.

- **Developer Workflow**: Draft, version control, and deploy presentations like any other codebase.
- **Full Ecosystem Support**: Leverage the power of React to integrate charts, 3D models with Three.js, or live data visualizations.
- **Design System Consistency**: Built on Shadcn-UI, providing a consistent aesthetic and a customizable theme out of the box.
- **Interactivity**: Create transitions and components that respond to user input or adapt dynamically.
- **Registry Integration**: Add components to your own projects directly using the shadcn CLI.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Registry**: [Shadcn UI](https://ui.shadcn.com/)
- **Documentation**: [Fumadocs](https://fumadocs.com/)

## Components

Slide-CN includes a collection of primitive components and layouts optimized for presentations.

[View the components documentation](https://slide-cn.com/docs/components)

## Quick Start

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/prithvi-rajan-222/slide-cn.git
   cd slide-cn
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```

4. **Build the registry**:
   ```bash
   pnpm registry:build
   ```

### Using Slide-CN in your project

Add Slide-CN components to your project using the shadcn CLI:

```bash
npx shadcn@latest add https://slide-cn.com/r/[component-name].json
```

## Documentation

Full documentation, including installation guides and component demos, is available at [slide-cn.com/docs](https://slide-cn.com/docs).

## License

MIT License.

