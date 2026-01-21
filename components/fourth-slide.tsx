import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Reveal } from "@/components/ui/slide-cn/reveal";

export function FourthSlide() {
	return (
		<HeaderWithContent>
			<HeaderWithContent.Header>Cool things you can do with slide-cn</HeaderWithContent.Header>
			<HeaderWithContent.Content>
				<div className="grid grid-cols-2 gap-8 w-full">
					<Reveal>
						<Card>
							<CardHeader>
								<CardTitle>Completely Customizable</CardTitle>
								<CardDescription>Tailor every aspect to your needs.</CardDescription>
							</CardHeader>
							<CardContent>
								You can change colors, fonts, and layouts with ease.
							</CardContent>
						</Card>
					</Reveal>
					<Card>
						<CardHeader>
							<CardTitle>React Components</CardTitle>
							<CardDescription>Build slides using standard React.</CardDescription>
						</CardHeader>
						<CardContent>
							Leverage the full power of the React ecosystem.
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Tailwind CSS</CardTitle>
							<CardDescription>Style quickly and efficiently.</CardDescription>
						</CardHeader>
						<CardContent>
							Utility-first CSS for rapid UI development.
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Open Source</CardTitle>
							<CardDescription>Free for everyone to use.</CardDescription>
						</CardHeader>
						<CardContent>
							Contribute and help improve the project.
						</CardContent>
					</Card>
				</div>
			</HeaderWithContent.Content>
		</HeaderWithContent>
	)
}
