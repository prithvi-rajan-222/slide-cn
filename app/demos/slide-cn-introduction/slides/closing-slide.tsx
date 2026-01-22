import { TitleSlide } from "@/components/ui/slide-cn/title-slide";
import PixelSnow from "@/components/PixelSnow";
import Link from "next/link";

export function ClosingSlide() {
	return (
		<div className="relative h-full w-full">
			<PixelSnow />
			<div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-8 md:p-12 lg:p-16">
				<TitleSlide>
					<TitleSlide.Heading>Ready to Get Started?</TitleSlide.Heading>
					<TitleSlide.SubHeading className="mt-6">
						Build beautiful presentations with code
					</TitleSlide.SubHeading>
					<TitleSlide.Meta className="mt-12 text-lg opacity-70">
						Start creating your first slide deck today
					</TitleSlide.Meta>
				</TitleSlide>
				<footer className="absolute bottom-4 left-0 right-0 flex justify-center">
					<Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
						← Back to Home
					</Link>
				</footer>
			</div>
		</div>
	);
}
