import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"

import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
} from "fumadocs-ui/components/tabs"
import {
	TypeTable
} from "fumadocs-ui/components/type-table";

export function getMDXComponents(
	components?: MDXComponents
): MDXComponents {
	return {
		...defaultMdxComponents,

		// Tabs
		Tabs,
		TabsList,
		TabsTrigger,
		TabsContent,
		TypeTable,

		...components,
	}
}
