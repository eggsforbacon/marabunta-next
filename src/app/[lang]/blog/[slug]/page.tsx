import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";
import SlugContent from "@/components/blog/SlugContent";

export default async function BlogPost({params : {lang, slug}} : {params : {lang : Locale, slug : string}}) {

    const { nav , blog : {entry, by}, common: {months}} = await getDictionary(lang);

    return (
        <main>
            <Navbar s={nav} lang={lang} /> {/* TODO: figure out how to switch locales here (this one's going to be a pain, I can already tell */}
            <section className={"bg-off-white min-h-screen w-full"}>
                <SlugContent slug={slug} s={{entry, months, by}} />
            </section>
        </main>
    );
}