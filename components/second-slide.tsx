import { HeaderWithContent } from "@/registry/slide-cn/header-with-content/header-with-content";
import { SlideImage } from "./ui/slide-image";

export function SecondSlide() {
	return (
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
				<SlideImage
					src="/spinning-cat.gif"
					alt="oiia cat"
					aspectRatio={1}
					caption="Spinning cat"
					objectFit="contain"
					className="self-center w-[25%] h-full"
				/>
			</HeaderWithContent.Content>
		</HeaderWithContent>
	)
}
