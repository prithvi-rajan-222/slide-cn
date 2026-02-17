"use client";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Demo } from "../../demo/components/demo";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const INSTALL_COMMAND = "pnpm dlx shadcn@latest add @slide-cn/slide-cn-default";

export function Hero() {
	const router = useRouter();
	const [copied, setCopied] = useState(false);

	function navigateToDocs() {
		router.push("/docs");
	}

	function navigateToDemo() {
		router.push("/demos/slide-cn-introduction");
	}

	function copyInstallCommand() {
		navigator.clipboard.writeText(INSTALL_COMMAND);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}

	return (
		<section className="relative w-full px-4 pt-10 pb-6 md:pt-24 md:pb-12 overflow-hidden flex flex-col items-center justify-center bg-background text-foreground">
			<div className="max-w-4xl mx-auto text-center z-10 relative">
				<h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
					Create <AuroraText>beautiful</AuroraText> presentations using code
				</h1>
				<p className="text-muted-foreground text-sm sm:text-base md:text-xl pt-4 sm:pt-6 pb-4 max-w-2xl mx-auto">
					Build slides as React components. Version control with Git, style with Tailwind, and present from your Next.js app.
				</p>
				<div className="flex flex-row gap-3 sm:gap-4 items-center justify-center mt-2">
					<Button onClick={navigateToDocs} variant="default" className="w-auto px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base">
						Get Started
					</Button>
					<Button onClick={navigateToDemo} variant="outline" className="w-auto px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base">
						View Demo
					</Button>
				</div>

				<div className="mt-6 sm:mt-8 flex items-center justify-center w-full min-w-0">
					<div className="flex items-center gap-2 sm:gap-3 bg-muted/50 border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 font-mono text-[10px] sm:text-xs md:text-sm text-muted-foreground min-w-0 max-w-full overflow-x-auto">
						<code className="">{INSTALL_COMMAND}</code>
						<button
							onClick={copyInstallCommand}
							className="shrink-0 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
							aria-label="Copy install command"
						>
							{copied ? <Check className="size-4" /> : <Copy className="size-4" />}
						</button>
					</div>
				</div>
			</div>

			<div className="w-full max-w-6xl mx-auto mt-12 md:mt-20 h-220 md:h-200 bg-black rounded-md relative z-10">
				<Demo />
			</div>

			<div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
		</section>
	);
}
