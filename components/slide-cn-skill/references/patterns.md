# slide-cn Patterns & Full Deck Recipes

Complete TSX source for production-quality presentations.

---

## Pattern 1: Product Pitch Deck (6 slides)

A complete product pitch: title → problem → solution → benefits (reveal) → code demo → closing.

### File structure

```
app/my-pitch/
  page.tsx
  slides/
    title-slide.tsx
    problem-slide.tsx
    solution-slide.tsx
    benefits-slide.tsx
    demo-slide.tsx
    closing-slide.tsx
```

---

### `page.tsx`

```tsx
"use client";
import { Deck } from "@/components/ui/slide-cn/deck";
import { Slide } from "@/components/ui/slide-cn/slide";
import { SlideFooter } from "@/components/ui/slide-cn/slide-footer";
import { GradientBackground } from "@/components/ui/slide-cn/backgrounds/dark-mode-gradient";
import { TitleSlideContent } from "./slides/title-slide";
import { ProblemSlide } from "./slides/problem-slide";
import { SolutionSlide } from "./slides/solution-slide";
import { BenefitsSlide } from "./slides/benefits-slide";
import { DemoSlide } from "./slides/demo-slide";
import { ClosingSlide } from "./slides/closing-slide";

export default function PitchPage() {
  return (
      <Deck>
        <Slide background={<GradientBackground />} footer={<SlideFooter showAdd />}>
          <TitleSlideContent />
        </Slide>
        <Slide background={<GradientBackground />} footer={<SlideFooter showAdd />}>
          <ProblemSlide />
        </Slide>
        <Slide background={<GradientBackground />} footer={<SlideFooter showAdd />}>
          <SolutionSlide />
        </Slide>
        <Slide background={<GradientBackground />} footer={<SlideFooter showAdd />}>
          <BenefitsSlide />
        </Slide>
        <Slide background={<GradientBackground />} footer={<SlideFooter showAdd />}>
          <DemoSlide />
        </Slide>
        <Slide background={<GradientBackground />} footer={<SlideFooter showAdd />}>
          <ClosingSlide />
        </Slide>
      </Deck>
  );
}
```

---

### `slides/title-slide.tsx`

```tsx
import { TitleSlide } from "@/components/ui/slide-cn/title-slide";

export function TitleSlideContent() {
  return (
    <div className="relative z-10 h-full w-full flex items-center justify-center p-8 md:p-12 lg:p-16">
      <TitleSlide>
        <TitleSlide.Heading className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          ProductName
        </TitleSlide.Heading>
        <TitleSlide.SubHeading className="mt-6">
          A compelling one-liner that captures your product's value
        </TitleSlide.SubHeading>
        <TitleSlide.Meta className="mt-12 text-lg opacity-70">
          Your Name · Company · 2025
        </TitleSlide.Meta>
      </TitleSlide>
    </div>
  );
}
```

---

### `slides/problem-slide.tsx`

```tsx
import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";
import { Callout } from "@/components/ui/slide-cn/callout";
import { AlertTriangle, Clock, DollarSign } from "lucide-react";

export function ProblemSlide() {
  return (
    <div className="relative h-full w-full">
      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        <HeaderWithContent>
          <HeaderWithContent.Header>The Problem</HeaderWithContent.Header>
          <HeaderWithContent.Content>
            <div className="space-y-8">
              <p className="text-2xl text-muted-foreground">
                Teams are losing time and money because current solutions don't work.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl
                  border-2 border-red-200 dark:border-red-900/50
                  bg-gradient-to-br from-red-50/50 to-transparent dark:from-red-950/20">
                  <div className="rounded-2xl bg-red-100 dark:bg-red-900/30 p-4">
                    <Clock className="h-10 w-10 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold">Time Lost</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Hours wasted on manual processes every week.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl
                  border-2 border-orange-200 dark:border-orange-900/50
                  bg-gradient-to-br from-orange-50/50 to-transparent dark:from-orange-950/20">
                  <div className="rounded-2xl bg-orange-100 dark:bg-orange-900/30 p-4">
                    <DollarSign className="h-10 w-10 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold">Revenue Impact</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Missed opportunities due to slow response times.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl
                  border-2 border-yellow-200 dark:border-yellow-900/50
                  bg-gradient-to-br from-yellow-50/50 to-transparent dark:from-yellow-950/20">
                  <div className="rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 p-4">
                    <AlertTriangle className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold">High Risk</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Manual errors that compound into larger failures.
                  </p>
                </div>
              </div>
              <Callout variant="warning" title="The status quo is unsustainable">
                Existing tools solve parts of the problem but miss the big picture.
              </Callout>
            </div>
          </HeaderWithContent.Content>
        </HeaderWithContent>
      </div>
    </div>
  );
}
```

