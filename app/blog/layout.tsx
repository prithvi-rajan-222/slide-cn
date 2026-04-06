import { baseOptions } from '@/lib/layout.shared';
import { blogSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout
			tree={blogSource.getPageTree()}
			themeSwitch={{ enabled: false }}
			sidebar={{ enabled: false }}
			{...baseOptions()}
		>
			{children}
		</DocsLayout>
	);
}
