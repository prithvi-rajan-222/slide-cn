import { cn } from "@/lib/utils";

type MeshGradientProps = React.ComponentProps<"div">;

/**
 * MeshGradient
 *
 * A full-bleed mesh gradient background that layers multiple radial gradients
 * at different positions to create a soft, organic "mesh" look using the
 * slide-cn theme palette tokens.
 *
 * Usage:
 * ```tsx
 * <Slide background={<MeshGradient />}>
 *   {slide content}
 * </Slide>
 * ```
 */
export function MeshGradient({ className, style, ...props }: MeshGradientProps) {
  return (
    <div
      className={cn("absolute inset-0", className)}
      style={{
        background: `
          radial-gradient(ellipse at 20% 20%, var(--background-2) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, var(--background-3) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, var(--background-3) 0%, transparent 40%),
          radial-gradient(ellipse at 20% 80%, var(--background-2) 0%, transparent 40%),
          var(--background)
        `,
        ...style,
      }}
      {...props}
    />
  );
}
