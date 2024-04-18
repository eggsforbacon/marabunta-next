import {notFound, redirect} from "next/navigation"
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Página no encontrada',
    description: 'Despreocúpate. Aún puedes conocer todo lo que tenemos para ti.',
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
    ],
}

export default function NotFoundCatchAll() {
    redirect('/');
    notFound();
    return null
}