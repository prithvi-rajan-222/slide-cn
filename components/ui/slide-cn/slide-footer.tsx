"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useDeck } from "@/components/ui/slide-cn/deck";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlideFooterProps = {
    className?: string;
    showProgress?: boolean;
    showHint?: boolean;
    showAdd?: boolean;
};

export function SlideFooter({
    className,
    showProgress = true,
    showHint = true,
    showAdd = false,
}: SlideFooterProps) {
    const deck = useDeck();
    const isMobile = useIsMobile();

    // Using grid layout for precise alignment: Left (Progress), Center (Branding), Right (Hint)
    return (
        <footer
            className={cn(
                "grid grid-cols-3 items-center gap-4 px-6 py-4 w-full",
                "bg-background/20 backdrop-blur-lg",
                "text-sm font-medium text-muted-foreground transition-colors",
                className
            )}
        >
            {/* Left: Progress */}
            <div className="flex justify-start">
                {showProgress && (
                    <span className="tabular-nums opacity-75 hover:opacity-100 transition-opacity">
                        Slide {deck.index + 1} <span className="text-muted-foreground/40 mx-1">/</span> {deck.total}
                    </span>
                )}
            </div>

            {/* Center: Branding (Optional) */}
            <div className="flex justify-center">
                {showAdd && (
                    <span className="opacity-50 hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs">
                        Built with <Link href={"https://slide-cn.com"} target="_blank" className="font-semibold hover:underline">Slide-CN</Link>
                    </span>
                )}
            </div>

            {/* Right: Hint */}
            <div className="flex justify-end">
                {showHint && (
                    <span className="hidden sm:flex items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                        <span className="text-xs uppercase tracking-wider font-semibold">Navigate</span>
                        <div className="flex items-center gap-0.5 bg-foreground/5 rounded-md px-1 py-0.5">
                            <ChevronLeft className="w-3 h-3" />
                            <ChevronRight className="w-3 h-3" />
                        </div>
                    </span>
                )}
                {/* Mobile simplified hint */}
                {showHint && (
                    <span className="sm:hidden opacity-50 text-xs">
                        Swipe to nav
                    </span>
                )}
            </div>
        </footer>
    );
}
