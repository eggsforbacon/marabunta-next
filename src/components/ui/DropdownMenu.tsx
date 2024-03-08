"use client";

import React, {useEffect, useState} from "react";

export default function DropdownMenu({defaultOption, options, open, setOpen, collateral, defaultCondition}: {
  defaultOption?: string,
  options: string[],
  open: boolean,
  setOpen: (open: boolean) => void,
  collateral: (i: number) => any,
  defaultCondition: boolean
}) {

  const [selected, setSelected] = useState(defaultOption ?? options[0]);

  function handleClick() {
    setOpen(!open);
  }

  function onOptionClicked(e: React.MouseEvent<HTMLButtonElement>, i: number) {
    setOpen(false);
    setSelected(options[i])
    collateral(i);
  }

  useEffect(() => {
    if (defaultCondition) setSelected(defaultOption ?? options[0]);
  }, [defaultOption, defaultCondition, options]);

  return (
      <div className={"relative flex-grow"}>
        <button onClick={handleClick}
                className={"relative form-select bg-off-white/10 border-none backdrop-blur-2xl rounded-lg py-2 px-8 text-start text-ellipsis text-xl w-full"}>
          <div>{selected}</div>
        </button>
        <div
            className={`z-40 absolute w-full top-16 left-0 ${open ? "flex" : "hidden"} flex-col gap-4 bg-off-white/10 border-none backdrop-blur-2xl rounded-lg py-2 px-8 text-start text-ellipsis text-xl`}>
          {options.map((option, i) => {
            return (
                <button key={i} onClick={(e) => onOptionClicked(e, i)}>
                  {option}
                </button>
            );
          })}
        </div>
      </div>
  );
}