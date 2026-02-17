import Link from "next/link";

const links = [
	{ label: "Docs", href: "/docs" },
	{ label: "GitHub", href: "https://github.com/prithvi-rajan-222/slide-cn" },
	{ label: "Demo", href: "/demos/slide-cn-introduction" },
];

export function Footer() {
	return (
		<footer className="w-full border-t bg-background text-foreground">
			<div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
				<div className="text-sm font-semibold">Slide-CN</div>
				<nav className="flex items-center gap-6">
					{links.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							{...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
						>
							{link.label}
						</Link>
					))}
				</nav>
				<p className="text-sm text-muted-foreground">
					Built by{" "}
					<Link
						className="font-medium underline underline-offset-4"
						href="https://x.com/PrithviRajan222"
						target="_blank"
						rel="noopener noreferrer"
					>
						Prithvi
					</Link>
				</p>
			</div>
		</footer>
	);
}
