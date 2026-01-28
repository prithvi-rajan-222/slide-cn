"use client";
import { useDeckController } from "@/components/ui/slide-cn/use-deck-controller";
import { useKeyboardNavigation } from "@/components/ui/slide-cn/use-keyboard-navigation";
import React from "react";
import { AnimatePresence } from "motion/react";
import { SlideNav } from "@/components/ui/slide-cn/slide-nav";
import { cn } from "@/lib/utils";



/**
 * Deck
 *
 * Root container for a slide presentation.
 *
 * Responsibilities:
 * - Owns viewport height (`h-screen`)
 * - Manages active slide index
 * - Handles global navigation (keyboard, nav UI)
 * - Provides deck state via context
 *
 * Non-responsibilities:
 * - Does NOT manage slide layout or content
 * - Does NOT manage per-slide scroll behavior
 * - Does NOT impose styling on slides
 *
 * Usage:
 * ```tsx
 * <Deck>
 *   <Slide>...</Slide>
 *   <Slide>...</Slide>
 * </Deck>
 * ```
 *
 * Notes:
 * - Deck must be mounted in a client component
 * - Slides are rendered one at a time via AnimatePresence
 * - Height is fixed to the viewport; do not nest Deck inside another Deck
 */



const DeckContext = React.createContext<ReturnType<
	typeof useDeckController
> | null>(null);

export function Deck({ children, className }: { children: React.ReactNode, className?: string }) {
	const slides = React.Children.toArray(children);
	const deck = useDeckController(slides.length);
	useKeyboardNavigation({
		onNext: deck.next,
		onPrev: deck.prev
	});


	return (
		<DeckContext.Provider
			value={deck}
		>
			<div className={cn("absolute inset-0 overflow-hidden touch-pan-y md:touch-none h-screen", className)}>

				<SlideNav />
				<div className="absolute inset-0 overflow-y-auto md:overflow-hidden h-full">
					<AnimatePresence mode="wait">
						{slides[deck.index]}
					</AnimatePresence>
				</div>

			</div>

		</DeckContext.Provider>
	);
}

export function useDeck() {
	const ctx = React.useContext(DeckContext);
	if (!ctx) throw new Error("useDeck must be used inside Deck");
	return ctx;
}

