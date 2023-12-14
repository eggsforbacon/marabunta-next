import LocaleLink from "@/components/ui/LocaleLink";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";
import {getLocaleFromHeaderOnServer} from "@/middleware";

export default async function NotFound() {
    const lang : Locale = getLocaleFromHeaderOnServer();
    const { page } = await getDictionary(lang);

    return (
        <main className={"bg-off-black overflow-clip px-24 text-marabunta-red flex flex-col items-start justify-center"}>
            {/*<MarabuntaVer className={"absolute -right-12 -top-32 h-384 fill-red-900/50"} />*/}
            <div className={"absolute top-1/2 -right-96 -translate-y-1/3"}>
                <h1 className={"orthographic-rotate text-[24rem]/[316px] font-black"}>{"<h1>"}</h1>
                <h1 className={"orthographic-rotate text-[24rem]/[304px] font-black"}>{"404"}</h1>
                <h1 className={"orthographic-rotate text-[24rem]/[316px] font-black"}>{"<h1>"}</h1>
            </div>
            <section className={"relative text-off-white flex flex-col items-start justify-start"}>
                <p className={"text-2xl font-semibold "}>No encontramos la página que estás buscando</p>
                <LocaleLink lang={lang} href={"/"}>Volver a inicio {lang} </LocaleLink>
            </section>
        </main>
    );
}