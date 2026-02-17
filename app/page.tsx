import { UIHeader } from "@/web/features/header/components/ui-header"
import { Hero } from "@/web/features/hero/components/Hero"
import { Features } from "@/web/features/features/components/Features"
import { CodeExample } from "@/web/features/code-example/components/CodeExample"
import { QuickStart } from "@/web/features/quickstart/components/QuickStart"
import { CTA } from "@/web/features/cta/components/CTA"
import { Footer } from "@/web/features/footer/components/Footer"
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo"

export default function Home() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: SITE_NAME,
		description: SITE_DESCRIPTION,
		url: SITE_URL,
		applicationCategory: "DeveloperApplication",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
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
