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
		<section className="relative w-full py-32 md:py-48 overflow-hidden">
			<div className="max-w-7xl mx-auto py-32 lg:py-32 text-center">
				<h1 className="text-7xl font-semibold tracking-tight">
					Create <AuroraText>beautiful</AuroraText> presentations using code
				</h1>
				<div className="text-muted-foreground text-2xl p-8">
					Easily make slides and presentations using react components
				</div>
				<div className="flex flex-row gap-4 items-center justify-center">
					<Button onClick={navigateToComponents} size="lg" variant="default">View Components</Button>
					<Button onClick={navigateToTemplates} size="lg" variant="outline"><GitHub className="size-4" />View on Github</Button>
				</div>
			</div>
		</section >
	)
}
