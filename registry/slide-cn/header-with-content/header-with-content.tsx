import { cn } from "@/lib/utils";

export function HeaderWithContent({ children, className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"flex flex-col w-full h-full p-8 md:p-16 lg:p-24 gap-4",
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
				"font-bold text-foreground text-2xl md:text-4xl lg:text-6xl tracking-tight antialiased",
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
		<div
			className={cn(
				"text-muted-foreground text-sm md:text-xl lg:text-2xl flex-1",
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}

