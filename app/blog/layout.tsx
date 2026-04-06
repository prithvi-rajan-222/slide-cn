import type { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
	return <div className="min-h-screen bg-background text-foreground">{children}</div>;
}
