import { UIHeader } from "@/web/features/header/components/ui-header"
import { Hero } from "@/web/features/hero/components/Hero"
import { Features } from "@/web/features/features/components/Features"
import { CodeExample } from "@/web/features/code-example/components/CodeExample"
import { QuickStart } from "@/web/features/quickstart/components/QuickStart"
import { CTA } from "@/web/features/cta/components/CTA"
import { Footer } from "@/web/features/footer/components/Footer"

export default function Home() {
	return (
		<>
			<UIHeader />
			<Hero />
			<Features />
			<CodeExample />
			<QuickStart />
			<CTA />
			<Footer />
		</>
	)
}
