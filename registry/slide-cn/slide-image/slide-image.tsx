import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { cn } from "@/lib/utils"


export function SlideImage({ children, className, ...props }: React.ComponentProps<"div">) {
	return (
		<div className={cn("flex flex-col items-center gap-2", className)} {...props}>
			{children}
		</div>
	)
}

interface SlideImageImageProps extends React.ComponentProps<"div"> {
	src: string
	alt: string
	aspectRatio?: number
	objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
	priority?: boolean
	fillContainer?: boolean
}

SlideImage.Image = function SlideImageImage({
	src,
	alt,
	aspectRatio = 16 / 9,
	className,
	objectFit = "cover",
	priority = false,
	fillContainer = false,
	...props
}: SlideImageImageProps) {
	if (fillContainer) {
		return (
			<div
				className={cn("relative overflow-hidden rounded-lg bg-muted w-full h-full flex-1", className)}
				{...props}
			>
				<Image
					src={src}
					alt={alt}
					fill
					priority={priority}
					className="rounded-lg"
					style={{ objectFit }}
				/>
			</div>
		)
	}

	return (
		<div
			className={cn("relative overflow-hidden rounded-lg bg-muted w-full", className)}
			{...props}
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
}

SlideImage.Caption = function SlideImageCaption({
	children,
	className,
	...props
}: React.ComponentProps<"span">) {
	return (
		<span className={cn("text-sm text-muted-foreground", className)} {...props}>
			{children}
		</span>
	)
}
