import { useContext } from "react";
import { counterContext } from "../contexts/CounterContext";


export default function MyCounter(){
    const { count, increaseCount, decreaseCount} = useContext(counterContext)

    return(
        <div>
            <h3>Counter Component</h3>
            <p>Count is: {count}</p>
            <button onClick={increaseCount}>Increase count</button>
            <button onClick={decreaseCount}>Decrease count</button>
        </div>
    )
}