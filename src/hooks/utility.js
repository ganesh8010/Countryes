import { useEffect, useState } from "react";

export function useWindowSize() {


    const [width, setWidth] = useState({
        width1: window.innerWidth,
        height: window.innerHeight
    })
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth({
                width1: window.innerWidth,
                height: window.innerHeight
            })

        })
    }, [])
    return width;
}