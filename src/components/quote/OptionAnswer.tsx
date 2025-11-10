"use client";

import { useState } from "react";
import { DashCircle, PlusCircle } from "react-bootstrap-icons";

type _Props = {
  index: number;
  title: string;
  options: { unique: boolean[]; values: string[][] };
};

const OptionAnswer = ({ index, title, options }: _Props) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [shownOptions, setShownOptions] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string }>({});

  return (
    <div
      key={index}
      className="rounded-2xl border-4 border-marabunta-cyan py-4 px-4 flex flex-col items-stretch justify-start gap-2 transition-all ease-in-out duration-200 bg-[rgba(255,255,255,0.02)]"
    >
      <button
        className="relative w-full text-left text-lg font-bold transition-all duration-200 flex items-center justify-between"
        onClick={() => {
          setShowOptions(!showOptions);
          if (!showOptions) {
            setShownOptions(options.values[index]);
          }
        }}
      >
        <span>{title}</span>
        <span className="ml-4">{showOptions ? <DashCircle /> : <PlusCircle />}</span>
      </button>

      <div
        className={`flex flex-col items-center justify-start gap-2 transition-all duration-300 ease-in-out overflow-hidden w-full ${showOptions ? "h-auto py-2" : "h-0 py-0"}`}
      >
        {shownOptions.map((option, i) => {
          const isSelected = selectedOptions.hasOwnProperty(i);
          return (
            <div key={i} className="w-full">
              <button
                className={`w-full text-left text-base font-medium transition-all duration-200 ease-in-out py-2 rounded-lg ${isSelected ? "bg-marabunta-cyan/20" : "hover:bg-white/3"}`}
                onClick={() => {
                  setSelectedOptions((prev) => {
                    const newOptions = { ...prev };
                    if (isSelected) {
                      delete newOptions[i];
                    } else {
                      newOptions[i] = option;
                    }
                    return newOptions;
                  });
                }}
              >
                {option}
              </button>

              {i !== shownOptions.length - 1 && (
                <div className={`w-full h-px bg-marabunta-cyan/30 my-1`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OptionAnswer;