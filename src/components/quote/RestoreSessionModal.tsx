"use client";

import { useEffect, useState } from "react";
import { useQuoteStore } from "@/store/quote";
import { useWarehouseStore } from "@/store/warehouse";

export default function RestoreSessionModal() {
  const [show, setShow] = useState(false);

  const { setBasket, reset } = useQuoteStore();
  const { setCart, emptyCart } = useWarehouseStore();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const active = sessionStorage.getItem("in_quote_active");
    if (active === "true") return;

    const stored = sessionStorage.getItem("answers");
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored);
      const hasBasket = parsed.basket && parsed.basket.length > 0;
      const hasCart = parsed.cart && parsed.cart.length > 0;

      if (hasBasket || hasCart) {
        setShow(true);
      }
    } catch { }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center px-6">
      <div className="relative bg-black border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-xl">
        <h2 className="text-white text-xl font-semibold mb-3">
          ¿Deseas continuar tu cotización anterior?
        </h2>

        <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
          Hemos detectado que ya habías comenzado una cotización. Puedes reanudarla donde la dejaste
          o empezar una nueva.
        </p>

        <div className="flex flex-col gap-3">
          <button
            className="w-full py-3 rounded-xl border border-marabunta-cyan text-marabunta-cyan hover:bg-marabunta-cyan hover:text-black transition"
            onClick={() => {
              try {
                const stored = sessionStorage.getItem("answers");
                if (stored) {
                  const { basket, cart } = JSON.parse(stored);
                  setBasket(basket ?? []);
                  setCart(cart ?? []);
                }
              } catch { }

              setShow(false);
            }}
          >
            Continuar donde estaba
          </button>

          <button
            className="w-full py-3 rounded-xl bg-marabunta-red text-white hover:bg-transparent hover:text-marabunta-red border border-marabunta-red transition"
            onClick={() => {
              sessionStorage.removeItem("answers");
              reset();
              emptyCart();
              setShow(false);
            }}
          >
            Empezar nueva cotización
          </button>
        </div>
      </div>
    </div>
  );
}