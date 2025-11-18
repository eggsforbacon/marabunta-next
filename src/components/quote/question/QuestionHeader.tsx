"use client";

import { motion } from "framer-motion";

interface QuestionHeaderProps {
  context?: string;
  prompt?: string;
  highlight?: string;
}

const QuestionHeader = ({ context, prompt, highlight }: QuestionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="w-full max-w-[85rem] bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl lg:rounded-[2rem] p-4 md:p-6 lg:p-8 shadow-[0_20px_70px_-20px_rgba(255,0,60,0.25)]"
    >
      {context && (
        <p className="text-xs md:text-sm mb-3 text-gray-400/90 font-light tracking-wide uppercase">
          {context}
        </p>
      )}

      <h2 className="text-center lg:text-left font-bold text-xl md:text-xl lg:text-2xl xl:text-3xl w-full relative z-10 leading-tight">
        {highlight ? (
          <>
            {(prompt || "").split("$")[0]}
            <span className="text-marabunta-red">{highlight}</span>
            {(prompt || "").split("$")[1]}
          </>
        ) : (
          prompt
        )}
      </h2>
    </motion.div>
  );
};

export default QuestionHeader;