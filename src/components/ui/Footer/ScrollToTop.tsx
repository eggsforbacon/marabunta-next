"use client";

import {ChevronUp} from "react-bootstrap-icons";

export const ScrollToTop = (props : {className : string,}) => {
    return (
        <button className={props.className} onClick={() => {
            if (typeof window !== "undefined") window.scrollTo({top: 0, left: 0, behavior: "smooth"})
        }}>
            <ChevronUp size={48} className={"fill-white"}/>
        </button>
    );
}