import { cn } from "@/lib/utils";


/**
 * HorizontalSplit
 * This is a "Layout Component"
 * It is used to dictate how content is layed out in a given slide
 *
 * Responsibilities:
 * - Split content Horizontally, creating two halfs - left and right
 * - Allows you to split by a ratio. The prop ratio needs to be between 0.2 and 0.8. The content is split in the ratio "ratio : (1-ratio)"
 * - In a mobile screen, the content is stacked vertically instead. Meaning, this turns into a vertical split on a mobile screen
 *
 * Usage:
 * ```tsx
 * <Deck>
 *	<Slide>
 *		<HorizontalSplit ratio=0.7>
 *			<HorizontalSplit.Left>This content takes up 70% of the space</HorizontalSplit.Left>
 *			<HorizontalSplit.Right>This content takes up only 30% of the space</HorizontalSplit.Right>
 *		</HorizontalSplit>
 *	</Slide>
 * </Deck>
 * ```
 */

interface HorizontalSplitProps extends React.ComponentProps<"div"> {
	ratio?: number;
}

export function HorizontalSplit({ children, ratio = 0.5, className, style, ...props }: HorizontalSplitProps) {
	const clampedRatio = Math.max(0.2, Math.min(0.8, ratio));
	return (
		<div
			className={cn(
				"grid h-full w-full grid-cols-1 md:grid-cols-[var(--split-ratio)_1fr] items-center",
				className
			)}
			style={{
				"--split-ratio": `${clampedRatio * 100}%`,
				...style,
			} as React.CSSProperties}
			{...props}
		>
			{children}
		</div>
	);
}


HorizontalSplit.Left = function Left({ children, className, ...props }: React.ComponentProps<"div">) {
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

HorizontalSplit.Right = function Right({ children, className, ...props }: React.ComponentProps<"div">) {
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
