"use client";
import { useDeckController } from "@/src/mechanics/use-deck-controller";
import { useKeyboardNavigation } from "@/src/mechanics/use-keyboard-navigation";
import React from "react";
import { SlideNav } from "./slide-nav";
import { AnimatePresence } from "motion/react";

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
			<SlideNav />
			<AnimatePresence mode="wait">
				{slides[deck.index]}
			</AnimatePresence>
		</DeckContext.Provider>
	);
}

export function useDeck() {
	const ctx = React.useContext(DeckContext);
	if (!ctx) throw new Error("useDeck must be used inside Deck");
	return ctx;
}

