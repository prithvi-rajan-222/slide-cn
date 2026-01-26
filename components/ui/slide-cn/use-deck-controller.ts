"use client";
import { useCallback, useState } from 'react';

export function useDeckController(slideCount: number) {
	const [index, setIndex] = useState(0);

	const clamp = useCallback(
		(slideIndex: number) => {
			if (slideIndex < 0) return 0;
			if (slideIndex >= slideCount) return slideCount - 1;
			return slideIndex;
		},
		[slideCount]
	);

	const next = useCallback(() => {
		setIndex((i) => clamp(i + 1));
	}, [clamp]);

	const prev = useCallback(() => {
		setIndex((i) => clamp(i - 1));
	}, [clamp]);

	const goTo = useCallback(
		(target: number) => {
			setIndex(clamp(target));
		},
		[clamp]
	);

	return {
		index,
		next,
		prev,
		goTo,
		total: slideCount,
	};
}
