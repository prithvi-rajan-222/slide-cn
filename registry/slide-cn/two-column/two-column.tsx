import { cn } from "@/lib/utils";

interface TwoColumnProps extends React.ComponentProps<"div"> {
	ratio?: number;
}

export function TwoColumn({ children, ratio = 0.5, className, style, ...props }: TwoColumnProps) {
	const clampedRatio = Math.max(0.2, Math.min(0.8, ratio));
	return (
		<div
			className={cn("grid h-full w-full grid-cols-2 gap-8 items-center", className)}
			style={{
				gridTemplateColumns: `${clampedRatio}fr ${1 - clampedRatio}fr`,
				...style,
			}}
			{...props}
		>
			{children}
		</div>
	);
}


TwoColumn.Left = function Left({ children, className, ...props }: React.ComponentProps<"div">) {
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

TwoColumn.Right = function Right({ children, className, ...props }: React.ComponentProps<"div">) {
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
