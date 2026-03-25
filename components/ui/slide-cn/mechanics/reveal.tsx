"use client";

import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";


/**
 * Reveal
 *
 * Progressive disclosure wrapper that reveals its content via a 3D card flip on click.
 *
 * Responsibilities:
 * - Hides content behind a frosted-glass back face until revealed
 * - Measures content dimensions and flips about the longer axis for a natural look:
 *     - Landscape content (width >= height): flips top-to-bottom (rotateX)
 *     - Portrait content (width < height): flips left-to-right (rotateY)
 * - Tracks dimension changes via ResizeObserver so the axis stays correct on resize
 * - Handles one-way reveal interaction
 * - Works with any child content (text, cards, layouts)
 *
 * Interaction model:
 * - Click to reveal
 * - One-way only (cannot be hidden again)
 * - No hover or keyboard interaction by default
 *
 * Usage:
 * ```tsx
 * <Reveal>
 *   <p>This bullet is revealed on click</p>
 * </Reveal>
 * ```
 *
 * Notes:
 * - Reveal is a presentation affordance, not a security feature
 * - Intended for step-by-step storytelling inside slides
 * - The back face uses backdrop-blur, so it needs a non-transparent background
 *   somewhere in the ancestor tree to look correct
 */


interface RevealProps {
	children: React.ReactNode;
	className?: string;
}

export function Reveal({ children, className }: RevealProps) {
	const [isRevealed, setIsRevealed] = useState(false);
	// "X" = flip top-to-bottom (landscape content, longer horizontal axis)
	// "Y" = flip left-to-right (portrait content, longer vertical axis)
	const [axis, setAxis] = useState<"X" | "Y">("X");
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!contentRef.current) return;

		const update = (width: number, height: number) => {
			setAxis(width >= height ? "X" : "Y");
		};

		const { width, height } = contentRef.current.getBoundingClientRect();
		update(width, height);

		const observer = new ResizeObserver(([entry]) => {
			const { width, height } = entry.contentRect;
			update(width, height);
		});
		observer.observe(contentRef.current);
		return () => observer.disconnect();
	}, []);

	const faceTransform = axis === "X" ? "rotateX(180deg)" : "rotateY(180deg)";
	const animateProps = axis === "X"
		? { rotateX: isRevealed ? 180 : 0 }
		: { rotateY: isRevealed ? 180 : 0 };

	return (
		<div
			onClick={() => !isRevealed && setIsRevealed(true)}
			className={cn(!isRevealed && "cursor-pointer", className)}
			style={{ perspective: "1200px" }}
		>
			<motion.div
				style={{ transformStyle: "preserve-3d", position: "relative" }}
				animate={animateProps}
				transition={{ duration: 0.6, ease: "easeInOut" }}
			>
				{/* Back face — absolute so it doesn't affect layout height */}
				<div
					className="absolute inset-0 rounded-md bg-background/30 backdrop-blur-sm border border-border/40 flex items-center justify-center"
					style={{ backfaceVisibility: "hidden" }}
				>
					<span className="text-foreground/60 text-sm select-none font-medium">
						Click to reveal
					</span>
				</div>

				{/* Front face — in normal flow to set height, starts facing away */}
				<div
					ref={contentRef}
					className={cn("w-full", !isRevealed && "select-none")}
					style={{ backfaceVisibility: "hidden", transform: faceTransform }}
				>
					{children}
				</div>
			</motion.div>
		</div>
	);
}

