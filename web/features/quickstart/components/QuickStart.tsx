"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const steps = [
	{
		number: 1,
		title: "Install",
		description: "Add Slide-CN to your Next.js project with a single command.",
		code: "pnpm dlx shadcn@latest add @slide-cn/slide-cn-default",
		language: "bash",
	},
	{
		number: 2,
		title: "Write",
		description: "Create a deck using React components. Each slide is a component.",
		code: `<Deck>
  <Slide>
    <SlideTitle>
      My Presentation
    </SlideTitle>
  </Slide>
</Deck>`,
		language: "tsx",
	},
	{
		number: 3,
		title: "Present",
		description: "Run your Next.js app and present directly from the browser.",
		code: "pnpm dev",
		language: "bash",
	},
];

export function QuickStart() {
	return (
		<section className="w-full py-20 md:py-32 bg-background text-foreground">
			<div className="max-w-6xl mx-auto px-4 md:px-8">
				<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mb-4">
					Get started in three steps
				</h2>
				<p className="text-muted-foreground text-center text-base md:text-lg max-w-2xl mx-auto mb-12">
					From zero to presenting in under a minute.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{steps.map((step) => (
						<div key={step.number} className="space-y-4">
							<div className="flex items-center gap-3">
								<span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
									{step.number}
								</span>
								<h3 className="text-lg font-semibold">{step.title}</h3>
							</div>
							<p className="text-muted-foreground text-sm">{step.description}</p>
							<div className="rounded-lg border bg-muted/50 overflow-hidden">
								<SyntaxHighlighter
									language={step.language}
									style={vscDarkPlus}
									showLineNumbers={false}
									wrapLongLines={true}
									customStyle={{
										margin: 0,
										padding: "0.75rem",
										background: "transparent",
										fontSize: "0.875rem",
										lineHeight: "1.625",
									}}
								>
									{step.code}
								</SyntaxHighlighter>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
