import { TitleSlide } from "@/components/ui/slide-cn/title-slide";
import Link from "next/link";
export function ClosingSlide() {
	return (
		<div className="relative h-full w-full flex items-center justify-center p-8 md:p-12 lg:p-16">
			<TitleSlide>
				<TitleSlide.Heading>Ready to Get Started?</TitleSlide.Heading>
				<TitleSlide.SubHeading className="mt-6">
					Build beautiful presentations with code
				</TitleSlide.SubHeading>
				<TitleSlide.Meta className="mt-12 text-lg opacity-70">
					<Link className="underline" href="/docs">Start creating your first slide deck today</Link>
				</TitleSlide.Meta>
			</TitleSlide>
		</div>
	);
}
