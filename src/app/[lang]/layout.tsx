import './globals.css'
import {Montserrat} from 'next/font/google';
import React from "react";
import {Footer} from "@/components/Footer/Footer";
import {i18n, Locale} from "@/i18n.config";
import LocaleLoader from "@/components/ui/LocaleLoader";

const montserrat = Montserrat({subsets: ['latin', 'latin-ext']});

export const metadata = {
    title: 'Marabunta - Agencia Creativa',
    description: 'Comunicamos Ideas',
    icons: [
        {
            rel: 'icon',
            url: '/favicon-dark.ico',
            media: '(prefers-color-scheme: dark)'
        },
        {
            rel: 'icon',
            url: '/favicon-light.ico',
            media: '(prefers-color-scheme: light)'
        },
    ]
}

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({lang: locale}));
}

export default function RootLayout(
    {
        children,
        params,
    }: {
        children: React.ReactNode,
        params: {lang : Locale},
    }) {
    return (
        <html lang={params.lang}>
        <body className={montserrat.className}>
        <LocaleLoader locale={params.lang} />
        {children}
        <div className={"h-[100vh] max-h-[1089px] max-w-[1920px] w-full"}/>
        <Footer lang={params.lang}/>
        </body>
        </html>
    )
}
