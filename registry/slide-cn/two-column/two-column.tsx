import { cn } from "@/lib/utils";

export function TwoColumn({ children }: React.ComponentProps<"div">) {
	return (
		<div className="grid h-full w-full grid-cols-2 gap-8 items-center">
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
