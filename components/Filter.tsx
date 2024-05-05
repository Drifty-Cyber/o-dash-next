"use client";

import { ListFilter } from "lucide-react";
import React, { useState } from "react";

type props = {
  onChange: (option: string) => void;
};

export function Filter({ onChange }: props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = ["Pension", "Loan", "Invest", "Grant"];

  function handleOptionChange(option: string) {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  }

  return (
    <section className="relative transition-all">
      <button
        className="max-w-[104px] h-[40px] text-sm flex items-center py-2 px-4 border rounded-lg bg-white text-[#344054] hover:bg-gray-100 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-1">
          <ListFilter />
        </span>
        <span>{selectedOption || "Filters"}</span>{" "}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white rounded-md shadow-lg mt-1">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                className={`block w-full text-left py-2 px-4 ${
                  selectedOption === option
                    ? "bg-gray-100 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => handleOptionChange(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
