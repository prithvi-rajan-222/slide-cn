import { BlogPostCard } from '@/components/blog/blog-post-card';
import { getBlogPosts } from '@/lib/blog';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: `Blog | ${SITE_NAME}`,
	description: 'Essays, comparisons, and tutorials for building better developer presentations with Slide-CN.',
	alternates: {
		canonical: `${SITE_URL}/blog`,
	},
	openGraph: {
		title: `Blog | ${SITE_NAME}`,
		description: 'Essays, comparisons, and tutorials for building better developer presentations with Slide-CN.',
		url: `${SITE_URL}/blog`,
		type: 'website',
	},
};

export default function BlogIndexPage() {
	const posts = getBlogPosts();
	const [featuredPost, ...otherPosts] = posts;

	return (
		<main className="relative overflow-hidden">
			<div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.08),transparent_58%)]" />
			<div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
			<div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-20 md:px-8">
				<div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
					<div className="max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
							Slide-CN Blog
						</p>
						<h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
							Writing for teams who want presentations to feel like product work
						</h1>
						<p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
							Essays, comparisons, and tutorials about code-first slides, reusable design systems,
							and building talks in React without dropping into a separate toolchain.
						</p>
						<div className="mt-10 flex flex-wrap gap-3">
							<Link
								href="/docs"
								className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
							>
								Start with docs
							</Link>
							<Link
								href="/demos/slide-cn-introduction"
								className="rounded-full border border-border bg-background/80 px-5 py-3 text-sm font-semibold transition hover:border-foreground/20 hover:bg-muted"
							>
								See a live demo
							</Link>
						</div>
					</div>

					<div className="rounded-[2rem] border border-border/70 bg-background/80 p-6 backdrop-blur">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
							Content pillars
						</p>
						<div className="mt-6 grid gap-4">
							<div className="rounded-2xl border border-border/70 bg-card/70 p-5">
								<h2 className="text-lg font-semibold">Philosophy</h2>
								<p className="mt-2 text-sm leading-6 text-muted-foreground">
									Explain the core idea: slides should be treated like websites.
								</p>
							</div>
							<div className="rounded-2xl border border-border/70 bg-card/70 p-5">
								<h2 className="text-lg font-semibold">Comparisons</h2>
								<p className="mt-2 text-sm leading-6 text-muted-foreground">
									Clarify where Slide-CN fits, where it does not, and why the tradeoffs matter.
								</p>
							</div>
							<div className="rounded-2xl border border-border/70 bg-card/70 p-5">
								<h2 className="text-lg font-semibold">Tutorials</h2>
								<p className="mt-2 text-sm leading-6 text-muted-foreground">
									Show how teams can actually ship decks, demos, and branded talks in React.
								</p>
							</div>
						</div>
					</div>
				</div>

				{featuredPost ? (
					<section className="relative mt-20">
						<div className="mb-6 flex items-center justify-between gap-4">
							<div>
								<p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
									Featured
								</p>
								<h2 className="mt-2 text-2xl font-semibold tracking-tight">Start here</h2>
							</div>
						</div>
						<BlogPostCard post={featuredPost} featured />
					</section>
				) : null}

				<section className="mt-12">
					<div className="mb-6 flex items-center justify-between gap-4">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
								All posts
							</p>
							<h2 className="mt-2 text-2xl font-semibold tracking-tight">Ideas with practical edges</h2>
						</div>
						<p className="text-sm text-muted-foreground">{posts.length} published</p>
					</div>
					{posts.length === 0 ? (
						<div className="rounded-[2rem] border border-dashed border-border bg-muted/30 p-8 text-muted-foreground">
							No blog posts yet.
						</div>
					) : (
						<div className="grid gap-6 md:grid-cols-2">
							{otherPosts.map((post) => (
								<BlogPostCard key={post.url} post={post} />
							))}
						</div>
					)}
				</section>
			</div>
		</main>
	);
}
