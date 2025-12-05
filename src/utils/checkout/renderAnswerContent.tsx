"use client";

import { Answer } from "@/types/quote";

export const renderAnswerContent = (ans: Answer) => {
  if (typeof ans.numericAnswer === "number") {
    return (
      <p className="text-base md:text-lg text-neutral-300 w-full">
        {ans.numericAnswer}
      </p>
    );
  }

  if (Array.isArray(ans.values) && ans.values.length > 0) {
    const items = ans.values;

    return (
      <div className="flex flex-col gap-2 text-neutral-200 text-sm">
        {items.map((raw, idx) => {
          const [tituloRaw, ...resto] = raw.split(":");
          const titulo = tituloRaw.trim();
          const descripcion = resto.join(":").trim();

          return (
            <div
              key={idx}
              className="rounded-xl bg-black/40 border border-white/7 px-3 py-2.5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 mb-1">
                Opción {idx + 1}
              </p>

              <p className="font-semibold text-sm text-white">
                {titulo || raw}
              </p>

              {descripcion && (
                <p className="text-xs mt-1 text-neutral-300 leading-relaxed">
                  {descripcion}
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  if (ans.options && ans.options.length > 0) {
    return (
      <div className="flex flex-col gap-2 text-neutral-200 text-sm">
        {ans.options.map((raw, idx) => {
          const [tituloRaw, ...resto] = raw.split(":");
          const titulo = tituloRaw.trim();
          const descripcion = resto.join(":").trim();

          return (
            <div
              key={idx}
              className="rounded-xl bg-black/40 border border-white/7 px-3 py-2.5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 mb-1">
                Opción {idx + 1}
              </p>

              <p className="font-semibold text-sm text-white">
                {titulo || raw}
              </p>

              {descripcion && (
                <p className="text-xs mt-1 text-neutral-300 leading-relaxed">
                  {descripcion}
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  const value = Array.isArray(ans.values)
    ? ans.values.join(" ")
    : ans.values || "";

  return (
    <p className="text-neutral-300 text-sm w-full leading-relaxed">{value}</p>
  );
};