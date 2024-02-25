"use client";

import React from "react";
import {useBlogStore} from "@/store/blogs";
import {X} from "react-bootstrap-icons";

export default function BlogFilters({s}: { s: { [key: string]: any } }) {

    const {blog} = s;

    const { filter, changeFilter : setFilter } = useBlogStore();

    return (
        <div className={"w-full flex items-center md:justify-center lg:justify-start"}>
            <ul className={"hidden uppercase font-normal text-lg lg:flex items-center justify-start gap-16 px-64"}>
                <li>
                    <button
                        className={`${filter === blog.categories[0].toLowerCase() ? "text-off-white font-black" : "text-off-white"} transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-white hover:text-marabunta-white`}
                        onClick={() => setFilter(blog.categories[0].toLowerCase())}>{blog.categories[0]}</button>
                </li>
                <li>
                    <button
                        className={`${filter === blog.categories[1].toLowerCase() ? "text-marabunta-red font-black" : "text-off-white"} transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-red hover:text-marabunta-red`}
                        onClick={() => setFilter(blog.categories[1].toLowerCase())}>{blog.categories[1]}</button>
                </li>
                <li>
                    <button
                        className={`${filter === blog.categories[2].toLowerCase() ? "text-marabunta-cyan font-black" : "text-off-white"} transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-cyan hover:text-marabunta-cyan`}
                        onClick={() => setFilter(blog.categories[2].toLowerCase())}>{blog.categories[2]}</button>
                </li>
                <li>
                    <button
                        className={`${filter === blog.categories[3].toLowerCase() ? "text-marabunta-yellow-alt font-black" : "text-off-white"} transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-yellow-alt hover:text-marabunta-yellow-alt`}
                        onClick={() => setFilter(blog.categories[3].toLowerCase())}>{blog.categories[3]}</button>
                </li>
                <li>
                    <button
                        className={`${filter !== "" ? "opacity-100" : "opacity-0"} transition-all duration-200 ease-in-out border-2 border-off-white/40 hover:border-off-white group p-2 flex items-center justify-center rounded-full`}
                        onClick={() => setFilter("")}><X className={"transition-all duration-200 ease-in-out group-hover:fill-off-white fill-off-white/40"}/></button>
                </li>
            </ul>
            <select
                className={"mt-6 lg:hidden form-select bg-off-white/10 border-none backdrop-blur-2xl rounded-lg py-2 px-8 text-start text-ellipsis text-xl w-80"}>
                <option value={"1"}>{blog.categories[0]}</option>
                <option value={"2"}>{blog.categories[1]}</option>
                <option value={"3"}>{blog.categories[2]}</option>
                <option value={"4"}>{blog.categories[3]}</option>
            </select>
        </div>
    );
}