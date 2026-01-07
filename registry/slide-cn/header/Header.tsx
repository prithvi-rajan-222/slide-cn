import { cn } from "@/lib/utils";

export function Header({ children, className, ...props }: React.ComponentProps<"header">) {
	return (
		<header
			className={cn(
				"font-bold text-foreground text-2xl md:text-4xl lg:text-6xl tracking-tight antialiased",
				className,
			)}
			{...props}
		>
			{children}
		</header>
	)
}
