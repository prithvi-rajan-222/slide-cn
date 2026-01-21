import { cn } from "@/lib/utils";

interface VerticalSplitProps extends React.ComponentProps<"div"> {
    ratio?: number;
}

export function VerticalSplit({ children, ratio = 0.5, className, style, ...props }: VerticalSplitProps) {
    const clampedRatio = Math.max(0.2, Math.min(0.8, ratio));
    return (
        <div
            className={cn("grid h-full w-full", className)}
            style={{
                gridTemplateRows: `${clampedRatio * 100}% ${(1 - clampedRatio) * 100}%`,
                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    );
}


VerticalSplit.Top = function Top({ children, className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "h-full w-full",
                className
            )}
            {...props}
        >
            {children}
        </div>

    )
}

VerticalSplit.Bottom = function Bottom({ children, className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "h-full w-full",
                className
            )}
            {...props}
        >
            {children}
        </div>

    )
}
