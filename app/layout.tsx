import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Slide-CN",
	description: "Create beautiful presentations using code",
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
