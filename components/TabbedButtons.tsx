import { useState } from "react";

type ChartTabButtons = {
  options: string[];
};

export default function TabedButtons({ options }: ChartTabButtons) {
  const [selected, setSelected] = useState<string>(options[0]);

  return (
    <div className="flex rounded-lg border border-gray-200 bg-white shadow-sm transition-colors max-w-fit">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => setSelected(option)}
          className={`text-[#1D2939] flex items-center px-4 py-2 rounded-md focus:outline-none transition-colors ${
            selected === option ? "bg-[#D0D5DD]" : "bg-white hover:bg-gray-100"
          }`}
        >
          {/* <span
            className={`mr-2 inline-block h-2 w-2 rounded-full ${
              selected === option ? "bg-[#0052CC]" : "bg-[#B692F6]"
            }`}
          ></span> */}
          {option}
        </button>
      ))}
    </div>
  );
}
