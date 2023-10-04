"use client";

import React, {useEffect, useState} from 'react';

type _ComponentProps = {
    containerWidth: number,
    containerHeight: number,
    size: number,
    backgroundColorClass: string,
    speed: number,
    initialDirection : {x: number, y: number},
    initialPosition : {x: number, y: number},
}

const MovingBall = ({containerWidth, containerHeight, size, backgroundColorClass, speed, initialDirection, initialPosition} : _ComponentProps) => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        setLeft(initialPosition.x);
        setTop(initialPosition.y);

        const interval = setInterval(() => {
            setLeft(left + 1/*speed * initialDirection.x*/);
            setTop(top + 1/*speed * initialDirection.y*/);

            if (left < 0 || left > containerWidth - size) {
                setLeft(left - 1);
            }

            if (top < 0 || top > containerHeight - size) {
                setTop(top - 1);
            }
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, [containerWidth, containerHeight, size, speed, initialDirection, left, top, initialPosition]);

    return (
        <div
            className={`absolute aspect-square ${backgroundColorClass} rounded-full`}
            style={{
                height: `${size / 16}rem`,
                left,
                top,
            }}
        />
    );
};

export default MovingBall;