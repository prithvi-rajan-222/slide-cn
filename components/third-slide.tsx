import { HeaderWithContent } from "@/registry/slide-cn/header-with-content/header-with-content";
import { SlideImage } from "./ui/slide-image";

export function ThirdSlide() {
	return (
		<HeaderWithContent>
			<HeaderWithContent.Header>Why not Canva/PPT?</HeaderWithContent.Header>
			<HeaderWithContent.Content className="flex flex-col gap-4 h-full">
				<ul className="list-disc list-inside flex flex-col gap-2">
					<li>Canva and PPT limits your creativity</li>
					<li>{'With AI tools, anyone can code a website in a matter of minutes. You no longer need a visual "drag and drop" editor, because coding a presentation is just as easy.'}</li>
					<li>Use Slide-CN, and build a deck that impresses</li>
				</ul>
				<SlideImage className="self-center">
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
	)
}
