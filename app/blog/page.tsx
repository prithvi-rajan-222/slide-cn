import { blogSource } from '@/lib/source';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo';
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
	const posts = blogSource.getPages();

	return (
		<main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-20 md:px-8">
			<div className="max-w-3xl">
				<p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
					Slide-CN Blog
				</p>
				<h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
					Ideas, tutorials, and honest guidance for code-first presentations
				</h1>
				<p className="mt-6 text-lg leading-8 text-muted-foreground">
					{SITE_DESCRIPTION} This section is where we explain the why, compare approaches,
					and show how teams can actually build decks that feel like part of their product stack.
				</p>
			</div>

			<div className="mt-16 grid gap-6 md:grid-cols-2">
				{posts.length === 0 ? (
					<div className="rounded-3xl border border-dashed border-border bg-muted/30 p-8 text-muted-foreground">
						No blog posts yet.
					</div>
				) : (
					posts.map((post) => (
						<Link
							key={post.url}
							href={post.url}
							className="rounded-3xl border border-border bg-card p-8 transition-transform duration-200 hover:-translate-y-1 hover:border-foreground/20"
						>
							<p className="text-sm font-medium text-muted-foreground">{post.data.title}</p>
							<h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance">
								{post.data.title}
							</h2>
							<p className="mt-4 text-base leading-7 text-muted-foreground">
								{post.data.description}
							</p>
						</Link>
					))
				)}
			</div>
		</main>
	);
}
