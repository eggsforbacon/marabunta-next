import Image from "next/image";

export default function Strategy() {
    return (
        <section className={"text-off-white  bg-black relative h-[302.5rem]"}>
            <div className={"text-off-black flex flex-col justify-end items-stretch w-full h-[60.5rem] bg-marabunta-yellow-alt sticky bottom-0 left-0 z-50 overflow-clip"}>
                <h2 className={"tracking-tighter w-[85rem] text-end absolute -bottom-80 -left-16 text-[40rem] font-bold"}>0°</h2>
            </div>
            <div className={"flex flex-col justify-end items-stretch w-full h-[60.5rem] bg-marabunta-red sticky bottom-0 left-0 z-40 overflow-clip"}>
                <h2 className={"tracking-tighter w-[85rem] text-end absolute -bottom-80 -left-16 text-[40rem] font-bold"}>90°</h2>
            </div>
            <div className={"text-off-black flex flex-col justify-end items-stretch w-full h-[60.5rem] bg-marabunta-yellow-alt sticky bottom-0 left-0 z-30 overflow-clip"}>
                <h2 className={"tracking-tighter w-[85rem] text-end absolute -bottom-80 -left-16 text-[40rem] font-bold"}>180°</h2>
            </div>
            <div className={"flex flex-col justify-end items-stretch w-full h-[60.5rem] bg-off-black sticky bottom-0 left-0 z-20 overflow-clip"}>
                <h2 className={"tracking-tighter w-[85rem] text-end absolute -bottom-80 -left-16 text-[40rem] font-bold"}>270°</h2>
            </div>
            <div className={"flex flex-col justify-end items-stretch w-full h-[60.5rem] bg-marabunta-cyan sticky bottom-0 left-0 z-10 overflow-clip"}>
                <h2 className={"tracking-tighter w-[85rem] text-end absolute -bottom-80 -left-16 text-[40rem] font-bold"}>360°</h2>
            </div>
        </section>
    );
}