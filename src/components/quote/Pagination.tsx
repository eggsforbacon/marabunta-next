"use client";

import React, {useState} from "react";
import {ChevronDoubleLeft, ChevronDoubleRight, ChevronLeft, ChevronRight} from "react-bootstrap-icons";

const Pagination = (
    {
        page,
        numberOfPages,
        onPageChange,
        label,
    }: {
        page: number;
        numberOfPages: number;
        onPageChange: (newPage: number) => void;
        label?: string;
    }) => {
    const [current, setCurrent] = useState<number>(0);

    const MAX_PAGE_BUTTONS = 5;
    const IS_FIRST = page === 0;
    const IS_SECOND = page === 1;
    const IS_THIRD = page === 2;
    const IS_LAST = page === numberOfPages - 1;
    const IS_SECOND_TO_LAST = page === numberOfPages - 2;
    const IS_THIRD_TO_LAST = page === numberOfPages - 3;
    const IS_SINGLE = numberOfPages === 1;
    const pageClassName = "border border-white";
    const selectedClassName = "bg-white";

    const renderPages = () => {
        if (numberOfPages <= 5) {
            return (
                <>
                    {Array.from({length: numberOfPages}).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setCurrent(i);
                                onPageChange(i);
                            }}
                            className={`flex aspect-square flex-row items-center justify-center rounded-full p-3 transition-all duration-200 ease-in-out ${page === current ? selectedClassName : pageClassName}`}>
                            <p
                                className={`w-6 text-center transition-all duration-200 ease-in-out ${page === i ? "font-bold text-marabunta-red" : "text-primary-600"}`}>
                                {i + 1}
                            </p>
                        </button>
                    ))}
                </>
            );
        } else {
            return (
                <>
                    {Array.from({length: MAX_PAGE_BUTTONS}).map((_, i) => {
                        let textNumber: string;
                        if (IS_FIRST || IS_SECOND || IS_THIRD) {
                            if (i < MAX_PAGE_BUTTONS - 2) {
                                textNumber = "" + (i + 1);
                            } else if (i > MAX_PAGE_BUTTONS - 2) {
                                textNumber = "" + (numberOfPages - (MAX_PAGE_BUTTONS - 1 - i));
                            } else textNumber = "...";
                        } else if (IS_LAST || IS_SECOND_TO_LAST || IS_THIRD_TO_LAST) {
                            if (i === 0) {
                                textNumber = "1";
                            } else if (i > 1) {
                                textNumber = "" + (numberOfPages - (MAX_PAGE_BUTTONS - 1 - i));
                            } else textNumber = "...";
                        } else {
                            if (i === 1 || i === 3) {
                                textNumber = "...";
                            } else if (i === 2) {
                                textNumber = "" + (page + 1);
                            } else if (i === 0) textNumber = "1";
                            else textNumber = "" + numberOfPages;
                        }

                        return (
                            <button
                                key={i}
                                onClick={() => {
                                    if (textNumber !== "...") onPageChange(+textNumber - 1);
                                    if (IS_FIRST || IS_SECOND || IS_THIRD) {
                                        if (i < MAX_PAGE_BUTTONS - 2) setCurrent(i);
                                        else if (i > MAX_PAGE_BUTTONS - 2) setCurrent(MAX_PAGE_BUTTONS - 1);
                                        else setCurrent(current);
                                    } else if (IS_LAST || IS_SECOND_TO_LAST || IS_THIRD_TO_LAST) {
                                        if (i === 0 || i > 1) setCurrent(i);
                                        else setCurrent(current);
                                    } else {
                                        if (i === 1 || i === 3) setCurrent(current);
                                        else if (i === 2 || i === 0) setCurrent(i);
                                        else setCurrent(MAX_PAGE_BUTTONS - 1);
                                    }
                                }}
                                className={`flex aspect-square flex-row items-center justify-center rounded-full p-3 transition-all duration-200 ease-in-out ${i === current ? selectedClassName : pageClassName}`}>
                                <p
                                    className={`w-6 text-center transition-all duration-200 ease-in-out ${current === i ? "font-bold text-white" : "text-primary-600"}`}>
                                    {textNumber}
                                </p>
                            </button>
                        );
                    })}
                </>
            );
        }
    };
    return (
        <div className="flex flex-col items-center justify-center gap-2 py-8">
            {!IS_SINGLE && (
                <>
                    <div className="center flex w-full flex-row items-center justify-center gap-2">
                        {renderPages()}
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <div className="flex flex-row items-center justify-start gap-2">
                            <button
                                className="flex aspect-square flex-col items-center justify-center rounded-full border border-primary-600 p-3"
                                onClick={() => {
                                    onPageChange(0);
                                    setCurrent(0);
                                }}>
                                <ChevronDoubleLeft size={16} />
                            </button>
                            <button
                                disabled={page === 0}
                                className="flex aspect-square flex-col items-center justify-center rounded-full border border-primary-600 p-3"
                                onClick={() => {
                                    onPageChange(page - 1);
                                    if (IS_LAST) setCurrent(MAX_PAGE_BUTTONS - 2);
                                    else if (IS_SECOND_TO_LAST) setCurrent(MAX_PAGE_BUTTONS - 3);
                                    else if (IS_THIRD) setCurrent(1);
                                    else if (IS_SECOND) setCurrent(0);
                                }}>
                                <ChevronLeft size={16} />
                            </button>
                        </div>
                        <p>{label}</p>
                        <div className="flex flex-row items-center justify-start gap-2">
                            <button
                                disabled={page === numberOfPages - 1}
                                className="flex aspect-square flex-col items-center justify-center rounded-full border border-primary-600 p-3"
                                onClick={() => {
                                    onPageChange(page + 1);
                                    if (IS_FIRST || IS_SECOND) setCurrent(page + 1);
                                    else if (IS_THIRD_TO_LAST) setCurrent(MAX_PAGE_BUTTONS - 2);
                                    else if (IS_SECOND_TO_LAST) setCurrent(MAX_PAGE_BUTTONS - 1);
                                }}>
                                <ChevronRight size={16} />
                            </button>
                            <button
                                className="flex aspect-square flex-col items-center justify-center rounded-full border border-primary-600 p-3"
                                onClick={() => {
                                    onPageChange(numberOfPages - 1);
                                    setCurrent(MAX_PAGE_BUTTONS - 1);
                                }}>
                                <ChevronDoubleRight size={16} />
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Pagination;
