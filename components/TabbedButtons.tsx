// "use client";

// import React, { useState } from "react";

// type Props = {
//   title?: string;
//   classname?: string;
// };

// export default function TabbedButtons({}: Props) {
//   const [activeTab, setActiveTab] = useState(1);

//   const handleClick = (tabNumber: number) => {
//     setActiveTab(tabNumber);
//   };

//   return (
//     <div className="flex border rounded-[8px] max-w-fit h-10 transition-colors">
//       <button
//         className={`text-[#344054] p-1 hover:text-[#1D2939] px-4 py-2 focus:outline-none ${
//           activeTab === 1 ? "text-[#1D2939] bg-[#D0D5DD]" : ""
//         }`}
//         onClick={() => handleClick(1)}
//       >
//         12 months
//       </button>
//       <button
//         className={`text-[#344054] hover:text-[#1D2939] px-4 py-2 border-x focus:outline-none ${
//           activeTab === 2
//             ? "border-gray-700 text-[#1D2939] bg-[#D0D5DD] focus:border-transparent"
//             : "bg-transparent"
//         }`}
//         onClick={() => handleClick(2)}
//       >
//         30 days
//       </button>
//       <button
//         className={`text-[#344054] hover:text-[#1D2939] px-4 py-2 border-r focus:outline-none ${
//           activeTab === 3
//             ? "border-gray-700 text-[#1D2939] bg-[#D0D5DD] focus:border-transparent"
//             : "bg-transparent"
//         }`}
//         onClick={() => handleClick(3)}
//       >
//         7 days
//       </button>
//       <button
//         className={`text-[#344054] hover:text-[#1D2939] px-4 py-2 border-transparent focus:outline-none ${
//           activeTab === 4
//             ? "border-gray-700 text-[#1D2939] bg-[#D0D5DD]"
//             : "bg-transparent"
//         }`}
//         onClick={() => handleClick(4)}
//       >
//         24 hours
//       </button>
//     </div>
//   );
// }

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
