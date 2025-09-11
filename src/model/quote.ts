import { questions } from "@/constants/quote";
import { Question, QuoteMode } from "@/types/quote";
import { Locale } from "@/_i18n.config";

export function getQuestion(id: string, lang: Locale, mode: QuoteMode | null): Question | undefined {
    if (!mode) return undefined;

    return questions(lang).find((q) => q.id === id && q.mode.includes(mode));
}