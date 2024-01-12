"use client";

import {CaretDownFill, ChevronLeft, ChevronRight, Search} from "react-bootstrap-icons";
import {useState} from "react";
import {Checkbox} from "@/components/ui/Checkbox";

export default function SearchFilterBar() {

    const [filtersOpen, setFiltersOpen] = useState(false);

    const checkboxBgBorder: string = "bg-neutral-200/20 border-neutral-300 checked:bg-marabunta-red/90 checked:border-marabunta-red/90 hover:border-marabunta-red/70 hover:bg-marabunta-red/80";
    const checkboxText: string = "text-marabunta-red/40";
    const checkboxRing: string = "focus:ring-offset-0 focus:ring-marabunta-red focus:border-0";

    return (
        <div
            className={"w-320 bg-off-white px-16 py-4 flex items-center justify-between"}>
            <div className={"flex items-center justify-start gap-6 border-b-2 border-b-neutral-400 w-128"}>
                <Search className={"text-off-black"} size={20}/>
                <input className={"bg-transparent py-2 w-full resize-none focus:ring-0 focus:outline-none"}/>
            </div>
            <div className={"flex items-center justify-end gap-8"}>
                <div className={"flex items-center justify-end gap-2"}>
                    <label className={"font-semibold"}><span className={"text-marabunta-red font-bold"}>1</span> de n
                        páginas</label>
                    <button className={"rounded-full border-off-black border-2 p-1"}><ChevronLeft
                        className={"text-off-black"} size={14}/></button>
                    <button className={"rounded-full border-off-black border-2 p-1"}><ChevronRight
                        className={"text-off-black"} size={14}/></button>
                </div>
                <button onClick={() => {
                    console.log("Button clicked")
                    setFiltersOpen(!filtersOpen)
                }}
                        className={`z-20 relative p-4 transition-all duration-200 ease-in-out ${filtersOpen ? "border-transparent" : "border-neutral-400"} border-2 rounded-lg flex items-center justify-between bg-off-white w-72`}>
                    <div
                        className={`fixed top-0 left-0 h-screen w-screen select-none cursor-default ${filtersOpen ? "block pointer-events-auto" : "hidden pointer-events-none"}`}
                        onClick={() => setFiltersOpen(false)}/>
                    <div
                        className={`flex flex-col items-center justify-start transition-all duration-200 ease-in-out ${filtersOpen ? "opacity-100 translate-y-0" : "pointer-events-none select-none opacity-0 -translate-y-14"} absolute w-full left-0 top-0 h-96 rounded-lg bg-off-white transition-shadow-border delay-200 duration-400 ease-in-out ${filtersOpen ? "shadow-2xl border-off-black" : "shadow-none border-transparent"} border-2`}>
                        <span className={"mt-12 mb-4 w-11/12 h-px bg-neutral-300 rounded-full"}/>
                        <ul className={"w-full h-full flex flex-col gap-2 items-stretch justify-start p-4 overflow-y-scroll"}
                            onClick={(e) => {
                                // Prevent button click when interacting with the dropdown
                                e.stopPropagation();
                            }}>
                            {
                                [
                                    'Diseño Gráfico',
                                    'Tendencias en Medios Digitales',
                                    'Producción Visual de Contenido',
                                    'Eventos en Vivo y Experiencias',
                                    'Desarrollo de Identidad de Marca',
                                    'Innovación en Publicidad POP',
                                    'Estrategias de Marketing Digital',
                                    'Éxito en Producción de Eventos',
                                    'Creación de Contenido Interactivo',
                                    'Diseño de Experiencia del Usuario (UX)',
                                    'Realidad Aumentada en Eventos',
                                    'Storytelling Digital',
                                    'Colaboraciones Creativas',
                                    'Diseño de Material Publicitario',
                                    'Integración Tecnológica en Eventos',
                                    'Consejos para Marca Fuerte',
                                    'Estrategias de Publicidad Experiencial',
                                    'Diseño Responsivo para Medios Digitales',
                                    'Campañas Publicitarias Innovadoras',
                                    'Evolución de la Identidad de Marca'
                                ].map((cat, i) => {
                                    return (
                                        <li key={i} className={"w-full flex items-center justify-start gap-4"}>
                                            <Checkbox overrideBackgroundAndBorder={checkboxBgBorder}
                                                      overrideText={checkboxText} overrideRing={checkboxRing}
                                                      onChange={(e) => {
                                                          e.stopPropagation();
                                                          console.log("Checkbox changed");
                                                      }}/>
                                            <label className={"text-start"}>{cat}</label>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <h3 className={"relative"}>Filtrar por categoría</h3>
                    <CaretDownFill
                        className={`relative transition-all duration-200 ease-in-out ${filtersOpen ? "rotate-180 fill-off-black" : "rotate-0 fill-neutral-400"} hover:fill-marabunta-cyan`}/>
                </button>
            </div>
        </div>
    );
}