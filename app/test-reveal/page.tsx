"use client";

import { Reveal } from "@/registry/slide-cn/reveal/reveal";

export default function TestRevealPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-10 bg-white text-black">
            <h1 className="text-2xl font-bold">Reveal Component Test</h1>

            <div className="max-w-md space-y-4">
                <p>The following content is hidden:</p>

                <Reveal className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                    <p className="font-medium text-lg text-blue-600">
                        Surprise! This is the hidden content.
                    </p>
                    <p className="mt-2 text-gray-600">
                        It should stay revealed after you click it.
                        The layout should not have jumped.
                    </p>
                </Reveal>

                <p>Content below the reveal component.</p>
            </div>

            <Reveal>
                <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    Circle
                </div>
            </Reveal>
        </div>
    );
}
