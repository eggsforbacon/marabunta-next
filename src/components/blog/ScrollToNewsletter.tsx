"use client";

import {EnvelopePaperHeart} from "react-bootstrap-icons";

export const ScrollToNewsLetter = (props : {className : string,}) => {
    return (
        <button className={props.className} onClick={() => {
            if (typeof window !== "undefined") {
                const section = document.querySelector( '#newsletter' );
                section!.scrollIntoView( { behavior: 'smooth', block: 'start' } );
            }
        }}>
            <EnvelopePaperHeart size={48} className={"fill-white"}/>
        </button>
    );
}