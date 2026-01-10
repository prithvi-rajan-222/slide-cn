"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface SlideImageProps {
	src: string
	alt: string
	aspectRatio?: number
	caption?: string
	className?: string
	objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
	priority?: boolean
}

export function SlideImage({
	src,
	alt,
	aspectRatio = 16 / 9,
	caption,
	className,
	objectFit = "cover",
	priority = false,
}: SlideImageProps) {

	const imageContainer = (
		<div
			className={cn("relative overflow-hidden rounded-lg bg-muted", className)}
		>
			<AspectRatio ratio={aspectRatio}>
				<Image
					src={src}
					alt={alt}
					fill
					priority={priority}
					className="rounded-lg"
					style={{ objectFit }}
				/>
			</AspectRatio>
		</div>
	)

	if (caption) {
		return (
			<div className="flex flex-col items-center gap-2">
				{imageContainer}
				<span className="text-sm text-muted-foreground">{caption}</span>
			</div>
		)
	}

	return imageContainer
}
