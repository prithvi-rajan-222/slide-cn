import { SidebarProvider } from "@/components/ui/sidebar";
import { UISidebar } from "@/web/features/sidebar/ui-sidebar";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider >
			<UISidebar />
			<main>
				{children}
			</main>
		</SidebarProvider>
	);
}
