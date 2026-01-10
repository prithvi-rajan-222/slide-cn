import { HeaderWithContent } from "@/registry/slide-cn/header-with-content/header-with-content";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

export function ThirdSlide() {
	return (
		<HeaderWithContent>
			<HeaderWithContent.Header>Why not Canva/PPT?</HeaderWithContent.Header>
			<HeaderWithContent.Content className="flex flex-col gap-4">
				<ul className="list-disc list-inside flex flex-col gap-2">
					<li>Canva and PPT limits your creativity</li>
					<li>{'With AI tools, anyone can code a website in a matter of minutes. You no longer need a visual "drag and drop" editor, because coding a presentation is just as easy.'}</li>
					<li>Use Slide-CN, and build a deck that impresses</li>
				</ul>
				<div className="self-center">
					<AspectRatio ratio={9 / 16} className="bg-muted rounded">
						<Image
							src={'/gojo.gif'}
							alt="silly gojo"
							fill={false}
							width={600}
							height={600}
							className="max-h-[75%]"
							style={{ objectFit: "contain" }}

						/>
					</AspectRatio>
				</div>
			</HeaderWithContent.Content>
		</HeaderWithContent>
	)
}
