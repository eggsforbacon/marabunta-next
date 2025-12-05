"use client";

import { Answer } from "@/types/quote";
import { renderAnswerContent } from "@/utils/checkout/renderAnswerContent";
import FlowChip from "./FlowChip";
import { FlowStyle } from "@/utils/checkout/flowColors";

export default function ServicesList({
  basket,
  removeFromBasket,
  getFlowStyle,
}: {
  basket: Answer[];
  removeFromBasket: (id: string) => void;
  getFlowStyle: (label?: string) => FlowStyle | null;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/70 border border-white/10">
            <svg width="16" height="16" className="text-marabunta-cyan">
              <circle cx="3" cy="4" r="1.5" fill="currentColor" />
              <circle cx="3" cy="8" r="1.5" fill="currentColor" />
              <circle cx="3" cy="12" r="1.5" fill="currentColor" />
              <rect
                x="6"
                y="3.25"
                width="7"
                height="1.5"
                rx="0.75"
                fill="currentColor"
              />
              <rect
                x="6"
                y="7.25"
                width="7"
                height="1.5"
                rx="0.75"
                fill="currentColor"
              />
              <rect
                x="6"
                y="11.25"
                width="7"
                height="1.5"
                rx="0.75"
                fill="currentColor"
              />
            </svg>
          </span>
          <h2 className="font-semibold text-lg md:text-xl">
            Servicios seleccionados
          </h2>
        </div>

        <p className="text-xs md:text-sm text-neutral-400">
          {basket.length} servicios agregados
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {basket.map((ans, index) => {
          const label = (ans as any).flowRootOptionLabel || null;
          const style = getFlowStyle(label);

          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-lg px-5 py-4 md:px-6 md:py-5 shadow-[0_18px_55px_-30px_rgba(0,0,0,1)]"
            >

              <div className="relative flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 border border-white/10 text-xs font-semibold text-marabunta-cyan">
                        {index + 1}
                      </span>
                      <h3 className="text-sm md:text-base font-semibold leading-snug">
                        {ans.prompt}
                      </h3>
                    </div>

                    {label && (
                      <div className="pl-11">
                        <FlowChip label={label} style={style} />
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => removeFromBasket(ans.id)}
                    className="text-xs md:text-sm font-semibold text-marabunta-cyan hover:text-white border border-marabunta-cyan/60 hover:border-white/70 rounded-full px-3 py-1.5 transition-all duration-200 bg-black/50 hover:bg-marabunta-cyan/10"
                  >
                    Remover
                  </button>
                </div>

                <div className="pl-11">{renderAnswerContent(ans)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}