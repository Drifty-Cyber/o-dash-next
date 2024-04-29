"use client";

import * as React from "react";
import { Nav } from "./ui/nav";
import {
  Activity,
  Archive,
  ArchiveX,
  BarChart2,
  File,
  Flag,
  Layers,
  LifeBuoy,
  Send,
  Settings,
  Trash2,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";

type props = {};

export default function SideNavBar({}: props) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-10">
      <div className="w-full">
        <Button variant="secondary" className="pr-16">
          Logo
        </Button>
      </div>

      <Nav
        isCollapsed={false}
        links={[
          {
            title: "Overview",
            label: "10",
            icon: Activity,
            variant: "default",
            href: "/",
          },
          {
            title: "Analytics",
            // label: "9",
            icon: BarChart2,
            variant: "ghost",
            href: "/analytics",
          },
          {
            title: "Account Details",
            // label: "",
            icon: Layers,
            variant: "ghost",
            href: "/account-details",
          },
          {
            title: "Account Officer",
            // label: "23",
            icon: Users,
            variant: "ghost",
            href: "/account-officer",
          },
          {
            title: "Report",
            // label: "",
            icon: Flag,
            variant: "ghost",
            href: "/report",
          },
          {
            title: "Support",
            // label: "",
            icon: LifeBuoy,
            variant: "ghost",
            href: "/support",
          },
          {
            title: "Settings",
            // label: "",
            icon: Settings,
            variant: "ghost",
            href: "/settings",
          },
        ]}
      />
    </div>
  );
}
