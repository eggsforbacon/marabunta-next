import MarabuntaVer from "@/components/ui/svg/MarabuntaVer";
import LocaleLink from "@/components/ui/LocaleLink";
import {Locale} from "@/i18n.config";

export const FooterLogo = ({lang} : {lang : Locale}) => {

    return (
        <LocaleLink lang={lang} href={"/"} passHref
              className={"relative focus:outline-none focus:cursor-pointer hover:[&>*>path]:fill-marabunta-cyan"}
        >
            <MarabuntaVer className={"h-24 md:h-32 fill-off-white transition duration-200 ease-in-out hover:fill-marabunta-cyan"} />
        </LocaleLink>
    );
}