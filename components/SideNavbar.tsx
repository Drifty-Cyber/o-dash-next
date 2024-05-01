"use client";

import * as React from "react";
import { Nav } from "./ui/nav";
import {
  Activity,
  BarChart2,
  Flag,
  Layers,
  LifeBuoy,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";

type props = {};

export default function SideNavBar({}: props) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  return (
    <div className="relative min-w-[75px] border-r px-3 pb-10 pt-10 flex flex-col gap-[24px]">
      <div className="">
        <Button variant="secondary" className="w-full">
          Logo
        </Button>
      </div>

      <div className="h-14 py-[10px] px-[14px] w-full gap-2 flex items-center border border-gray-[#D0D5DD] rounded-[8px]">
        <span>
          {/* <CiSearch className="text-xl  " /> */}
          <Search />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-full"
        ></input>
      </div>

      <div className="">
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
          ]}
        />
      </div>

      <div className="items-end justify-end border-b">
        <Nav
          isCollapsed={false}
          links={[
            {
              title: "Support",
              // label: "",
              icon: LifeBuoy,
              variant: "ghost",
              href: "/support",
            },
            {
              title: "Settings",

              icon: Settings,
              variant: "ghost",
              href: "/settings",
            },
          ]}
        />
      </div>

      <div></div>
    </div>
  );
}
