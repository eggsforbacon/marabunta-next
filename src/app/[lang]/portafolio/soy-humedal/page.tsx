import Navbar from "@/components/ui/Navbar";
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n.config";

export default async function SoyHumedal({params: {lang}}: { params: { lang: Locale } }) {

    const { nav } = await getDictionary(lang);

    return (
        <main>
            <Navbar s={nav} lang={lang} />
            <header>

            </header>
            <section>
                <h2>¡Hola, soy Humedal!</h2>
                <p>Una serie digital educativa diseñada para redes sociales que contó con 25 capítulos. Cada uno de ellos explora y narra la importancia de este tipo de ecosistemas en Cali, el Valle del Cauca y el país. Este viaje audiovisual es presentado por &quot;Humedal&quot;, un personaje carismático y alegre que conoce las acciones que líderes ambientales y otros actores realizan para cuidar de estos cuerpos de agua en el territorio. Desde la conceptualización e investigación hasta la edición, este proyecto fue creado para ser una experiencia visualmente cautivadora y educativa. Recorrimos el departamento del Valle del Cauca, Colombia, en búsqueda de estos ecosistemas para registrar las mejores imágenes y crear una serie única. Fue la oportunidad ideal para desarrollar un proyecto medioambiental que se acercará a las personas y los introdujera como parte del ecosistema.</p>
            </section>
            <section>
                <h2>Color</h2>
                <p>Los colores tierra resaltan en el personaje para fortalecer la idea de que es un humedal junto con los ecosistemas que lo rodean.</p>
            </section>
            <section>
                {/* Gif 1*/}
                {/* Gif 2*/}
                {/* Vimeo 1*/}
                {/* Vimeo 2*/}
                {/* Footer 1*/}
                {/* Footer 2*/}
            </section>
            <section>
                {/*Footer de proyecto */}
            </section>
        </main>
    );
}