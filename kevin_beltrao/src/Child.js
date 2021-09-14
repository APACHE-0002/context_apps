import { useContext } from "react";

import { CountContext } from "./App";
import { AnotherChild } from "./AnotherChild";

export const Child = () => {
    const {count} = useContext(CountContext);



/*
<button onClick={() => {
                setCount((previousState) => {
                    setCount(previousState - 1)
                    })
                    }}>-</button>

                    <button onClick={() => {setCount('DECREMENT')}}>decrement</button>
            <button onClick={() => {setCount(count + 1)}}>increment</button>
*/
    return(
        <div>
            <h1>Count1: {count.count1}</h1>
            <h1>Count2: {count.count2}</h1>
            
            <AnotherChild />
        </div>
    )
}