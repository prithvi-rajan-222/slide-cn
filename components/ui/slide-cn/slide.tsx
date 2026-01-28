"use client";
import React from "react";
import { motion } from "motion/react";
import { useDeck } from "@/components/ui/slide-cn/deck";
import { SlideFooter } from "@/components/ui/slide-cn/slide-footer";


/**
 * Slide
 *
 * Main container for each slide.
 *
 * Responsibilities:
 * - Handles the transition animation between slides
 * - Handles swipe navigation on mobile
 * - Renders a background for the slide if provided, and a footer by default
 *
 * Non Responsibilities:
 * - Does not handle slide layout
 * 
 * Usage:
 * ```tsx
 * <Deck>
 * 	<Slide background={<BackgroundComponent/>}>
 * 		{slide content}
 * 	</Slide>
 * </Deck>
 * ```
 */


type SlideProps = {
	children: React.ReactNode;
	background?: React.ReactNode;
	footer?: React.ReactNode;
};

export function Slide({ children, background, footer = <SlideFooter /> }: SlideProps) {
	const deck = useDeck();

	return (
		<motion.div
			data-slide
			className="
        relative w-full h-full
        overflow-hidden
        md:absolute md:inset-0
      "
			exit={{ opacity: 0 }}

		>
			{/* Background layer (viewport-scoped, never scrolls) */}
			{background && (
				<div className="absolute inset-0 pointer-events-none">
					{background}
				</div>
			)}

			{/* Scroll layer (mobile scroll lives here) */}
			<motion.div className="relative z-10 h-full w-full overflow-y-auto md:overflow-hidden"
				drag="x"
				dragConstraints={{ left: 0, right: 0 }}
				dragElastic={0.25}
				dragMomentum={false}
				whileDrag={{ scale: 1 }}
				onDragEnd={(event, info) => {
					const swipeDistance = info.offset.x;
					const swipeVelocity = info.velocity.x;

					const DISTANCE_THRESHOLD = 60;
					const VELOCITY_THRESHOLD = 600;

					if (Math.abs(info.offset.y) > Math.abs(info.offset.x)) return;

					if (
						swipeDistance > DISTANCE_THRESHOLD ||
						swipeVelocity > VELOCITY_THRESHOLD
					) {
						deck.prev();
					} else if (
						swipeDistance < -DISTANCE_THRESHOLD ||
						swipeVelocity < -DISTANCE_THRESHOLD
					) {
						deck.next();
					}
				}}
			>
				<div className="h-full w-full flex flex-col">
					<div className="flex-1">
						{children}
					</div>

					{footer && (
						<div className="mt-4">
							{footer}
						</div>
					)}
				</div>
			</motion.div>
		</motion.div>
	);
}
