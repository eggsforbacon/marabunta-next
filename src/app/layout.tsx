import './globals.css'
import {Montserrat} from 'next/font/google';
import React from "react";
import Footer from "@/components/Footer/Footer";
import {Locale} from "@/_i18n.config";
import {WhatsappButton} from "@/components/ui/WhatsAppButton";
import Script from "next/script";

const montserrat = Montserrat({subsets: ['latin', 'latin-ext']});

export const metadata = {
    title: 'Marabunta Agencia Creativa',
    description: 'Marabunta Agencia Creativa Comunicamos Ideas, creamos soluciones creativas de diseño, comunicación, producción, estrategia y desarrollo a la medida',
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

const organizationData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Marabunta",
    "url": "https://marabunta.co",
    "logo": "https://marabunta.co/favicon-light.ico",
    "sameAs": [
        "https://www.facebook.com/marabuntaagencia",
        "https://www.linkedin.com/company/marabunta",
        "https://www.instagram.com/marabuntaagenciacreativa/",
        "https://www.behance.net/MarabuntaAgencia"
    ],
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Calle 8 oeste #28-45",
        "addressLocality": "Cali",
        "addressRegion": "Valle del cauca",
        "addressCountry": "Colombia"
    },
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+57 (602) 407 2035",
            "contactType": "Servicio al cliente"
        },
        {
            "@type": "ContactPoint",
            "email": "info@marabunta.co",
            "contactType": "Correo electrónico"
        }
    ]
};

/*export async function generateStaticParams() {
  return i18n.locales.map(locale => ({lang: locale}));
}*/

export default function RootLayout(
    {
        children,
        params,
    }: {
        children: React.ReactNode,
        params: { lang: Locale },
    }) {
    //const [lenguage, setLenguage] = useState<"es" | "en">('es')
    const language = 'es';
    return (
        <html lang={params.lang}>
        <head>
            <title>Marabunta Agencia Creativa</title>
            <Script
                id="facebook-pixel"
                strategy="afterInteractive">
                {
                    `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1673950606366223');
        fbq('track', 'PageView');`
                }
            </Script>
            <noscript><img height="1" width="1" style={{display: "none"}}
                           src="https://www.facebook.com/tr?id=1673950606366223&ev=PageView&noscript=1"
             alt={"facebook.com"}/></noscript>
        </head>
        <body className={montserrat.className}>
        {children}
        <div className={"h-[100vh] max-h-[1089px] max-w-[1920px] w-full"}/>
        <Footer lang={language}/>
        <WhatsappButton/>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(organizationData)}}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://tracker.metricool.com/c3po.jpg?hash=27c130581a9f46f58b038d66cb07a4a6" alt={"tracker_metricool.com"}/>
        </body>
        </html>
    )
}
