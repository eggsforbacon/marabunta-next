import './globals.css'
import {Montserrat} from 'next/font/google';
import React from "react";
import {Footer} from "@/components/Footer/Footer";

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

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="es_CO">
        <body className={montserrat.className}>
        {children}
        <div className={"h-[100vh] max-h-[1089px]"} />
        <Footer />
        </body>
        </html>
    )
}
