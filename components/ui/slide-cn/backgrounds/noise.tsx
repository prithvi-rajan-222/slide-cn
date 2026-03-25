"use client";
import { cn } from "@/lib/utils";

type NoiseGradientProps = React.ComponentProps<"div"> & {
  /** Opacity of the noise texture overlay (0–1). Defaults to 0.08. */
  noiseOpacity?: number;
};

/**
 * NoiseGradient
 *
 * A full-bleed linear gradient background overlaid with an SVG-based film-grain
 * noise texture, using the slide-cn theme palette tokens.
 *
 * Usage:
 * ```tsx
 * <Slide background={<NoiseGradient />}>
 *   {slide content}
 * </Slide>
 * ```
 */
export function NoiseGradient({
  className,
  style,
  noiseOpacity = 0.08,
  ...props
}: NoiseGradientProps) {
  const svgNoise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`;

  return (
    <div className={cn("absolute inset-0", className)} style={style} {...props}>
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom right,
            var(--background-2),
            var(--background),
            var(--background-3)
          )`,
        }}
      />
      {/* Noise overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: svgNoise,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
          opacity: noiseOpacity,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
