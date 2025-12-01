"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Locale } from "@/_i18n.config";
import { getLanguage } from "@/dictionaries";
import Navbar from "@/components/ui/Navbar";
import { Answer } from "@/types/quote";
import { useQuoteStore } from "@/store/quote";
import { useWarehouseStore } from "@/store/warehouse";
import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import ServicesList from "@/components/checkout/ServicesList";
import ProductsList from "@/components/checkout/ProductsList";
import CheckoutSidebar from "@/components/checkout/CheckoutSidebar";
import CheckoutModal from "@/components/checkout/CheckoutModal";
import { buildFlowColors, FlowStyle } from "@/utils/checkout/flowColors";

export default function Checkout({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { nav } = getLanguage(lang);

  const { reset, removeFromBasket, basket, setBasket } = useQuoteStore();
  const {
    emptyCart,
    removeOne,
    cart,
    setCart,
    setModal,
    modal,
    modalError,
  } = useWarehouseStore();

  const [email, setEmail] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = sessionStorage.getItem("answers");
        if (stored) {
          const { basket: b, cart: c } = JSON.parse(stored);
          setBasket(b ?? []);
          setCart(c ?? []);
        }
      } catch {
        setBasket([]);
        setCart([]);
      }
    }
  }, [setBasket, setCart]);

  const flowColors = useMemo(
    () => buildFlowColors(basket || []),
    [basket]
  );

  const getFlowStyle = (label?: string): FlowStyle | null => {
    if (!label) return null;
    return flowColors[label] || null;
  };

  return (
    <main className="text-white bg-off-black overflow-x-clip">
      <Navbar s={nav} lang={lang} current={"/cotizador"} />

      <CheckoutModal
        modal={modal as any}
        modalError={modalError}
        reset={reset}
        emptyCart={emptyCart}
        setModal={setModal as any}
      />

      <section
        className="
          relative w-full flex justify-center
          pt-40
          md:pt-64
          lg:pt-80
          pb-24 px-6
        "
      >
        <div className="w-full max-w-6xl xl:max-w-7xl flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="flex-1 flex flex-col gap-8">
            <CheckoutHeader
              servicesCount={basket?.length || 0}
              productsCount={cart?.length || 0}
            />

            {basket && basket.length > 0 && (
              <ServicesList
                basket={basket as Answer[]}
                removeFromBasket={removeFromBasket}
                getFlowStyle={getFlowStyle}
              />
            )}

            {cart && cart.length > 0 && (
              <ProductsList
                cart={cart as any[]}
                removeOne={removeOne}
              />
            )}
          </div>

          <CheckoutSidebar
            email={email}
            setEmail={setEmail}
            sent={sent}
            setSent={setSent}
            basket={basket as Answer[]}
            cart={cart as any[]}
            reset={reset}
            emptyCart={emptyCart}
            setModal={setModal as any}
          />
        </div>
      </section>

      <Image
        src={"/images/quote/svg/background_quote.svg"}
        alt={""}
        width={1000}
        height={1000}
        quality={100}
        className="transition-opacity duration-300 ease-in-out pointer-events-none select-none w-full absolute -top-0 md:-top-6 lg:-top-80 -rotate-180 xs:bottom-0 md:-bottom-16 2xl:-bottom-144 left-0 scale-[2]"
      />
    </main>
  );
}