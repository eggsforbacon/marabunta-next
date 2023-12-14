import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {i18n, Locale} from '@/i18n.config';

import {match as matchLocale} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import {headers} from "next/headers";

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales;
    const languages = new Negotiator({headers: negotiatorHeaders}).languages();

    return matchLocale(languages, locales, i18n.defaultLocale);
}

export const localeHeaderKey = "x-marabunta-locale";

export function getLocaleFromHeaderOnServer() : Locale {
    return (headers().get(localeHeaderKey) ?? 'es') as Locale;
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = i18n.locales.every(
        locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    const locale = getLocale(request);
    const headersWithLocale = new Headers(request.headers);
    headersWithLocale.set(localeHeaderKey, locale ?? i18n.defaultLocale);

    if (pathnameIsMissingLocale) {

        if (locale === i18n.defaultLocale) {
            return NextResponse.rewrite(
                new URL(
                    `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                    request.url
                )
            );
        }

        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url
            ),
            {headers: headersWithLocale}
        );
    }
    return NextResponse.next({headers: headersWithLocale});
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|images|videos|json|favicon-light.ico|favicon-dark.ico|favicon.ico).*)'],
}
