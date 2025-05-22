import {Checkbox} from "@/components/ui/Checkbox";
import {Button} from "@/components/ui/Button";
import {TextField} from "@/components/ui/TextField";
import LocaleLink from "@/components/ui/LocaleLink";
import {Locale} from "@/_i18n.config";

export const FooterForm = ({s, lang} : {s : {[key : string] : any}, lang : Locale}) => {

    return (
        <form className="flex flex-col items-center justify-start gap-4 w-full md:w-auto">
            <section className="flex flex-col items-center justify-end gap-4 w-full md:w-auto">
                <TextField type={"email"} required name={"email"} label={s.email}
                           overrideText={"text-neutral-200"} focusedLabel={"px-4 text-marabunta-cyan"}
                           className={"focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-cyan focus:border-marabunta-cyan"}/>
                <Button isSubmit value={s.talk}
                        overrideBackgroundAndBorder={"bg-neutral-200/0 border-none"}
                        overrideBorderRadius={"rounded-full"}
                        className={"hover:cursor-pointer focus:outline-0 transition duration-200 ease-quintic-in-out hover:bg-marabunta-cyan/80 focus:bg-marabunta-cyan/80 hover:border-marabunta-cyan focus:scale-95 hover:!scale-105"}
                />
                <section
                    className={"md:mt-16 mb-2 opacity-40 transition duration-500 ease-in-out hover:opacity-100 flex items-stretch justify-center w-4/5 md:w-full gap-4"}>
                    <Checkbox required />
                    <p className={"text-start text-xs md:text-sm text-neutral-300"}>{s.terms.read} <LocaleLink
                        className={"underline underline-offset-4 transition duration-200 ease-in-out hover:text-marabunta-cyan"}
                        href={"/legal"} lang={lang}>{s.terms.link}</LocaleLink></p>
                </section>
            </section>
        </form>
    );
}