import { cn } from "@/lib/utils"

export function TitleSlide({ children, className, ...props }: React.ComponentProps<"div">) {
	return (
		<div className={cn(
			"flex h-full w-full flex-col items-center justify-center text-center gap-4",
			className
		)}
			{...props}
		>
			{children}
		</div>
	)
}

TitleSlide.Heading = function Heading({ children, className, ...props }: React.ComponentProps<"h1">) {
	return (
		<h1
			className={cn(
				"text-6xl font-bold text-foreground tracking-tight",
				className
			)}
			{...props}
		>
			{children}
		</h1>
	)
}

TitleSlide.SubHeading = function Subheading({ children, className, ...props }: React.ComponentProps<"p">) {
	return (
		<p
			className={cn(
				"text-2xl text-muted-foreground",
				className
			)}
			{...props}
		>
			{children}
		</p>

	)
}

TitleSlide.Meta = function Meta({ children, className, ...props }: React.ComponentProps<"p">) {
	return (
		<p
			className={cn(
				"text-sm text-muted-foreground",
				className
			)}
			{...props}
		>
			{children}
		</p>
	);
}
