export const i18n = {
    defaultLocale: 'es-CO',
    locales: ['es-CO', 'en-US']
} as const;

export type Locale = (typeof i18n)['locales'][number];