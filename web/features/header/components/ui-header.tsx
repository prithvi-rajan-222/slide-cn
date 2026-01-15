"use client";
import { NavbarItemType } from "@/types";
import Link from "next/link";
import { useState } from "react";
import MotionDrawer from "./motion-drawer";

export function UIHeader() {

	const navbarItems: NavbarItemType[] = [
		{
			label: "Components",
			href: "/components"
		},
		{
			label: "Templates",
			href: "/templates"
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
								href={item.href}
								className="transition-colors hover:text-foreground/80 text-foreground/60"
							>
								{item.label}
							</Link>
						))}
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
				contentClassName="bg-background"
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
							href={item.href}
							className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
							onClick={() => setOpen(false)}
						>
							{item.label}
						</Link>
					))}
				</div>
			</MotionDrawer>
		</>
	)
}
