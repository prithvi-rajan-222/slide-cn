import * as React from "react"
import { Deck } from "@/components/deck"
import { Slide } from "@/components/slide"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
	return (
		<Deck>
			<Slide>Hello</Slide>
			<Slide>World</Slide>
			<Slide>Slide-cn</Slide>
		</Deck>
	)
}
