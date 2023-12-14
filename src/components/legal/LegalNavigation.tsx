"use client";

import {Link as ScrollLink} from "react-scroll";

const LegalNavigation = ({s}: { s: { [key: string]: string } }) => {
    const navStyle: string = "text-neutral-300 font-semibold transition duration-300 hover:font-bold hover:cursor-pointer hover:text-marabunta-cyan hover:translate-x-4";

    return (
        <aside
            className={"text-center md:text-left mb-16 sticky top-0 py-8 px-10 shadow-md md:shadow-none border-solid border-2 border-transparent border-b-marabunta-cyan md:border-b-transparent md:p-0 md:top-52 w-full md:w-56 flex justify-center items-center md:flex-col md:justify-start md:items-start space-y-2"}>
            <ScrollLink className={navStyle} to="protection" spy={true} smooth={true}
                        duration={1200} offset={-50}>{s.data}</ScrollLink>
            <ScrollLink className={navStyle} to="privacy" spy={true} smooth={true}
                        duration={1200} offset={-50}>{s.terms}</ScrollLink>
        </aside>
    );
}

export default LegalNavigation;