import {useEffect, useState} from 'react';

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {

        const windowExists = typeof window !== "undefined";
        const handleResize = () => {
            setScreenSize({
                width: windowExists ? window.innerWidth : 0,
                height: windowExists ? window.innerHeight : 0,
            });
        };

        const timeoutId = setTimeout(() => {
            handleResize();
        }, 1);

        if (windowExists) {
            window.addEventListener('resize', handleResize);
        }

        // Clean up the event listener and timeout when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    return screenSize;
};

export default useScreenSize;