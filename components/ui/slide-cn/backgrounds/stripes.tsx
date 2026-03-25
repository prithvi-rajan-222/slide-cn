import { cn } from "@/lib/utils";

type StripedGradientProps = React.ComponentProps<"div"> & {
  /** Angle of the stripes in degrees. Defaults to 45. */
  angle?: number;
  /** Width of each stripe pair in pixels. Defaults to 40. */
  stripeSize?: number;
};

/**
 * StripedGradient
 *
 * A full-bleed background with soft diagonal stripes derived from the slide-cn
 * theme palette tokens (background and background-2).
 *
 * Usage:
 * ```tsx
 * <Slide background={<StripedGradient angle={45} stripeSize={40} />}>
 *   {slide content}
 * </Slide>
 * ```
 */
export function StripedGradient({
  className,
  style,
  angle = 45,
  stripeSize = 40,
  ...props
}: StripedGradientProps) {
  return (
    <div
      className={cn("absolute inset-0", className)}
      style={{
        backgroundImage: `repeating-linear-gradient(
          ${angle}deg,
          var(--background) 0px,
          var(--background) ${stripeSize * 0.6}px,
          var(--background-2) ${stripeSize * 0.6}px,
          var(--background-2) ${stripeSize}px
        )`,
        ...style,
      }}
      {...props}
    />
  );
}
