import { cn } from "@/lib/utils";

/**
 * HeaderWithContent
 *
 * A simple layout for a slide. Very lightly styled. Can be overwritten using the className prop
 *
 * Usage
 * ```tsx
 * <Deck>
 * 	<Slide background={<BackgroundComponent/>}>
 * 		<HeaderWithContent>
 * 			<HeaderWithContent.Header>
 * 				Welcome to slide-cn
 * 			</HeaderWithContent.Header>
 * 			<HeaderWithContent.Content>
 * 				Content of the slide
 * 			</HeaderWithContent.Content>
 * 		</HeaderWithContent>
 * 	</Slide>
 * </Deck>
 * ```
 */

export function HeaderWithContent({ children, className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"flex flex-col w-full h-full p-4 md:p-8 gap-4",
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

