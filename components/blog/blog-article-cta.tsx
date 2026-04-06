import Link from 'next/link';

export function BlogArticleCTA() {
	return (
		<div className="mt-16 rounded-[2rem] border border-border bg-muted/40 p-8 sm:p-10">
			<p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
				Try Slide-CN
			</p>
			<h2 className="mt-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
				Build presentations with the same components, tokens, and workflows your team already uses
			</h2>
			<p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
				Explore the docs, inspect the live demo, and start building decks in React instead of switching
				to a separate slide tool.
			</p>
			<div className="mt-8 flex flex-wrap gap-3">
				<Link
					href="/docs"
					className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
				>
					Read the docs
				</Link>
				<Link
					href="/demos/slide-cn-introduction"
					className="rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold transition hover:border-foreground/20 hover:bg-muted"
				>
					View the demo
				</Link>
			</div>
		</div>
	);
}
