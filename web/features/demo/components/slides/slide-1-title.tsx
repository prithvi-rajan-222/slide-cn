import { TitleSlide } from "@/components/ui/slide-cn/title-slide";
import { Slide } from "@/components/ui/slide-cn/slide";
import LightRays from "@/components/LightRays";


export function Slide1Title() {
    return (
        <Slide background={<LightRays />}>
            <TitleSlide>
                <TitleSlide.Heading>Why Slide-CN?</TitleSlide.Heading>
                <TitleSlide.SubHeading>Presentations as code, for everyone.</TitleSlide.SubHeading>
            </TitleSlide>
        </Slide>
    );
}
