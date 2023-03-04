import { useState, useEffect } from "react";

const UseEffectHook2 = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            // Gets called every time the component is unmounted
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <h1>{windowWidth}</h1>;
};

export default UseEffectHook2;
