import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

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
