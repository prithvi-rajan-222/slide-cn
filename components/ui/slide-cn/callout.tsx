
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Callout
 *
 * Semantic container for highlighting contextual information within content. It is not an alert, it is more like a card. It does not popup or dismiss or anything. It is static
 *
 * Responsibilities:
 * - Visually distinguish important messages (info, success, warning, error)
 * - Provide consistent iconography and styling across variants
 * - Render arbitrary child content (text, lists, inline elements)
 *
 * Usage:
 * ```tsx
 * <Callout variant="warning" title="Heads up">
 *   This action cannot be undone.
 * </Callout>
 * ```
 *
 * Notes:
 * - Intended for emphasis and guidance, not alerts or dialogs
 * - Styling is opinionated and theme-aware (light / dark)
 * - Does not manage visibility, dismissal, or state
 */

const calloutVariants = cva(
	"w-full rounded-lg border p-4 flex items-start gap-4",
	{
		variants: {
			variant: {
				info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-200",
				success: "border-green-200 bg-green-50 text-green-900 dark:border-green-900/50 dark:bg-green-950/50 dark:text-green-200",
				warning: "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-900/50 dark:bg-yellow-950/50 dark:text-yellow-200",
				error: "border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/50 dark:text-red-200",
			},
		},
		defaultVariants: {
			variant: "info",
		},
	}
)

const icons = {
	info: Info,
	success: CheckCircle,
	warning: AlertTriangle,
	error: AlertCircle,
}

export interface CalloutProps
	extends React.HTMLAttributes<HTMLDivElement>,
	VariantProps<typeof calloutVariants> {
	title?: string
}

export function Callout({
	className,
	variant = "info",
	title,
	children,
	...props
}: CalloutProps) {
	const Icon = icons[variant || "info"]

	return (
		<div
			className={cn(calloutVariants({ variant }), className)}
			{...props}
		>
			<Icon className="h-5 w-5 shrink-0 mt-0.5" />
			<div className="grid gap-1">
				{title && <h5 className="font-medium leading-none tracking-tight">{title}</h5>}
				<div className="text-sm opacity-90 [&_p]:leading-relaxed">
					{children}
				</div>
			</div>
		</div>
	)
}
