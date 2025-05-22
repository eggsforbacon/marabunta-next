import {questions} from "@/constants/quote";
import {Locale} from "@/_i18n.config";

export function getQuestion(id: number, lang: Locale) {
    return questions(lang).find(q => q.id === id);
}