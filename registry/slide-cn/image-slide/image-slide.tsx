import { cn } from "@/lib/utils"

export function ImageSlide({ children }: React.ComponentProps<"div">) {
	return (
		<div className="h-full w-full flex items-center justify-center overflow-hidden p-8">
			{children}
		</div>
	)
}


ImageSlide.Image = function Image({ className, ...props }: React.ComponentProps<"img">) {
	return (
		<img
			className={cn(
				className
			)}
			{...props}
		/>
	)
}


ImageSlide.Caption = function Caption({ children, className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"text-sm text-muted-foreground",
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}
