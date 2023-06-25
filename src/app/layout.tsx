import './globals.css'
import {Montserrat} from 'next/font/google';
import React from "react";
import Navbar from "@/components/ui/Navbar";
import {Footer} from "@/components/ui/Footer/Footer";

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
        <div className={"min-h-screen"}>
        <Navbar />
        {children}
        </div>
        <Footer />
        </body>
        </html>
    )
}
