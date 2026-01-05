import React from "react"

type BasicSlideProps = {
	children: React.ReactNode;
}
export function BasicSlide({ children }: BasicSlideProps) {
	return (
		<div
			className="bg-primary text-primary-foreground h-full flex justify-center items-center"
		>
			{children}
		</div>
	)
}
