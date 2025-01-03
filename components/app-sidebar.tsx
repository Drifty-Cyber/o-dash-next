import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Activity,
  BarChart2,
  Flag,
  Layers,
  LifeBuoy,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

// Menu items.
const items = [
  {
    title: "Overview",
    url: "#",
    icon: Activity,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart2,
  },
  {
    title: "Account Details",
    url: "#",
    icon: Layers,
  },
  {
    title: "Account Officer",
    url: "#",
    icon: Users,
  },
  {
    title: "Report",
    url: "#",
    icon: Flag,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Button variant="outline" className="w-full">
              Logo
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
