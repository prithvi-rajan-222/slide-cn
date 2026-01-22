import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";
import { Reveal } from "@/components/ui/slide-cn/reveal";
import { Rocket, Palette, Users2, Sparkles as SparklesIcon } from "lucide-react";
import PixelSnow from "@/components/PixelSnow";

export function BenefitsSlide() {
	return (
		<div className="relative h-full w-full">
			<PixelSnow />
			<div className="relative z-10 p-8 md:p-12 lg:p-16">
				<HeaderWithContent>
			<HeaderWithContent.Header>Key Benefits</HeaderWithContent.Header>
			<HeaderWithContent.Content>
				<div className="space-y-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<Reveal>
							<div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl border-2 border-emerald-200 dark:border-emerald-900/50 bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-emerald-950/20 hover:scale-105 transition-transform">
								<div className="rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 p-4">
									<Rocket className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
								</div>
								<h3 className="text-2xl font-bold">Faster Iteration</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									Update content instantly. No more clicking through menus or
									searching for formatting options.
								</p>
							</div>
						</Reveal>
						<Reveal>
							<div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl border-2 border-violet-200 dark:border-violet-900/50 bg-gradient-to-br from-violet-50/50 to-transparent dark:from-violet-950/20 hover:scale-105 transition-transform">
								<div className="rounded-2xl bg-violet-100 dark:bg-violet-900/30 p-4">
									<Palette className="h-10 w-10 text-violet-600 dark:text-violet-400" />
								</div>
								<h3 className="text-2xl font-bold">Full Control</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									Customize every aspect of your slides. Use your design system,
									colors, and branding.
								</p>
							</div>
						</Reveal>
						<Reveal>
							<div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl border-2 border-cyan-200 dark:border-cyan-900/50 bg-gradient-to-br from-cyan-50/50 to-transparent dark:from-cyan-950/20 hover:scale-105 transition-transform">
								<div className="rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 p-4">
									<Users2 className="h-10 w-10 text-cyan-600 dark:text-cyan-400" />
								</div>
								<h3 className="text-2xl font-bold">Better Collaboration</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									Multiple team members can work on the same presentation.
									Review changes like code, not binary files.
								</p>
							</div>
						</Reveal>
						<Reveal>
							<div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-900/50 bg-gradient-to-br from-amber-50/50 to-transparent dark:from-amber-950/20 hover:scale-105 transition-transform">
								<div className="rounded-2xl bg-amber-100 dark:bg-amber-900/30 p-4">
									<SparklesIcon className="h-10 w-10 text-amber-600 dark:text-amber-400" />
								</div>
								<h3 className="text-2xl font-bold">Interactive Elements</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									Add animations, reveals, and interactive components that
									traditional tools can't match.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</HeaderWithContent.Content>
		</HeaderWithContent>
			</div>
		</div>
	);
}
