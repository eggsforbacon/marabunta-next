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

    const [pageElements, setPageElements] = useState<number>(0);
    const [pageCombos, setPageCombos] = useState<number>(0);

    const {
        data: {elements, total: totalElements},
    } = useSWR(['getWarehouseElements', pageElements, lang, filters], () => getWarehouseElements(pageElements, lang, filters), {
        fallbackData: {
            elements: [],
            total: 0
        }
    });

    const {
        data: {combos, total: totalCombos},
    } = useSWR(['getWarehouseCombos', pageCombos, lang], () => getWarehouseCombos(pageCombos, lang), {
        fallbackData: {
            combos: [],
            total: 0
        }
    });

    const elementsPerPage = process.env.NEXT_PUBLIC_STRAPI_ELEMENT_LIMIT as unknown as number ?? 6;
    const fromElements = pageCombos * elementsPerPage;
    const fromCombos = pageCombos;
    const toElements = Math.min(elementsPerPage * (pageCombos + 1), totalElements ?? elementsPerPage);
    const fixedTotalElements = totalElements ?? elementsPerPage;
    const totalPagesElements = Math.ceil(fixedTotalElements / elementsPerPage);
    const totalPagesCombos = totalCombos ?? 1;

    useEffect(() => {
        if (current !== "BODEGA") setWarehouseActive(false);
    }, [current, setWarehouseActive]);

    return (
        <section
            className={`h-screen overflow-y-scroll absolute w-screen pt-24 lg:pt-44 lg:px-64 text-white gap-3 lg:gap-8 flex flex-col justify-start items-center transition-opacity delay-200 ease-in-out duration-200 ${warehouseActive ? "opacity-100" : "opacity-0 select-none pointer-events-none"}`}>
            <div className="bg-black">
                <h2 className="text-center px-9 lg:px-0 font-bold text-3xl lg:text-6xl w-full relative z-10">Explora
                    nuestro
                    <span className="text-marabunta-red"> catálogo</span> de elementos
                </h2>
            </div>
            <section className="bg-black relative w-full flex flex-col items-center justify-start gap-4">
                <div
                    className="w-full flex flex-col items-stretch justify-start py-2 gap-8 overflow-y-scroll">
                    <h2 className="text-2xl lg:text-4xl font-bold px-6 lg:px-0">Combos</h2>
                    {
                        combos.map((combo, index) => {
                            return (
                                <WarehouseCombo key={index} combo={combo}/>
                            );
                        })
                    }
                    <div>
                        <Pagination
                            page={pageCombos}
                            numberOfPages={totalPagesCombos}
                            onPageChange={(newPage) => setPageCombos(newPage)}
                            label={`${fromCombos + 1} de ${totalCombos} entradas`}/>
                    </div>
                </div>
                <div
                    className="w-full flex flex-col items-center justify-start py-2 gap-2 overflow-y-scroll">
                    <h2 className="text-2xl font-bold">Elementos</h2>
                    <div
                        className="flex flex-row gap-2 px-6 py-4 w-full items-center overflow-x-scroll lg:overflow-x-clip lg:flex-wrap">
                        {warehouseCategories.map((category, index) => {
                            return (
                                <FilterChip key={index}>{category}</FilterChip>
                            );
                        })}
                    </div>
                    <Pagination
                        page={pageElements}
                        numberOfPages={totalPagesElements}
                        onPageChange={(newPage) => setPageElements(newPage)}
                        label={`${fromElements + 1}-${toElements} de ${totalElements} entradas`}/>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
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
                    <Pagination
                        page={pageElements}
                        numberOfPages={totalPagesElements}
                        onPageChange={(newPage) => setPageElements(newPage)}
                        label={`${fromElements + 1}-${toElements} de ${totalElements} entradas`}/>
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