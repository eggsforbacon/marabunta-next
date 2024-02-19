import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";

export default async function Services({params : {lang}} : {params : {lang : Locale}}) {

    const {nav} = await getDictionary(lang);

    return(
        <main>
            <Navbar s={nav} lang={lang} current={"/servicios"} />
            <section>
                
            </section>
        </main>
    );
}