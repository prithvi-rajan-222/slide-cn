import { cn } from "@/lib/utils";

type LinearGradientProps = React.ComponentProps<"div">;

/**
 * GradientLinear
 *
 * A full-bleed background that renders a linear gradient from top-left to
 * bottom-right using the slide-cn theme palette tokens.
 *
 * Usage:
 * ```tsx
 * <Slide background={<GradientLinear />}>
 *   {slide content}
 * </Slide>
 * ```
 */
export function LinearGradient({
  className,
  style,
  ...props
}: LinearGradientProps) {
  return (
    <div
      className={cn("absolute inset-0", className)}
      style={{
        background: `linear-gradient(
					to bottom right,
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
