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
import PixelSnow from "@/components/PixelSnow";

export default function SlideCnIntroductionPage() {
	return (
		<div className="fixed inset-0">
			<Deck>
				<Slide background={<PixelSnow />}>
					<TitleSlideComponent />
				</Slide>
				<Slide background={<PixelSnow />}>
					<ProblemSlide />
				</Slide>
				<Slide background={<PixelSnow />}>
					<TargetAudienceSlide />
				</Slide>
				<Slide background={<PixelSnow />}>
					<SolutionSlide />
				</Slide>
				<Slide background={<PixelSnow />}>
					<BenefitsSlide />
				</Slide>
				<Slide background={<PixelSnow />}>
					<ExistingToolsSlide />
				</Slide>
				<Slide background={<PixelSnow />}>
					<ClosingSlide />
				</Slide>
			</Deck>
		</div>
	);
}
