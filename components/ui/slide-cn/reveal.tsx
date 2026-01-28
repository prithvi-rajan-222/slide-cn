"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";


/**
 * Reveal
 *
 * Progressive disclosure wrapper that reveals its content on click.
 *
 * Responsibilities:
 * - Visually obscures content until revealed
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
 */


interface RevealProps {
	children: React.ReactNode;
	className?: string; // Optional: Allow custom styles
}

export function Reveal({ children, className }: RevealProps) {
	const [isRevealed, setIsRevealed] = useState(false);

	return (
		<div
			onClick={() => setIsRevealed(true)}
			className={cn(isRevealed ? "" : "cursor-pointer", className)} // Show pointer if clickable
		>
			<motion.div
				className="h-full"
				initial={{ filter: "blur(5px)", opacity: 0.6 }}
				animate={
					isRevealed
						? { filter: "blur(0px)", opacity: 1 }
						: { filter: "blur(5px)", opacity: 0.6 }
				}
				transition={{ duration: 0.5, ease: "easeInOut" }}
			>
				<div className={cn("select-none h-full", isRevealed && "select-text")}>
					{children}
				</div>
			</motion.div>
		</div>
	);
}

