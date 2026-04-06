import { blogSource } from '@/lib/source';
import { SITE_URL } from '@/lib/seo';
import { getMDXComponents } from '@/mdx-components';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
	const params = await props.params;
	const page = blogSource.getPage([params.slug]);
	if (!page) notFound();

	const MDX = page.data.body;

	return (
		<main className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-20 md:px-8">
			<div className="max-w-3xl">
				<p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
					Blog
				</p>
				<h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
					{page.data.title}
				</h1>
				{page.data.description ? (
					<p className="mt-6 text-lg leading-8 text-muted-foreground">{page.data.description}</p>
				) : null}
			</div>

			<article className="mt-16 rounded-[2rem] border border-border bg-card px-6 py-10 shadow-sm sm:px-10">
				<DocsBody>
					<MDX
						components={getMDXComponents({
							a: createRelativeLink(blogSource, page),
						})}
					/>
				</DocsBody>
			</article>
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
