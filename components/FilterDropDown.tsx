"use client";

import * as React from "react";

import { ListFilter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function FilterDropdown() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="text-sm text-[#344054] font-semibold"
        >
          <span className="mr-3 font-sm">
            <ListFilter size={18} />
          </span>
          Filters
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select a filter</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="pension">Pension</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="investment">
            Investment
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="operations">
            Operations
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="contribution">
            Contributions
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="allocation">
            Allocations
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
