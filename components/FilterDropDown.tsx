"use client";

import { useState } from "react";

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
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus: outline-none">
        <Button
          variant="outline"
          className="text-sm text-[#344054] font-semibold focus:outline-none active:outline-none"
        >
          <span className="mr-3 font-sm">
            <ListFilter size={18} />
          </span>
          {selectedFilter ? selectedFilter : "Filters"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          {selectedFilter ? `Selected: ${selectedFilter}` : "Select a filter"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedFilter}
          onValueChange={setSelectedFilter}
        >
          <DropdownMenuRadioItem value="Pension">Pension</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Investment">
            Investment
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Operations">
            Operations
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Contribution">
            Contributions
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Allocation">
            Allocations
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
