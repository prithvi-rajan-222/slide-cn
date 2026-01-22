import { useEffect } from "react";

type KeyboardNavigationOptions = {
	onNext: () => void;
	onPrev: () => void;
	disabled?: boolean;
};

export function useKeyboardNavigation({
	onNext,
	onPrev,
	disabled = false,
}: KeyboardNavigationOptions) {
	useEffect(() => {
		if (disabled) return;

		const handler = (e: KeyboardEvent) => {
			// Ignore key repeat (holding down key)
			if (e.repeat) return;

			if (e.key === "ArrowRight" || e.key === " ") {
				e.preventDefault();
				onNext();
			}

			if (e.key === "ArrowLeft") {
				e.preventDefault();
				onPrev();
			}
		};

		window.addEventListener("keydown", handler);
		return () => {
			window.removeEventListener("keydown", handler);
		};
	}, [onNext, onPrev, disabled]);
}
