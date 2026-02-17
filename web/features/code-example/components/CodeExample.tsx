import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

const codeString = `import { Deck } from "@/components/ui/slide-cn/deck";
import { Slide } from "@/components/ui/slide-cn/slide";
import { TitleSlide } from "@/components/ui/slide-cn/title-slide";
import { GradientBackground }
  from "@/components/ui/slide-cn/backgrounds/dark-mode-gradient";

export default function MyDeck() {
  return (
    <Deck>
      <Slide background={<GradientBackground />}>
        <TitleSlide>
          <TitleSlide.Heading>
            Why Slide-CN?
          </TitleSlide.Heading>
          <TitleSlide.SubHeading>
            Presentations as code, for everyone.
          </TitleSlide.SubHeading>
        </TitleSlide>
      </Slide>

      <Slide>
        <h2>Built with React</h2>
        <p>Use any component you want.</p>
      </Slide>
    </Deck>
  );
}`

export function CodeExample() {
	return (
		<section className="w-full py-20 md:py-32 bg-background text-foreground">
			<div className="max-w-6xl mx-auto px-4 md:px-8">
				<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mb-4">
					Slides are just React components
				</h2>
				<p className="text-muted-foreground text-center text-base md:text-lg max-w-2xl mx-auto mb-12">
					Write JSX. Get a presentation. The demo above is built with the code below.
				</p>
				<div className="max-w-3xl mx-auto">
					<div className="rounded-lg border bg-muted/30 overflow-hidden">
						<div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
							<div className="flex gap-1.5">
								<div className="size-3 rounded-full bg-red-500/70" />
								<div className="size-3 rounded-full bg-yellow-500/70" />
								<div className="size-3 rounded-full bg-green-500/70" />
							</div>
							<span className="text-xs text-muted-foreground font-mono ml-2">page.tsx</span>
						</div>
						<SyntaxHighlighter
							language="tsx"
							style={vscDarkPlus}
							showLineNumbers={false}
							customStyle={{
								margin: 0,
								padding: "1rem 1.5rem",
								background: "transparent",
								fontSize: "0.875rem",
								lineHeight: "1.625",
							}}
						>
							{codeString}
						</SyntaxHighlighter>
					</div>
				</div>
			</div>
		</section>
	);
}
