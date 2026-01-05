"use client";
import React from "react";

type SlideProps = {
	children: React.ReactNode;
};

export function Slide({ children }: SlideProps) {
	return (
		<section
			data-slide
			className="w-full h-full"
		>
			{children}
		</section>
	);
}
