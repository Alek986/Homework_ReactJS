import { useState } from "react";

export const EventsHomework = () => {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const handleInputChange = (event: any) => {

        const input = event.target.value;
        setInput(input);
        const incrementDecrementValue = parseInt(input);

        if (input === "") {
            setError("")
        }
        else if (isNaN(incrementDecrementValue)) {
            setError("The input is not a number")
        }
        else if (incrementDecrementValue < 0) {
            setError("Please enter number higher than 0")
        }
        else {
            setError("")
        }
    };

    const handleIncrement = () => {
        if (input === "") {
            setCount(count + 1)
            setError("")
            return
        };
        const incrementValue = parseInt(input)
        if (!isNaN(incrementValue) && incrementValue >= 0) {
            setCount(count + incrementValue)
            return
        };
    };

    const handleDecrement = () => {
        if (input === "") {
            setCount(count - 1)
            setError("")
            return
        };
        const decrementValue = parseInt(input)
        if (!isNaN(decrementValue) && decrementValue >= 0) {
            setCount(count - decrementValue)
            return
        };
    };

    return (
        <div>
            <p>Count is: {count}</p>
            <button onClick={handleIncrement} disabled={!!error}>Increment</button>
            <button onClick={handleDecrement} disabled={!!error}>Decrement</button>
            <input type="text" value={input} onChange={handleInputChange} placeholder="Enter something here" />
            {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
    )
};