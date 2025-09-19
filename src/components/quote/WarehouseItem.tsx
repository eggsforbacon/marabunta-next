"use client";

import {Warehouse} from "@/types/warehouse";
import {ReactNode, useEffect, useState} from "react";
import {Dash, Plus, Trash} from "react-bootstrap-icons";
import {useWarehouseStore} from "@/store/warehouse";

type _Props = {
    id: string;
    name: string;
    availableQuantity: number;
    description?: string;
    color?: string;
    category: Warehouse.Category;
    children: ReactNode;
}

const WarehouseItem = ({children, name, availableQuantity, id, category, description, color}: _Props) => {
    const {cart, getRequestedQuantity, addOne, removeOne} = useWarehouseStore();
    const [canAdd, setCanAdd] = useState<boolean>(false);

    useEffect(() => {
        if (getRequestedQuantity(id) !== 0) setCanAdd(true);
    }, [getRequestedQuantity, id]);

    const renderAvailable = () => {
        if (availableQuantity === 1) return "1 unidad";
        else if (availableQuantity > 1) return `${availableQuantity} unidades`;
        else return "Agotado";
    }

    const item = {id, name, availableQuantity, category, description, color};

    return (
        <div className="w-full text-white flex flex-col items-center justify-start gap-2">
            <div className="rounded-lg relative overflow-clip aspect-square h-44 w-full bg-white flex flex-col items-center justify-center">
                {children}
            </div>
            <h2 className="truncate w-full">{name}</h2>
            <p className="text-sm text-neutral-500">{renderAvailable()}</p>
            <div className="flex flex-row items-center justify-center gap-2">
                <button className="rounded-full bg-white aspect-square h-7
                 flex items-center justify-center" onClick={() => addOne(id, item)}>
                    <Plus className="fill-black" size={16} />
                </button>
                <input type={"number"} value={getRequestedQuantity(id)} className="text-center w-14 bg-transparent rounded-xl [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"/>
                {getRequestedQuantity(id) !== 0 && <button className="rounded-full bg-white aspect-square h-7
                 flex items-center justify-center" onClick={() => removeOne(id)}>
                    <Dash className="fill-black" size={16}/>
                </button>}
                {/*<button className="rounded-full bg-marabunta-red aspect-square h-7*/}
                {/* flex items-center justify-center">*/}
                {/*    <Trash className="fill-white" size={16} />*/}
                {/*</button>*/}
            </div>
        </div>
    );
}

export default WarehouseItem;