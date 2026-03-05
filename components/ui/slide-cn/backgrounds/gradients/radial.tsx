import { cn } from "@/lib/utils";

type RadialGradientProps = React.ComponentProps<"div">;

/**
 * RadialGradient
 *
 * A full-bleed background that renders a radial gradient emanating from the
 * center using the slide-cn theme palette tokens: background, background-2,
 * and background-3.
 *
 * Usage:
 * ```tsx
 * <Slide background={<RadialGradient />}>
 *   {slide content}
 * </Slide>
 * ```
 */
export function RadialGradient({
  className,
  style,
  ...props
}: RadialGradientProps) {
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
