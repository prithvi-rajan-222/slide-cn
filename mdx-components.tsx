import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
} from "fumadocs-ui/components/tabs"
import {
	TypeTable
} from "fumadocs-ui/components/type-table";
import { InstallCommand } from "./components/docs/InstallCommand"
import { ThemePicker } from "./components/docs/ThemePicker"
import { ComponentDemo } from "./components/docs/ComponentDemo"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/ui/card"
import { Reveal } from "@/components/ui/slide-cn/mechanics/reveal"
import { TitleSlide } from "@/components/ui/slide-cn/layouts/title-slide"
import { HorizontalSplit } from "@/components/ui/slide-cn/layouts/horizontal-split"
import { VerticalSplit } from "@/components/ui/slide-cn/layouts/vertical-split"
import { HeaderWithContent } from "@/components/ui/slide-cn/layouts/header-with-content"
import { Callout } from "@/components/ui/slide-cn/components/callout"
import { CodeBlock as CodeBlockComponent } from "@/components/ui/slide-cn/components/code-block"
import { Slide } from "@/components/ui/slide-cn/components/slide"
import { SlideImage } from "@/components/ui/slide-cn/components/slide-image"
import { Deck } from "@/components/ui/slide-cn/mechanics/deck"
import PixelSnow from "@/components/PixelSnow";
import { SlideFooter } from "@/components/ui/slide-cn/components/slide-footer";
import { LinearGradient } from "@/components/ui/slide-cn/backgrounds/gradients/linear";
import { RadialGradient } from "@/components/ui/slide-cn/backgrounds/gradients/radial";

export function getMDXComponents(
	components?: MDXComponents
): MDXComponents {
	return {
		...defaultMdxComponents,
		pre: ({ ref: _ref, ...props }) => (
			<CodeBlock>
				<Pre>{props.children}</Pre>
			</CodeBlock>
		),
		// Tabs
		Tabs,
		TabsList,
		TabsTrigger,
		TabsContent,
		TypeTable,
		InstallCommand,
		ThemePicker,
		ComponentDemo,
		// Card components
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent,
		CardFooter,
		// Reveal component
		Reveal,
		// Layout components
		TitleSlide,
		HorizontalSplit,
		VerticalSplit,
		HeaderWithContent,
		// Component components
		Callout,
		CodeBlockComponent,
		Slide,
		SlideImage,
		Deck,
		PixelSnow,
		SlideFooter,
		LinearGradient,
		RadialGradient,

		...components,
	}
}
