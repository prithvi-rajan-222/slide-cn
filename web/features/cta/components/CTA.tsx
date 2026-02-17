import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHub } from "@/components/logos/github";

export function CTA() {
	return (
		<section className="w-full py-20 md:py-32 bg-background text-foreground">
			<div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
				<h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4">
					Ready to ditch the drag-and-drop?
				</h2>
				<p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8">
					Start building presentations the way you build software.
				</p>
				<div className="flex flex-row gap-4 items-center justify-center">
					<Button asChild className="px-6 py-5 text-base">
						<Link href="/docs">Get Started</Link>
					</Button>
					<Button asChild variant="outline" className="px-6 py-5 text-base">
						<Link href="https://github.com/prithvi-rajan-222/slide-cn" target="_blank" rel="noopener noreferrer">
							<GitHub className="size-4 dark:fill-white fill-black" />
							GitHub
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
