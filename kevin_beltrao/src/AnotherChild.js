import React, { useContext } from "react";

import { CountContext } from "./App";

export const AnotherChild = () => {
    const { setCount } = useContext(CountContext);

    return(
        <div>
            <button onClick={() => {setCount({type: 'INCREMENT1', payload: 5,})}}>increment 1</button>
            <button onClick={() => {setCount({type: 'DECREMENT1', payload: 3,})}}>decrement 1</button>
            <button onClick={() => {setCount({type: 'INCREMENT2', payload: 1,})}}>increment 2</button>
            <button onClick={() => {setCount({type: 'DECREMENT2', payload: 2,})}}>decrement 2</button>

        </div>
    )
}