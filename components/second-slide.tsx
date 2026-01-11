"use client";
import { HeaderWithContent } from "@/registry/slide-cn/header-with-content/header-with-content";
import { SlideImage } from "@/registry/slide-cn/slide-image/slide-image";
import LiquidEther from "./LiquidEther.jsx"

export function SecondSlide() {
	return (
		<>
			<div className="h-full absolute w-full">
				<LiquidEther
					colors={['#5227FF', '#FF9FFC', '#B19EEF']}
					mouseForce={20}
					cursorSize={100}
					isViscous={false}
					viscous={30}
					iterationsViscous={32}
					iterationsPoisson={32}
					resolution={0.5}
					isBounce={false}
					autoDemo={true}
					autoSpeed={0.5}
					autoIntensity={2.2}
					takeoverDuration={0.25}
					autoResumeDelay={3000}
					autoRampDuration={0.6}
				/>
			</div>
			<HeaderWithContent>
				<HeaderWithContent.Header>
					What is Slide-CN?
				</HeaderWithContent.Header>
				<HeaderWithContent.Content className="flex flex-col gap-4">
					<ul className="list-disc list-inside flex flex-col gap-2">
						<li>Slide-CN is a react component library with which you can create beautiful presentations using code</li>
						<li>Slide-CN handles slide transitions, mobile layouts and more</li>
						<li>It works out of the box with smart defaults, so you can create presentations that look good with minimal effort</li>
						<li>You own all of the code used to create presentations. It is not hidden behind a library. Slide-CN is open-source and open-code</li>
						<li>Use the basic templates provided by Slide-CN and extend them to create your own branding, your own themes, so that your presentations can be consistent</li>
						<li>Slide-CN works with ShadCN components, so you can be as creative as you want with your slides</li>
					</ul>
					<SlideImage className="my-auto">
						<SlideImage.Image
							src="/spinning-cat.gif"
							alt="oiia cat"
							aspectRatio={1}
							objectFit="contain"
							className="w-[25%]"
						/>
						<SlideImage.Caption>Spinning cat</SlideImage.Caption>
					</SlideImage>
				</HeaderWithContent.Content>
			</HeaderWithContent>
		</>
	)
}
