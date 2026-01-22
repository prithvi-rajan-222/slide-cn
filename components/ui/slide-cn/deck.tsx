"use client";
import { useDeckController } from "@/components/ui/slide-cn/use-deck-controller";
import { useKeyboardNavigation } from "@/components/ui/slide-cn/use-keyboard-navigation";
import React from "react";
import { AnimatePresence } from "motion/react";
import { SlideNav } from "@/components/ui/slide-cn/slide-nav";

const DeckContext = React.createContext<ReturnType<
	typeof useDeckController
> | null>(null);

export function Deck({ children }: { children: React.ReactNode }) {
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
			<div className="absolute inset-0 overflow-hidden touch-pan-y md:touch-none">

				<SlideNav />
				<div className="absolute inset-0">

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

