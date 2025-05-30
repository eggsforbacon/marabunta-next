"use client";

import React, {useRef, useState} from "react";
import {Pencil} from "react-bootstrap-icons";

type _Props = {
    prompt: string,
}

const OpenAnswer = ({ prompt }: { prompt: string }) => {
    const [open, setOpen] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleToggle = (e: React.MouseEvent) => {
        if (textareaRef.current && textareaRef.current.contains(e.target as Node)) {
            return;
        }
        setOpen((prev) => !prev);
    };

    return (
        <div
            onClick={handleToggle}
            className={`relative w-full text-center text-lg font-bold px-6 rounded-2xl border-4 border-marabunta-cyan py-4 flex flex-col items-stretch justify-start gap-2 transition-all ease-in-out duration-200 ${open ? "" : ""}`}
        >
            <Pencil className={"absolute right-2 top-2"}/>
            {prompt}
            <textarea
                ref={textareaRef}
                className={`transition-all duration-200 ease-in-out bg-transparent border-none resize-none overflow-hidden ${open ? "h-32" : "h-0 py-0"}`}
                placeholder="Cuéntanos más..."
            />
        </div>
    );
};

export default OpenAnswer;