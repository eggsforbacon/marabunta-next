import {Choice, ProductTypes, Question, QuestionTypes} from "@/types/quote";
import {Locale} from "@/_i18n.config";
import {getText} from "@/services/common";

export const questions = (lang : Locale) : Question[] => [
    // Fase 1
    {
        id: 0x0001,
        prompt: getText(lang, 0x0001, "prompt") as string,
        highlight: (getText(lang, 0x0001, "highlight") ?? "") as string,
        area: ProductTypes.NONE,
        types: QuestionTypes.DEFAULT,
        previous: [0x0000],
        next: [0x1000, 0x2000, 0x3000, 0x4000],
        choices: getText(lang, 0x0001, "answers") as Choice[],
    },
    {
        id: 0x1000,
        prompt: getText(lang, 0x1000, "prompt") as string,
        highlight: (getText(lang, 0x1000, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: QuestionTypes.DEFAULT,
        previous: [0x0001],
        next: [0x1100, 0x1200, 0x1300],
        choices: getText(lang, 0x1000, "answers") as Choice[],
    },
    {
        id: 0x1100,
        prompt: getText(lang, 0x1100, "prompt") as string,
        highlight: (getText(lang, 0x1100, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: QuestionTypes.DEFAULT,
        previous: [0x1000],
        next: [0x1101, 0x1201, 0x1301],
        choices: getText(lang, 0x1100, "answers") as Choice[],
    },

    // Fase 2
    {
        id: 0x1101,
        prompt: getText(lang, 0x1101, "prompt") as string,
        highlight: (getText(lang, 0x1101, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: QuestionTypes.DEFAULT,
        prices: [
            {floor: 1000, average: 1100, ceiling: 1200},
            {floor: 2400, average: 2600, ceiling: 2800},
            {floor: 1500, average: 1600, ceiling: 1700},
            {floor: 3000, average: 3300, ceiling: 3600},
        ],
        previous: [0x1100],
        next: [0x1102],
        choices: getText(lang, 0x1101, "answers") as Choice[],
    },
    {
        id: 0x1102,
        prompt: getText(lang, 0x1102, "prompt") as string,
        highlight: (getText(lang, 0x1102, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: QuestionTypes.DEFAULT,
        prices: [
            {floor: 100, average: 200, ceiling: 300},
            {floor: 2000, average: 2400, ceiling: 2600},
            {floor: 600, average: 700, ceiling: 800},
            {floor: 100, average: 2500, ceiling: 3000},
        ],
        previous: [0x1101],
        next: [0x1103],
        choices: getText(lang, 0x1102, "answers") as Choice[],
    },
    {
        id: 0x1103,
        prompt: getText(lang, 0x1103, "prompt") as string,
        highlight: (getText(lang, 0x1103, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: QuestionTypes.NUM_RANGE,
        prices: [
            {floor: 100, increment: 100, ceiling: 500},
            {floor: 700, increment: 200, ceiling: 1500},
            {floor: 1800, increment: 300, ceiling: 800},
            {floor: 100, average: 3500, ceiling: 7000},
        ],
        previous: [0x1102],
        next: [0x1105, 0x1106],
        ranges: [
            1, 6, 11, 20
        ]
    },
    {
        id: 0x1104,
        prompt: getText(lang, 0x1103, "prompt") as string,
        highlight: (getText(lang, 0x1103, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: QuestionTypes.NUM_RANGE,
        prices: [
            {floor: 45, increment: 15, ceiling: 750},
            {floor: 760, increment: 10, ceiling: 1750},
            {floor: 1758, increment: 8, ceiling: 2550},
            {floor: 2300, average: 2600, ceiling: 3000},
        ],
        previous: [0x1102],
        next: [0x1106],
        ranges: [
            3, 51, 150, 250
        ]
    },
    {
        id: 0x1105,
        prompt: getText(lang, 0x1105, "prompt") as string,
        highlight: (getText(lang, 0x1105, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: [QuestionTypes.DEFAULT, QuestionTypes.OPTIONS, QuestionTypes.DEFAULT],
        prices: [
            {floor: 300, average: 350, ceiling: 400},
            {floor: 200, average: 220, ceiling: 250},
            {floor: 0, average: 0, ceiling: 0},
        ],
        previous: [0x1103],
        next: [0x1106],
        choices: getText(lang, 0x1105, "answers") as Choice[],
        options: {
            unique: [true],
            values: getText(lang, 0x1105, "options") as string[][]
        },
    },
    {
        id: 0x1106,
        prompt: getText(lang, 0x1106, "prompt") as string,
        highlight: (getText(lang, 0x1106, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: QuestionTypes.DEFAULT,
        prices: [
            {floor: 50, average: 100, ceiling: 150},
            {floor: 80, average: 160, ceiling: 240},
            {floor: 140, average: 200, ceiling: 260},
            {floor: 0, average: 0, ceiling: 0},
        ],
        previous: [0x1104, 0x1105],
        next: [0x1107],
        choices: getText(lang, 0x1106, "answers") as Choice[],
    },
    {
        id: 0x1107,
        prompt: getText(lang, 0x1107, "prompt") as string,
        highlight: (getText(lang, 0x1107, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: QuestionTypes.DEFAULT,
        prices: [
            {floor: 50, average: 100, ceiling: 150},
            {floor: 200, average: 230, ceiling: 260},
            {floor: 0, average: 0, ceiling: 0},
            {floor: 50, average: 160, ceiling: 300},
        ],
        previous: [0x1106],
        next: [0x1108],
        choices: getText(lang, 0x1107, "answers") as Choice[],
    },
    {
        id: 0x1108,
        prompt: getText(lang, 0x1108, "prompt") as string,
        highlight: (getText(lang, 0x1108, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: QuestionTypes.DEFAULT,
        prices: [
            {floor: 5, average: 5, ceiling: 5},
            {floor: 20, average: 80, ceiling: 160},
            {floor: 150, average: 700, ceiling: 1250},
            {floor: 170, average: 780, ceiling: 1410},
        ],
        previous: [0x1107],
        next: [0x1109],
        choices: getText(lang, 0x1108, "answers") as Choice[],
    },
    {
        id: 0x1109,
        prompt: getText(lang, 0x1109, "prompt") as string,
        highlight: (getText(lang, 0x1109, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: QuestionTypes.DEFAULT,
        prices: [
            {floor: 100, average: 120, ceiling: 130},
            {floor: 0, average: 0, ceiling: 0},
            {floor: 100, average: 120, ceiling: 150},
        ],
        previous: [0x1108],
        next: [0x1001],
        choices: getText(lang, 0x1109, "answers") as Choice[],
    },

    // Fase 3
    {
        id: 0x1001,
        prompt: getText(lang, 0x1001, "prompt") as string,
        highlight: (getText(lang, 0x1001, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: [QuestionTypes.OPTIONS, QuestionTypes.DEFAULT],
        prices: [],
        previous: [0x1109],
        next: [0x1002],
        choices: getText(lang, 0x1001, "answers") as Choice[],
        options: {
            unique: [false],
            values: getText(lang, 0x1001, "options") as string[][]
        }
    },
    {
        id: 0x1002,
        prompt: getText(lang, 0x1002, "prompt") as string,
        highlight: (getText(lang, 0x1002, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: QuestionTypes.DEFAULT,
        prices: [],
        previous: [0x1001],
        next: [0x1003],
        choices: getText(lang, 0x1002, "answers") as Choice[],
    },
    {
        id: 0x1003,
        prompt: getText(lang, 0x1003, "prompt") as string,
        highlight: (getText(lang, 0x1003, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: [QuestionTypes.DEFAULT, QuestionTypes.OPTIONS, QuestionTypes.OPTIONS, QuestionTypes.NUM_RANGE],
        prices: [],
        previous: [0x1001],
        next: [0x1004],
        choices: getText(lang, 0x1003, "answers") as Choice[],
        options: {
            unique: [true, true],
            values: getText(lang, 0x1003, "options") as string[][]
        },
    },
    {
        id: 0x1004,
        prompt: getText(lang, 0x1004, "prompt") as string,
        highlight: (getText(lang, 0x1004, "highlight") ?? "") as string,
        area: ProductTypes.DIGITAL,
        types: QuestionTypes.DEFAULT,
        prices: [],
        previous: [0x1003],
        next: [],
        choices: getText(lang, 0x1004, "answers") as Choice[],
    },
];