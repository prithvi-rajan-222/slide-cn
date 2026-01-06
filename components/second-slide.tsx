import { ImageSlide } from "@/registry/slide-cn/image-slide/image-slide";
import { TwoColumn } from "@/registry/slide-cn/two-column/two-column";

export function SecondSlide() {
	return (
		<TwoColumn>
			<TwoColumn.Left className="">
				<ImageSlide.Image
					src="/Wallpaper.jpg"
					alt="Wallpaper"
					className="max-h-[60vh] w-auto rounded-xl shadow-2xl border border-white/10"
				/>
				<ImageSlide.Caption className="">
					Classic wallpaper
				</ImageSlide.Caption>


			</TwoColumn.Left>
			<TwoColumn.Right className="">

				<ImageSlide.Image
					src="/Mahoraga.jpg"
					alt="Mahoraga"
					className="max-h-[60vh] w-auto rounded-xl shadow-2xl border border-white/10"
				/>
				<ImageSlide.Caption className="">
					Divine General Mahoraga
				</ImageSlide.Caption>
				<ImageSlide.Image
					src="/Sukuna.jpg"
					alt="Sukuna"
					className="max-h-[60vh] w-auto rounded-xl shadow-2xl border border-white/10"
				/>
				<ImageSlide.Caption className="">
					Sukuna
				</ImageSlide.Caption>
			</TwoColumn.Right>
		</TwoColumn>
	)
}
