import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code2, GitBranch, LayoutGrid, Palette, MousePointerClick, Terminal } from "lucide-react";

const features = [
	{
		icon: Code2,
		title: "Code-First",
		description: "Write slides as React components with full TypeScript support.",
	},
	{
		icon: GitBranch,
		title: "Version Control",
		description: "Track changes with Git, review with PRs, deploy with CI/CD.",
	},
	{
		icon: LayoutGrid,
		title: "Component Library",
		description: "Pre-built layouts: title slides, split views, code blocks, reveals.",
	},
	{
		icon: Palette,
		title: "Themeable",
		description: "Built on Shadcn and Tailwind. Your design system, your slides.",
	},
	{
		icon: MousePointerClick,
		title: "Interactive",
		description: "Add animations, progressive reveals, and live components.",
	},
	{
		icon: Terminal,
		title: "One Command Install",
		description: "Add components via the Shadcn CLI registry.",
	},
];

export function Features() {
	return (
		<section className="w-full py-20 md:py-32 bg-background text-foreground">
			<div className="max-w-6xl mx-auto px-4 md:px-8">
				<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mb-4">
					Everything you need to present like a developer
				</h2>
				<p className="text-muted-foreground text-center text-base md:text-lg max-w-2xl mx-auto mb-12">
					Slide-CN gives you the tools to build presentations the way you build software.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feature) => (
						<Card key={feature.title} className="bg-card/50">
							<CardHeader>
								<feature.icon className="size-8 text-primary mb-2" />
								<CardTitle className="text-lg">{feature.title}</CardTitle>
								<CardDescription className="text-sm">
									{feature.description}
								</CardDescription>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