---

### `slides/solution-slide.tsx`

```tsx
import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";
import { HorizontalSplit } from "@/components/ui/slide-cn/horizontal-split";
import { CheckCircle, Zap, Shield, BarChart } from "lucide-react";

export function SolutionSlide() {
  const features = [
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get started in minutes. No configuration required.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant. Data never leaves your infrastructure.",
    },
    {
      icon: BarChart,
      title: "Real-time Analytics",
      description: "Monitor performance with live dashboards.",
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "10x improvement in team productivity on average.",
    },
  ];

  return (
    <div className="relative h-full w-full">
      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        <HeaderWithContent>
          <HeaderWithContent.Header>The Solution</HeaderWithContent.Header>
          <HeaderWithContent.Content>
            <div className="space-y-8">
              <p className="text-2xl text-muted-foreground">
                ProductName eliminates the friction and automates what matters.
              </p>
              <HorizontalSplit className="flex flex-col md:flex-row">
                <HorizontalSplit.Left className="flex flex-col justify-center p-4 space-y-6">
                  {features.slice(0, 2).map(({ icon: Icon, title, description }) => (
                    <div key={title} className="space-y-2">
                      <div className="flex items-center gap-4">
                        <div className="rounded-lg bg-green-100 dark:bg-green-900/30 p-3">
                          <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold">{title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground pl-16">{description}</p>
                    </div>
                  ))}
                </HorizontalSplit.Left>
                <HorizontalSplit.Right className="flex flex-col justify-center p-4 space-y-6">
                  {features.slice(2, 4).map(({ icon: Icon, title, description }) => (
                    <div key={title} className="space-y-2">
                      <div className="flex items-center gap-4">
                        <div className="rounded-lg bg-green-100 dark:bg-green-900/30 p-3">
                          <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold">{title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground pl-16">{description}</p>
                    </div>
                  ))}
                </HorizontalSplit.Right>
              </HorizontalSplit>
            </div>
          </HeaderWithContent.Content>
        </HeaderWithContent>
      </div>
    </div>
  );
}
```

---

### `slides/benefits-slide.tsx`

```tsx
import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";
import { Reveal } from "@/components/ui/slide-cn/reveal";
import { Rocket, Palette, Users2, Sparkles } from "lucide-react";

export function BenefitsSlide() {
  const benefits = [
    {
      icon: Rocket,
      title: "10x Faster",
      description: "Reduce time-to-value from weeks to hours with automated workflows.",
      color: "emerald",
    },
    {
      icon: Palette,
      title: "Full Control",
      description: "Customize every aspect to match your brand and requirements.",
      color: "violet",
    },
    {
      icon: Users2,
      title: "Team Collaboration",
      description: "Built for teams. Real-time sync, roles, and permissions included.",
      color: "cyan",
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Intelligent suggestions and automation that learns from your data.",
      color: "amber",
    },
  ];

  const colorMap: Record<string, string> = {
    emerald: "border-emerald-200 dark:border-emerald-900/50 from-emerald-50/50 dark:from-emerald-950/20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    violet: "border-violet-200 dark:border-violet-900/50 from-violet-50/50 dark:from-violet-950/20 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400",
    cyan: "border-cyan-200 dark:border-cyan-900/50 from-cyan-50/50 dark:from-cyan-950/20 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400",
    amber: "border-amber-200 dark:border-amber-900/50 from-amber-50/50 dark:from-amber-950/20 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
  };

  return (
    <div className="relative h-full w-full">
      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        <HeaderWithContent>
          <HeaderWithContent.Header>Key Benefits</HeaderWithContent.Header>
          <HeaderWithContent.Content>
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8">
              {benefits.map(({ icon: Icon, title, description, color }) => {
                const colors = colorMap[color].split(" ");
                return (
                  <Reveal key={title} className="h-full">
                    <div className={`flex flex-col items-center text-center space-y-4 p-8 rounded-2xl
                      border-2 ${colors[0]} ${colors[1]}
                      bg-gradient-to-br ${colors[2]} ${colors[3]} to-transparent
                      hover:scale-105 transition-transform h-full`}>
                      <div className={`rounded-2xl ${colors[4]} ${colors[5]} p-4`}>
                        <Icon className={`h-10 w-10 ${colors[6]} ${colors[7]}`} />
                      </div>
                      <h3 className="text-2xl font-bold">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </HeaderWithContent.Content>
        </HeaderWithContent>
      </div>
    </div>
  );
}
```

