import { HeaderWithContent } from "@/registry/slide-cn/header-with-content/header-with-content";

export function FourthSlide() {
	return (
		<HeaderWithContent>
			<HeaderWithContent.Header>Cool things you can do with slide-cn</HeaderWithContent.Header>
			<HeaderWithContent.Content className="flex flex-row gap-4">
				{/* add a card style content here */}
				<div className="grid grid-cols-2 grid-rows-2">
					<div>a</div>
					<div>a</div>
					<div>a</div>
					<div>a</div>
				</div>
			</HeaderWithContent.Content>
		</HeaderWithContent>
	)
}
