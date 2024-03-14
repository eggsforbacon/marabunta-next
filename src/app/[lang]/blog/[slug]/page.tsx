import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";
import SlugContent from "@/components/blog/SlugContent";
import {WhatsappButton} from "@/components/ui/WhatsAppButton";

export default async function BlogPost({params: {lang, slug}}: { params: { lang: Locale, slug: string } }) {

  const {nav, blog, common: {months}, footer: {terms}} = await getDictionary(lang);

  return (
      <main>
        <SlugContent lang={lang} slug={slug} s={{nav, months, blog, terms}}/>
        <WhatsappButton/>
      </main>
  );
}