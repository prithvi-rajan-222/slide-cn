"use client";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { GitHub } from "@/components/logos/github";

export function Hero() {

	const router = useRouter();

	function navigateToDocs() {
		router.push("/docs");
	}

	function navigateToTemplates() {
		router.push("https://github.com/prithvi-rajan-222/slide-cn");
	}
	return (
		<section className="relative w-full px-4 pt-10 pb-6 md:pt-24 md:pb-12 overflow-hidden flex flex-col items-center justify-center bg-background text-foreground">
			<div className="max-w-4xl mx-auto text-center z-10 relative">
				<h1 className="text-3xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
					Create <AuroraText>beautiful</AuroraText> presentations using code
				</h1>
				<div className="text-muted-foreground text-base md:text-xl py-6 max-w-2xl mx-auto">
					Easily make slides and presentations using react components
				</div>
				<div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-2">
					<Button onClick={navigateToDocs} variant="default" className="w-full sm:w-auto px-6 py-5 text-base">
						Get Started
					</Button>
					<Button onClick={navigateToTemplates} variant="outline" className="w-full sm:w-auto px-6 py-5 text-base">
						<GitHub className="size-5 mr-2" />
						View on Github
					</Button>
				</div>
			</div>

			<div className="w-full max-w-6xl mx-auto mt-16 md:mt-24 relative z-10">
				<div className="w-full aspect-video rounded-xl border bg-muted/30 flex items-center justify-center text-muted-foreground">
					Demo Placeholder
				</div>
			</div>

			<div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
		</section>
	)
}
