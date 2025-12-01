"use client";

import { CheckCircle, Cart as CartIcon } from "react-bootstrap-icons";

export default function CheckoutHeader({
  servicesCount,
  productsCount,
}: {
  servicesCount: number;
  productsCount: number;
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.02] border border-white/10 backdrop-blur-xl px-6 md:px-8 lg:px-10 py-6 md:py-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(255,0,60,0.35)_0,_transparent_60%)] opacity-70" />
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center gap-3 text-sm text-neutral-300/90">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 border border-marabunta-red/40">
            <CheckCircle className="text-marabunta-red" size={18} />
          </span>
          <span className="uppercase tracking-[0.18em] text-[0.7rem] text-neutral-400">
            Resumen de tu cotización
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold">
          Esta es la fotografía de tu{" "}
          <span className="text-marabunta-red font-extrabold">
            idea hecha cotización
          </span>
        </h1>
        <p className="text-sm md:text-base text-neutral-300 max-w-xl">
          Revisar este resumen te ayuda a confirmar que todo lo que
          seleccionaste durante el cuestionario refleja exactamente lo que
          quieres construir. Si algo no encaja, puedes eliminarlo y ajustar
          antes de enviar.
        </p>
        <div className="flex flex-wrap gap-3 mt-2 text-xs text-neutral-300/80">
          <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10">
            Tiempo de respuesta estimado:{" "}
            <span className="text-marabunta-cyan font-semibold">
              24 horas
            </span>
          </span>
          <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 flex items-center gap-1">
            <CartIcon size={14} />
            {servicesCount} servicios · {productsCount} productos
          </span>
        </div>
      </div>
    </section>
  );
}