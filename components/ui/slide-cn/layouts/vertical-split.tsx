import { cn } from "@/lib/utils";

/**
 * VerticalSplit
 * This is a "Layout Component"
 * It is used to dictate how content is layed out in a given slide
 *
 * Responsibilities:
 * - Split content Verically, creating two halfs - Top and Bottom
 * - Allows you to split by a ratio. The prop ratio needs to be between 0.2 and 0.8. The content is split in the ratio "ratio : (1-ratio)"
 *
 * Usage:
 * ```tsx
 * <Deck>
 *	<Slide>
 *		<VerticalSplit ratio=0.7>
 *			<VerticalSplit.Top>This content takes up 70% of the space</VerticalSplit.Top>
 *			<VerticalSplit.Bottom>This content takes up only 30% of the space</VerticalSplit.Bottom>
 *		</VerticalSplit>
 *	</Slide>
 * </Deck>
 * ```
 */

interface VerticalSplitProps extends React.ComponentProps<"div"> {
	ratio?: number;
}

export function VerticalSplit({ children, ratio = 0.5, className, style, ...props }: VerticalSplitProps) {
	const clampedRatio = Math.max(0.2, Math.min(0.8, ratio));
	return (
		<div
			className={cn("grid h-full w-full", className)}
			style={{
				gridTemplateRows: `${clampedRatio * 100}% ${(1 - clampedRatio) * 100}%`,
				...style,
			}}
			{...props}
		>
			{children}
		</div>
	);
}


VerticalSplit.Top = function Top({ children, className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"h-full w-full",
				className
			)}
			{...props}
		>
			{children}
		</div>

	)
}

VerticalSplit.Bottom = function Bottom({ children, className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"h-full w-full",
				className
			)}
			{...props}
		>
			{children}
		</div>

	)
}
