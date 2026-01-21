import { HeaderWithContent } from "@/registry/slide-cn/header-with-content/header-with-content"
import { CodeBlock } from "@/registry/slide-cn/code-block/code-block"
import { Callout } from "@/registry/slide-cn/callout/callout"

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
                    <div className="mt-8 grid gap-4">
                        <Callout title="Success" variant="success">
                            Operation completed successfully.
                        </Callout>
                        <Callout title="Info" variant="info">
                            This is an informational message.
                        </Callout>
                        <Callout title="Warning" variant="warning">
                            Please proceed with caution.
                        </Callout>
                        <Callout title="Error" variant="error">
                            An error occurred while processing your request.
                        </Callout>
                    </div>
                </div>
            </HeaderWithContent.Content>
        </HeaderWithContent>
    )
}
