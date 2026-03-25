import { cn } from "@/lib/utils";

type SpotlightGradientProps = React.ComponentProps<"div"> & {
  /** Horizontal position of the spotlight as a CSS value. Defaults to "30%". */
  x?: string;
  /** Vertical position of the spotlight as a CSS value. Defaults to "30%". */
  y?: string;
  /** Size of the spotlight as a percentage of the container. Defaults to 60. */
  size?: number;
};

/**
 * SpotlightGradient
 *
 * A full-bleed background where a bright "spotlight" in background-3 radiates
 * from an off-centre position against a darker background-2 field, using the
 * slide-cn theme palette tokens.
 *
 * Usage:
 * ```tsx
 * <Slide background={<SpotlightGradient x="30%" y="30%" />}>
 *   {slide content}
 * </Slide>
 * ```
 */
export function SpotlightGradient({
  className,
  style,
  x = "30%",
  y = "30%",
  size = 60,
  ...props
}: SpotlightGradientProps) {
  return (
    <div
      className={cn("absolute inset-0", className)}
      style={{
        background: `
          radial-gradient(
            ellipse ${size}% ${size}% at ${x} ${y},
            var(--background-3) 0%,
            var(--background) 50%,
            var(--background-2) 100%
          )
        `,
        ...style,
      }}
      {...props}
    />
  );
}
