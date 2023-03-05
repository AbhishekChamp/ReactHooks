import { useState, useEffect, useRef } from "react";
import "./UseRefHook.css";

const UseRefHook = () => {
    const [name, setName] = useState("");
    const renderCount = useRef(1);
    const inputRef = useRef();
    const prevName = useRef("");

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    useEffect(() => {
        prevName.current = name;
    });

    function focus() {
        inputRef.current.focus();
    }

    return (
        <>
            <input
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h1>My name is {name}</h1>
            <h3>I rendered {renderCount.current} times</h3>
            <h4>
                My name is {name} and it used to be {prevName.current}
            </h4>
            <button onClick={focus}>Focus</button>
        </>
    );
};

export default UseRefHook;
