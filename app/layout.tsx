import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";


const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: `${SITE_NAME} - Create Beautiful Presentations Using Code`,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	keywords: [
		"presentation framework",
		"react slides",
		"code presentations",
		"jsx slides",
		"developer presentations",
		"slide-cn",
		"react presentation",
		"code-first slides",
	],
	authors: [{ name: "Slide-CN" }],
	creator: "Slide-CN",
	openGraph: {
		type: "website",
		locale: "en_US",
		siteName: SITE_NAME,
		title: `${SITE_NAME} - Create Beautiful Presentations Using Code`,
		description: SITE_DESCRIPTION,
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: SITE_NAME,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: `${SITE_NAME} - Create Beautiful Presentations Using Code`,
		description: SITE_DESCRIPTION,
		images: ["/og-image.png"],
	},
	icons: {
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon.ico", sizes: "any" },
		],
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex flex-col antialiased w-full min-h-screen`}
			>
				<Analytics />
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					disableTransitionOnChange
				>
					<RootProvider
						search={{
							enabled: false,
						}}
					>
						{children}
					</RootProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
