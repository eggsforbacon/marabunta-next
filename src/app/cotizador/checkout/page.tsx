"use client";

import { Locale } from "@/_i18n.config";
import { getLanguage } from "@/dictionaries";
import Navbar from "@/components/ui/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Strapi } from "@/types/strapi";
import { Answer } from "@/types/quote";
import { useQuoteStore } from "@/store/quote";
import { useWarehouseStore } from "@/store/warehouse";
import { useRouter } from "next/navigation";
import { submit } from "@/services/warehouse";

export default function Checkout(
  {
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
  const { nav } = getLanguage(lang);

  const { reset, removeFromBasket, basket, setBasket } = useQuoteStore();
  const { emptyCart, removeOne, cart, setCart } = useWarehouseStore();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = sessionStorage.getItem("answers");
        if (stored) {
          const { basket: b, cart: c } = JSON.parse(stored);
          setBasket(b ?? null);
          setCart(c ?? null);
        }
      } catch {
        setBasket([]);
        setCart([]);
      }
    }
  }, []);

  const getDisplayValue = (ans: Answer) => {
    if (ans.numericAnswer) {
      return (
        <p className="text-xl text-neutral-500 w-full">{ans.numericAnswer}</p>
      );
    } else if (ans.options) {
      return (
        <ul className="ml-5 list-disc text-neutral-500 text-sm w-full">
          {ans.options.map((op, jndex) => {
            return (
              <li key={jndex}>{op}</li>
            )
          })}
        </ul>
      );
    } else {
      return (
        <p className="text-neutral-500 text-sm w-full">{ans.values}</p>
      );
    }
  }

  const COLUMNS = 3;
  const length = basket.length;
  const CONGRUENT = COLUMNS - length % COLUMNS;
  const HAS_EXACT_COLUMNS = CONGRUENT !== COLUMNS;

  console.log("Cols: ", COLUMNS);
  console.log("Has E. Cols: ", HAS_EXACT_COLUMNS, "\nLength: ", length);

  return (
    <main className="text-white bg-off-black overflow-x-clip">
      <Navbar s={nav} lang={lang} current={"/cotizador"} />
      <section
        className="relative w-full flex flex-col items-center justify-start gap-12 pt-32 md:pt-72 lg:pt-96 pb-16 px-6 overflow-y-scroll">
        <section className="flex flex-col items-stretch lg:items-start justify-start gap-4 w-full xl:px-32">
          <h1 className="font-bold text-3xl">Resumen de tu cotización</h1>
          <p>Gracias por completar el cuestionario. Aquí puedes ver el resumen de tus respuestas</p>
        </section>
        {basket && basket.length !== 0 && <section
          className="flex flex-col lg:flex-row lg:flex-wrap lg:px-64 xl:px-32 items-stretch justify-start gap-4">
          <h2 className="font-bold text-2xl lg:w-full">Resumen de servicios</h2>
          {basket.map((ans, index) => {
            const INDEX_IS_LAST_COLUMN = index % 3 === 2;
            const INDEX_IN_LAST_ROW = index > (length + CONGRUENT) - COLUMNS - 1;

            console.log("I. Last Col: ", INDEX_IS_LAST_COLUMN, "\nIndex: ", index);
            console.log("I. Last Row: ", INDEX_IN_LAST_ROW);

            return (
              <div key={index} className={`flex ${HAS_EXACT_COLUMNS && !INDEX_IS_LAST_COLUMN && INDEX_IN_LAST_ROW ? "md:flex-1 lg:!w-1/3" : "md:flex-1"} flex-row gap-4 border p-4 rounded-lg border-neutral-700 items-center justify-center`}>
                <div className="flex flex-col items-center justify-start w-full lg:w-96">
                  <h3 className="text-lg font-semibold w-full">
                    {ans.prompt}
                  </h3>
                  {getDisplayValue(ans)}
                  <div
                    className="flex flex-row items-center lg:items-start justify-center gap-2 pt-6 w-full">
                    <button
                      onClick={() => removeFromBasket(ans.id)}
                      className="rounded-full whitespace-nowrap border flex-1 p-2 w-full lg:max-w-[32rem] border-marabunta-cyan text-marabunta-cyan font-bold text-center">
                      Remover de la lista
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>}
        {cart && cart.length !== 0 && <section className="flex flex-col items-stretch justify-start gap-4">
          <h2 className="font-bold text-2xl">Productos</h2>
          {cart.map((item, index) => {
            const gallery = item.gallery! as unknown as {
              data: { id: number, attributes: Strapi.BodyImageAttributes }[]
            };
            return (
              <div key={index} className="flex flex-col items-stretch">
                <div className="py-2 flex flex-row gap-4">
                  <div
                    className="aspect-square h-24 border rounded-lg border-white relative overflow-clip">
                    {item.gallery && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${gallery.data[0].attributes.url}`}
                        alt={"Alt text"} width={1920} height={1080}
                        quality={100}
                        className="absolute top-0 left-0 object-cover h-full w-full" />
                    )}
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <h3 className="text-lg font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-xs">{item.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeOne(item.id)}
                  className="rounded-full whitespace-nowrap border flex-1 p-2 w-full lg:max-w-[32rem] border-marabunta-cyan text-marabunta-cyan font-bold text-center">
                  Remover del carrito
                </button>
              </div>
            )
          })}
        </section>}
        <div
          className="flex flex-col items-stretch justify-start gap-4 w-full lg:w-128">
          <button
            onClick={() => {
              reset();
              emptyCart();
              router.push("/cotizador");
            }}
            className="whitespace-nowrap font-bold text-marabunta-red rounded-full w-full px-4 py-4 text-lg border-2 border-marabunta-red transition-all duration-200 hover:bg-transparent hover:text-marabunta-red">
            Rehacer cuestionario
          </button>
          <form onSubmit={(e) => {
            let normalizedBasket = "Servicios:\n";
            // Services
            if (basket) {
              for (let i = 0; i < basket.length; i++) {
                const ans = basket[i];
                if (ans.numericAnswer) {
                  normalizedBasket += `${ans.id} ${ans.prompt}: ${ans.numericAnswer}\n`
                } else if (ans.options) {
                  for (let j = 0; j < ans.options.length; j++) {
                    const options = ans.options[j];
                    normalizedBasket += `${ans.id} ${ans.prompt}: ${options.toString()}\n`
                  }
                } else {
                  normalizedBasket += `${ans.id} ${ans.prompt}: ${ans.values}\n`
                }
              }
            }
            // Products
            if (cart) {
              normalizedBasket += "\n\n---\n\nElementos:\n"
              for (let i = 0; i < cart.length; i++) {
                const item = cart[i];
                normalizedBasket += `${item.id} ${item.name}: ${item.description}\n`;
              }
            }
            return submit(email, normalizedBasket, e);
          }}
            className="flex flex-col items-stretch justify-start gap-8 w-full">
            <div>
              <label className={"font-medium text-marabunta-red"}>Tu correo</label>
              <input required name={"name"} type={"email"} value={email} onChange={(e) => setEmail(() => {
                e.preventDefault();
                return e.target instanceof HTMLInputElement ? (e.target as HTMLInputElement).value : (e.target as HTMLTextAreaElement).value
              })} className={"resize-none focus:ring-0 h-full w-full relative rounded-lg bg-off-black border-solid border-2 border-neutral-300/50 text-neutral-200 focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red"} />
            </div>
            <input type={"submit"}
              className="whitespace-nowrap font-bold text-white bg-marabunta-red rounded-full w-full px-4 py-4 text-lg border-2 border-marabunta-red transition-all duration-200 hover:bg-transparent hover:text-marabunta-red"
              value={"Confirmar orden"} />
            <p className="text-sm text-center text-neutral-500">Recibiremos tus respuestas y uno de nuestros
              ejecutivos se contactará contigo lo más pronto posible para hablar sobre tu idea.</p>
          </form>
        </div>
      </section>
      <Image
        src={"/images/quote/svg/background_quote.svg"}
        alt={""}
        width={1000}
        height={1000}
        quality={100}
        className={`transition-opacity duration-300 ease-in-out pointer-events-none select-none w-full absolute -top-0 md:-top-6 lg:-top-80 -rotate-180 xs:bottom-0 md:-bottom-16 2xl:-bottom-144 left-0 scale-[2]`}
      />
    </main>
  );
}