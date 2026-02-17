"use client";
import { NavbarItemType } from "@/types";
import Link from "next/link";
import { useState } from "react";
import MotionDrawer from "./motion-drawer";
import { Route } from "next";
import { Star } from "lucide-react";

const GITHUB_URL = "https://github.com/prithvi-rajan-222/slide-cn";

export function UIHeader() {

	const navbarItems: NavbarItemType[] = [
		{
			label: "Docs",
			href: "/docs"
		},
		{
			label: "Demo",
			href: "/demos/slide-cn-introduction"
		}
	];
	const [open, setOpen] = useState(false);

	return (
		<>
			<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="max-w-7xl mx-auto px-6 md:px-8 flex h-14 items-center justify-between">
					<Link href={"/"} className="flex items-center space-x-2">
						<span className="font-bold text-xl tracking-tight">Slide-CN</span>
					</Link>
					<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
						{navbarItems.map(item => (
							<Link
								key={item.label}
								href={item.href as Route}
								className="transition-colors hover:text-foreground/80 text-foreground/60"
							>
								{item.label}
							</Link>
						))}
						<a
							href={GITHUB_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/50 px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
						>
							<Star className="h-3.5 w-3.5" />
							Star on GitHub
						</a>
					</nav>

					{/* Mobile Button */}
					{/* <button */}
					{/* 	className="md:hidden p-2 text-foreground/60 hover:text-foreground" */}
					{/* 	onClick={() => setOpen(prev => !prev)} */}
					{/* > */}
					{/* 	{open ? <X className="h-5 w-5 z-50" /> : <Menu className="h-5 w-5 z-50" />} */}
					{/* </button> */}
				</div>
			</header>

			{/* Mobile Menu */}
			<MotionDrawer
				direction="right"
				isOpen={open}
				onToggle={setOpen}
				contentClassName="bg-background text-foreground"
				backgroundColor="bg-popover"
				overlayClassName="backdrop-blur-sm"
				animationConfig={{ duration: 0.2 }}
				buttonOpeningVariants="merge"
				showToggleButton={true}
				className="md:hidden text-foreground/60 hover:text-foreground"
			>
				<div className="md:hidden mt-3 flex flex-col gap-4 px-4 pb-4">
					{navbarItems.map(item => (
						<Link
							key={item.label}
							href={item.href as Route}
							className="text-lg font-medium text-popover-foreground/80 hover:text-popover-foreground transition-colors"
							onClick={() => setOpen(false)}
						>
							{item.label}
						</Link>
					))}
					<a
						href={GITHUB_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-lg font-medium text-popover-foreground/80 hover:text-popover-foreground transition-colors"
						onClick={() => setOpen(false)}
					>
						<Star className="h-4 w-4" />
						Star on GitHub
					</a>
				</div>
			</MotionDrawer>
		</>
	)
}
