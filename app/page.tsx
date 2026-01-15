import * as React from "react"
import { UIHeader } from "@/web/features/header/components/ui-header"
import { Hero } from "@/web/features/hero/components/Hero"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
	return (
		<>
			<UIHeader />
			<Hero />
		</>
	)
}
