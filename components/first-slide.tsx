"use client";
import { TitleSlide, TitleSlideHeading, TitleSlideMeta, TitleSlideSubheading } from "@/registry/slide-cn/title-slide/title-slide";
import { AuroraText } from "./ui/aurora-text";
import { TypingAnimation } from "./ui/typing-animation";
import Aurora from "./Aurora";

export function FirstSlide() {
	return (
		<>
			<div className="absolute h-full w-full">
				<Aurora
					colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
					blend={0.5}
					amplitude={1.0}
					speed={0.5}
				/>
			</div>
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
		</>
	)
}
