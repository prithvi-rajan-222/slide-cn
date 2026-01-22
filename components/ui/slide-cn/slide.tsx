"use client";
import React from "react";
import { motion } from "motion/react";
import { useDeck } from "@/components/ui/slide-cn/deck";

type SlideProps = {
	children: React.ReactNode;
};

export function Slide({ children }: SlideProps) {
	const deck = useDeck();
	return (
		<motion.div
			data-slide
			className="relative w-full h-screen md:absolute md:inset-0 md:overflow-hidden"
			exit={{ opacity: 0 }}
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

				const isSwipeRight =
					swipeDistance > DISTANCE_THRESHOLD ||
					swipeVelocity > VELOCITY_THRESHOLD;

				const isSwipeLeft =
					swipeDistance < -DISTANCE_THRESHOLD ||
					swipeVelocity < -VELOCITY_THRESHOLD;

				// Extra safety: ignore mostly-vertical gestures
				if (Math.abs(info.offset.y) > Math.abs(info.offset.x)) {
					return;
				}

				if (isSwipeRight) {
					deck.prev();
				} else if (isSwipeLeft) {
					deck.next();
				}
			}}
		>
			{children}
		</motion.div>
	);
}
