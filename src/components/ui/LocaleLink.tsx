import Link, {LinkProps} from "next/link";
import {HTMLProps} from "react";
import {i18n, Locale} from "@/_i18n.config";

type _CProps = {
    lang: Locale;
    [key : string] : any;
} & LinkProps & HTMLProps<HTMLAnchorElement>;


const LocaleLink = (
    {
        lang,
        as,
        children,
        href,
        replace,
        scroll,
        shallow,
        passHref,
        className,
    } : _CProps) => {

    const isDefaultLang = lang === i18n.defaultLocale;
    //const path = isDefaultLang ? href : `/${lang}${href}`;

    return (
        <Link as={as}
              href={href}
              passHref={passHref}
              replace={replace}
              scroll={scroll}
              shallow={shallow}
              className={className}
        >
            {children}
        </Link>
    );
}

export default LocaleLink;