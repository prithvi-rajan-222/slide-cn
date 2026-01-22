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
import { Reveal } from "@/components/ui/slide-cn/reveal"
import { TitleSlide } from "@/components/ui/slide-cn/title-slide"
import { HorizontalSplit } from "@/components/ui/slide-cn/horizontal-split"
import { VerticalSplit } from "@/components/ui/slide-cn/vertical-split"
import { HeaderWithContent } from "@/components/ui/slide-cn/header-with-content"
import { Callout } from "@/components/ui/slide-cn/callout"
import { CodeBlock as CodeBlockComponent } from "@/components/ui/slide-cn/code-block"
import { Slide } from "@/components/ui/slide-cn/slide"
import { SlideImage } from "@/components/ui/slide-cn/slide-image"
import { Deck } from "@/components/ui/slide-cn/deck"

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
