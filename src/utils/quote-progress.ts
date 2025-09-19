import { Question, QuoteMode } from "@/types/quote";

export type QuestionMap = Map<string, { maxSteps: number; next: string[] }>;

/**
 * @param questionId - El ID de la pregunta desde la que empezar a contar.
 * @param allQuestions - Un array con todas las preguntas posibles.
 * @param questionMap - El mapa construido, usado para memoización.
 * @returns El número máximo de pasos desde questionId hasta el final.
 */
const calculateMaxSteps = (
  questionId: string,
  allQuestions: Question[],
  questionMap: QuestionMap
): number => {
  if (questionMap.has(questionId) && questionMap.get(questionId)!.maxSteps > 0) {
    return questionMap.get(questionId)!.maxSteps;
  }

  const question = allQuestions.find((q) => q.id === questionId);

  if (!question || !question.next || question.next.length === 0 || question.next[0] === "-1") {
    if (question) {
      questionMap.set(questionId, { maxSteps: 1, next: [] });
    }
    return 1;
  }

  const nextSteps = question.next
    .filter(id => id !== "-1" && id !== undefined)
    .map(nextId => calculateMaxSteps(nextId, allQuestions, questionMap));

  const maxSteps = 1 + (nextSteps.length > 0 ? Math.max(...nextSteps) : 0);

  questionMap.set(questionId, { maxSteps, next: question.next });
  return maxSteps;
};

/**
 * @param allQuestions - Un array con todas las preguntas.
 * @returns Un mapa donde la clave es el ID de la pregunta y el valor contiene los pasos máximos.
 */
export const buildQuestionMap = (allQuestions: Question[]): QuestionMap => {
  const questionMap: QuestionMap = new Map();
  allQuestions.forEach((question) => {
    if (!questionMap.has(question.id)) {
      calculateMaxSteps(question.id, allQuestions, questionMap);
    }
  });
  return questionMap;
};