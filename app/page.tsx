import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world"
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form"
import PokemonPage from "@/registry/new-york/blocks/complex-component/page"
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card"
import { Button } from "@/registry/new-york/ui/button"
import { SlideNav } from "@/components/slide-nav"
import { Deck } from "@/components/deck"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
	return (
		<Deck>
			<div className="flex w-full justify-center">
				Hi
			</div>
			<div className="flex w-full justify-center">
				World
			</div>
			<div className="flex w-full justify-center">
				Prithvi
			</div>
			<div className="flex w-full justify-center">
				Rajan
			</div>
		</Deck>
	)
}
