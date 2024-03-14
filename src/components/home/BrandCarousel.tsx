import {ReactNode} from "react";

export default function BrandCarousel({children} : {children : ReactNode[] | ReactNode}) {
    return (
        <div className={"bg-black py-4 h-36 flex gap-4 relative overflow-hidden no-scrollbar"}>
            <div className={"flex-shrink-0 flex justify-around min-w-full gap-4 animate-slide-infinite"}>
                {children}
            </div>
            <div className={"flex-shrink-0 flex justify-around min-w-full gap-4 animate-slide-infinite"}>
                {children}
            </div>
        </div>
    );
}