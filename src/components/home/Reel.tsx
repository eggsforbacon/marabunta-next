import React from "react";

export default function Reel() {
    return (
        <section className={"bg-black"}>
            <video autoPlay muted controls loop playsInline height={1920*.75}
                   width={1920*.75}
                   className={"mx-auto"}> {/* bottom-44 md:bottom-24 lg:-bottom-9 xl:-bottom-24 2xl:-bottom-9 -translate-x-1/2 md:translate-x-0 left-[55%] md:-right-44 lg:-right-[14rem] xl:-right-72 2xl:-right-[14rem] scale-[2] md:scale-125 lg:scale-100 xl:scale-75 2xl:scale-100 */}
                <source
                    src="/videos/reel2022.mp4"
                    type="video/mp4"/>
            </video>
            {/*<BrandCarousel>*/}
            {/*    <Image src={"/images/home/svg/brands/0.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/1.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/2.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/3.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/4.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/5.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/6.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/7.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/8.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/9.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/10.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/11.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/12.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/13.svg"} alt={""} width={152} height={152} />*/}
            {/*    <Image src={"/images/home/svg/brands/14.svg"} alt={""} width={152} height={152} />*/}
            {/*</BrandCarousel>*/}
        </section>
    );
}