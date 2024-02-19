'use client';

import {usePathname} from "next/navigation";
import {Dispatch, SetStateAction, useEffect} from "react";
import {i18n, Locale} from "@/i18n.config";
import Link from "next/link";

const LanguageSwitcher = ({state, lang} : {state : [boolean, Dispatch<SetStateAction<boolean>>], lang : Locale}) => {
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
                className={"absolute lg:relative top-5 lg:top-auto left-5 lg:left-auto p-2 rounded-full cursor-pointer"}
            onClick={() => {
                setOpen(!open);
            }}>
                <p className={"font-bold cursor-pointer"}>{lang.toUpperCase()}</p>
                <div className={`z-0 transition duration-300 ease-in-out ${open ? "opacity-100 pointer-events-auto translate-y-20" : "opacity-0 select-none pointer-events-none -translate-y-full"} absolute -top-4 -left-4 lg:-left-6 py-4 px-8 rounded-2xl bg-off-black lg:bg-off-black/50 lg:backdrop-blur-2xl shadow-2xl `}>
                    <ul>
                        {i18n.locales.map((loc, i) => {
                            return (
                                <li key={`loc_${i}`} className={"py-2"}>
                                    <Link className={"text-lg lg:text-base"} href={redirectedPathname(loc)}>
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