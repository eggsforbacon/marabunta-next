import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import Image from "next/image";
import {Strapi} from "@/types/strapi";
import {Warehouse as W} from "@/types/warehouse";
import {useWarehouseStore} from "@/store/warehouse";
import {useState} from "react";
import {XCircle} from "react-bootstrap-icons";

type _Props = {
    combo: W.Combo;
}

const WarehouseCombo = ({combo}: _Props) => {
    const gallery = combo.gallery as unknown as {
        data: { id: number, attributes: Strapi.BodyImageAttributes }[]
    };

    const {addOne, removeOne} = useWarehouseStore();
    const [added, setAdded] = useState<boolean>(false);

    return (
        <div className="lg:flex lg:flex-row lg:items-center lg:gap-6">
            <Swiper className=""
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
                    gallery.data.map((item, index) => {
                        return (
                            <SwiperSlide key={index} >
                                <div className="relative w-full h-96 lg:h-136 lg:rounded-lg lg:overflow-clip">
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
            <div className="px-6 flex flex-col gap-2 py-3 lg:w-full">
                <h3 className="text-xl lg:text-4xl font-semibold">{combo.name}</h3>
                <p>{combo.description}</p>
                <button
                    className={`lg:w-44 flex flex-row items-center justify-center rounded-full border-2 border-white py-2 lg:py-3 lg:text-lg mt-2 transition-all duration-200 ease-in-out ${added ? "bg-marabunta-red font-bold" : ""}`}
                    onClick={() => {
                        !added ? addOne(combo.id, {...combo}) : removeOne(combo.id);
                        setAdded(!added);
                    }}>
                    {!added ? "Añadir" : "Remover"}
                    <XCircle size={20}
                             className={`transition-all duration-200 ease-in-out ${added ? "ml-4 lg:ml-2 w-8" : "w-0"}`}/>
                </button>
            </div>
        </div>
    );
}
export default WarehouseCombo;