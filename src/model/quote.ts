import { questions } from "@/constants/quote";
import { Question } from "@/types/quote";
import { Locale } from "@/_i18n.config";

export function getQuestion(id: string, lang: Locale): Question | undefined {
    return questions(lang).find((q) => q.id === id);
}