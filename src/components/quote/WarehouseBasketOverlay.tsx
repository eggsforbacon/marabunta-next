"use client";

import {BasketFill} from "react-bootstrap-icons";
import {useState} from "react";

const WarehouseBasketOverlay = () => {
    const [open, setOpen] = useState<boolean>(false);

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
                </section>
            </div>
        </>
    );
}

export default WarehouseBasketOverlay;