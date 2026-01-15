import * as React from "react"
import { Deck } from "@/components/deck"
import { Slide } from "@/components/slide"
import { FirstSlide } from "@/components/first-slide"
import { SecondSlide } from "@/components/second-slide"
import { ThirdSlide } from "@/components/third-slide"
import { FourthSlide } from "@/components/fourth-slide"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
	return (
		<Deck
		>
			<Slide key={0}>
				<FirstSlide />
			</Slide>
			<Slide key={1}>
				<SecondSlide />
			</Slide>
			<Slide key={2}>
				<ThirdSlide />
			</Slide>
			<Slide key={3}>
				<FourthSlide />
			</Slide>
		</Deck>
	)
}
