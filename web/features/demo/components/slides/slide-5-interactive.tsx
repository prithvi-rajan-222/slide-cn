import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";
import { Callout } from "@/components/ui/slide-cn/callout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Slide } from "@/components/ui/slide-cn/slide";
import LightRays from "@/components/LightRays";

export function Slide5Interactive() {
    const [count, setCount] = useState(0);

    return (
        <Slide background={<LightRays />}>
            <HeaderWithContent title="Interactive & Dynamic">
                <div className="flex flex-col items-center justify-center h-full max-w-3xl mx-auto space-y-8 p-8">
                    <p className="text-xl text-center">
                        Your presentation can be alive. Integrate live demos, fetch real-time data, or make content interactive.
                    </p>

                    <div className="w-full space-y-4">
                        <Callout title="Live Components" variant="info">
                            This is a real React component running inside the slide.
                        </Callout>

                        <div className="flex items-center justify-center gap-4 p-6 border rounded-lg bg-muted/50">
                            <span className="text-lg font-mono">Count: {count}</span>
                            <Button onClick={() => setCount(c => c + 1)} size="sm">
                                Make it Interactive
                            </Button>
                        </div>

                        <Callout title="Possibilities" variant="warning">
                            Treating your presentations as a website opens a world of possibilities.
                        </Callout>
                    </div>
                </div>
            </HeaderWithContent>
        </Slide>
    );
}
