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
import { SlideFooter } from "@/components/ui/slide-cn/slide-footer";

export default function SlideCnIntroductionPage() {
	return (
		<div className="fixed inset-0">
			<Deck>
				<Slide background={<PixelSnow />} footer={<SlideFooter showAdd={true} />}>
					<TitleSlideComponent />
				</Slide>
				<Slide background={<PixelSnow />} footer={<SlideFooter showAdd={true} />}>
					<ProblemSlide />
				</Slide>
				<Slide background={<PixelSnow />} footer={<SlideFooter showAdd={true} />}>
					<TargetAudienceSlide />
				</Slide>
				<Slide background={<PixelSnow />} footer={<SlideFooter showAdd={true} />}>
					<SolutionSlide />
				</Slide>
				<Slide background={<PixelSnow />} footer={<SlideFooter showAdd={true} />}	>
					<BenefitsSlide />
				</Slide>
				{/* <Slide background={<PixelSnow />}>
					<ExistingToolsSlide />
				</Slide> */}
				<Slide background={<PixelSnow />} footer={<SlideFooter showAdd={true} />}>
					<ClosingSlide />
				</Slide>
			</Deck>
		</div>
	);
}
