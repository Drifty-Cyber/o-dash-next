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
    <div className="flex">
      <button
        className={`text-gray-500 hover:text-gray-700 px-4 py-2 border-b-2 border-transparent focus:outline-none ${
          activeTab === 1 ? "border-gray-700 text-gray-700" : ""
        }`}
        onClick={() => handleClick(1)}
      >
        Tab 1
      </button>
      <button
        className={`text-gray-500 hover:text-gray-700 px-4 py-2 border-b-2 border-transparent focus:outline-none ${
          activeTab === 2 ? "border-gray-700 text-gray-700" : ""
        }`}
        onClick={() => handleClick(2)}
      >
        Tab 2
      </button>
      <button
        className={`text-gray-500 hover:text-gray-700 px-4 py-2 border-b-2 border-transparent focus:outline-none ${
          activeTab === 3 ? "border-gray-700 text-gray-700" : ""
        }`}
        onClick={() => handleClick(3)}
      >
        Tab 3
      </button>
    </div>
  );
}
