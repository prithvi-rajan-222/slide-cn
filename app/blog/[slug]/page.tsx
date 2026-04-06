import { DocsFooter } from '@/components/docs-footer';
import { formatBlogDate } from '@/lib/blog';
import { blogSource } from '@/lib/source';
import { SITE_URL } from '@/lib/seo';
import { getMDXComponents } from '@/mdx-components';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
	const params = await props.params;
	const page = blogSource.getPage([params.slug]);
	if (!page) notFound();

	const MDX = page.data.body;

	return (
		<DocsPage
			toc={page.data.toc}
			tableOfContent={{
				style: 'clerk',
			}}
			breadcrumb={{
				enabled: false,
			}}
			footer={{
				children: <DocsFooter />,
			}}
		>
			<div className="text-sm text-muted-foreground">
				{formatBlogDate(page.data.date)} by {page.data.author}
			</div>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDX
					components={getMDXComponents({
						a: createRelativeLink(blogSource, page),
					})}
				/>
			</DocsBody>
		</DocsPage>
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
