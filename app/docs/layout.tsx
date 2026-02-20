import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { DocsSidebarFooter } from '@/components/docs-sidebar-footer';

export default function Layout({ children }: LayoutProps<'/docs'>) {
	return (
		<>
			<DocsLayout
				tree={source.getPageTree()}
				themeSwitch={{ enabled: false }}
				sidebar={{ footer: <DocsSidebarFooter /> }}
				{...baseOptions()}
			>
				{children}
			</DocsLayout>
		</>
	);
}
