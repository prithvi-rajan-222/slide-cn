import { cn } from "@/lib/utils";

export function HeaderWithContent({ children, className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"flex flex-col w-full h-full p-8",
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}

HeaderWithContent.Header = function Header({ children, className, ...props }: React.ComponentProps<"h1">) {
	return (
		<h1
			className={cn(
				"font-bold text-foreground",
				className
			)}
			{...props}
		>
			{children}
		</h1>
	)
}

HeaderWithContent.Content = function Content({ children, className, ...props }: React.ComponentProps<"div">) {
	return (
		<h1
			className={cn(
				"text-muted-foreground",
				className
			)}
			{...props}
		>
			{children}
		</h1>
	)
}

