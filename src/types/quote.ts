export enum QuestionTypes {
    DEFAULT = 0, USER_INPUT = 1, NUM_RANGE = 2, OPTIONS = 3, TERMINAL = 4, MULTIPLE_SELECT = 5
}

export enum ProductTypes {
    NONE = 0, DIGITAL = 1, PRODUCTION = 2,COMMUNICATIONS = 3, DESIGN = 4
}

export type Choice = {title: string, description?: string}

export type Question = {
    id: string;
    prompt: string;
    highlight?: string;
    closed?: boolean;
    multi?: boolean;
    types?: QuestionTypes;
    choices?: Choice[];
    options?: {unique: boolean[], values: string[][]};
    previous: string[];
    next: string[];
    context?: string;
    postFlowId?: number;
    complexityFilter?: boolean;
}

export type Answer = {
    id: number;
    prompt: string;
    choice?: number;
    options?: string[]
    type: ProductTypes;
}