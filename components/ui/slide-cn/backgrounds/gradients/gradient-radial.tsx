import { cn } from "@/lib/utils";

type GradientRadialProps = React.ComponentProps<"div">;

/**
 * GradientRadial
 *
 * A full-bleed background that renders a radial gradient emanating from the
 * center using the slide-cn theme palette tokens: background, background-2,
 * and background-3.
 *
 * Usage:
 * ```tsx
 * <Slide background={<GradientRadial />}>
 *   {slide content}
 * </Slide>
 * ```
 */
export function GradientRadial({ className, style, ...props }: GradientRadialProps) {
	return (
		<div
			className={cn("absolute inset-0", className)}
			style={{
				background: `radial-gradient(
					ellipse at center,
					var(--background),
					var(--background-2),
					var(--background-3)
				)`,
				...style,
			}}
			{...props}
		/>
	);
}
