import type {Locale} from '@/_i18n.config';
import {Dictionary} from "@/dictionaries/dictionary";

const dictionaries = {
    es : () => import('@/dictionaries/es.json').then(module => module.default as unknown as Dictionary),
    en : () => import('@/dictionaries/en.json').then(module => module.default as unknown as Dictionary),
}

//export const getDictionary = async (locale : Locale) => dictionaries[locale]();