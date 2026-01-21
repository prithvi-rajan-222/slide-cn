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
import { ComponentDemo } from "./components/docs/ComponentDemo"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/ui/card"
import { Reveal } from "./registry/slide-cn/reveal/reveal"
import { TitleSlide } from "./registry/slide-cn/title-slide/title-slide"
import { HorizontalSplit } from "./registry/slide-cn/horizontal-split/horizontal-split"
import { VerticalSplit } from "./registry/slide-cn/vertical-split/vertical-split"
import { HeaderWithContent } from "./registry/slide-cn/header-with-content/header-with-content"
import { Callout } from "./registry/slide-cn/callout/callout"
import { CodeBlock as CodeBlockComponent } from "./registry/slide-cn/code-block/code-block"
import { Slide } from "./registry/slide-cn/slide/slide"
import { SlideImage } from "./registry/slide-cn/slide-image/slide-image"
import { Deck } from "./registry/slide-cn/deck/deck"

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

		...components,
	}
}
