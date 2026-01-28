import { cn } from "@/lib/utils";

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
