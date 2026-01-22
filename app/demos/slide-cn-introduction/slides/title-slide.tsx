import { TitleSlide } from "@/components/ui/slide-cn/title-slide";
import PixelSnow from "@/components/PixelSnow";
import Link from "next/link";

export function TitleSlideComponent() {
	return (
		<div className="relative h-full w-full">
			<PixelSnow />
			<div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-8 md:p-12 lg:p-16">
				<TitleSlide>
					<TitleSlide.Heading className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
						slide-cn
					</TitleSlide.Heading>
					<TitleSlide.SubHeading className="mt-6">
						Beautiful presentations built with React & TypeScript
					</TitleSlide.SubHeading>
					<TitleSlide.Meta className="mt-12 text-lg opacity-70">
						Create stunning slide decks using code, not design tools
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
