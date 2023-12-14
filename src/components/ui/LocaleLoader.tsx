"use client";

import {useEffect} from "react";
import {Locale} from "@/i18n.config";

const LocaleLoader = ({locale} : {locale : Locale}) => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('loc', locale);
        }
    }, [locale]);

    return (
        <></>
    );
}

export default LocaleLoader;