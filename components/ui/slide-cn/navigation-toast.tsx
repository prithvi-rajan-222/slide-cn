"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { useDeck } from "@/components/ui/slide-cn/deck";
import { useIsMobile } from "@/hooks/use-mobile";

type NavigationToastProps = {
	duration?: number;
	desktopMessage?: string;
	mobileMessage?: string;
	className?: string;
};

export function NavigationToast({
	duration = 3000,
	desktopMessage = "Use arrow keys to navigate",
	mobileMessage = "Swipe left or right to navigate",
	className,
}: NavigationToastProps) {
	const [visible, setVisible] = React.useState(true);
	const isMobile = useIsMobile();
	const deck = useDeck();
	const initialIndex = React.useRef(deck.index);

	// Dismiss on navigation
	React.useEffect(() => {
		if (deck.index !== initialIndex.current) {
			setVisible(false);
		}
	}, [deck.index]);

	// Auto-dismiss after duration
	React.useEffect(() => {
		const timer = setTimeout(() => setVisible(false), duration);
		return () => clearTimeout(timer);
	}, [duration]);

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 10 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
					className={cn(
						"absolute bottom-20 left-1/2 -translate-x-1/2 z-50",
						"flex items-center gap-3 px-5 py-3 rounded-full",
						"bg-foreground/10 backdrop-blur-xl border border-foreground/10",
						"text-sm font-medium text-foreground/80",
						"shadow-lg",
						className
					)}
				>
					{isMobile ? (
						<>
							<SwipeIcon />
							<span>{mobileMessage}</span>
						</>
					) : (
						<>
							<span>{desktopMessage}</span>
							<div className="flex items-center gap-1.5">
								<KeyCap>&#8592;</KeyCap>
								<KeyCap>&#8594;</KeyCap>
							</div>
						</>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
}

function KeyCap({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-foreground/10 border border-foreground/15 text-xs font-mono shadow-sm">
			{children}
		</span>
	);
}

function SwipeIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="opacity-70"
		>
			<path d="M5 12h14" />
			<path d="M2 12l3-3M2 12l3 3" />
			<path d="M22 12l-3-3M22 12l-3 3" />
		</svg>
	);
}
