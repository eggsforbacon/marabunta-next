import Image from "next/image";
import Link from "next/link";

const Navbar = () => {



    return (
        <nav
             className={`transition-opacity duration-500 ease-in-out sticky top-0 left-0 z-40 max-h-[5rem] bg-off-black text-sm text-white uppercase flex flex-row-reverse items-center justify-between px-6 py-7`}>
            <ul className={"relative flex items-center flex-row justify-start gap-7 px-8"}>
                <li>
                    <Link href={"/"}>Nosotros</Link>
                </li>
                <li>
                    <Link href={"/work"}>Trabajo</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contacto</Link>
                </li>
                <li>
                    <Link href={"/blog"}>Blog</Link>
                </li>
            </ul>
            <Link href={"/"} className={"relative"} passHref>
                <Image src={"/images/svg/marabunta-white.svg"} alt={"Marabunta, ir a inicio"} width={140} height={28}
                       priority/>
            </Link>
        </nav>
    );
}

export default Navbar;