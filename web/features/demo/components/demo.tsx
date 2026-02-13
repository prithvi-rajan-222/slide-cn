import { Deck } from "@/components/ui/slide-cn/deck";
import { Slide1Title } from "./slides/slide-1-title";
import { Slide2Consistency } from "./slides/slide-2-consistency";
import { Slide3Ecosystem } from "./slides/slide-3-ecosystem";
import { Slide4Workflow } from "./slides/slide-4-workflow";
import { Slide5Interactive } from "./slides/slide-5-interactive";

export function Demo() {
	return (
		<Deck className="h-full">
			<Slide1Title />
			<Slide2Consistency />
			<Slide3Ecosystem />
			<Slide4Workflow />
			<Slide5Interactive />
		</Deck>
	)
}
