"use client";

import Image from "next/image";
import { Strapi } from "@/types/strapi";
import { BoxSeam } from "react-bootstrap-icons";

type CartItem = {
  id: string;
  name: string;
  description: string;
  gallery?: {
    data: {
      id: number;
      attributes: Strapi.BodyImageAttributes;
    }[];
  };
};

export default function ProductsList({
  cart,
  removeOne,
}: {
  cart: CartItem[];
  removeOne: (id: string) => void;
}) {
  if (!cart || cart.length === 0) return null;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/70 border border-white/10">
            <BoxSeam size={16} className="text-marabunta-cyan" />
          </span>
          <h2 className="font-semibold text-lg md:text-xl">
            Productos asociados
          </h2>
        </div>
        <p className="text-xs md:text-sm text-neutral-400">
          {cart.length} {cart.length === 1 ? "producto" : "productos"} en tu
          propuesta
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {cart.map((item, index) => {
          const gallery = item.gallery;

          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-black/80 via-black/70 to-black/60 backdrop-blur-lg px-4 py-4 md:px-5 md:py-4 shadow-[0_18px_55px_-30px_rgba(0,0,0,1)] flex flex-row gap-4"
            >
              <div className="relative aspect-square h-20 md:h-24 rounded-xl border border-white/15 overflow-clip flex-shrink-0">
                {gallery && gallery.data?.[0]?.attributes?.url && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${gallery.data[0].attributes.url}`}
                    alt={item.name || "Producto"}
                    width={1920}
                    height={1080}
                    quality={100}
                    className="absolute top-0 left-0 h-full w-full object-cover"
                  />
                )}
                <span className="absolute bottom-1.5 left-1.5 text-[0.65rem] px-2 py-0.5 rounded-full bg-black/70 text-white/80 border border-white/15">
                  #{item.id}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm md:text-base font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-300 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">
                    Producto seleccionado
                  </span>
                  <button
                    onClick={() => removeOne(item.id)}
                    className="text-[0.75rem] font-semibold text-marabunta-cyan hover:text-white border border-marabunta-cyan/60 hover:border-white/70 rounded-full px-3 py-1 transition-all duration-200 bg-black/40 hover:bg-marabunta-cyan/10"
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}