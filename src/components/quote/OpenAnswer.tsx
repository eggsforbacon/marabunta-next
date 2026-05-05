"use client";

import React, { useRef, useState } from "react";
import { Pencil } from "react-bootstrap-icons";

type _Props = {
  prompt: string;
};

const OpenAnswer = ({ prompt }: _Props) => {
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
      className={`relative w-full text-left text-lg font-bold px-6 rounded-2xl border-4 border-marabunta-cyan py-4 flex flex-col items-stretch justify-start gap-2 transition-all ease-in-out duration-200 bg-[rgba(255,255,255,0.02)]`}
    >
      <Pencil className={"absolute right-4 top-4"} />
      <div>{prompt}</div>
      <textarea
        ref={textareaRef}
        className={`transition-all duration-300 ease-in-out bg-transparent border-none resize-none overflow-hidden w-full mt-2 outline-none placeholder-white/40 ${open ? "h-32 py-2" : "h-0 py-0"}`}
        placeholder="Cuéntanos más..."
      />
    </div>
  );
};

export default OpenAnswer;