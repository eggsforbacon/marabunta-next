export enum QuestionTypes {
    DEFAULT = 0, USER_INPUT = 1, NUM_RANGE = 2, OPTIONS = 3, TERMINAL = 4
}

export enum ProductTypes {
    NONE = 0, DIGITAL = 1, PRODUCTION = 2,COMMUNICATIONS = 3, DESIGN = 4
}

export type Choice = {title: string, description?: string}

export type Price = { floor: number; average?: number; increment?: number, ceiling: number }

export type Question = {
    id: number;
    prompt: string;
    highlight?: string;
    area: ProductTypes
    types: QuestionTypes[] | QuestionTypes;
    choices?: Choice[];
    ranges?: number[];
    options?: {unique: boolean[], values: string[][]};
    prices?: Price[];
    previous: number[];
    next: number[];
}

export type Answer = {
    id: number;
    prompt: string;
    choice?: number;
    range?: number
    options?: string[]
    price: Price;
    type: ProductTypes;
}