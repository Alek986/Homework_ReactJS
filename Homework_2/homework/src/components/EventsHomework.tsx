import { useState } from "react";

export const EventsHomework = () => {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const [error, setError]= useState("");
    
    
    const handleIncrement = () => {
        if(input === ""){
            setCount(count + 1)
            setError("")
            return
        };
        const incrementValue = parseInt(input)
        if(isNaN(incrementValue)){ 
           // Error ("The input is not a number, please enter number as value") procitav deka vaka ne mozelo.. pa otkako go vidov go dodadov kodot na 7ma linija i se povrzano so nego otposle
             return
            };
        if (incrementValue < 0){
             // Error ("Please enter number higher than 0")
             setError("Please enter number higher than 0")
             return
        };
        setError("")
        setCount(count + incrementValue)
    };

    const handleDecrement = () => {
        if(input === ""){
            setCount(count - 1)
            setError("")
            return
        };
        const decrementValue = parseInt(input)
        if(isNaN(decrementValue)){
            // Error ("The input is not a number, please enter number as value")
            setError("The input is not a number, please enter number as value")
            return
        };
        if(decrementValue < 0){
            // Error ("Please enter number higher than 0")
            setError("Please enter number higher than 0") 
            return
        };
        setError("");
        setCount(count - decrementValue)
        };
        
    return (
        <div>
            <p>Count is: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <input type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Enter something here"/>
        </div>
        // ne znam kako da go ishendlam errorot so trganje na kopceto. posledniot task od prvata zadaca
    )
};