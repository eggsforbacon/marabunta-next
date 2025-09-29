"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";

type NavItem = { id: string; title: string };

export default function LegalNavigation({ items }: { items: NavItem[] }) {
    const [open, setOpen] = React.useState(false);
    const [q, setQ] = React.useState("");
    const [activeId, setActiveId] = React.useState<string>(items?.[0]?.id ?? "");

    const filtered = React.useMemo(() => {
        const term = q.trim().toLowerCase();
        return term ? items.filter((i) => i.title.toLowerCase().includes(term)) : items;
    }, [items, q]);

    const activeTitle = React.useMemo(
        () => items.find((i) => i.id === activeId)?.title ?? "—",
        [items, activeId]
    );

    React.useEffect(() => {
        const root = document.documentElement;
        if (open) root.classList.add("overflow-hidden");
        else root.classList.remove("overflow-hidden");
        return () => root.classList.remove("overflow-hidden");
    }, [open]);

    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const navStyle =
        "text-neutral-300 font-semibold transition duration-300 hover:font-bold hover:cursor-pointer hover:text-marabunta-cyan hover:translate-x-4";

    return (
        <>
            <div className="md:hidden sticky top-0 z-30 bg-off-white/90 backdrop-blur border-b border-white/10">
                <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-xs uppercase tracking-wider text-neutral-500">Índice</span>
                    <button
                        onClick={() => setOpen(true)}
                        className="rounded-lg px-3 py-2 text-xs font-medium bg-neutral-900/80 text-neutral-100 border border-white/10 hover:bg-neutral-900"
                        aria-label="Abrir índice"
                    >
                        Ver todos
                    </button>
                </div>
                <div className="px-4 pb-3">
                    <div className="text-[12px] text-neutral-600 truncate">{activeTitle}</div>
                </div>
            </div>

            <aside className="hidden md:flex md:text-left md:mb-16 md:sticky md:top-52 md:p-0 md:w-72 md:shadow-none border-solid border-2 border-transparent md:border-b-transparent md:flex-col md:justify-start md:items-start space-y-2 md:gap-1 px-0">
                {items.map((it) => (
                    <ScrollLink
                        key={it.id}
                        className={navStyle}
                        to={it.id}
                        spy={true}
                        smooth={true}
                        duration={700}
                        offset={-50}
                        onSetActive={() => setActiveId(it.id)}
                    >
                        {it.title}
                    </ScrollLink>
                ))}
            </aside>

            <div
                className={`md:hidden fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}
                aria-hidden={!open}
            >
                <div
                    className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setOpen(false)}
                />
                <div
                    className={`absolute left-0 right-0 bottom-0 bg-neutral-950 text-neutral-100
            rounded-t-2xl shadow-2xl border-t border-white/10
            transition-transform duration-200
            ${open ? "translate-y-0" : "translate-y-full"}
          `}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex justify-center pt-3">
                        <div className="h-1.5 w-12 rounded-full bg-white/20" />
                    </div>

                    <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-semibold tracking-wide uppercase text-neutral-300">
                                Índice de la política
                            </h3>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-neutral-400 hover:text-neutral-200 text-sm"
                                aria-label="Cerrar"
                            >
                                Cerrar
                            </button>
                        </div>

                        <div>
                            <input
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Buscar sección..."
                                className="w-full rounded-lg bg-neutral-900 border border-white/10 px-3 py-2 text-sm outline-none focus:border-marabunta-cyan"
                            />
                        </div>

                        <nav className="space-y-1">
                            {(filtered.length ? filtered : items).map((it) => (
                                <ScrollLink
                                    key={it.id}
                                    to={it.id}
                                    spy={true}
                                    smooth={true}
                                    duration={700}
                                    offset={-50}
                                    onClick={() => setOpen(false)}
                                    onSetActive={() => setActiveId(it.id)}
                                    className="block w-full text-left text-sm py-2 transition-colors text-neutral-300 hover:text-marabunta-cyan"
                                >
                                    {it.title}
                                </ScrollLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}