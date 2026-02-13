import { HorizontalSplit } from "@/components/ui/slide-cn/horizontal-split";
import { CodeBlock } from "@/components/ui/slide-cn/code-block";
import { Slide } from "@/components/ui/slide-cn/slide";
import { Palette, Type, Ruler } from "lucide-react";
import { GradientBackground } from "@/components/ui/slide-cn/backgrounds/dark-mode-gradient";

const codeExample = `// Easily theme your slides
<Slide className="bg-background">
  <HeaderWithContent>
    <HeaderWithContent.Header>
      Your Design System
    </HeaderWithContent.Header>
    <HeaderWithContent.Content>
      Consistent, every time.
    </HeaderWithContent.Content>
  </HeaderWithContent>
</Slide>`;

export function Slide2Consistency() {
    return (
        <Slide background={<GradientBackground />}>
            <HorizontalSplit ratio={0.45}>
                <HorizontalSplit.Left>
                    <div className="flex flex-col justify-center h-full p-6 md:p-10 space-y-6">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                            Consistency &<br />Design System
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-md">
                            Built on <strong className="text-foreground">Shadcn</strong>. Styled with code. Beautiful out of the box.
                        </p>
                        <ul className="space-y-4 list-none">
                            <li className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                                    <Palette className="size-5 text-violet-500" />
                                </div>
                                <span className="text-sm md:text-base">Consistent colors &amp; themes</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20">
                                    <Type className="size-5 text-sky-500" />
                                </div>
                                <span className="text-sm md:text-base">Unified typography</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                    <Ruler className="size-5 text-emerald-500" />
                                </div>
                                <span className="text-sm md:text-base">Predictable spacing &amp; layout</span>
                            </li>
                        </ul>
                    </div>
                </HorizontalSplit.Left>
                <HorizontalSplit.Right>
                    <div className="flex items-center justify-center h-full p-4 md:p-8">
                        <div className="w-full max-w-lg">
                            <CodeBlock code={codeExample} language="tsx" />
                        </div>
                    </div>
                </HorizontalSplit.Right>
            </HorizontalSplit>
        </Slide>
    );
}
