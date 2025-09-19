import {ReactNode, useEffect, useState} from "react";
import {useWarehouseStore} from "@/store/warehouse";
import {Warehouse} from "@/types/warehouse";

const FilterChip = (
    {children}: { children: Warehouse.Category }
) => {
    const {filters, updateFilters} = useWarehouseStore();
    const [isSelectedFilter, setIsSelectedFilter] = useState<boolean>(false);

    useEffect(() => {
        setIsSelectedFilter(filters.length !== 0 && filters.includes(children));
    }, [children, filters]);

    return (
        <button onClick={() => updateFilters(children)}
                className={`whitespace-nowrap transition-all duration-200 ease-in-out ${isSelectedFilter && "bg-white text-marabunta-red font-bold"} rounded-full py-4 border px-6`}>
            {children}
        </button>
    );
}

export default FilterChip;