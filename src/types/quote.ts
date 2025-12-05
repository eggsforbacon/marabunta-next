export enum QuestionTypes {
    DEFAULT = 0,
    USER_INPUT = 1,
    NUM_RANGE = 2,
    OPTIONS = 3,
    TERMINAL = 4,
    MULTIPLE_SELECT = 5,
}

export enum ProductTypes {
    NONE = 0,
    DIGITAL = 1,
    PRODUCTION = 2,
    COMMUNICATIONS = 3,
    DESIGN = 4,
}

export enum QuoteMode {
    SIMPLE = 'simple',
    COMPLEX = 'complex',
}

export type Choice = { title: string; description?: string };

export type Question = {
    id: string;
    prompt: string;
    highlight?: string;
    placeholder?: string;
    closed?: boolean;
    multi?: boolean;
    types?: QuestionTypes | QuestionTypes[];
    choices?: Choice[];
    options?: { unique: boolean[]; values: string[][] };
    previous: string[];
    next: string[];
    context?: string;
    postFlowId?: string;
    ranges?: any[];
    mode: QuoteMode[];
};

export type Answer = {
    id: string;
    prompt: string;
    values: string | string[];
    choices?: number[];
    options?: string[];
    numericAnswer?: number;
};