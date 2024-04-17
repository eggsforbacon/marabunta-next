import './globals.css'
import {Montserrat} from 'next/font/google';
import React from "react";
import Footer from "@/components/Footer/Footer";
import {i18n, Locale} from "@/i18n.config";
import LocaleLoader from "@/components/ui/LocaleLoader";
import {WhatsappButton} from "@/components/ui/WhatsAppButton";

const montserrat = Montserrat({subsets: ['latin', 'latin-ext']});

export const metadata = {
    title: 'Marabunta Agencia Creativa',
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

const organizationData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Marabunta",
    "url": "https://marabunta.co",
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
        <WhatsappButton/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        </html>
    )
}
