import type { BlogPost } from '@/lib/blog';
import { formatBlogDate } from '@/lib/blog';
import Link from 'next/link';

type BlogPostCardProps = {
	post: BlogPost;
	featured?: boolean;
};

export function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
	return (
		<Link
			href={post.url}
			className={[
				'group relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/90 transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/5',
				featured ? 'min-h-[22rem] p-8 sm:p-10' : 'min-h-[18rem] p-7',
			].join(' ')}
		>
			<div className="absolute inset-x-6 top-0 h-24 rounded-b-full bg-linear-to-r from-transparent via-primary/10 to-transparent blur-2xl" />
			<div className="relative flex h-full flex-col">
				<div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
					<span>{formatBlogDate(post.data.date)}</span>
					<span className="h-1 w-1 rounded-full bg-border" />
					<span>{post.data.author}</span>
				</div>
				<h2
					className={[
						'mt-5 max-w-3xl font-semibold tracking-tight text-balance',
						featured ? 'text-3xl sm:text-4xl' : 'text-2xl',
					].join(' ')}
				>
					{post.data.title}
				</h2>
				<p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
					{post.data.description}
				</p>
				<div className="mt-6 flex flex-wrap gap-2">
					{post.data.tags.slice(0, featured ? 4 : 3).map((tag) => (
						<span
							key={tag}
							className="rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
						>
							{tag}
						</span>
					))}
				</div>
				<div className="mt-auto pt-10 text-sm font-semibold text-foreground/80 transition group-hover:text-foreground">
					Read article
				</div>
			</div>
		</Link>
	);
}
