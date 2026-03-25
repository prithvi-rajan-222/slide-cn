import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"


/**
 * CodeBlock
 *
 * Presentational component for rendering syntax-highlighted code snippets.
 *
 * Responsibilities:
 * - Renders static code content with syntax highlighting
 * - Handles language selection and optional line numbers
 *
 * Usage:
 * ```tsx
 * <CodeBlock
 *   code={`const x = 42`}
 *   language="typescript"
 * />
 * ```
 *
 * Notes:
 * - Intended for display only (not editable)
 * - Does not handle copy-to-clipboard or live execution
 */


interface CodeBlockProps {
	code: string
	language?: string
	showLineNumbers?: boolean
}

export function CodeBlock({
	code,
	language = "javascript",
	showLineNumbers = true,
}: CodeBlockProps) {
	return (
		<div className="w-full text-sm">
			<SyntaxHighlighter
				language={language}
				style={vscDarkPlus}
				showLineNumbers={showLineNumbers}
				customStyle={{
					margin: 0,
					borderRadius: "0.5rem",
					padding: "1.5rem",
				}}
			>
				{code}
			</SyntaxHighlighter>
		</div>
	)
}
