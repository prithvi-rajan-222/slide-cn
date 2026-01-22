"use client";

import { Deck } from "@/components/ui/slide-cn/deck";
import { Slide } from "@/components/ui/slide-cn/slide";
import { TitleSlideComponent } from "./slides/title-slide";
import { ProblemSlide } from "./slides/problem-slide";
import { TargetAudienceSlide } from "./slides/target-audience-slide";
import { SolutionSlide } from "./slides/solution-slide";
import { BenefitsSlide } from "./slides/benefits-slide";
import { ExistingToolsSlide } from "./slides/existing-tools-slide";
import { ClosingSlide } from "./slides/closing-slide";
import { LongSlide } from "./slides/long-slide";

export default function SlideCnIntroductionPage() {
	return (
		<div className="fixed inset-0">
			<Deck>
				<Slide key={0}>
					<TitleSlideComponent />
				</Slide>
				<Slide key={1}>
					<ProblemSlide />
				</Slide>
				<Slide key={2}>
					<TargetAudienceSlide />
				</Slide>
				<Slide key={3}>
					<SolutionSlide />
				</Slide>
				<Slide key={4}>
					<BenefitsSlide />
				</Slide>
				<Slide key={5}>
					<ExistingToolsSlide />
				</Slide>
				<Slide key={6}>
					<ClosingSlide />
				</Slide>
			</Deck>
		</div>
	);
}
