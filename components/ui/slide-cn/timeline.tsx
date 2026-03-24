"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Timeline
 *
 * A compound component for rendering horizontal or vertical timelines in slides.
 * Useful for chronological events, process steps, roadmaps, or any ordered sequence.
 *
 * Responsibilities:
 * - Render items connected by a continuous line through their markers
 * - Support horizontal layout (converts to vertical on mobile) and vertical layout
 * - Support left-aligned and center (alternating) vertical layouts
 * - Accept custom markers (icons, numbers) or default filled dot
 *
 * Usage:
 * ```tsx
 * // Horizontal (default) — auto-converts to vertical on mobile
 * <Timeline>
 *   <Timeline.Item label="Q1 2024">Shipped v1</Timeline.Item>
 *   <Timeline.Item label="Q2 2024" marker={<Rocket />}>Shipped v2</Timeline.Item>
 * </Timeline>
 *
 * // Always vertical, left-aligned
 * <Timeline orientation="vertical">
 *   <Timeline.Item label="2020">Founded the company</Timeline.Item>
 * </Timeline>
 *
 * // Vertical alternating sides
 * <Timeline orientation="vertical" align="center">
 *   <Timeline.Item label="2020">Founded</Timeline.Item>
 *   <Timeline.Item label="2021">First product</Timeline.Item>
 * </Timeline>
 * ```
 *
 * Notes:
 * - Horizontal timelines auto-convert to vertical left-aligned on screens below md (768px)
 * - The connecting line is built from flex siblings — no absolute positioning needed for horizontal
 * - Pass any ReactNode to the `marker` prop for custom icons or step numbers
 */

// ─── Context ────────────────────────────────────────────────────────────────

interface TimelineContextValue {
	orientation: "horizontal" | "vertical"
	align: "left" | "center"
}

interface TimelineItemContextValue {
	index: number
	isFirst: boolean
	isLast: boolean
}

const TimelineContext = React.createContext<TimelineContextValue>({
	orientation: "horizontal",
	align: "left",
})

const TimelineItemContext = React.createContext<TimelineItemContextValue>({
	index: 0,
	isFirst: true,
	isLast: true,
})

// ─── Marker ─────────────────────────────────────────────────────────────────

function TimelineMarker({ children }: { children?: React.ReactNode }) {
	if (children) {
		return (
			<div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-background text-primary [&_svg]:h-4 [&_svg]:w-4">
				{children}
			</div>
		)
	}
	return (
		<div className="relative z-10 h-3 w-3 shrink-0 rounded-full bg-primary ring-4 ring-background" />
	)
}

// ─── Timeline.Item ──────────────────────────────────────────────────────────

export interface TimelineItemProps {
	/** Date, step label, or any node shown near the marker */
	label?: React.ReactNode
	/** Custom marker content (icon, number). Defaults to a filled dot. */
	marker?: React.ReactNode
	className?: string
	children?: React.ReactNode
}

