import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";

export default async function BlogPost({params : {lang, slug}} : {params : {lang : Locale, slug : string}}) {

    const { nav } = await getDictionary(lang);

    return (
        <main>
            <Navbar s={nav} lang={lang} />
            <section className={""}>
                {slug}
            </section>
        </main>
    );
}