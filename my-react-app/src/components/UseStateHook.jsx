import { useState } from "react";
import "./UseStateHook.css";

function UseStateHook() {
    // const [count, setCount] = useState(0);
    // const [count, setCount] = useState(() => 4) // The component will get rendered only once
    const [state, setState] = useState({ count: 4, theme: "blue" });
    const count = state.count;
    const theme = state.theme;

    // function decrementCount() {
    //     setCount((prevCount) => prevCount - 1);
    // }
    function decrementCount() {
        setState((prevState) => {
            return { ...prevState, count: prevState.count - 1 };
        });
    }

    // function incrementCount() {
    //     setCount((prevCount) => prevCount + 1);
    // }

    function incrementCount() {
        setState((prevState) => {
            return { ...prevState, count: prevState.count + 1 };
        });
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
        </>
    );
}

export default UseStateHook;
