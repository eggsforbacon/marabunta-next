"use client";

import {FormEvent} from "react";
import {useRouter} from "next/navigation";
import {Cart as CartIcon} from "react-bootstrap-icons";
import {Answer} from "@/types/quote";
import {submit} from "@/services/warehouse";
import {useCheckoutStore} from "@/store/checkout";
import Multiselect from "@/components/ui/Multiselect";

type CartItem = {
    id: number;
    name: string;
    description: string;
};

type Props = {
    basket: Answer[];
    cart: CartItem[];
    reset: () => void;
    emptyCart: () => void;
    setModal: (type: "none" | "ok" | "error", message?: string) => void;
};

const CheckoutSidebar = (
    {
        basket,
        cart,
        reset,
        emptyCart,
        setModal,
    }: Props) => {
    const router = useRouter();

    const options: string[] = [
        "Salud",
        "Deporte",
        "Medio Ambiente",
        "Cultura",
        "Social",
        "Gobierno",
        "Corporativo",
        "Desarrollo web",
        "Educación",
        "Turismo",
        "Gastronomía",
        "Retail / Comercio",
        "Belleza y Estética",
        "Construcción / Inmobiliario",
        "Emprendimiento / Startups",
        "Servicios Profesionales",
        "Entretenimiento",
        "Tecnología",
        "Finanzas"
    ];

    const {
        sent,
        setSent,
        name,
        setName,
        project,
        setProject,
        industries,
        setIndustry,
        city,
        setCity,
        phone,
        setPhone,
        email,
        setEmail
    } = useCheckoutStore();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSent(true);

        let normalizedBasket = "Servicios:\n";
        if (basket && basket.length > 0) {
            for (let i = 0; i < basket.length; i++) {
                const ans = basket[i];
                if (ans.numericAnswer) {
                    normalizedBasket += `${ans.id} ${ans.prompt}: ${ans.numericAnswer}\n`;
                } else if (ans.options) {
                    for (let j = 0; j < ans.options.length; j++) {
                        const options = ans.options[j];
                        normalizedBasket += `${ans.id} ${ans.prompt}: ${options.toString()}\n`;
                    }
                } else {
                    if (Array.isArray(ans.values)) {
                        normalizedBasket += `${ans.id} ${ans.prompt}: ${ans.values.join(
                            " | "
                        )}\n`;
                    } else {
                        normalizedBasket += `${ans.id} ${ans.prompt}: ${ans.values}\n`;
                    }
                }
            }
        }

        if (cart && cart.length !== 0) {
            normalizedBasket += "\n\n---\n\nElementos:\n";
            for (let i = 0; i < cart.length; i++) {
                const item = cart[i];
                normalizedBasket += `${item.id} ${item.name}: ${item.description}\n`;
            }
        }

        submit(name, project, industries.toString(), city, phone, email, normalizedBasket, e as any)
            .then((response) => {
                if (response.ok) setModal("ok");
            })
            .catch((error: any) => {
                setModal("error", error?.message || "Error inesperado");
            })
            .finally(() => {
                setSent(false);
            });
    };

    const handleResetAndBack = () => {
        if (typeof window !== "undefined") {
            sessionStorage.removeItem("answers");
            sessionStorage.setItem("quote_skip_restore_once", "true");
        }

        reset();
        emptyCart();
        router.push("/cotizador");
    };

    return (
        <aside
            className="
        w-full lg:w-[360px] xl:w-[520px] flex-shrink-0
      "
        >
            <div
                className="
          flex flex-col gap-4
          lg:sticky lg:top-32 xl:top-28
        "
            >
                <section
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-black/70 border border-white/10 backdrop-blur-xl px-6 py-6 md:px-7 md:py-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
                    <div
                        className="pointer-events-none absolute -top-16 right-0 w-40 h-40 bg-[radial-gradient(circle,_rgba(0,255,255,0.35)_0,_transparent_60%)]"/>
                    <div
                        className="pointer-events-none absolute -bottom-10 left-0 w-40 h-40 bg-[radial-gradient(circle,_rgba(255,0,60,0.35)_0,_transparent_60%)]"/>
                    <div className="relative flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-xs text-neutral-300/90">
              <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/70 border border-white/15">
                <CartIcon size={14}/>
              </span>
                            <span className="uppercase tracking-[0.16em] text-[0.7rem] text-neutral-400">
                Paso final
              </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold">
                            Déjanos un correo para{" "}
                            <span className="text-marabunta-red font-bold">
                enviarte tu propuesta
              </span>
                        </h2>
                        <p className="text-xs md:text-sm text-neutral-300">
                            Utilizaremos este correo para compartirte la cotización
                            construida a partir de tus respuestas y, si es necesario, hacerte
                            preguntas puntuales para afinar el alcance.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
                            <div
                                className="flex flex-col lg:flex-row items-stretch lg:items-center lg:justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="font-medium text-marabunta-red text-sm">
                                        Tu nombre
                                    </label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="resize-none focus:ring-0 h-full w-full relative rounded-xl bg-black/70 border-solid border-2 border-neutral-300/40 text-neutral-200 placeholder-neutral-500 focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red p-3 text-sm"
                                        placeholder="Juan Pérez"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-medium text-marabunta-red text-sm">
                                        Tu empresa o proyecto
                                    </label>
                                    <input
                                        required
                                        name="project"
                                        type="text"
                                        value={project}
                                        onChange={(e) => setProject(e.target.value)}
                                        className="resize-none focus:ring-0 h-full w-full relative rounded-xl bg-black/70 border-solid border-2 border-neutral-300/40 text-neutral-200 placeholder-neutral-500 focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red p-3 text-sm"
                                        placeholder="Mi empresa"
                                    />
                                </div>
                            </div>
                            <div
                                className="flex flex-col lg:flex-row items-stretch lg:items-center lg:justify-between gap-4">
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="font-medium text-marabunta-red text-sm">
                                        Tu industria
                                    </label>
                                    <Multiselect
                                        name="industry"
                                        value={industries}
                                        onChange={setIndustry}
                                        required
                                        options={options}
                                        placeholder={"Selecciona una"}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="font-medium text-marabunta-red text-sm">
                                        Tu ciudad
                                    </label>
                                    <input
                                        required
                                        name="city"
                                        type="text"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className="resize-none focus:ring-0 h-full w-full relative rounded-xl bg-black/70 border-solid border-2 border-neutral-300/40 text-neutral-200 placeholder-neutral-500 focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red p-3 text-sm"
                                        placeholder="Cali"
                                    />
                                </div>
                            </div>
                            <div
                                className="flex flex-col lg:flex-row items-stretch lg:items-center lg:justify-between gap-4">
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="font-medium text-marabunta-red text-sm">
                                        Tu teléfono
                                    </label>
                                    <input
                                        required
                                        name="phone"
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="resize-none focus:ring-0 h-full w-full relative rounded-xl bg-black/70 border-solid border-2 border-neutral-300/40 text-neutral-200 placeholder-neutral-500 focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red p-3 text-sm"
                                        placeholder="3001232345"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="font-medium text-marabunta-red text-sm">
                                        Tu correo electrónico
                                    </label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="resize-none focus:ring-0 h-full w-full relative rounded-xl bg-black/70 border-solid border-2 border-neutral-300/40 text-neutral-200 placeholder-neutral-500 focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red p-3 text-sm"
                                        placeholder="nombre@tuempresa.com"
                                    />
                                </div>
                            </div>
                            <input
                                type="submit"
                                className={`whitespace-nowrap ${sent ? "cursor-wait" : "cursor-pointer"
                                } font-bold text-white bg-marabunta-red rounded-full px-6 py-3 text-sm md:text-base border-2 border-marabunta-red transition-all duration-300 hover:bg-transparent hover:text-marabunta-red hover:shadow-[0_0_30px_-8px_#FF003C]`}
                                value={sent ? "Enviando..." : "Confirmar orden"}
                            />
                            <p className="text-[0.7rem] md:text-xs text-neutral-400 text-left">
                                Al confirmar, recibirás la cotización en tu correo en un plazo
                                máximo de{" "}
                                <span className="text-neutral-200 font-semibold">
                  24 horas hábiles
                </span>
                                . No enviaremos spam.
                            </p>
                        </form>
                    </div>
                </section>

                <button
                    onClick={handleResetAndBack}
                    className="font-semibold text-neutral-300 hover:text-white rounded-full px-4 py-3 text-sm border border-white/15 bg-black/60 hover:bg-black/80 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    <span>Rehacer cuestionario</span>
                </button>
            </div>
        </aside>
    );
}

export default CheckoutSidebar