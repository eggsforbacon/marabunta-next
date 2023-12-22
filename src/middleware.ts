import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {i18n} from '@/i18n.config';

import {match as matchLocale} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales;
    const languages = new Negotiator({headers: negotiatorHeaders}).languages();

    return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = i18n.locales.every(
        locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    const locale = getLocale(request);
    const headersWithLocale = new Headers(request.headers);

    if (pathnameIsMissingLocale) {

        return NextResponse.rewrite(
            new URL(
                `/${i18n.defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url
            )
        );
    }
    return NextResponse.next({headers: headersWithLocale});
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|images|videos|json|favicon-light.ico|favicon-dark.ico|favicon.ico).*)'],
}
