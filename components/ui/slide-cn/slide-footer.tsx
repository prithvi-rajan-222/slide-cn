"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useDeck } from "@/components/ui/slide-cn/deck";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft, ChevronRight } from "lucide-react";

function FooterKeyCap({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-flex items-center justify-center w-5 h-5 rounded bg-foreground/10 border border-foreground/15 text-[10px] font-mono leading-none">
			{children}
		</span>
	);
}

/**
 * SlideFooter
 *
 * Optional footer component for slides that provides contextual metadata
 * and navigation affordances without affecting slide layout.
 *
 * Responsibilities:
 * - Display slide progress (current / total)
 * - Show navigation hints appropriate to device (keyboard vs swipe)
 * - Optionally render lightweight branding attribution
 *
 * Interaction model:
 * - Purely informational (no navigation control)
 * - Adapts copy and hints for mobile vs desktop
 *
 * Usage:
 * ```tsx
 * <Slide footer={<SlideFooter />} />
 *
 * <Slide
 *   footer={<SlideFooter showAdd showHint={false} />}
 * />
 * ```
 *
 * Notes:
 * - Footer is part of content flow (non-sticky)
 * - Does not control slide navigation or state
 * - Intended to remain visually subtle and non-distracting
 */

type SlideFooterProps = {
	className?: string;
	showProgress?: boolean;
	showHint?: boolean;
	showAdd?: boolean;
};

export function SlideFooter({
	className,
	showProgress = true,
	showHint = true,
	showAdd = false,
}: SlideFooterProps) {
	const deck = useDeck();
	const isMobile = useIsMobile();

	// Using grid layout for precise alignment: Left (Progress), Center (Branding), Right (Hint)
	return (
		<footer
			className={cn(
				"grid grid-cols-3 items-center gap-4 px-6 py-4 w-full",
				"bg-background/20 backdrop-blur-lg",
				"text-sm font-medium text-muted-foreground transition-colors",
				className
			)}
		>
			{/* Left: Progress */}
			<div className="flex justify-start">
				{showProgress && (
					<span className="tabular-nums opacity-75 hover:opacity-100 transition-opacity">
						Slide {deck.index + 1} <span className="text-muted-foreground/40 mx-1">/</span> {deck.total}
					</span>
				)}
			</div>

			{/* Center: Branding (Optional) */}
			<div className="flex justify-center">
				{showAdd && (
					<span className="opacity-50 hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs">
						Built with <a href={"https://slide-cn.com"} target="_blank" className="font-semibold hover:underline">Slide-CN</a>
					</span>
				)}
			</div>

			{/* Right: Hint */}
			<div className="flex justify-end">
				{showHint && (
					<span className="hidden sm:flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
						<FooterKeyCap>&#8592;</FooterKeyCap>
						<FooterKeyCap>&#8594;</FooterKeyCap>
					</span>
				)}
				{/* Mobile simplified hint */}
				{showHint && (
					<span className="sm:hidden flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity text-xs">
						<span>Swipe</span>
						<ChevronLeft className="w-3 h-3" />
						<ChevronRight className="w-3 h-3" />
					</span>
				)}
			</div>
		</footer>
	);
}
