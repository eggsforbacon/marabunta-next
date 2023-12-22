'use client';

import {usePathname} from "next/navigation";
import {Globe} from "react-bootstrap-icons";
import {Dispatch, SetStateAction, useEffect} from "react";
import {i18n} from "@/i18n.config";
import Link from "next/link";

const LanguageSwitcher = ({state} : {state : [boolean, Dispatch<SetStateAction<boolean>>]}) => {
    const pathname = usePathname();
    const [open, setOpen] = state;

    useEffect(() => {
        console.log(pathname)
    }, [pathname]);

    const redirectedPathname = (locale: string) => {
        if (!pathname) return '/';

        const pathnameIsMissingLocale = i18n.locales.every(
            locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
        );
        if (pathnameIsMissingLocale) {
            if (locale === i18n.defaultLocale) return pathname;
            return `/${locale}${pathname}`;
        } else {
            const segments = pathname.split('/');
            const isHome = segments.length === 2;
            if (isHome) return `/${locale === i18n.defaultLocale ? '' : locale}`;

            segments.splice(1,1);
            console.log(segments);
            return segments.join('/');
        }
    }

    return (
        <>
            <button
                className={"absolute top-5 left-5 p-2 rounded-full cursor-pointer"}
            onClick={() => {
                setOpen(!open);
            }}>
                <Globe className={"cursor-pointer"} size={24}/>
                <div className={`z-0 transition duration-300 ease-in-out ${open ? "opacity-100 pointer-events-auto translate-y-20 lg:translate-y-0 lg:translate-x-0" : "opacity-0 select-none pointer-events-none -translate-y-full lg:translate-y-0 lg:-translate-x-full"} absolute -top-4 -left-4 lg:left-16 py-4 px-8 rounded-2xl bg-off-black shadow-2xl `}>
                    <ul>
                        {i18n.locales.map((loc, i) => {
                            return (
                                <li key={`loc_${i}`} className={"py-2"}>
                                    <Link href={redirectedPathname(loc)}>
                                        {loc.toUpperCase()}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </button>
        </>
    );
}

export default LanguageSwitcher;