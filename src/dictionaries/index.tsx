import { EN } from "./en"
import { ES } from "./es";

export const getLanguage = (lang: 'es' | 'en') => {
  if(lang === 'en') return EN;
  return ES
}