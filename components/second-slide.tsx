import { HeaderWithContent } from "@/registry/slide-cn/header-with-content/header-with-content";
import { ImageSlide } from "@/registry/slide-cn/image-slide/image-slide";
import { TwoColumn } from "@/registry/slide-cn/two-column/two-column";

export function SecondSlide() {
	return (
		<HeaderWithContent>
			<HeaderWithContent.Header>
				What is the issue with using Canva?
			</HeaderWithContent.Header>
			<HeaderWithContent.Content>
				Canva sucks
			</HeaderWithContent.Content>
		</HeaderWithContent>
	)
}
