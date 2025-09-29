"use client";

import {Warehouse} from "@/types/warehouse";
import {XCircle} from "react-bootstrap-icons";
import {useWarehouseStore} from "@/store/warehouse";
import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {Strapi} from "@/types/strapi";
import {useEffect, useState} from "react";

type _Props = {
    id: string;
    name: string;
    description?: string;
    color?: string;
    category: Warehouse.Category;
    gallery?: [Object][]
}

const WarehouseItem = ({gallery, name, id, category, description, color}: _Props) => {
    const galleryConverted = gallery! as unknown as {
        data: { id: number, attributes: Strapi.BodyImageAttributes }[]
    };

    const {itemExists, addOne, removeOne} = useWarehouseStore();
    const [added, setAdded] = useState<boolean>(false);

    const item = {id, name, category, description, color, gallery};

    const descriptionArray = (description??"").split("\n");

    useEffect(() => {
        if (!itemExists(id)) setAdded(false);
    }, [id, itemExists]);

    return (
        <div className="w-full text-white flex flex-col items-center justify-start gap-2 px-4 h-128">
            <div className="rounded-lg relative overflow-clip w-full h-64 flex flex-col items-center justify-center">
                <Swiper className="w-full h-full bg-white"
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}>
                    {
                        galleryConverted.data.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full h-full bg-marabunta-red">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.url}`}
                                            alt={"Alt text"} width={1920} height={1080}
                                            quality={100}
                                            className="absolute top-0 left-0 object-cover h-full w-full"/>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
            <div className="w-full">
                <h2 className="w-full">{name}</h2>
                <div className="overflow-y-scroll relative flex flex-col items-stretch">
                    <p className="text-white/70 text-xs">{descriptionArray.length > 1 ? descriptionArray[1] : description}</p>
                    <span className="" />
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 mt-auto pb-4">
                <button className={`flex flex-row items-center justify-center rounded-full border-2 border-white py-2 px-6 mt-2 transition-all duration-200 ease-in-out ${added ? "bg-marabunta-red font-bold" : ""}`}
                        onClick={() => {
                            !added ? addOne(item.id, {...item}) : removeOne(item.id);
                            setAdded(!added);
                        }}>
                    {!added ? "Añadir" : "Remover"}
                    <XCircle size={20} className={`transition-all duration-200 ease-in-out ${added ? "ml-4 w-8" : "w-0"}`} />
                </button>
            </div>
        </div>
    );
}

export default WarehouseItem;