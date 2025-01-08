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
  ArrowRight,
} from "lucide-react";

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
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import Image from "next/image";

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

const footerItems = [
  {
    title: "Support",
    url: "#",
    icon: LifeBuoy,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Button
              variant="outline"
              className="w-full text-base font-bold bg-[#00000033]"
            >
              Logo
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* <Input type="search" placeholder="Search" /> */}
              <div className="relative  mb-3">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <Input
                  type="search"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-base font-bold">
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

      <SidebarFooter>
        <SidebarMenu>
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url} className="text-base font-bold">
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          <Separator />

          <div className="flex items-center justify-between p-4 border-t bg-white">
            {/* Profile Section */}
            <div className="flex items-center">
              {/* Profile Image */}
              <Image
                src="/profile.jpg"
                alt="Profile Picture"
                width={40}
                height={40}
                className="rounded-full"
              />

              {/* User Info */}
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  Adesina Oluwe
                </p>
                <p className="text-sm text-gray-500">adesinaoluwe@email.com</p>
              </div>
            </div>

            {/* Arrow Icon */}
            <ArrowRight className="text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
