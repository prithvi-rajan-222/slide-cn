import { TitleSlide, TitleSlideHeading, TitleSlideSubheading } from "@/registry/slide-cn/title-slide/title-slide";
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
		</TitleSlide>
	)
}
