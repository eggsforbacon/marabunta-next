import {Whatsapp} from "react-bootstrap-icons";
import Link from "next/link";

export const WhatsappButton = () => {
    return (
        <Link href={"https://wa.me/+573154767953"} target={"_blank"} rel={"noreferrer"} passHref
              className={`py-4 rounded-full px-10 fixed w-72 right-4 bottom-4 font-semibold text-white flex items-center justify-center gap-4 bg-marabunta-red/50 backdrop-blur-lg fill-white shadow-md border-solid border-[3px] border-marabunta-red transition duration-300 quintic-out hover:cursor-pointer hover:scale-110 hover:bg-marabunta-red hover:border-white focus:border-marabunta-yellow`}
        >
            <Whatsapp size={32}/>
            <p className={"max-md:hidden"}>¡Contáctanos!</p>
        </Link>
    );
}