import { TitleSlide, TitleSlideHeading, TitleSlideMeta, TitleSlideSubheading } from "@/registry/slide-cn/title-slide/title-slide";
import { AuroraText } from "./ui/aurora-text";
import { TypingAnimation } from "./ui/typing-animation";

export function FirstSlide() {
	return (
		<TitleSlide>
			<TitleSlideHeading>
				<AuroraText>Welcome to Slide-CN</AuroraText>
			</TitleSlideHeading>
			<TitleSlideSubheading>
				<TypingAnimation>Create beautiful presentations using code</TypingAnimation>
			</TitleSlideSubheading>
			<TitleSlideMeta>
				Internal architecture review - Jan 2026
			</TitleSlideMeta>
			{/* <div className="mt-6 max-w-xl text-lg text-muted-foreground"> */}
			{/* 	A code-generated slide system that you fully own — layouts, transitions, */}
			{/* 	interactions, and styling live in your repo, not in a dependency. */}
			{/* </div> */}
		</TitleSlide>
	)
}
