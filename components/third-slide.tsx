"use client";
import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";
import { SlideImage } from "@/components/ui/slide-cn/slide-image";
import FloatingLines from "./FloatingLines";
import { Reveal } from "@/components/ui/slide-cn/reveal";

export function ThirdSlide() {
	return (
		<>
			<div className="w-full h-full absolute">
				<FloatingLines

					enabledWaves={['top', 'middle', 'bottom']}
					// Array - specify line count per wave; Number - same count for all waves
					lineCount={[10, 15, 20]}
					// Array - specify line distance per wave; Number - same distance for all waves
					lineDistance={[8, 6, 4]}
					bendRadius={5.0}
					bendStrength={-0.5}
					interactive={true}
					parallax={true}
				/>
			</div>
			<HeaderWithContent>
				<HeaderWithContent.Header>Why not Canva/PPT?</HeaderWithContent.Header>
				<HeaderWithContent.Content className="flex flex-col gap-4 h-full">
					<Reveal>

						<ul className="list-disc list-inside flex flex-col gap-2">
							<li>Canva and PPT limits your creativity</li>
							<li>{'With AI tools, anyone can code a website in a matter of minutes. You no longer need a visual "drag and drop" editor, because coding a presentation is just as easy.'}</li>
							<li>Use Slide-CN, and build a deck that impresses</li>
						</ul>
					</Reveal>

					<SlideImage className="self-center my-auto w-full">
						<SlideImage.Image
							src="/Wallpaper.jpg"
							alt="silly gojo"
							aspectRatio={16 / 9}
							objectFit="contain"
							className="w-[60%]"
						/>
						<SlideImage.Caption>Silly Gojo</SlideImage.Caption>
					</SlideImage>
				</HeaderWithContent.Content>
			</HeaderWithContent>
		</>
	)
}
