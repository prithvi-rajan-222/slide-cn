import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";
import { X, GitBranch, Copy } from "lucide-react";
import PixelSnow from "@/components/PixelSnow";

export function ProblemSlide() {
	return (
		<div className="relative h-full w-full">
			<div className="absolute inset-0 pointer-events-none">
				<PixelSnow />
			</div>
			<div className="relative z-10 p-8 md:p-12 lg:p-16">
				<HeaderWithContent>
					<HeaderWithContent.Header>The Problem</HeaderWithContent.Header>
					<HeaderWithContent.Content>
						<div className="space-y-10">
							<p className="text-3xl font-semibold">
								Creating presentations is time-consuming and frustrating.
							</p>
							<div className="grid gap-8 md:grid-cols-3">
								<div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border-2 border-red-200 dark:border-red-900/50 bg-red-50/30 dark:bg-red-950/10">
									<div className="rounded-full bg-red-100 dark:bg-red-900/30 p-4">
										<X className="h-8 w-8 text-red-600 dark:text-red-400" />
									</div>
									<h3 className="text-xl font-bold">Design Tools Are Limiting</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										PowerPoint, Keynote, and Google Slides force you into rigid templates
										and make it hard to create custom, branded presentations.
									</p>
								</div>

								<div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border-2 border-yellow-200 dark:border-yellow-900/50 bg-yellow-50/30 dark:bg-yellow-950/10">
									<div className="rounded-full bg-yellow-100 dark:bg-yellow-900/30 p-4">
										<GitBranch className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
									</div>
									<h3 className="text-xl font-bold">Version Control Nightmare</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Binary files make collaboration difficult. No way to track changes,
										review diffs, or merge contributions from team members.
									</p>
								</div>

								<div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-900/50 bg-orange-50/30 dark:bg-orange-950/10">
									<div className="rounded-full bg-orange-100 dark:bg-orange-900/30 p-4">
										<Copy className="h-8 w-8 text-orange-600 dark:text-orange-400" />
									</div>
									<h3 className="text-xl font-bold">Repetitive Work</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Copy-pasting slides, manually updating content, and maintaining
										consistency across multiple presentations is tedious.
									</p>
								</div>
							</div>
						</div>
					</HeaderWithContent.Content>
				</HeaderWithContent>
			</div>
		</div>
	);
}
