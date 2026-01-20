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
};

export function InstallCommand({ packageName }: InstallCommandProps) {
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
							{`pnpm add ${packageName}`}
						</code>
					</Pre>
				</CodeBlock>
			</TabsContent>

			<TabsContent value="npm">
				<CodeBlock>
					<Pre>
						<code className="language-bash px-4">
							{`npm install ${packageName}`}
						</code>
					</Pre>
				</CodeBlock>
			</TabsContent>

			<TabsContent value="yarn">
				<CodeBlock>
					<Pre>
						<code className="language-bash px-4">
							{`yarn add ${packageName}`}
						</code>
					</Pre>
				</CodeBlock>
			</TabsContent>

			<TabsContent value="bun">
				<CodeBlock>
					<Pre>
						<code className="language-bash px-4">
							{`bun add ${packageName}`}
						</code>
					</Pre>
				</CodeBlock>
			</TabsContent>
		</Tabs>
	);
}
