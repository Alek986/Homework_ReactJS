import React, { useState } from "react";

export const Timer = () => {

    const [timer, setTimer] = useState(0)

    const startTimer = () => {
        setTimeout(() => {
           setTimer(timer + 1)
        }, 1000)

        const timeReset = () => {
            setTimer(0)
        }

    return(
        <div>
            <h2>Timer: {timer}</h2>
            <button onClick={timeReset}>Reset</button>
        </div>
    )
}
}


//HELP! Vo App.tsx mi vika deka Timer komponentata ne e validen jsx file... 