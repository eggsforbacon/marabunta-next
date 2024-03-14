export const breakPoints = {
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "2xl": 1536,
}

type NumberValues<T> = {
    [K in keyof T]: T[K] extends number ? T[K] : never;
}[keyof T];

export enum Months {
    JANUARY = 1,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER,
}

export type Month = NumberValues<typeof Months>