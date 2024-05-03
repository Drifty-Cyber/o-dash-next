"use client";

import React, { useState } from "react";

type Props = {
  title?: string;
  classname?: string;
};

export default function TabbedButtons({}: Props) {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex border rounded-[8px] max-w-fit h-10">
      <button
        className={`text-[#344054] p-1 hover:text-[#1D2939] px-4 bg-white py-2 border-transparent focus:outline-none ${
          activeTab === 1 ? "border-gray-700 text-[#1D2939] bg-[#D0D5DD]" : ""
        }`}
        onClick={() => handleClick(1)}
      >
        12 months
      </button>
      <button
        className={`text-[#344054] hover:text-[#1D2939] px-4 bg-white py-2 focus:outline-none ${
          activeTab === 2
            ? "border-gray-700 text-[#1D2939] bg-[#D0D5DD]"
            : "bg-transparent"
        }`}
        onClick={() => handleClick(2)}
      >
        30 days
      </button>
      <button
        className={`text-[#344054] hover:text-[#1D2939] px-4 bg-white py-2 border-transparent focus:outline-none ${
          activeTab === 3
            ? "border-gray-700 text-[#1D2939] bg-[#D0D5DD]"
            : "bg-transparent"
        }`}
        onClick={() => handleClick(3)}
      >
        7 days
      </button>
      <button
        className={`text-[#344054] hover:text-[#1D2939] px-4 bg-white py-2 border-transparent focus:outline-none ${
          activeTab === 4
            ? "border-gray-700 text-[#1D2939] bg-[#D0D5DD]"
            : "bg-transparent"
        }`}
        onClick={() => handleClick(4)}
      >
        24 hours
      </button>
    </div>
  );
}
