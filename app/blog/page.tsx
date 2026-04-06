import { formatBlogDate, getBlogPosts } from '@/lib/blog';
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

	return (
		<main className="mx-auto min-h-screen max-w-4xl px-6 py-16 md:px-8">
			<header className="max-w-2xl">
				<p className="text-sm font-medium text-muted-foreground">Blog</p>
				<h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance">
					Notes on code-first presentations
				</h1>
				<p className="mt-4 text-base leading-7 text-muted-foreground">
					Simple writing about how to build decks, explain ideas, and use Slide-CN well.
				</p>
			</header>

			<section className="mt-12 border-t">
				{posts.length === 0 ? (
					<div className="py-8 text-muted-foreground">No blog posts yet.</div>
				) : (
					<div className="divide-y">
						{posts.map((post) => (
							<article key={post.url} className="py-8">
								<div className="text-sm text-muted-foreground">
									{formatBlogDate(post.data.date)}
								</div>
								<h2 className="mt-2 text-2xl font-semibold tracking-tight">
									<Link href={post.url} className="hover:underline">
										{post.data.title}
									</Link>
								</h2>
								<p className="mt-3 text-base leading-7 text-muted-foreground">
									{post.data.description}
								</p>
							</article>
						))}
					</div>
				)}
			</section>
		</main>
	);
}
