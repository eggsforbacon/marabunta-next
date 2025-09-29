"use client";

import {useQuoteStore} from "@/store/quote";
import FilterChip from "@/components/ui/FilterChip";
import {warehouseCategories} from "@/types/warehouse";
import WarehouseBasketOverlay from "@/components/quote/WarehouseBasketOverlay";
import useSWR from "swr";
import {getWarehouseCombos, getWarehouseElements} from "@/services/warehouse";
import WarehouseItem from "@/components/quote/WarehouseItem";
import {useWarehouseStore} from "@/store/warehouse";
import WarehouseCombo from "@/components/quote/WarehouseCombo";
import Pagination from "@/components/quote/Pagination";
import {useEffect, useState} from "react";
import {MaterialSymbol} from "react-material-symbols";

const Warehouse = () => {
    const lang = "es";
    const {filters} = useWarehouseStore();
    const {current, goBackQuestion, warehouseActive, setWarehouseActive} = useQuoteStore();

    const [page, setPage] = useState<number>(0);

    const {
        data: {elements, total},
    } = useSWR(['getWarehouseElements', page, lang, filters], () => getWarehouseElements(page, lang, filters), {
        fallbackData: {
            elements: [],
            total: 0
        }
    });

    const {
        data: {combos},
    } = useSWR(['getWarehouseCombos', lang], () => getWarehouseCombos(lang), {fallbackData: {combos: []}});

    const itemsPerPage = process.env.NEXT_PUBLIC_STRAPI_LIMIT as unknown as number ?? 6;
    const from = page * itemsPerPage;
    const to = Math.min(itemsPerPage * (page + 1), total ?? itemsPerPage);
    const fixedTotal = total ?? itemsPerPage;
    const totalPages = Math.ceil(fixedTotal / itemsPerPage);

    useEffect(() => {
        if (current !== "BODEGA") setWarehouseActive(false);
    }, [current, setWarehouseActive]);

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
                    <h2 className="text-2xl font-bold px-6">Combos</h2>
                    {
                        combos.map((combo, index) => {
                            return (
                                <WarehouseCombo key={index} combo={combo}/>
                            );
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
                        })}
                    </div>
                    <Pagination
                        page={page}
                        numberOfPages={totalPages}
                        onPageChange={(newPage) => setPage(newPage)}
                        label={`${from + 1}-${to} de ${total} entradas`}/>
                    <div className="grid grid-cols-2 gap-2">
                        {elements.map((element, index) => {

                            return (
                                <WarehouseItem
                                    key={index}
                                    id={element.id} name={element.name}
                                    description={element.description}
                                    category={element.category}
                                    gallery={element.gallery}
                                />
                            )
                        })}
                    </div>
                </div>
                <div
                    className={"flex w-full px-6 box-border items-center justify-between text-marabunta-cyan text-sm pb-6"}>
                    <button className={"flex gap-2 items-center"} onClick={goBackQuestion}>
                        <MaterialSymbol icon={"north_west"} color={"#129cc0"} size={16}/>
                        <p>Atrás</p>
                    </button>
                </div>
            </section>
            <WarehouseBasketOverlay/>
        </section>
    );
}

export default Warehouse;