import {X} from "react-bootstrap-icons";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

type _Props = {
    modal: "ok" | "error" | "none";
    setModal: (modal: ("ok" | "error" | "none"), errorMessage?: (string | undefined)) => void;
    modalError: string;
    reset: () => void;
    emptyCart: () => void;
    router: AppRouterInstance;
}

const Modal = ({modal, setModal, modalError, reset, emptyCart, router}: _Props) => {
    return (
        <div
            className={`z-50 absolute top-0 left-0 w-full h-full backdrop-blur-xl flex items-center justify-center px-6 transition-all duration-500 ease-in-out ${modal !== "none" ? "" : "opacity-0 pointer-events-none select-none"}`}>
            <section
                className="relative flex flex-col items-center gap-4 px-8 py-16 max-w-[44rem] rounded-xl bg-black text-center">
                <button onClick={() => setModal("none")}
                        className="cursor-pointer absolute top-6 right-6 flex flex-col items-center justify-center aspect-square h-8 w-8 rounded-full group border border-marabunta-red transition-all duration-300 hover:bg-marabunta-red hover:bg-transparent hover:shadow-[0_0_30px_-8px_#FF003C]">
                    <X className="text-marabunta-red transition-all duration-300 group-hover:text-white" size={32}/>
                </button>
                <h3 className="text-marabunta-red font-bold text-2xl">{modal === "ok" ? "¡Gracias!" : "Lo sentimos"}</h3>
                <p>{modal === "ok" ? "Recibimos tu solicitud! Nos pondremos en contacto contigo en un plazo de 24 horas a través de cualquiera de tus canales de contacto.\n\nSi deseas puedes cerrar esta pestaña o volver al inicio." : "Ha ocurrido un error procesando tu cotización. Inténtalo más tarde o ponte en contacto con nuestro equipo.\n"}</p>
                <div className="flex flex-col items-center justify-start gap-6 mt-16">
                    {modalError && modalError !== "" && (
                        <p className="flex flex-col items-center justify-center gap-2 text-marabunta-red text-sm">
                            <span className="font-bold">Mensaje de error:</span> {modalError}
                        </p>
                    )}
                    <div className="flex flex-col lg:flex-row items-stretch justify-start gap-2">
                        <button
                            onClick={() => {
                                reset();
                                emptyCart();
                                router.push("/cotizador");
                            }}
                            className="font-bold text-marabunta-cyan rounded-full px-6 py-4 text-lg border-2 border-marabunta-cyan transition-all duration-300 hover:bg-marabunta-cyan hover:text-white hover:shadow-[0_0_30px_-8px_#00FFFF]">
                            Rehacer cuestionario
                        </button>
                        <button
                            onClick={() => {
                                reset();
                                emptyCart();
                                router.push("/cotizador");
                            }}
                            className="whitespace-nowrap cursor-pointer font-bold text-white bg-marabunta-red rounded-full px-6 py-4 text-lg border-2 border-marabunta-red transition-all duration-300 hover:bg-transparent hover:text-marabunta-red hover:shadow-[0_0_30px_-8px_#FF003C]">
                            Volver a inicio
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Modal;