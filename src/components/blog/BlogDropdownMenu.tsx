"use client";

import React, {useEffect, useState} from "react";
import {useBlogStore} from "@/store/blogs";
import {Blog} from "@/interfaces/blog";

export default function BlogDropdownMenu({defaultOption, options}: { defaultOption? : string, options: string[] }) {

    const [selected, setSelected] = useState(defaultOption ?? options[0]);
    const { filter, changeFilter, dropdownState : open, toggleDropdown : setOpen } = useBlogStore();

    function handleClick() {
        setOpen(!open);
    }

    function onOptionClicked(e: React.MouseEvent<HTMLButtonElement>, i : number)  {
        setOpen(false);
        setSelected(options[i])
        changeFilter(options[i].toLowerCase() as Blog.Category);
    }

    useEffect(() => {
        if (filter === "") setSelected(defaultOption ?? options[0]);
    }, [defaultOption, filter, options]);

    return (
        <div className={"relative flex-grow"}>
            <button onClick={handleClick}
                className={"relative form-select bg-off-white/10 border-none backdrop-blur-2xl rounded-lg py-2 px-8 text-start text-ellipsis text-xl w-full"}>
                <div>{selected}</div>
            </button>
            <div className={`z-40 absolute w-full top-16 left-0 ${open ? "flex" : "hidden"} flex-col gap-4 bg-off-white/10 border-none backdrop-blur-2xl rounded-lg py-2 px-8 text-start text-ellipsis text-xl`}>
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