function TimelineItem({ label, marker, className, children }: TimelineItemProps) {
	const { orientation, align } = React.useContext(TimelineContext)
	const { index, isFirst, isLast } = React.useContext(TimelineItemContext)

	// ── Vertical left-aligned ──
	if (orientation === "vertical" && align !== "center") {
		return (
			<div className={cn("flex flex-row items-stretch", className)}>
				{/* Left column: connector arms + marker */}
				<div className="flex flex-col items-center mr-5 shrink-0">
					<div className={cn("w-px flex-1 bg-border", isFirst ? "opacity-0" : "min-h-3")} />
					<TimelineMarker>{marker}</TimelineMarker>
					<div className={cn("w-px flex-1 bg-border", isLast ? "opacity-0" : "min-h-3")} />
				</div>
				{/* Right column: label + content */}
				<div className={cn("flex flex-col gap-1.5 pt-0.5", isLast ? "pb-0" : "pb-10")}>
					{label && (
						<p className="text-sm font-semibold leading-none">{label}</p>
					)}
					{children && (
						<div className="text-sm text-muted-foreground leading-relaxed">
							{children}
						</div>
					)}
				</div>
			</div>
		)
	}

	// ── Vertical center (alternating) ──
	if (orientation === "vertical" && align === "center") {
		const isEven = index % 2 === 0
		return (
			<div
				className={cn(
					"flex items-center gap-6",
					isEven ? "flex-row" : "flex-row-reverse",
					className
				)}
			>
				{/* Content side */}
				<div
					className={cn(
						"flex-1 flex flex-col gap-1.5 py-8",
						isEven ? "items-end text-right" : "items-start text-left"
					)}
				>
					{label && (
						<p className="text-sm font-semibold leading-snug">{label}</p>
					)}
					{children && (
						<div className="text-sm text-muted-foreground leading-relaxed">
							{children}
						</div>
					)}
				</div>
				{/* Marker (always center) */}
				<TimelineMarker>{marker}</TimelineMarker>
				{/* Empty spacer to keep marker in center */}
				<div className="flex-1" />
			</div>
		)
	}

	// ── Horizontal (default) — vertical on mobile, horizontal on desktop ──
	return (
		<div className={cn("flex-1 min-w-0", className)}>
			{/* Mobile: left-aligned vertical */}
			<div className="flex flex-row items-stretch md:hidden">
				<div className="flex flex-col items-center mr-5 shrink-0">
					<div className={cn("w-px flex-1 bg-border", isFirst ? "opacity-0" : "min-h-3")} />
					<TimelineMarker>{marker}</TimelineMarker>
					<div className={cn("w-px flex-1 bg-border", isLast ? "opacity-0" : "min-h-3")} />
				</div>
				<div className={cn("flex flex-col gap-1.5 pt-0.5", isLast ? "pb-0" : "pb-10")}>
					{label && (
						<p className="text-sm font-semibold leading-none">{label}</p>
					)}
					{children && (
						<div className="text-sm text-muted-foreground leading-relaxed">
							{children}
						</div>
					)}
				</div>
			</div>

			{/* Desktop: horizontal */}
			<div className="hidden md:flex flex-col items-center gap-3">
				{/* Label above — fixed min-height keeps all markers on the same horizontal axis */}
				<div className="min-h-8 flex items-end pb-1">
					{label && (
						<p className="text-sm font-semibold text-center leading-snug">{label}</p>
					)}
				</div>
				{/* Connector row: left arm — marker — right arm */}
				<div className="flex items-center w-full">
					<div className={cn("h-px flex-1 bg-border", isFirst && "opacity-0")} />
					<TimelineMarker>{marker}</TimelineMarker>
					<div className={cn("h-px flex-1 bg-border", isLast && "opacity-0")} />
				</div>
				{/* Content below */}
				<div className="text-sm text-muted-foreground text-center leading-relaxed max-w-[90%]">
					{children}
				</div>
			</div>
		</div>
	)
}

// ─── Timeline (root) ─────────────────────────────────────────────────────────

export interface TimelineProps {
	/** Layout direction. "horizontal" converts to vertical on mobile. */
	orientation?: "horizontal" | "vertical"
	/** Vertical only — "left" keeps content on the right; "center" alternates sides. */
	align?: "left" | "center"
	className?: string
	children?: React.ReactNode
}

export function Timeline({
	orientation = "horizontal",
	align = "left",
	className,
	children,
}: TimelineProps) {
	const items = React.Children.toArray(children)
	const count = items.length

	return (
		<TimelineContext.Provider value={{ orientation, align }}>
			<div
				className={cn(
					"relative w-full",
					orientation === "horizontal"
						? "flex flex-col md:flex-row"
						: "flex flex-col",
					className
				)}
			>
				{/* Center line for vertical alternating layout */}
				{orientation === "vertical" && align === "center" && (
					<div
						className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 pointer-events-none"
						aria-hidden
					/>
				)}
				{items.map((child, index) => (
					<TimelineItemContext.Provider
						key={index}
						value={{
							index,
							isFirst: index === 0,
							isLast: index === count - 1,
						}}
					>
						{child}
					</TimelineItemContext.Provider>
				))}
			</div>
		</TimelineContext.Provider>
	)
}

Timeline.Item = TimelineItem
