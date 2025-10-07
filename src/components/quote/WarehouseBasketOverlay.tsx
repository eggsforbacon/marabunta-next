"use client";

import {BasketFill, Trash} from "react-bootstrap-icons";
import {useState} from "react";
import {useWarehouseStore} from "@/store/warehouse";
import Image from "next/image";
import {Strapi} from "@/types/strapi";
import {useQuoteStore} from "@/store/quote";
import {useRouter} from "next/navigation";

const WarehouseBasketOverlay = () => {
    const {cart, removeOne} = useWarehouseStore();
    const {answers, subflowQueue} = useQuoteStore();
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();

    return (
        <>
            <div
                className={`w-screen h-screen fixed z-10 top-0 left-0 flex flex-col items-center justify-end transition-all duration-200 ease-in-out ${open ? "bg-black/40 backdrop-blur-xl" : "pointer-events-none select-none"}`}>
                <section
                    className={`rounded-xl w-full bg-off-black flex flex-col transition-all duration-200 ease-in-out ${open ? "h-168 py-4 px-4" : "h-0"}`}>
                    <div className="flex flex-row items-center justify-between">
                        <h2 className="font-bold text-3xl">Carrito</h2>
                        <button
                            onClick={() => setOpen(!open)}
                            className={`aspect-square text-white !z-[60] py-4 rounded-full px-4 lg:px-10 w-16 md:w-60 font-semibold flex items-center justify-center gap-4 backdrop-blur-lg bg-slate-700/50 fill-white shadow-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-110 hover:border-white ${open ? "relative translate-x-0" : "pointer-events-auto absolute -translate-y-20 left-1/2 -translate-x-1/2"}`}>
                            <BasketFill className={"absolute fill-white"} size={24}/>
                        </button>
                    </div>
                    <div className="flex flex-col items-stretch justify-start gap-2 overflow-y-scroll">
                        {cart.map((item, index) => {
                            const gallery = item.gallery! as unknown as {
                                data: { id: number, attributes: Strapi.BodyImageAttributes }[]
                            };
                            return (
                                <div key={index}
                                     className="border-t border-b border-neutral-700 py-2 flex flex-row gap-4">
                                    <div
                                        className="aspect-square h-24 border rounded-lg border-white relative overflow-clip">
                                        {item.gallery && (
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${gallery.data[0].attributes.url}`}
                                                alt={"Alt text"} width={1920} height={1080}
                                                quality={100}
                                                className="absolute top-0 left-0 object-cover h-full w-full"/>
                                        )}
                                    </div>
                                    <div className="flex flex-col items-start justify-start">
                                        <h3 className="text-lg font-semibold">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs">{item.description}</p>
                                    </div>
                                    <button onClick={() => removeOne(item.id)}><Trash size={32} /></button>
                                </div>
                            )
                        })}
                        <div className={`z-30 absolute bottom-2 left-0 w-full flex flex-col items-center justify-center p-6 transition-all duration-200 ease-in-out ${open && cart.length !== 0 ? "opacity-100" : "opacity-0 pointer-events-none select-none"}`}>
                            <button
                                className="text-center font-bold text-white bg-marabunta-red rounded-full px-4 py-4 w-[75%] max-w-[20rem] text-lg border-2 border-marabunta-red transition-all duration-200 hover:bg-transparent hover:text-marabunta-red"
                                onClick={() => {
                                    if (typeof window !== 'undefined' && subflowQueue.length === 0 || (subflowQueue.length === 1 && subflowQueue.includes("BODEGA"))) {
                                        console.log(cart);
                                        const basket = { answers, cart }
                                        sessionStorage.setItem('answers', JSON.stringify(basket));
                                        router.push("/cotizador/checkout");
                                    } else {

                                    }
                                }}
                            >
                                Finalizar
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default WarehouseBasketOverlay;