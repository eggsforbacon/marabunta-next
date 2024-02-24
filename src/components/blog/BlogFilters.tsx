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
                        className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-white hover:text-marabunta-white"}
                        onClick={() => setFilter(blog.categories[0].toLowerCase())}>{blog.categories[0]}</button>
                </li>
                <li>
                    <button
                        className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-red hover:text-marabunta-red"}
                        onClick={() => setFilter(blog.categories[1].toLowerCase())}>{blog.categories[1]}</button>
                </li>
                <li>
                    <button
                        className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-cyan hover:text-marabunta-cyan"}
                        onClick={() => setFilter(blog.categories[2].toLowerCase())}>{blog.categories[2]}</button>
                </li>
                <li>
                    <button
                        className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-yellow hover:text-marabunta-yellow"}
                        onClick={() => setFilter(blog.categories[3].toLowerCase())}>{blog.categories[3]}</button>
                </li>
                {filter !== "" && <li>
                    <button
                        className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-white hover:text-marabunta-white"}
                        onClick={() => setFilter("")}><X /></button>
                </li>}
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