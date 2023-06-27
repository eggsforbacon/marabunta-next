import Link from "next/link";
import {MarabuntaHor} from "@/components/ui/svg/MarabuntaHor";

type _PProps = {
    current? : "/" | "/work" | "/contact" | "/blog",
}

const Navbar = (props : _PProps) => {

    const linkHoverStyle : string = "transition duration-200 ease-in-out hover:text-marabunta-cyan";

    return (
        <nav
             className={`transition-opacity duration-500 ease-in-out sticky top-0 left-0 h-screen z-40 max-w-[5rem] bg-off-black text-sm text-white uppercase flex flex-col items-center justify-between px-6 py-7`}>
            <ul className={"relative flex items-center flex-row justify-start gap-7 px-8 nav-rotate"}>
                <li className={`${linkHoverStyle} ${props.current === "/" ? "text-marabunta-cyan" : ""}`}>
                    <Link href={"/"}>Nosotros</Link>
                </li>
                <li className={`${linkHoverStyle} ${props.current === "/work" ? "text-marabunta-cyan" : ""}`}>
                    <Link href={"/work"}>Trabajo</Link>
                </li>
                <li className={`${linkHoverStyle} ${props.current === "/contact" ? "text-marabunta-cyan" : ""}`}>
                    <Link href={"/contact"}>Contacto</Link>
                </li>
                <li className={`${linkHoverStyle} ${props.current === "/blog" ? "text-marabunta-cyan" : ""}`}>
                    <Link href={"/blog"}>Blog</Link>
                </li>
            </ul>
            <Link href={"/"} className={"relative -rotate-90"} passHref>
                <MarabuntaHor className={"fill-white ml-16 pl-20 w-52 -mt-1 transition duration-200 ease-in-out hover:fill-marabunta-cyan"}/>
            </Link>
        </nav>
    );
}

export default Navbar;