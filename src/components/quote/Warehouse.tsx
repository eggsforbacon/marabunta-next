"use client";

import {useQuoteStore} from "@/store/quote";
import FilterChip from "@/components/ui/FilterChip";
import {warehouseCategories} from "@/types/warehouse";
import WarehouseBasketOverlay from "@/components/quote/WarehouseBasketOverlay";
import {Warehouse as W} from "@/types/warehouse";
import useSWR from "swr";
import {getTeam} from "@/services/team";
import {getWarehouseCombos, getWarehouseElements} from "@/services/warehouse";
import WarehouseItem from "@/components/quote/WarehouseItem";
import Image from "next/image";
import {Strapi} from "@/types/strapi";
import {useWarehouseStore} from "@/store/warehouse";

const Warehouse = () => {
    const lang = "es";
    const {warehouseActive} = useQuoteStore();
    const {filters} = useWarehouseStore();

    const {
        data: {elements},
    } = useSWR(['getWarehouseElements', lang, filters], () => getWarehouseElements(lang, filters), {fallbackData: {elements: []}});

    const {
        data: {combos},
    } = useSWR(['getWarehouseCombos', lang], () => getWarehouseCombos(lang), {fallbackData: {combos: []}});

    return (
        <section
            className={`h-screen overflow-y-scroll absolute w-screen pt-24 text-white gap-3 flex flex-col justify-start items-center transition-opacity delay-200 ease-in-out duration-200 ${warehouseActive ? "opacity-100" : "opacity-0 select-none pointer-events-none"}`}>
            <div className="bg-black">
                <h2 className="text-center px-9 font-bold text-3xl w-full relative z-10">Explora nuestro
                    <span className="text-marabunta-red"> catálogo</span> de elementos
                </h2>
            </div>
            <section className="bg-black relative w-full flex flex-col items-center justify-start gap-4">
                <div
                    className="w-full flex flex-col items-stretch justify-start py-2 gap-2 overflow-y-scroll">
                    <h2 className="text-2xl font-bold">Combos</h2>
                    {
                        combos.map((combo, index) => {
                            return <div key={index}>
                                <div className="flex w-full h-96 bg-white relative overflow-clip">
                                    {/*<Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${combo.gallery[0].url}`} alt={""} />*/}
                                </div>
                                <h3>{combo.name}</h3>
                            </div>
                        })
                    }
                </div>
                <div
                    className="w-full flex flex-col items-center justify-start py-2 gap-2 overflow-y-scroll">
                    <h2 className="text-2xl font-bold">Elementos</h2>
                    <div className="flex flex-row gap-2 px-6 py-4 w-full items-center overflow-x-scroll">
                        {warehouseCategories.map((category, index) => {
                            return (
                                <FilterChip key={index}>{category}</FilterChip>
                            );
                        })
                        }
                    </div>
                </div>
            </section>
            <WarehouseBasketOverlay/>
        </section>
    );
}

export default Warehouse;