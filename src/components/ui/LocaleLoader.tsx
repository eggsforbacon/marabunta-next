"use client";

import {useEffect} from "react";
import {Locale} from "@/_i18n.config";

export default function LocaleLoader({locale} : {locale : Locale}) {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('loc', locale);
        }
    }, [locale]);

    return (
        <></>
    );
}