import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar"

type SidebarItemType = {
	name: string;
	url: string;
}

const components: SidebarItemType[] = [
	{
		name: "Accordian",
		url: "docs/accordian"
	}
]

const layouts: SidebarItemType[] = [
	{
		name: "Header with content",
		url: "docs/header-with-content"
	}
]

const templates: SidebarItemType[] = [
	{
		name: "Demo",
		url: "demo"
	}
]

const UISidebarContent = [
	{
		group: "Components",
		content: components
	},
	{
		group: "Layouts",
		content: layouts
	},
	{
		group: "Templates",
		content: templates
	}
]

export function UISidebar() {
	return (

		<Sidebar
			collapsible="none"
			className="bg-background"
		>
			<SidebarHeader />
			<SidebarContent>
				{UISidebarContent.map(g => (
					<SidebarGroup key={g.group}>
						<SidebarGroupLabel>{g.group}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{g.content.map((item) => (
									<SidebarMenuItem key={item.name}>
										<SidebarMenuButton asChild>
											<a href={item.url}>
												<span>{item.name}</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	)
}
