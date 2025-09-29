import React from "react";

type BlockP = { type: "p"; text: string };
type BlockUL = { type: "ul"; items: string[] };
type BlockOL = { type: "ol"; items: string[] };
type BlockDL = { type: "dl"; items: { term: string; def: string }[] };
type BlockSub = { type: "subsections"; items: { marker?: string; text: string }[] };

export type LegalBlock = BlockP | BlockUL | BlockOL | BlockDL | BlockSub;

export function LegalBlockRenderer({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return <p className="leading-relaxed">{block.text}</p>;
    case "ul":
      return (
        <ul className="list-disc ml-6 space-y-2">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal ml-6 space-y-2">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case "dl":
      return (
        <dl className="ml-0 grid grid-cols-1 gap-y-4">
          {block.items.map((it, i) => (
            <div key={i}>
              <dt className="font-semibold text-marabunta-cyan">{it.term}</dt>
              <dd className="leading-relaxed">{it.def}</dd>
            </div>
          ))}
        </dl>
      );
    case "subsections":
      return (
        <div className="ml-6 space-y-2">
          {block.items.map((it, i) => (
            <div key={i} className="flex gap-2">
              <span className="font-semibold">{it.marker ?? ""}</span>
              <span>{it.text}</span>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}