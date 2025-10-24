"use client";

import {useState} from "react";
import {DashCircle, PlusCircle} from "react-bootstrap-icons";
import {useQuoteStore} from "@/store/quote";

type _Props = {
  index: number;
  title: string;
  options: { unique: boolean[]; values: string[][] };
};

const OptionAnswer = ({ index, title, options }: _Props) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [shownOptions, setShownOptions] = useState<string[]>([]);

  const {selectedOptions, setSelectedOptions} = useQuoteStore();

  return (
    <div
      key={index}
      className="rounded-2xl border-4 border-marabunta-cyan py-4 flex flex-col items-stretch justify-start gap-2 transition-all ease-in-out duration-200"
    >
      <button
        className={
          "relative w-full text-center text-lg font-bold transition-all duration px-6"
        }
        onClick={() => {
          setShowOptions(!showOptions);
          if (!showOptions) {
            setShownOptions(options.values[index]);
          }
        }}
      >
        <span className={"absolute top-0 right-2"}>{showOptions ? <DashCircle/> : <PlusCircle/>}</span>
        {title}
      </button>
      <div
        className={`flex flex-col items-center justify-start gap-2 transition-all duration-200 ease-in-out overflow-hidden ${showOptions ? `h-[calc(1.5rem*${shownOptions.length}+1rem)]` : "h-0"}`}
      >
        {shownOptions.map((option, i) => {
          const isSelected = selectedOptions.some(o => o.index === i);
          return (
            <>
              <button
                key={i}
                className={`w-full text-center text-lg font-bold transition-all duration-200 ease-in-out
                  ${showOptions ? "h-auto opacity-100" : "h-0 opacity-0 select-none pointer-events-none"}
                  ${isSelected ? "bg-marabunta-cyan" : ""}`}
                onClick={() => {
                  const f = (prev : {index: number, timestamp: number}[]) : {index: number, timestamp: number}[] => {
                    const exists = prev.some(e => e.index === i);

                    if (exists) {
                      return prev.filter(e => e.index !== i);
                    } else {
                      return [...prev, {index: i, timestamp: Date.now()}];
                    }

                  };
                  setSelectedOptions(f(selectedOptions));
                }}
              >
                {option}
              </button>
              {i !== shownOptions.length - 1 && (
                <span
                  className={`w-[90%] rounded-full bg-marabunta-cyan/60 transition-all duration-200 ease-in-out
                    ${showOptions ? "h-px opacity-100" : "h-0 opacity-0 select-none pointer-events-none"}`}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default OptionAnswer;