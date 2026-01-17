"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
				initial={{ filter: "blur(5px)", opacity: 0.6 }}
				animate={
					isRevealed
						? { filter: "blur(0px)", opacity: 1 }
						: { filter: "blur(5px)", opacity: 0.6 }
				}
				transition={{ duration: 0.5, ease: "easeInOut" }}
			>
				<div className={cn("select-none", isRevealed && "select-text")}>
					{children}
				</div>
			</motion.div>
		</div>
	);
}

