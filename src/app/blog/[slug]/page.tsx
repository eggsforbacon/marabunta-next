import {Locale} from "@/_i18n.config";
//import {getDictionary} from "@/lib/dictionary";
import SlugContent from "@/components/blog/SlugContent";
import { getLanguage } from "@/dictionaries";

export default async function BlogPost({params: {lang, slug}}: { params: { lang: Locale, slug: string } }) {

  //const {nav, blog, common: {months}, footer: {terms}} = await getDictionary(lang);
  const {nav, blog, common: {months}, footer: {terms}} = getLanguage(lang);

  return (
      <main>
        <SlugContent lang={'es'} slug={slug} s={{nav, months, blog, terms}}/>
      </main>
  );
}