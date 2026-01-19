"use client";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Hero() {

	const router = useRouter();

	function navigateToComponents() {
		router.push("/docs/components");
	}

	function navigateToTemplates() {
		router.push("/docs/templates");
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
					<Button onClick={navigateToTemplates} size="lg" variant="outline">Try Templates</Button>
				</div>
			</div>
		</section >
	)
}
