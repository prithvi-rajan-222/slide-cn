import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";
import { Reveal } from "@/components/ui/slide-cn/reveal";
import { Code, Users, Sparkles } from "lucide-react";
export function TargetAudienceSlide() {
	return (
		<div className="relative z-10 p-8 md:p-12 lg:p-16">
			<HeaderWithContent>
				<HeaderWithContent.Header>Who Is This For?</HeaderWithContent.Header>
				<HeaderWithContent.Content>
					<div className="space-y-10">
						<p className="text-2xl font-semibold text-muted-foreground">
							slide-cn is perfect for developers and technical teams who want to:
						</p>
						<div className="grid gap-8">
							<Reveal>
								<div className="flex items-start gap-6 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-900/50 bg-gradient-to-r from-blue-50/50 via-blue-50/30 to-transparent dark:from-blue-950/20 dark:via-blue-950/10">
									<div className="rounded-xl bg-blue-100 dark:bg-blue-900/30 p-4 shrink-0">
										<Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-bold mb-3">Developers</h3>
										<p className="text-base text-muted-foreground leading-relaxed">
											Build presentations the same way you build applications—with code,
											version control, and reusable components.
										</p>
									</div>
								</div>
							</Reveal>
							<Reveal>
								<div className="flex items-start gap-6 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-900/50 bg-gradient-to-r from-purple-50/50 via-purple-50/30 to-transparent dark:from-purple-950/20 dark:via-purple-950/10">
									<div className="rounded-xl bg-purple-100 dark:bg-purple-900/30 p-4 shrink-0">
										<Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-bold mb-3">Technical Teams</h3>
										<p className="text-base text-muted-foreground leading-relaxed">
											Create consistent, branded presentations that integrate with your
											existing development workflow.
										</p>
									</div>
								</div>
							</Reveal>
							<Reveal>
								<div className="flex items-start gap-6 p-6 rounded-xl border-2 border-pink-200 dark:border-pink-900/50 bg-gradient-to-r from-pink-50/50 via-pink-50/30 to-transparent dark:from-pink-950/20 dark:via-pink-950/10">
									<div className="rounded-xl bg-pink-100 dark:bg-pink-900/30 p-4 shrink-0">
										<Sparkles className="h-8 w-8 text-pink-600 dark:text-pink-400" />
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-bold mb-3">Content Creators</h3>
										<p className="text-base text-muted-foreground leading-relaxed">
											Automate slide generation, maintain design consistency, and
											iterate quickly on your presentations.
										</p>
									</div>
								</div>
							</Reveal>
						</div>
					</div>
				</HeaderWithContent.Content>
			</HeaderWithContent>
		</div>
	);
}
