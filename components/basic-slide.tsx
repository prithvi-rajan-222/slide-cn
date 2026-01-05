import React from "react"

type BasicSlideProps = {
	children: React.ReactNode;
}
export function BasicSlide({ children }: BasicSlideProps) {
	return (
		<div
			className="bg-background text-foreground h-full flex justify-center items-center"
		>
			{children}
		</div>
	)
}
