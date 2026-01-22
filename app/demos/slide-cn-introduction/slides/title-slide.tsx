import { TitleSlide } from "@/components/ui/slide-cn/title-slide";

export function TitleSlideComponent() {
	return (
		<div className="relative z-10 h-full w-full flex items-center justify-center p-8 md:p-12 lg:p-16">
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
		</div>
	);
}
