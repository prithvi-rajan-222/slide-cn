"use client"

import { Rocket, CheckCircle, Zap, Globe } from "lucide-react"

import { Deck } from "@/components/ui/slide-cn/deck"
import { Slide } from "@/components/ui/slide-cn/slide"
import { SlideFooter } from "@/components/ui/slide-cn/slide-footer"
import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content"
import { Timeline } from "@/components/ui/slide-cn/timeline"
import { LinearGradient } from "@/components/ui/slide-cn/backgrounds/gradients/linear"

export default function TimelineDemoPage() {
	return (
		<div className="fixed inset-0">
			<Deck>
				{/* Slide 1: Horizontal timeline */}
				<Slide background={<LinearGradient />} footer={<SlideFooter />}>
					<HeaderWithContent>
						<HeaderWithContent.Header>Product Roadmap</HeaderWithContent.Header>
						<HeaderWithContent.Content>
							<Timeline>
								<Timeline.Item label="Q1 2024">
									Core architecture and design system foundations
								</Timeline.Item>
								<Timeline.Item label="Q2 2024">
									Component library shipped to early adopters
								</Timeline.Item>
								<Timeline.Item label="Q3 2024">
									Public beta with 200+ users onboarded
								</Timeline.Item>
								<Timeline.Item label="Q4 2024">
									v1.0 GA — production-ready release
								</Timeline.Item>
							</Timeline>
						</HeaderWithContent.Content>
					</HeaderWithContent>
				</Slide>

				{/* Slide 2: Horizontal with icon markers */}
				<Slide background={<LinearGradient />} footer={<SlideFooter />}>
					<HeaderWithContent>
						<HeaderWithContent.Header>How It Works</HeaderWithContent.Header>
						<HeaderWithContent.Content>
							<Timeline>
								<Timeline.Item label="Install" marker={<Zap />}>
									One command to add components to your project
								</Timeline.Item>
								<Timeline.Item label="Compose" marker={<CheckCircle />}>
									Build slides using familiar JSX syntax
								</Timeline.Item>
								<Timeline.Item label="Theme" marker={<Globe />}>
									Apply themes with CSS variables
								</Timeline.Item>
								<Timeline.Item label="Ship" marker={<Rocket />}>
									Deploy anywhere Next.js runs
								</Timeline.Item>
							</Timeline>
						</HeaderWithContent.Content>
					</HeaderWithContent>
				</Slide>

				{/* Slide 3: Vertical left-aligned */}
				<Slide background={<LinearGradient />} footer={<SlideFooter />}>
					<HeaderWithContent>
						<HeaderWithContent.Header>Our Journey</HeaderWithContent.Header>
						<HeaderWithContent.Content>
							<div className="max-w-md">
								<Timeline orientation="vertical">
									<Timeline.Item label="2020">
										Founded with a mission to make developer presentations beautiful.
									</Timeline.Item>
									<Timeline.Item label="2021">
										Shipped the first open-source version to 500 stars on GitHub.
									</Timeline.Item>
									<Timeline.Item label="2022">
										Joined the shadcn ecosystem and grew to 5,000 users.
									</Timeline.Item>
									<Timeline.Item label="2023">
										Launched themes, backgrounds, and the Claude AI skill.
									</Timeline.Item>
								</Timeline>
							</div>
						</HeaderWithContent.Content>
					</HeaderWithContent>
				</Slide>

				{/* Slide 4: Vertical alternating */}
				<Slide background={<LinearGradient />} footer={<SlideFooter />}>
					<HeaderWithContent>
						<HeaderWithContent.Header>Design Process</HeaderWithContent.Header>
						<HeaderWithContent.Content>
							<Timeline orientation="vertical" align="center">
								<Timeline.Item label="Research">
									Interviewed 30 developers about their current presentation workflow.
								</Timeline.Item>
								<Timeline.Item label="Ideation">
									Ran design sprints to explore code-first approaches.
								</Timeline.Item>
								<Timeline.Item label="Prototype">
									Built three throwaway prototypes in two weeks.
								</Timeline.Item>
								<Timeline.Item label="Ship">
									Launched to the community and iterated based on feedback.
								</Timeline.Item>
							</Timeline>
						</HeaderWithContent.Content>
					</HeaderWithContent>
				</Slide>
			</Deck>
		</div>
	)
}
