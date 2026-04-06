import { BlogArticleCTA } from '@/components/blog/blog-article-cta';
import { BlogPostCard } from '@/components/blog/blog-post-card';
import { formatBlogDate, getRelatedBlogPosts } from '@/lib/blog';
import { blogSource } from '@/lib/source';
import { SITE_URL } from '@/lib/seo';
import { getMDXComponents } from '@/mdx-components';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
	const params = await props.params;
	const page = blogSource.getPage([params.slug]);
	if (!page) notFound();

	const MDX = page.data.body;
	const relatedPosts = getRelatedBlogPosts(page.url);

	return (
		<main className="relative overflow-hidden">
			<div className="absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.08),transparent_58%)]" />
			<div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-20 md:px-8">
				<div className="relative max-w-3xl">
					<Link
						href="/blog"
						className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
					>
						<span aria-hidden="true">←</span>
						Back to blog
					</Link>
					<div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
						<span>{formatBlogDate(page.data.date)}</span>
						<span className="h-1 w-1 rounded-full bg-border" />
						<span>{page.data.author}</span>
					</div>
					<h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
						{page.data.title}
					</h1>
					{page.data.description ? (
						<p className="mt-6 text-lg leading-8 text-muted-foreground">{page.data.description}</p>
					) : null}
					<div className="mt-8 flex flex-wrap gap-2">
						{page.data.tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
							>
								{tag}
							</span>
						))}
					</div>
				</div>

				<article className="relative mt-14 rounded-[2rem] border border-border/70 bg-card px-6 py-10 shadow-sm sm:px-10 md:px-14">
					<DocsBody>
						<MDX
							components={getMDXComponents({
								a: createRelativeLink(blogSource, page),
							})}
						/>
					</DocsBody>
					<BlogArticleCTA />
				</article>

				{relatedPosts.length > 0 ? (
					<section className="mt-14">
						<div className="mb-6">
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
								Read next
							</p>
							<h2 className="mt-2 text-2xl font-semibold tracking-tight">Keep exploring the idea</h2>
						</div>
						<div className="grid gap-6 md:grid-cols-2">
							{relatedPosts.map((post) => (
								<BlogPostCard key={post.url} post={post} />
							))}
						</div>
					</section>
				) : null}
			</div>
		</main>
	);
}

export async function generateStaticParams() {
	return blogSource.getPages().map((page) => ({
		slug: page.slugs[0],
	}));
}

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
	const params = await props.params;
	const page = blogSource.getPage([params.slug]);
	if (!page) notFound();

	const url = `${SITE_URL}${page.url}`;

	return {
		title: page.data.title,
		description: page.data.description,
		alternates: {
			canonical: page.data.canonical ?? url,
		},
		openGraph: {
			title: page.data.title,
			description: page.data.description,
			type: 'article',
			url,
		},
	};
}
