import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";
import { HorizontalSplit } from "@/components/ui/slide-cn/horizontal-split";
import { FileCode, GitBranch, Box, Zap } from "lucide-react";
import PixelSnow from "@/components/PixelSnow";

export function SolutionSlide() {
	return (
		<div className="relative h-full w-full">
			<PixelSnow />
			<div className="relative z-10 p-8 md:p-12 lg:p-16">
				<HeaderWithContent>
			<HeaderWithContent.Header>The Solution</HeaderWithContent.Header>
			<HeaderWithContent.Content>
				<div className="space-y-8">
					<p className="text-2xl text-muted-foreground mb-8">
						slide-cn brings the power of React to presentation creation.
					</p>
					<HorizontalSplit>
						<HorizontalSplit.Left className="flex flex-col justify-center p-6 space-y-8">
							<div className="space-y-3">
								<div className="flex items-center gap-4">
									<div className="rounded-lg bg-green-100 dark:bg-green-900/30 p-3">
										<FileCode className="h-6 w-6 text-green-600 dark:text-green-400" />
									</div>
									<h3 className="text-xl font-bold">Code-Based</h3>
								</div>
								<p className="text-sm text-muted-foreground pl-16">
									Write your slides in TypeScript/React. Use components, props,
									and all the tools you already know.
								</p>
							</div>
							<div className="space-y-3">
								<div className="flex items-center gap-4">
									<div className="rounded-lg bg-green-100 dark:bg-green-900/30 p-3">
										<GitBranch className="h-6 w-6 text-green-600 dark:text-green-400" />
									</div>
									<h3 className="text-xl font-bold">Version Control</h3>
								</div>
								<p className="text-sm text-muted-foreground pl-16">
									Track changes with Git. Review PRs, merge contributions, and
									maintain a history of your presentations.
								</p>
							</div>
						</HorizontalSplit.Left>
						<HorizontalSplit.Right className="flex flex-col justify-center p-6 space-y-8">
							<div className="space-y-3">
								<div className="flex items-center gap-4">
									<div className="rounded-lg bg-green-100 dark:bg-green-900/30 p-3">
										<Box className="h-6 w-6 text-green-600 dark:text-green-400" />
									</div>
									<h3 className="text-xl font-bold">Reusable Components</h3>
								</div>
								<p className="text-sm text-muted-foreground pl-16">
									Build a library of slide templates and layouts. Reuse them
									across multiple presentations.
								</p>
							</div>
							<div className="space-y-3">
								<div className="flex items-center gap-4">
									<div className="rounded-lg bg-green-100 dark:bg-green-900/30 p-3">
										<Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
									</div>
									<h3 className="text-xl font-bold">Programmatic</h3>
								</div>
								<p className="text-sm text-muted-foreground pl-16">
									Generate slides from data. Automate content updates. Integrate
									with your existing tools and workflows.
								</p>
							</div>
						</HorizontalSplit.Right>
					</HorizontalSplit>
				</div>
			</HeaderWithContent.Content>
		</HeaderWithContent>
			</div>
		</div>
	);
}
