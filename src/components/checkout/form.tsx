"use client";

import {useCheckoutStore} from "@/store/checkout";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Answer} from "@/types/quote";
import {Warehouse} from "@/types/warehouse";
import {submit} from "@/services/warehouse";

type _Props = {
    reset: () => void;
    emptyCart: () => void;
    router: AppRouterInstance;
    basket: Answer[];
    cart: (Warehouse.Element | Warehouse.Combo)[];
    setModal: (modal: ("ok" | "error" | "none"), errorMessage?: (string | undefined)) => void;
}

const Form = ({reset, emptyCart, router, basket, cart, setModal} : _Props) => {
    const {
        sent,
        setSent,
        name,
        setName,
        project,
        setProject,
        industry,
        setIndustry,
        industryOther,
        setIndustryOther,
        city,
        setCity,
        phone,
        setPhone,
        email,
        setEmail
    } = useCheckoutStore();

    return (
        <div
            className="flex flex-col items-stretch justify-start gap-4 w-full lg:w-128">
            <button
                onClick={() => {
                    reset();
                    emptyCart();
                    router.push("/cotizador");
                }}
                className="font-bold text-marabunta-red rounded-full px-6 py-4 text-lg border-2 border-marabunta-red transition-all duration-300 hover:bg-marabunta-red hover:text-white hover:shadow-[0_0_30px_-8px_#FF003C]">
                Rehacer cuestionario
            </button>
            <form onSubmit={(e) => {
                setSent(true);
                let normalizedBasket = "Servicios:\n";
                // Services
                if (basket && basket.length > 0) {
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
                if (cart && cart.length !== 0) {
                    normalizedBasket += "\n\n---\n\nElementos:\n"
                    for (let i = 0; i < cart.length; i++) {
                        const item = cart[i];
                        normalizedBasket += `${item.id} ${item.name}: ${item.description}\n`;
                    }
                }
                submit(email, normalizedBasket, e).then((response) => {
                    if (response.ok) setModal("ok");
                }).catch((e) => {
                    setModal("error", e.message);
                }).finally(() => {
                    setSent(false)
                });
            }}
                  className="flex flex-col items-stretch justify-start gap-8 w-full">
                <div>
                    <label className={"font-medium text-marabunta-red"}>Tu Nombre</label>
                    <input required name={"name"} type={"text"} value={name}
                           onChange={(e) => setName((e.target as HTMLInputElement).value)}
                           className={"resize-none focus:ring-0 h-full w-full relative rounded-lg bg-off-black border-solid border-2 border-neutral-300/50 text-neutral-200 focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red"}/>
                </div>
                <div>
                    <label className={"font-medium text-marabunta-red"}>Empresa / Proyecto</label>
                    <input required name={"project"} type={"text"} value={project}
                           onChange={(e) => setProject((e.target as HTMLInputElement).value)}
                           className={"resize-none focus:ring-0 h-full w-full relative rounded-lg bg-off-black border-solid border-2 border-neutral-300/50 text-neutral-200 focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red"}/>
                </div>
                <div>
                    <label className={"font-medium text-marabunta-red"}>Industria</label>
                    {/*Añadir dropdown y ocultar input a no ser que se seleccione "otro"*/}
                    <input required name={"industry"} type={"text"} value={industryOther}
                           onChange={(e) => setIndustryOther((e.target as HTMLInputElement).value)}
                           className={"resize-none focus:ring-0 h-full w-full relative rounded-lg bg-off-black border-solid border-2 border-neutral-300/50 text-neutral-200 focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red"}/>
                </div>
                <div>
                    <label className={"font-medium text-marabunta-red"}>Tu ciudad</label>
                    <input required name={"city"} type={"text"} value={city}
                           onChange={(e) => setCity((e.target as HTMLInputElement).value)}
                           className={"resize-none focus:ring-0 h-full w-full relative rounded-lg bg-off-black border-solid border-2 border-neutral-300/50 text-neutral-200 focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red"}/>
                </div>
                <div>
                    <label className={"font-medium text-marabunta-red"}>Tu teléfono</label>
                    <input required name={"phone"} type={"tel"} value={phone}
                           onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
                           className={"resize-none focus:ring-0 h-full w-full relative rounded-lg bg-off-black border-solid border-2 border-neutral-300/50 text-neutral-200 focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red"}/>
                </div>
                <div>
                    <label className={"font-medium text-marabunta-red"}>Tu correo</label>
                    <input required name={"email"} type={"email"} value={email}
                           onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                           className={"resize-none focus:ring-0 h-full w-full relative rounded-lg bg-off-black border-solid border-2 border-neutral-300/50 text-neutral-200 focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red"}/>
                </div>
                <input type={"submit"}
                       className={`whitespace-nowrap ${sent ? "cursor-wait" : "cursor-pointer"} font-bold text-white bg-marabunta-red rounded-full px-6 py-4 text-lg border-2 border-marabunta-red transition-all duration-300 hover:bg-transparent hover:text-marabunta-red hover:shadow-[0_0_30px_-8px_#FF003C]`}
                       value={"Confirmar orden"}/>
                <p className="text-sm text-center text-neutral-500">Recibiremos tus respuestas y uno de nuestros
                    ejecutivos se contactará contigo lo más pronto posible para hablar sobre tu idea.</p>
            </form>
        </div>
    );
}

export default Form;