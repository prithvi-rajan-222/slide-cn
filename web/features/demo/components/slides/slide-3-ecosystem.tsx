import { HorizontalSplit } from "@/components/ui/slide-cn/horizontal-split";
import { Layers, PieChart, Box } from "lucide-react";
import { Slide } from "@/components/ui/slide-cn/slide";
import LightRays from "@/components/LightRays";

export function Slide3Ecosystem() {
    return (
        <Slide background={<LightRays />}>
            <HorizontalSplit>
                <HorizontalSplit.Left>
                    <div className="p-8 space-y-6 text-lg flex flex-col justify-center h-full">
                        <p>
                            You have the full <strong>React</strong> and <strong>Open Source</strong> ecosystem at your fingertips.
                        </p>
                        <ul className="space-y-4 list-none">
                            <li className="flex items-center gap-3">
                                <PieChart className="text-blue-500" />
                                <span>Need a chart? Import Recharts or Visx.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Box className="text-purple-500" />
                                <span>Need 3D? Use Three.js or React Three Fiber.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Layers className="text-green-500" />
                                <span>Backgrounds? Use generic React libraries.</span>
                            </li>
                        </ul>
                        <p className="text-muted-foreground mt-4">
                            You are no longer limited by what Canva or PowerPoint allows.
                        </p>
                    </div>
                </HorizontalSplit.Left>
                <HorizontalSplit.Right>
                    <div className="flex items-center justify-center h-full bg-muted/20">
                        <div className="grid grid-cols-2 gap-4 p-4">
                            <div className="h-32 w-32 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center border-2 border-blue-500/20">
                                <PieChart className="size-12 text-blue-500" />
                            </div>
                            <div className="h-32 w-32 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center border-2 border-purple-500/20">
                                <Box className="size-12 text-purple-500" />
                            </div>
                            <div className="h-32 w-32 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center col-span-2 border-2 border-green-500/20">
                                <Layers className="size-12 text-green-500" />
                            </div>
                        </div>
                    </div>
                </HorizontalSplit.Right>
            </HorizontalSplit>
        </Slide>
    );
}
