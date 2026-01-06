import { ImageSlide } from "@/registry/slide-cn/image-slide/image-slide";

export function ThirdSlide() {
	return (
		<ImageSlide>
			<div className="flex flex-col items-center justify-center gap-6">
				<ImageSlide.Image
					src="/Wallpaper.jpg"
					alt="Mahoraga"
					className="max-h-[60vh] w-auto rounded-xl shadow-2xl border border-white/10"
				/>
				<ImageSlide.Caption className="">
					Divine General Mahoraga
				</ImageSlide.Caption>
			</div>
		</ImageSlide>
	)
}
