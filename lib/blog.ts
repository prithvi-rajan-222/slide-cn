import { blogSource } from '@/lib/source';

export type BlogPost = ReturnType<typeof blogSource.getPages>[number];

const blogDateFormatter = new Intl.DateTimeFormat('en-US', {
	month: 'long',
	day: 'numeric',
	year: 'numeric',
});

export function getBlogPosts() {
	return [...blogSource.getPages()].sort((a, b) => {
		return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
	});
}

export function getFeaturedBlogPost() {
	const posts = getBlogPosts();
	return posts.find((post) => post.data.featured) ?? posts[0] ?? null;
}

export function formatBlogDate(date: string) {
	return blogDateFormatter.format(new Date(date));
}

export function getRelatedBlogPosts(currentUrl: string, limit = 2) {
	return getBlogPosts().filter((post) => post.url !== currentUrl).slice(0, limit);
}
