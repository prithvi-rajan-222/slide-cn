"use client";

import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
} from "fumadocs-ui/components/tabs";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";

type InstallCommandProps = {
	packageName: string;
	repackaged?: boolean;
};

export function InstallCommand({ packageName, repackaged = false }: InstallCommandProps) {
	let registryUrl = packageName;
	if (!repackaged) {
		registryUrl = `https://slide-cn.com/r/${packageName}.json`;
	}
	return (
		<Tabs defaultValue="pnpm">
			<TabsList>
				<TabsTrigger value="pnpm">pnpm</TabsTrigger>
				<TabsTrigger value="npm">npm</TabsTrigger>
				<TabsTrigger value="yarn">yarn</TabsTrigger>
				<TabsTrigger value="bun">bun</TabsTrigger>
			</TabsList>

			<TabsContent value="pnpm">
				<CodeBlock>
					<Pre>
						<code className="language-bash px-4">
							{`pnpm dlx shadcn@latest add ${registryUrl}`}
						</code>
					</Pre>
				</CodeBlock>
			</TabsContent>

			<TabsContent value="npm">
				<CodeBlock>
					<Pre>
						<code className="language-bash px-4">
							{`npx shadcn@latest add ${registryUrl}`}
						</code>
					</Pre>
				</CodeBlock>
			</TabsContent>

			<TabsContent value="yarn">
				<CodeBlock>
					<Pre>
						<code className="language-bash px-4">
							{`yarn dlx shadcn@latest add ${registryUrl}`}
						</code>
					</Pre>
				</CodeBlock>
			</TabsContent>

			<TabsContent value="bun">
				<CodeBlock>
					<Pre>
						<code className="language-bash px-4">
							{`bunx --bun shadcn@latest add ${registryUrl}`}
						</code>
					</Pre>
				</CodeBlock>
			</TabsContent>
		</Tabs>
	);
}
