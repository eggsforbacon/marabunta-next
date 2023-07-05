import Link from "next/link";
import MarabuntaVer from "@/components/ui/svg/MarabuntaVer";

export const FooterLogo = () => {


    return (
        <Link href={"/"} passHref
              className={"relative focus:outline-none focus:cursor-pointer hover:[&>*>path]:fill-marabunta-cyan"}
        >
            <MarabuntaVer className={"h-24 md:h-32 fill-off-white transition duration-200 ease-in-out hover:fill-marabunta-cyan"} />
        </Link>
    );
}