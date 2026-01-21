'use client';

import { ReactNode } from 'react';

interface ComponentDemoProps {
    children: ReactNode;
    className?: string;
    /**
     * Optional title for the demo
     */
    title?: string;
    /**
     * Optional description for the demo
     */
    description?: string;
}

/**
 * ComponentDemo - A container for demoing components in MDX documentation.
 * Supports click interactions and provides a styled preview area.
 */
export function ComponentDemo({
    children,
    className = '',
    title,
    description,
}: ComponentDemoProps) {
    return (
        <div className="not-prose">
            {(title || description) && (
                <div className="">
                    {title && (
                        <h4 className="text-sm font-semibold mb-1">{title}</h4>
                    )}
                    {description && (
                        <p className="text-sm text-muted-foreground">{description}</p>
                    )}
                </div>
            )}
            <div
                className={`relative rounded-lg border bg-gradient-to-b from-fd-background to-fd-muted/20 ${className}`}
            >
                <div className="flex items-center justify-center min-h-[200px]">
                    {children}
                </div>
            </div>
        </div>
    );
}
