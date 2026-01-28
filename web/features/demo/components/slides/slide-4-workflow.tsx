import { Slide } from "@/components/ui/slide-cn/slide";
import { Reveal } from "@/components/ui/slide-cn/reveal";
import { GitBranch, User, Globe } from "lucide-react";
import LightRays from "@/components/LightRays";

export function Slide4Workflow() {
    return (
        <Slide background={<LightRays />}>
            <div className="flex flex-col items-center justify-center h-full space-y-12">
                <h2 className="text-4xl font-bold mb-8">Better Workflow</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full px-8">
                    <Reveal>
                        <div className="flex flex-col items-center text-center space-y-4 p-6 border rounded-xl bg-card">
                            <GitBranch className="size-12 text-orange-500" />
                            <h3 className="text-xl font-semibold">Version Control</h3>
                            <p className="text-muted-foreground">
                                Manage your slides with Git. Track changes and collaborate.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="flex flex-col items-center text-center space-y-4 p-6 border rounded-xl bg-card">
                            <User className="size-12 text-blue-500" />
                            <h3 className="text-xl font-semibold">LLM Friendly</h3>
                            <p className="text-muted-foreground">
                                LLMs are great at generating code to scaffold your presentation.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="flex flex-col items-center text-center space-y-4 p-6 border rounded-xl bg-card">
                            <Globe className="size-12 text-green-500" />
                            <h3 className="text-xl font-semibold">Easy Sharing</h3>
                            <p className="text-muted-foreground">
                                Host your deck as a website. Share it with a simple link.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Slide>
    );
}
