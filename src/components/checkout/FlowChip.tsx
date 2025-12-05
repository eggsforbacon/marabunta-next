"use client";

import { FlowStyle } from "@/utils/checkout/flowColors";

export default function FlowChip({
  label,
  style,
}: {
  label: string;
  style: FlowStyle | null;
}) {
  if (!label) return null;

  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.65rem] uppercase tracking-[0.18em]"
      style={
        style
          ? {
            backgroundColor: style.bg,
            borderColor: style.border,
            color: style.text,
            borderWidth: 1,
            borderStyle: "solid",
          }
          : {}
      }
    >
      Producto: {label}
    </span>
  );
}