---

### `slides/demo-slide.tsx`

```tsx
import { HorizontalSplit } from "@/components/ui/slide-cn/horizontal-split";
import { CodeBlock } from "@/components/ui/slide-cn/code-block";
import { Callout } from "@/components/ui/slide-cn/callout";

const exampleCode = `import { ProductClient } from "@productname/sdk";

const client = new ProductClient({
  apiKey: process.env.PRODUCT_API_KEY,
});

// Process data with a single call
const result = await client.process({
  input: userRequest,
  options: { optimize: true },
});

console.log(result.output); // Done in <100ms`;

export function DemoSlide() {
  return (
    <div className="relative h-full w-full">
      <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full">
        <HorizontalSplit ratio={0.45} className="h-full">
          <HorizontalSplit.Left className="flex flex-col justify-center p-4 space-y-6">
            <h2 className="text-3xl font-bold">Simple Integration</h2>
            <p className="text-muted-foreground leading-relaxed">
              Three lines to connect. One call to run. Works with your existing stack.
            </p>
            <Callout variant="success" title="Zero config required">
              Auto-detects your environment and optimizes settings automatically.
            </Callout>
          </HorizontalSplit.Left>
          <HorizontalSplit.Right className="flex items-center p-4">
            <CodeBlock code={exampleCode} language="typescript" />
          </HorizontalSplit.Right>
        </HorizontalSplit>
      </div>
    </div>
  );
}
```

---

### `slides/closing-slide.tsx`

```tsx
import { TitleSlide } from "@/components/ui/slide-cn/title-slide";

export function ClosingSlide() {
  return (
    <div className="relative z-10 h-full w-full flex items-center justify-center p-8 md:p-12 lg:p-16">
      <TitleSlide>
        <TitleSlide.Heading className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
          Let's Get Started
        </TitleSlide.Heading>
        <TitleSlide.SubHeading className="mt-6">
          Join hundreds of teams already using ProductName
        </TitleSlide.SubHeading>
        <TitleSlide.Meta className="mt-12 text-lg opacity-70">
          contact@yourcompany.com · yourcompany.com/demo
        </TitleSlide.Meta>
      </TitleSlide>
    </div>
  );
}
```

---

## Pattern 2: Technical Deep-Dive (Code-Heavy)

A technical presentation with multiple code slides demonstrating an API or library.

### File structure

```
app/tech-talk/
  page.tsx
  slides/
    intro-slide.tsx
    setup-slide.tsx
    core-api-slide.tsx
    advanced-slide.tsx
    summary-slide.tsx
```

### `slides/setup-slide.tsx`

```tsx
import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";
import { HorizontalSplit } from "@/components/ui/slide-cn/horizontal-split";
import { CodeBlock } from "@/components/ui/slide-cn/code-block";
import { Callout } from "@/components/ui/slide-cn/callout";

const installCode = `# Install the library
pnpm add @your-org/library

# Or with npm
npm install @your-org/library`;

const configCode = `// lib/config.ts
import { createClient } from "@your-org/library";

export const client = createClient({
  endpoint: process.env.API_ENDPOINT!,
  timeout: 5000,
});`;

export function SetupSlide() {
  return (
    <div className="relative h-full w-full">
      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        <HeaderWithContent>
          <HeaderWithContent.Header>Installation & Setup</HeaderWithContent.Header>
          <HeaderWithContent.Content>
            <div className="space-y-6">
              <HorizontalSplit ratio={0.5} className="flex flex-col md:flex-row gap-6">
                <HorizontalSplit.Left className="flex flex-col space-y-3">
                  <h3 className="text-lg font-semibold">1. Install</h3>
                  <CodeBlock code={installCode} language="bash" showLineNumbers={false} />
                </HorizontalSplit.Left>
                <HorizontalSplit.Right className="flex flex-col space-y-3">
                  <h3 className="text-lg font-semibold">2. Configure</h3>
                  <CodeBlock code={configCode} language="typescript" />
                </HorizontalSplit.Right>
              </HorizontalSplit>
              <Callout variant="info" title="TypeScript first">
                Full type inference out of the box. No extra setup needed.
              </Callout>
            </div>
          </HeaderWithContent.Content>
        </HeaderWithContent>
      </div>
    </div>
  );
}
```

### `slides/core-api-slide.tsx`

```tsx
import { HorizontalSplit } from "@/components/ui/slide-cn/horizontal-split";
import { CodeBlock } from "@/components/ui/slide-cn/code-block";

