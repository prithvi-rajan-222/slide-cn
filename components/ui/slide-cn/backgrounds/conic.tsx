import { cn } from "@/lib/utils";

type ConicGradientProps = React.ComponentProps<"div"> & {
  /** Starting angle in degrees. Defaults to 0. */
  angle?: number;
  /** Position of the gradient center. Defaults to "center". */
  position?: string;
};

/**
 * ConicGradient
 *
 * A full-bleed conic (sweep) gradient background using the slide-cn theme
 * palette tokens. Creates a smooth colour sweep around a central point.
 *
 * Usage:
 * ```tsx
 * <Slide background={<ConicGradient />}>
 *   {slide content}
 * </Slide>
 * ```
 */
export function ConicGradient({
  className,
  style,
  angle = 0,
  position = "center",
  ...props
}: ConicGradientProps) {
  return (
    <div
      className={cn("absolute inset-0", className)}
      style={{
        background: `conic-gradient(
          from ${angle}deg at ${position},
          var(--background),
          var(--background-2),
          var(--background-3),
          var(--background-2),
          var(--background)
        )`,
        ...style,
      }}
      {...props}
    />
  );
}
