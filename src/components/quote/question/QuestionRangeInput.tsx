"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface QuestionRangeInputProps {
  value: number;
  onChange: (value: number) => void;
  onNext: () => void;
}

const QuestionRangeInput = ({ value, onChange, onNext }: QuestionRangeInputProps) => {
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (value !== -1 && value !== 0) {
      setTouched(true);
    }
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full max-w-[85rem]"
    >
      <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/8 rounded-2xl lg:rounded-3xl p-8 lg:p-10">
        <input
          type={"number"}
          className="bg-transparent border-b-2 border-white/25 focus:border-marabunta-red text-white placeholder-white/40 outline-none transition-all duration-300 w-full py-4 text-center text-2xl lg:text-3xl font-semibold"
          placeholder="Ingresa un valor numérico"
          value={value === 0 || value <= -1 ? "" : value}
          onChange={(e) => {
            setTouched(true);
            const strValue = e.currentTarget.value;
            if (strValue === "" || strValue.match("/[^\D]/g") !== null) {
              onChange(-1);
            } else {
              const numValue = parseInt(strValue);
              if (!isNaN(numValue)) {
                onChange(numValue);
              }
            }
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") onNext();
          }}
        />
      </div>
    </motion.div>
  );
};

export default QuestionRangeInput;