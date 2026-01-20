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

		...components,
	}
}