const apiCode = `import { client } from "@/lib/config";

// Basic query
const users = await client.query("users", {
  where: { active: true },
  limit: 10,
  orderBy: { createdAt: "desc" },
});

// Mutation with optimistic update
const newUser = await client.mutate("createUser", {
  data: { name: "Alice", role: "admin" },
  optimistic: true,
});

// Real-time subscription
const unsubscribe = client.subscribe("users", {
  onChange: (update) => console.log(update),
});`;

export function CoreApiSlide() {
  return (
    <div className="relative h-full w-full">
      <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full">
        <HorizontalSplit ratio={0.4} className="h-full">
          <HorizontalSplit.Left className="flex flex-col justify-center p-4 space-y-6">
            <h2 className="text-3xl font-bold">Core API</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="font-mono text-sm bg-muted px-2 py-1 rounded">query</span>
                <span className="text-sm">Fetch data with filtering, sorting, and pagination</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-sm bg-muted px-2 py-1 rounded">mutate</span>
                <span className="text-sm">Create, update, or delete with optimistic UI support</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-sm bg-muted px-2 py-1 rounded">subscribe</span>
                <span className="text-sm">Real-time updates via WebSocket</span>
              </div>
            </div>
          </HorizontalSplit.Left>
          <HorizontalSplit.Right className="flex items-center p-4">
            <CodeBlock code={apiCode} language="typescript" />
          </HorizontalSplit.Right>
        </HorizontalSplit>
      </div>
    </div>
  );
}
```

---

## Key Styling Patterns Reference

### Gradient headings

```tsx
// Blue → purple → pink (default brand)
className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"

// Emerald → teal → cyan (success/nature)
className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent"

// Orange → rose (energetic/warm)
className="bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 bg-clip-text text-transparent"
```

### Color palette for multi-card grids

4-card grid: `emerald`, `violet`, `cyan`, `amber`
3-card grid: `blue`, `purple`, `pink` or `green`, `orange`, `red`

### Card classes by color (copy-paste ready)

```tsx
// Emerald
border-2 border-emerald-200 dark:border-emerald-900/50
bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-emerald-950/20
rounded-2xl bg-emerald-100 dark:bg-emerald-900/30   // icon container
text-emerald-600 dark:text-emerald-400               // icon color

// Violet
border-2 border-violet-200 dark:border-violet-900/50
bg-gradient-to-br from-violet-50/50 to-transparent dark:from-violet-950/20
rounded-2xl bg-violet-100 dark:bg-violet-900/30
text-violet-600 dark:text-violet-400

// Cyan
border-2 border-cyan-200 dark:border-cyan-900/50
bg-gradient-to-br from-cyan-50/50 to-transparent dark:from-cyan-950/20
rounded-2xl bg-cyan-100 dark:bg-cyan-900/30
text-cyan-600 dark:text-cyan-400

// Amber
border-2 border-amber-200 dark:border-amber-900/50
bg-gradient-to-br from-amber-50/50 to-transparent dark:from-amber-950/20
rounded-2xl bg-amber-100 dark:bg-amber-900/30
text-amber-600 dark:text-amber-400
```

### Reveal grid (2×2, equal height cards)

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8">
  <Reveal className="h-full">
    <div className="... h-full">...</div>
  </Reveal>
  {/* repeat */}
</div>
```

### HorizontalSplit with full-height code

```tsx
<HorizontalSplit ratio={0.45} className="h-full">
  <HorizontalSplit.Left className="flex flex-col justify-center p-6 space-y-6">
    ...
  </HorizontalSplit.Left>
  <HorizontalSplit.Right className="flex items-center p-6">
    <CodeBlock code={code} language="typescript" />
  </HorizontalSplit.Right>
</HorizontalSplit>
```

Wrap the parent slide content div with `h-full` to propagate height: `<div className="relative z-10 p-8 md:p-12 lg:p-16 h-full">`.
