"use client";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { GitHub } from "@/components/logos/github";

export function Hero() {

	const router = useRouter();

	function navigateToComponents() {
		router.push("/docs/components");
	}

	function navigateToTemplates() {
		router.push("https://github.com/prithvi-rajan-222/slide-cn");
	}
	return (
		<section className="relative w-full px-4 py-12 md:py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-[60vh] md:min-h-[80vh]">
			<div className="max-w-7xl mx-auto text-center">
				<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
					Create <AuroraText>beautiful</AuroraText> presentations using code
				</h1>
				<div className="text-muted-foreground text-lg md:text-xl lg:text-2xl py-6 md:p-8 max-w-2xl mx-auto">
					Easily make slides and presentations using react components
				</div>
				<div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4">
					<Button onClick={navigateToComponents} variant="default" className="w-full sm:w-auto px-8 py-6 text-lg">
						View Components
					</Button>
					<Button onClick={navigateToTemplates} variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg">
						<GitHub className="size-5" />
						View on Github
					</Button>
				</div>
			</div>
		</section>
	)
}
