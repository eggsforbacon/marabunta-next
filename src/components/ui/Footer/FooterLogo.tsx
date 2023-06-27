import Link from "next/link";
import MarabuntaSVG from "@/components/ui/Footer/MarabuntaSVG";

export const FooterLogo = () => {


    return (
        <Link href={"/"} passHref
              className={"relative focus:outline-none focus:cursor-pointer"}
        >
            <MarabuntaSVG className={"h-10 fill-white"} />
        </Link>
    );
}