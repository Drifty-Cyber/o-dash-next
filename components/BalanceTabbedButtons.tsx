import { useState } from "react";

type ToggleButtonProps = {
  options: string[];
};

const ToggleButtonGroup: React.FC<ToggleButtonProps> = ({ options }) => {
  const [selected, setSelected] = useState<string>(options[0]);

  return (
    <div className="flex space-x-2 rounded-lg border border-gray-200 bg-white p-2 shadow-sm">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => setSelected(option)}
          className={`flex items-center px-4 py-2 text-sm font-semibold rounded-md focus:outline-none transition-colors ${
            selected === option
              ? "bg-blue-100 text-blue-700"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span
            className={`mr-2 inline-block h-2 w-2 rounded-full ${
              selected === option ? "bg-blue-500" : "bg-transparent"
            }`}
          ></span>
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtonGroup;
