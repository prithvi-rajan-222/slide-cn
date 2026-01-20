import { HeaderWithContent } from "@/registry/slide-cn/header-with-content/header-with-content"
import { CodeBlock } from "@/registry/slide-cn/code-block/code-block"

const sampleCode = `function greet(name) {
  return "Hello, " + name;
}

console.log(greet("World"));`

export function FifthSlide() {
	return (
		<HeaderWithContent>
			<HeaderWithContent.Header>Code Block Demo</HeaderWithContent.Header>
			<HeaderWithContent.Content>
				<div className="w-full max-w-3xl mx-auto">
					<CodeBlock code={sampleCode} language="javascript" />
				</div>
			</HeaderWithContent.Content>
		</HeaderWithContent>
	)
}
