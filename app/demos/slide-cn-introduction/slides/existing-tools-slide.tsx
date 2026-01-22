import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content";
import { X, AlertTriangle, CheckCircle2 } from "lucide-react";
import PixelSnow from "@/components/PixelSnow";

export function ExistingToolsSlide() {
	return (
		<div className="relative h-full w-full">
			<PixelSnow />
			<div className="relative z-10 p-8 md:p-12 lg:p-16">
				<HeaderWithContent>
			<HeaderWithContent.Header>
				Why Existing Tools Fall Short
			</HeaderWithContent.Header>
			<HeaderWithContent.Content>
				<div className="space-y-8">
					{/* Comparison Table */}
					<div className="overflow-hidden rounded-lg border">
						<table className="w-full">
							<thead>
								<tr className="border-b bg-muted/50">
									<th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
									<th className="px-6 py-4 text-center text-sm font-semibold">
										<div className="flex items-center justify-center gap-2">
											<X className="h-4 w-4 text-red-500" />
											<span>Traditional Tools</span>
										</div>
									</th>
									<th className="px-6 py-4 text-center text-sm font-semibold">
										<div className="flex items-center justify-center gap-2">
											<AlertTriangle className="h-4 w-4 text-yellow-500" />
											<span>Web Alternatives</span>
										</div>
									</th>
									<th className="px-6 py-4 text-center text-sm font-semibold bg-green-50/50 dark:bg-green-950/20">
										<div className="flex items-center justify-center gap-2">
											<CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
											<span className="text-green-700 dark:text-green-400">slide-cn</span>
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b">
									<td className="px-6 py-4 font-medium">Version Control</td>
									<td className="px-6 py-4 text-center">
										<span className="text-red-500 text-xl">✗</span>
										<p className="text-xs text-muted-foreground mt-1">Binary files</p>
									</td>
									<td className="px-6 py-4 text-center">
										<span className="text-green-600 dark:text-green-400 text-xl">✓</span>
										<p className="text-xs text-muted-foreground mt-1">Text-based</p>
									</td>
									<td className="px-6 py-4 text-center bg-green-50/30 dark:bg-green-950/10">
										<span className="text-green-600 dark:text-green-400 text-xl">✓</span>
										<p className="text-xs text-muted-foreground mt-1">Git-friendly</p>
									</td>
								</tr>
								<tr className="border-b">
									<td className="px-6 py-4 font-medium">React/TypeScript</td>
									<td className="px-6 py-4 text-center">
										<span className="text-red-500 text-xl">✗</span>
										<p className="text-xs text-muted-foreground mt-1">Not supported</p>
									</td>
									<td className="px-6 py-4 text-center">
										<span className="text-yellow-500 text-xl">⚠</span>
										<p className="text-xs text-muted-foreground mt-1">Limited support</p>
									</td>
									<td className="px-6 py-4 text-center bg-green-50/30 dark:bg-green-950/10">
										<span className="text-green-600 dark:text-green-400 text-xl">✓</span>
										<p className="text-xs text-muted-foreground mt-1">Native support</p>
									</td>
								</tr>
								<tr className="border-b">
									<td className="px-6 py-4 font-medium">Component Reusability</td>
									<td className="px-6 py-4 text-center">
										<span className="text-yellow-500 text-xl">⚠</span>
										<p className="text-xs text-muted-foreground mt-1">Templates only</p>
									</td>
									<td className="px-6 py-4 text-center">
										<span className="text-yellow-500 text-xl">⚠</span>
										<p className="text-xs text-muted-foreground mt-1">Partial support</p>
									</td>
									<td className="px-6 py-4 text-center bg-green-50/30 dark:bg-green-950/10">
										<span className="text-green-600 dark:text-green-400 text-xl">✓</span>
										<p className="text-xs text-muted-foreground mt-1">Full React components</p>
									</td>
								</tr>
								<tr className="border-b">
									<td className="px-6 py-4 font-medium">Design Flexibility</td>
									<td className="px-6 py-4 text-center">
										<span className="text-yellow-500 text-xl">⚠</span>
										<p className="text-xs text-muted-foreground mt-1">Template-bound</p>
									</td>
									<td className="px-6 py-4 text-center">
										<span className="text-yellow-500 text-xl">⚠</span>
										<p className="text-xs text-muted-foreground mt-1">CSS/JS required</p>
									</td>
									<td className="px-6 py-4 text-center bg-green-50/30 dark:bg-green-950/10">
										<span className="text-green-600 dark:text-green-400 text-xl">✓</span>
										<p className="text-xs text-muted-foreground mt-1">Unlimited control</p>
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 font-medium">Automation & Data</td>
									<td className="px-6 py-4 text-center">
										<span className="text-red-500 text-xl">✗</span>
										<p className="text-xs text-muted-foreground mt-1">Not possible</p>
									</td>
									<td className="px-6 py-4 text-center">
										<span className="text-yellow-500 text-xl">⚠</span>
										<p className="text-xs text-muted-foreground mt-1">Complex setup</p>
									</td>
									<td className="px-6 py-4 text-center bg-green-50/30 dark:bg-green-950/10">
										<span className="text-green-600 dark:text-green-400 text-xl">✓</span>
										<p className="text-xs text-muted-foreground mt-1">Native support</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* Bottom summary */}
					<div className="flex items-center justify-center gap-8 pt-4">
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<X className="h-4 w-4 text-red-500" />
							<span>Not supported</span>
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<AlertTriangle className="h-4 w-4 text-yellow-500" />
							<span>Limited support</span>
						</div>
						<div className="flex items-center gap-2 text-sm">
							<CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
							<span className="text-green-700 dark:text-green-400 font-medium">Fully supported</span>
						</div>
					</div>
				</div>
			</HeaderWithContent.Content>
		</HeaderWithContent>
			</div>
		</div>
	);
}
