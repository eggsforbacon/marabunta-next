"use client";

import { useEffect, useMemo, useCallback } from "react";
import { Locale } from "@/_i18n.config";
import { getQuestion } from "@/model/quote";
import { useQuoteStore } from "@/store/quote";
import { Question as QuestionType, QuestionTypes } from "@/types/quote";

export const useQuestionFlow = (lang: Locale) => {
  const {
    current,
    continueQuestion,
    goBackQuestion,
    activeOption,
    setActiveOption,
    rangeValue,
    setRangeValue,
    answers,
    selectedOptions,
    setSelectedOptions,
    setAnswer,
    setLang,
    quoteMode,
    setWarehouseActive,
  } = useQuoteStore();

  useEffect(() => {
    setLang(lang);
  }, [lang, setLang]);

  const isVisible = current !== "intro" && current !== "BODEGA";

  const question: QuestionType | null = useMemo(() => {
    if (!isVisible || !quoteMode) return null;
    return getQuestion(current, lang, quoteMode) ?? null;
  }, [current, lang, isVisible, quoteMode]);

  useEffect(() => {
    if (!question?.id) return;
    const savedAnswer = answers[question.id];
    const isMultiple = question.types === QuestionTypes.MULTIPLE_SELECT;

    if (!isMultiple) {
      setActiveOption(savedAnswer !== undefined ? (savedAnswer as number) : -1);
    } else if (Array.isArray(savedAnswer)) {
      setSelectedOptions(savedAnswer as { index: number; timestamp: number }[]);
    } else {
      setSelectedOptions([]);
    }
  }, [question, answers, setActiveOption, setSelectedOptions]);

  const isSimpleView = useMemo(() => {
    if (!question?.id) return false;
    return question.id.startsWith("S");
  }, [question?.id]);

  const handleNext = useCallback(() => {
    if (!question) return;
    const { id, next, types } = question;
    const isMultipleSelect = types === QuestionTypes.MULTIPLE_SELECT;

    if (isMultipleSelect) {
      const sortedSelections = [...selectedOptions].sort(
        (a, b) => a.timestamp - b.timestamp
      );
      const nextIds = sortedSelections
        .map((s) => next[s.index])
        .filter((id) => id !== "-1" && id !== undefined);
      setAnswer(id, sortedSelections);
      continueQuestion(nextIds.length > 0 ? nextIds : ["-1"]);
    } else {
      const nextId = next.length === 1 ? next[0] : next[activeOption];
      setAnswer(id, activeOption);
      continueQuestion(nextId ? [nextId] : ["-1"]);
    }
  }, [question, selectedOptions, activeOption, continueQuestion, setAnswer]);

  const handleOptionClick = useCallback(
    (index: number) => {
      if (!question) return;
      const { id, next, closed, types } = question;
      const isMultipleSelect = types === QuestionTypes.MULTIPLE_SELECT;

      if (isMultipleSelect) {
        const timestamp = Date.now();
        const isSelected = selectedOptions.some((opt) => opt.index === index);
        const newSelected = isSelected
          ? selectedOptions.filter((opt) => opt.index !== index)
          : [...selectedOptions, { index, timestamp }];
        setSelectedOptions(newSelected);
        setAnswer(id, newSelected);
      } else {
        setActiveOption(index);
        setAnswer(id, index);
        if (!closed) {
          const nextId = next.length === 1 ? next[0] : next[index];
          if (nextId) {
            if (nextId === "BODEGA") setWarehouseActive(true);
            setTimeout(() => continueQuestion([nextId]), 400);
          }
        }
      }
    },
    [
      question,
      selectedOptions,
      setSelectedOptions,
      setAnswer,
      setActiveOption,
      continueQuestion,
      setWarehouseActive,
    ]
  );

  const getSelectionOrder = useCallback(
    (index: number): number | null => {
      if (question?.types !== QuestionTypes.MULTIPLE_SELECT) return null;
      const selectedIndex = selectedOptions.findIndex(
        (opt) => opt.index === index
      );
      return selectedIndex !== -1 ? selectedIndex + 1 : null;
    },
    [question, selectedOptions]
  );

  return {
    question,
    isVisible,
    isSimpleView,
    handleNext,
    handleOptionClick,
    getSelectionOrder,
    goBackQuestion,
    rangeValue,
    setRangeValue,
    activeOption,
    selectedOptions,
    setActiveOption,
  };
};