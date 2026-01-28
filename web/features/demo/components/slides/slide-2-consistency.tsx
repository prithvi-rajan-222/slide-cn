import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";
import { CodeBlock } from "@/components/ui/slide-cn/code-block";
import { Slide } from "@/components/ui/slide-cn/slide";
import LightRays from "@/components/LightRays";

const codeExample = `// Easily theme your slides
<Slide className="bg-background text-foreground">
  <h1 className="text-4xl font-bold">
    Your Design System
  </h1>
</Slide>`;

export function Slide2Consistency() {
    return (
        <Slide background={<LightRays />}>
            <HeaderWithContent title="Consistency & Design System">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-8 h-full">
                    <div className="flex-1 space-y-4 text-xl">
                        <p>
                            Slide-CN is built on top of <strong>Shadcn</strong>. It designed to look beautiful out of the box.
                        </p>
                        <p className="text-muted-foreground">
                            Since everything is styled with code, you can be assured that spacing, fonts, and color will follow a consistent theme across slides.
                        </p>
                    </div>
                    <div className="flex-1 w-full max-w-lg">
                        <CodeBlock code={codeExample} language="tsx" />
                    </div>
                </div>
            </HeaderWithContent>
        </Slide>
    );
}
