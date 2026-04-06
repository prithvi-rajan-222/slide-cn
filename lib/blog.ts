import { blogSource } from '@/lib/source';

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

export function formatBlogDate(date: string) {
	return blogDateFormatter.format(new Date(date));
}
