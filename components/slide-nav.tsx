"use client";

import { Button } from "@/registry/new-york/ui/button";
import { useDeck } from "./deck";

export function SlideNav() {
	const deck = useDeck();

	return (
		<>
			{/* LEFT ZONE */}
			<div className="pointer-events-none fixed inset-y-0 left-0 w-24">
				<div className="group pointer-events-auto h-full w-full flex items-center">
					<Button
						type="button"
						onClick={deck.prev}
						className="
							ml-4
							      opacity-0
							      transition-opacity
							      group-hover:opacity-100
						    "
					>
						Prev
					</Button>
				</div>
			</div>

			{/* RIGHT ZONE */}
			<div className="pointer-events-none fixed inset-y-0 right-0 w-24">
				<div className="group pointer-events-auto h-full w-full flex items-center justify-end">
					<Button
						type="button"
						onClick={deck.next}
						className="
              mr-4
              opacity-0
              transition-opacity
              group-hover:opacity-100
            "
					>
						Next
					</Button>
				</div>
			</div>
		</>
	);
}
